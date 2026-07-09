import React, { useMemo } from "react";

export default function TornPaperDivider() {
  // Generate highly stable, organic ragged paths that won't flicker
  const { pathTop, pathWhite, pathShadow, pathDeepShadow } = useMemo(() => {
    const points: [number, number][] = [];
    const steps = 120; // High resolution jagged steps for the torn edge
    const width = 1440;
    const stepSize = width / steps;
    
    // Base y-coordinate for the rip
    const baseY = 25;
    
    for (let i = 0; i <= steps; i++) {
      const x = i * stepSize;
      
      // Seedless deterministic wave combo mimicking rough deckle-edge paper tear
      const swell1 = Math.sin(i * 0.1) * 7;
      const swell2 = Math.cos(i * 0.22) * 3.5;
      const swell3 = Math.sin(i * 0.5) * 1.5;
      const noise = Math.sin(i * 1.8) * 1.0 + Math.cos(i * 4.2) * 0.5;
      
      const y = baseY + swell1 + swell2 + swell3 + noise;
      points.push([x, y]);
    }
    
    // Create the top torn paper path (filled down to the bottom of viewBox y=80)
    const topPointsStr = points.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" L ");
    const pathTop = `M 0,80 L 0,${points[0][1].toFixed(1)} L ${topPointsStr} L 1440,${points[points.length - 1][1].toFixed(1)} L 1440,80 Z`;
    
    // Create a pure white deckle-edge paper core layer (offset by 1.5px)
    const whitePointsStr = points.map(([x, y]) => `${x.toFixed(1)},${(y + 1.8).toFixed(1)}`).join(" L ");
    const pathWhite = `M 0,80 L 0,${(points[0][1] + 1.8).toFixed(1)} L ${whitePointsStr} L 1440,${(points[points.length - 1][1] + 1.8).toFixed(1)} L 1440,80 Z`;

    // Create a pulp fiber underlay layer (colored warm gold/beige, offset by 3.5px)
    const shadowPointsStr = points.map(([x, y]) => {
      const pulpNoise = Math.sin(x * 0.6) * 0.4;
      return `${x.toFixed(1)},${(y + 3.8 + pulpNoise).toFixed(1)}`;
    }).join(" L ");
    const pathShadow = `M 0,80 L 0,${(points[0][1] + 3.8).toFixed(1)} L ${shadowPointsStr} L 1440,${(points[points.length - 1][1] + 3.8).toFixed(1)} L 1440,80 Z`;

    // Deep underlay shadow for high-contrast separation (offset by 6px)
    const deepShadowPointsStr = points.map(([x, y]) => {
      return `${x.toFixed(1)},${(y + 6.2).toFixed(1)}`;
    }).join(" L ");
    const pathDeepShadow = `M 0,80 L 0,${(points[0][1] + 6.2).toFixed(1)} L ${deepShadowPointsStr} L 1440,${(points[points.length - 1][1] + 6.2).toFixed(1)} L 1440,80 Z`;
    
    return { pathTop, pathWhite, pathShadow, pathDeepShadow };
  }, []);

  return (
    <div 
      className="relative w-full overflow-hidden select-none -mt-8 sm:-mt-12 md:-mt-16 z-30 pointer-events-none" 
      style={{ height: "64px" }}
      id="torn-paper-divider"
    >
      <svg
        viewBox="0 0 1440 80"
        className="absolute top-0 left-0 w-full h-full block"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Layer 1: Extra Deep Ambient Shadow for physical depth */}
        <path
          d={pathDeepShadow}
          fill="#1f310c"
          opacity="0.16"
        />

        {/* Layer 2: Underlay Paper Shadow / Fiber Pulp Layer (Warm Golden Accent #EADCB0) */}
        <path
          d={pathShadow}
          fill="#EADCB0"
          opacity="0.95"
        />

        {/* Layer 3: Pure White Inner Paper Core Layer (Deckle edge) */}
        <path
          d={pathWhite}
          fill="#FFFFFF"
        />

        {/* Layer 4: Main Foreground Torn Paper Sheet (Seamlessly matches #FAF8F3 background) */}
        <path
          d={pathTop}
          fill="#FAF8F3"
        />
      </svg>
    </div>
  );
}
