import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

interface CenterPathProps {
  triggerClass: string;
}

const CenterPath: React.FC<CenterPathProps> = ({ triggerClass }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const ballRef = useRef<SVGCircleElement | null>(null);
  const [dimensions, setDimensions] = useState({ centerX: 0, height: 0 });
  useEffect(() => {
    const updateSize = () => {
      if (!svgRef.current) return;
      const { width, height } = svgRef.current.getBoundingClientRect();
      setDimensions({ centerX: width / 2, height });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    const ball = ballRef.current;
    if (!path || !ball) return;

    const length = path.getTotalLength();

    // Set initial stroke
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    // Create a single timeline for synchronized animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${triggerClass}`,
        start: "top top",
        end: "bottom bottom",
        scrub: true, // smooth forward + reverse
      },
    });

    tl.to(path, { strokeDashoffset: 0, ease: "none" }, 0); // stroke reveal
    tl.to(
      ball,
      {
        motionPath: { path, align: path, alignOrigin: [0.5, 0.5] },
        ease: "none",
      },
      0
    );

    // Cleanup on unmount
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [dimensions, triggerClass]);

  return (
    <svg
      ref={svgRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={pathRef}
        d={`M ${dimensions.centerX} 0 L ${dimensions.centerX} ${dimensions.height}`}
        stroke="#0A8DC1"
        strokeWidth="4"
        fill="none"
      />
      <circle r="12" fill="#0A8DC1" ref={ballRef} />
    </svg>
  );
};

export default CenterPath;
