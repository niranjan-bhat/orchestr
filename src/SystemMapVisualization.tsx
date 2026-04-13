import { useEffect, useRef } from "react";

const isMobile = () => window.innerWidth < 768;

const CONFIG = {
  desktop: { NUM_POINTS: 32, MAX_DIST: 250, MAX_DIST_CURSOR: 320, CURSOR_LINK_COUNT: 6 },
  mobile:  { NUM_POINTS: 18, MAX_DIST: 180, MAX_DIST_CURSOR: 0,   CURSOR_LINK_COUNT: 0 },
};

const POINT_RADIUS = 3;
const SPEED = 0.2;

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

function hexAlpha(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function randomVelocity(): number {
  return (Math.random() * 2 - 1) * SPEED;
}

function initPoints(width: number, height: number, count: number): Point[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: randomVelocity(),
    vy: randomVelocity(),
  }));
}

export default function SystemMapVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const clickingRef = useRef(false);
  const colorsRef = useRef({
    bg: "#ffffff",
    point: "#6b6375",
    line: "#d8d4de",
    cursor: "#8b5cf6",
  });

  const readTheme = () => {
    const s = getComputedStyle(document.documentElement);
    colorsRef.current = {
      bg: s.getPropertyValue("--bg").trim() || "#ffffff",
      point: s.getPropertyValue("--text").trim() || "#6b6375",
      line: s.getPropertyValue("--accent").trim() || "#d8d4de",
      cursor: s.getPropertyValue("--accent").trim() || "#8b5cf6",
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const cfg = isMobile() ? CONFIG.mobile : CONFIG.desktop;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      pointsRef.current = initPoints(rect.width, rect.height, cfg.NUM_POINTS);
    };

    const updateMouseFromEvent = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      // Ignore if mouse is fully outside canvas bounds
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!inside) {
        mouseRef.current = null;
        return;
      }

      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onMouseMove = (e: MouseEvent) => {
      const target = e.target;

      if (
        target instanceof HTMLElement &&
        target.closest("button, a, input, textarea, [data-no-interact]")
      ) {
        mouseRef.current = null;
        return;
      }

      updateMouseFromEvent(e);
    };

    const onMouseLeaveWindow = () => {
      mouseRef.current = null;
      clickingRef.current = false;
    };

    const onMouseDown = (e: MouseEvent) => {
      const target = e.target;

      if (
        target instanceof HTMLElement &&
        target.closest("button, a, input, textarea, [data-no-interact]")
      ) {
        return;
      }

      updateMouseFromEvent(e);

      if (mouseRef.current) {
        clickingRef.current = true;
      }
    };
    const onMouseUp = () => {
      clickingRef.current = false;
    };

    readTheme();
    resize();

    const darkMQ = window.matchMedia("(prefers-color-scheme: dark)");
    darkMQ.addEventListener("change", readTheme);

    const themeObserver = new MutationObserver(readTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeaveWindow);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;
      const { bg, point, line, cursor } = colorsRef.current;
      const points = pointsRef.current;
      const cfg = isMobile() ? CONFIG.mobile : CONFIG.desktop;
      // On mobile skip cursor interaction entirely
      const mouse = cfg.MAX_DIST_CURSOR > 0 ? mouseRef.current : null;
      const now = performance.now();
      const breathRadius = POINT_RADIUS + Math.sin(now * 0.001) * 0.1;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      const hoverFactor = points.map((p) => {
        if (!mouse) return 0;
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        return dist < cfg.MAX_DIST_CURSOR ? 1 - dist / cfg.MAX_DIST_CURSOR : 0;
      });

      // Update positions
      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Base drift
        p.x += p.vx;
        p.y += p.vy;

        // Attraction toward cursor
        if (mouse && cfg.MAX_DIST_CURSOR > 0) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < cfg.MAX_DIST_CURSOR && dist > 0.001) {
            const strength = Math.pow(1 - dist / cfg.MAX_DIST_CURSOR, 1.5);
            const attraction = 0.4 * strength;
            p.x += dx * attraction * 0.01;
            p.y += dy * attraction * 0.01;
          }
        }

        // Repel while clicking
        if (clickingRef.current && mouse && cfg.MAX_DIST_CURSOR > 0) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < cfg.MAX_DIST_CURSOR && dist > 0.001) {
            const force = Math.pow(1 - dist / cfg.MAX_DIST_CURSOR, 2) * 1.2;
            p.vx += (dx / dist) * force * 0.08;
            p.vy += (dy / dist) * force * 0.08;
          }
        }

        // Gentle damping
        p.vx *= 0.995;
        p.vy *= 0.995;

        // Maintain slight motion
        if (Math.abs(p.vx) < 0.03) p.vx += randomVelocity() * 0.2;
        if (Math.abs(p.vy) < 0.03) p.vy += randomVelocity() * 0.2;

        // Bounce off edges
        if (p.x < POINT_RADIUS || p.x > width - POINT_RADIUS) {
          p.vx *= -1;
          p.x = Math.max(POINT_RADIUS, Math.min(width - POINT_RADIUS, p.x));
        }
        if (p.y < POINT_RADIUS || p.y > height - POINT_RADIUS) {
          p.vy *= -1;
          p.y = Math.max(POINT_RADIUS, Math.min(height - POINT_RADIUS, p.y));
        }
      }

      const connected = new Array(points.length).fill(false);

      // Draw inter-point connections
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < cfg.MAX_DIST) {
            connected[i] = true;
            connected[j] = true;

            const hover = Math.max(hoverFactor[i], hoverFactor[j]);
            const alpha = (1 - dist / cfg.MAX_DIST) * (0.22 + hover * 1.4);

            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = hexAlpha(line, Math.min(alpha, 0.9));
            ctx.lineWidth = 0.8 + hover * 1.4;
            ctx.stroke();
          }
        }
      }

      // Connect isolated points to nearest neighbor
      for (let i = 0; i < points.length; i++) {
        if (connected[i]) continue;

        let nearestJ = -1;
        let nearestDist = Infinity;

        for (let j = 0; j < points.length; j++) {
          if (j === i) continue;

          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < nearestDist) {
            nearestDist = dist;
            nearestJ = j;
          }
        }

        if (nearestJ !== -1) {
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[nearestJ].x, points[nearestJ].y);
          ctx.strokeStyle = hexAlpha(line, 0.12);
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Cursor links: only nearest few points (desktop only)
      if (mouse && cfg.CURSOR_LINK_COUNT > 0) {
        const nearby = points
          .map((p) => {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            return {
              p,
              dist: Math.sqrt(dx * dx + dy * dy),
            };
          })
          .filter((item) => item.dist < cfg.MAX_DIST_CURSOR)
          .sort((a, b) => a.dist - b.dist)
          .slice(0, cfg.CURSOR_LINK_COUNT);

        nearby.forEach(({ p, dist }) => {
          const alpha = 1 - dist / cfg.MAX_DIST_CURSOR;

          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = hexAlpha(cursor, alpha * 0.6);
          ctx.lineWidth = 1 + alpha * 1.2;
          ctx.stroke();
        });

        // Cursor glow
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 12, 0, Math.PI * 2);
        ctx.fillStyle = hexAlpha(cursor, 0.08);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 28, 0, Math.PI * 2);
        ctx.fillStyle = hexAlpha(cursor, 0.03);
        ctx.fill();
      }

      // Draw points on top
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const hover = hoverFactor[i];
        const r = breathRadius + hover * 2.2;

        if (hover > 0.05) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, r + hover * 5, 0, Math.PI * 2);
          ctx.fillStyle = hexAlpha(cursor, hover * 0.12);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = point;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      darkMQ.removeEventListener("change", readTheme);
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeaveWindow);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ display: "block", pointerEvents: "none", touchAction: "none" }}
    />
  );
}
