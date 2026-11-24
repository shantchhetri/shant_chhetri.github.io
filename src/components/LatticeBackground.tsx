import { useEffect, useRef } from 'react';

/**
 * Understated animated background: a slightly perturbed hexagonal lattice
 * (think molecular sites in a thin film) with occasional "charge carriers"
 * hopping between neighbouring sites. Draws a single static frame when the
 * visitor prefers reduced motion, and pauses while off-screen.
 */
export function LatticeBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    type Node = { x: number; y: number; bx: number; by: number; p: number };
    type Hop = { a: number; b: number; t: number; speed: number };
    let nodes: Node[] = [];
    let edges: [number, number][] = [];
    let hops: Hop[] = [];

    const color = (v: string, a: number) => {
      const rgb = getComputedStyle(document.documentElement).getPropertyValue(v).trim().split(/\s+/).join(',');
      return `rgba(${rgb},${a})`;
    };

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const s = w < 640 ? 54 : 68; // lattice spacing
      const rowH = s * Math.sin(Math.PI / 3);
      nodes = [];
      for (let r = -1; r * rowH < h + rowH; r++) {
        for (let c = -1; c * s < w + s; c++) {
          const x = c * s + (r % 2 ? s / 2 : 0);
          const y = r * rowH;
          nodes.push({ x, y, bx: x, by: y, p: Math.random() * Math.PI * 2 });
        }
      }
      edges = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].bx - nodes[j].bx, nodes[i].by - nodes[j].by);
          if (d < s * 1.05) edges.push([i, j]);
        }
      }
      hops = [];
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);
      const t = time / 1000;
      for (const n of nodes) {
        n.x = n.bx + Math.sin(t * 0.35 + n.p) * 2.2;
        n.y = n.by + Math.cos(t * 0.3 + n.p) * 2.2;
      }
      // fade toward the left so text stays readable
      const edgeCol = color('--navy', 0.07);
      const nodeCol = color('--navy', 0.16);
      ctx.lineWidth = 1;
      ctx.strokeStyle = edgeCol;
      ctx.beginPath();
      for (const [a, b] of edges) {
        ctx.moveTo(nodes[a].x, nodes[a].y);
        ctx.lineTo(nodes[b].x, nodes[b].y);
      }
      ctx.stroke();
      ctx.fillStyle = nodeCol;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      // charge hops
      if (!reduce && hops.length < 7 && Math.random() < 0.03 && edges.length) {
        const [a, b] = edges[Math.floor(Math.random() * edges.length)];
        hops.push(Math.random() < 0.5 ? { a, b, t: 0, speed: 0.006 + Math.random() * 0.006 } : { a: b, b: a, t: 0, speed: 0.008 });
      }
      const hopCol = color('--wine', 0.55);
      for (const hp of hops) {
        hp.t += hp.speed;
        const A = nodes[hp.a];
        const B = nodes[hp.b];
        const x = A.x + (B.x - A.x) * hp.t;
        const y = A.y + (B.y - A.y) * hp.t;
        ctx.strokeStyle = color('--wine', 0.18 * (1 - hp.t));
        ctx.beginPath();
        ctx.moveTo(A.x, A.y);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.fillStyle = hopCol;
        ctx.beginPath();
        ctx.arc(x, y, 2.4, 0, Math.PI * 2);
        ctx.fill();
      }
      hops = hops.filter((hp) => hp.t < 1);
    };

    const loop = (time: number) => {
      if (visible) draw(time);
      raf = requestAnimationFrame(loop);
    };

    build();
    if (reduce) draw(0);
    else raf = requestAnimationFrame(loop);

    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);
    const ro = new ResizeObserver(() => {
      build();
      if (reduce) draw(0);
    });
    ro.observe(canvas);
    const mo = new MutationObserver(() => reduce && draw(0));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full [mask-image:linear-gradient(to_right,transparent_0%,black_45%,black_100%)]"
    />
  );
}
