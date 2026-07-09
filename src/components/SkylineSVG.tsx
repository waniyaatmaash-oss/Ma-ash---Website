import { motion } from "motion/react";

export default function SkylineSVG() {
  // Wheel rotation animation for the bicycles
  const wheelRotateVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  // Subtle bounce for the dog's tail
  const tailVariants = {
    animate: {
      rotate: [0, 15, -10, 15, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-full overflow-hidden select-none" id="streetscape-container">
      {/* Warm Sky / Soft Sunset Horizon Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#F5ECD2]/40 via-[#FAF8F3]/20 to-transparent pointer-events-none" />

      <svg
        viewBox="0 0 1440 380"
        className="w-full h-auto block"
        style={{ minHeight: "240px" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle Sun Horizon Gradient */}
          <linearGradient id="horizonGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FAF8F3" stopOpacity="1" />
            <stop offset="60%" stopColor="#F5ECD2" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FAF8F3" stopOpacity="0" />
          </linearGradient>

          {/* Individual building shadows or gradients */}
          <linearGradient id="roofShadow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#121C07" />
            <stop offset="100%" stopColor="#1F310C" />
          </linearGradient>
        </defs>

        {/* Sky Base */}
        <rect width="1440" height="380" fill="url(#horizonGlow)" opacity="0.6" />

        {/* --- SUNSET SUN OR LIGHT ACCENT --- */}
        <circle cx="720" cy="230" r="120" fill="#EADCB0" opacity="0.25" filter="blur(1px)" />
        <circle cx="720" cy="230" r="70" fill="#FAF2DC" opacity="0.35" />

        {/* --- PERSPECTIVE CENTRAL ROAD & SIDEWALKS --- */}
        {/* Road (Beige/Cream pavement color receding) */}
        <polygon points="520,380 920,380 735,270 705,270" fill="#F3EFE6" />
        
        {/* Road Center Dotted Divider Lines */}
        <line x1="720" y1="380" x2="720" y2="270" stroke="#EADCB0" strokeWidth="2.5" strokeDasharray="6 8" opacity="0.6" />

        {/* Left Sidewalk */}
        <polygon points="0,350 520,380 500,380 0,350" fill="#FAF8F3" opacity="0.8" />
        <line x1="0" y1="350" x2="520" y2="380" stroke="#1F310C" strokeWidth="1.25" opacity="0.15" />

        {/* Right Sidewalk */}
        <polygon points="1440,350 920,380 940,380 1440,350" fill="#FAF8F3" opacity="0.8" />
        <line x1="1440" y1="350" x2="920" y2="380" stroke="#1F310C" strokeWidth="1.25" opacity="0.15" />

        {/* Base Street Ground Line */}
        <line x1="0" y1="350" x2="1440" y2="350" stroke="#1f310c" strokeWidth="1.5" opacity="0.1" />


        {/* ======================================================== */}
        {/*                LEFT SIDE STREET BUILDINGS                */}
        {/* ======================================================== */}

        {/* Far Distance Left Building (L5) - Light Silhouette */}
        <g fill="#F3EFE6">
          <rect x="470" y="245" width="75" height="105" rx="1" />
          <rect x="480" y="255" width="12" height="18" rx="1" fill="#FAF8F3" />
          <rect x="500" y="255" width="12" height="18" rx="1" fill="#FAF8F3" />
          <rect x="520" y="255" width="12" height="18" rx="1" fill="#FAF8F3" />
        </g>

        {/* Building L4 (Beige-gold Arched Windows Building) */}
        <g fill="#EADCB0">
          <rect x="380" y="225" width="85" height="125" rx="2" />
          {/* Accent horizontal trim */}
          <rect x="380" y="235" width="85" height="4" fill="#7a6200" opacity="0.3" />
          {/* Windows - Arched */}
          <path d="M 395 260 A 6 6 0 0 1 407 260 L 407 275 L 395 275 Z" fill="#FAF8F3" />
          <path d="M 415 260 A 6 6 0 0 1 427 260 L 427 275 L 415 275 Z" fill="#FAF8F3" />
          <path d="M 435 260 A 6 6 0 0 1 447 260 L 447 275 L 435 275 Z" fill="#FAF8F3" />
          {/* Lower level windows */}
          <rect x="395" y="295" width="12" height="20" rx="1" fill="#FAF8F3" />
          <rect x="415" y="295" width="12" height="20" rx="1" fill="#FAF8F3" />
          <rect x="435" y="295" width="12" height="20" rx="1" fill="#FAF8F3" />
        </g>

        {/* Building L3 (Terracotta Amber-brown Building) */}
        <g fill="#C67026">
          <rect x="250" y="210" width="125" height="140" rx="3" />
          {/* Roof detail */}
          <rect x="246" y="206" width="133" height="6" rx="1" fill="#FAF8F3" />
          {/* Arched windows upper */}
          <path d="M 270 235 A 8 8 0 0 1 286 235 L 286 255 L 270 255 Z" fill="#FAF8F3" />
          <path d="M 305 235 A 8 8 0 0 1 321 235 L 321 255 L 305 255 Z" fill="#FAF8F3" />
          <path d="M 340 235 A 8 8 0 0 1 356 235 L 356 255 L 340 255 Z" fill="#FAF8F3" />
          {/* Lower arched door and window */}
          <path d="M 270 285 A 10 10 0 0 1 290 285 L 290 315 L 270 315 Z" fill="#FAF8F3" opacity="0.9" />
          <rect x="315" y="280" width="16" height="25" rx="1" fill="#FAF8F3" />
          <rect x="340" y="280" width="16" height="25" rx="1" fill="#FAF8F3" />
        </g>

        {/* Building L2 (Soft Rose-Pink Townhouse) */}
        <g fill="#E88B92">
          <rect x="140" y="220" width="105" height="130" rx="3" />
          {/* Pitched Roof */}
          <polygon points="135,220 192,185 250,220" fill="#1F310C" />
          {/* Windows */}
          <rect x="160" y="240" width="18" height="26" rx="1" fill="#FAF8F3" />
          <rect x="164" y="244" width="10" height="18" fill="#EADCB0" opacity="0.3" />
          <rect x="205" y="240" width="18" height="26" rx="1" fill="#FAF8F3" />
          <rect x="209" y="244" width="10" height="18" fill="#EADCB0" opacity="0.3" />
          {/* Ground floor door and window */}
          <rect x="160" y="285" width="22" height="40" rx="1" fill="#FAF8F3" />
          <circle cx="178" cy="305" r="1.5" fill="#1F310C" />
          <rect x="200" y="285" width="24" height="24" rx="1" fill="#FAF8F3" />
        </g>

        {/* Building L1 (Leftmost Ochre-Orange Arch Building - Alto Styled) */}
        <g fill="#E58A54">
          <path d="M 0 190 L 135 190 L 135 350 L 0 350 Z" />
          {/* Beautiful decorative white cornices & columns */}
          <rect x="0" y="190" width="135" height="8" fill="#FAF8F3" />
          <rect x="20" y="198" width="8" height="152" fill="#FAF8F3" opacity="0.15" />
          <rect x="110" y="198" width="8" height="152" fill="#FAF8F3" opacity="0.15" />

          {/* Gorgeous arched window frames & warm windows */}
          {/* Arch 1 */}
          <path d="M 25 240 A 15 15 0 0 1 55 240 L 55 285 L 25 285 Z" fill="#FAF8F3" />
          <path d="M 28 243 A 12 12 0 0 1 52 243 L 52 282 L 28 282 Z" fill="#EADCB0" opacity="0.55" />
          {/* Arch 2 */}
          <path d="M 80 240 A 15 15 0 0 1 110 240 L 110 285 L 80 285 Z" fill="#FAF8F3" />
          <path d="M 83 243 A 12 12 0 0 1 107 243 L 107 282 L 83 282 Z" fill="#EADCB0" opacity="0.55" />

          {/* Large main arched entrance */}
          <path d="M 40 300 A 18 18 0 0 1 76 300 L 76 350 L 40 350 Z" fill="#FAF8F3" />
          <path d="M 43 303 A 15 15 0 0 1 73 303 L 73 350 L 43 350 Z" fill="#FAF2DC" />
        </g>


        {/* ======================================================== */}
        {/*               RIGHT SIDE STREET BUILDINGS                */}
        {/* ======================================================== */}

        {/* Far Distance Right Building (R5) */}
        <g fill="#F3EFE6">
          <rect x="880" y="245" width="70" height="105" rx="1" />
          <rect x="895" y="258" width="14" height="20" rx="1" fill="#FAF8F3" />
          <rect x="920" y="258" width="14" height="20" rx="1" fill="#FAF8F3" />
        </g>

        {/* Building R4 (Warm yellow-orange Building) */}
        <g fill="#E9975D">
          <rect x="955" y="220" width="90" height="130" rx="2" />
          {/* Slim vertical windows */}
          <rect x="975" y="240" width="14" height="32" rx="1" fill="#FAF8F3" />
          <rect x="1005" y="240" width="14" height="32" rx="1" fill="#FAF8F3" />
          <rect x="975" y="285" width="14" height="32" rx="1" fill="#FAF8F3" />
          <rect x="1005" y="285" width="14" height="32" rx="1" fill="#FAF8F3" />
        </g>

        {/* Building R3 (Cream-yellow Building with Arches) */}
        <g fill="#FAF2DC">
          <rect x="1055" y="195" width="95" height="155" rx="3" />
          <rect x="1055" y="195" width="95" height="6" fill="#7a6200" opacity="0.3" />
          {/* Windows */}
          <rect x="1075" y="215" width="16" height="28" rx="1" fill="#FAF8F3" />
          <rect x="1105" y="215" width="16" height="28" rx="1" fill="#FAF8F3" />
          {/* Mid trims */}
          <rect x="1055" y="258" width="95" height="3" fill="#FAF8F3" />
          {/* Arches at lower level */}
          <path d="M 1070 280 A 10 10 0 0 1 1090 280 L 1090 315 L 1070 315 Z" fill="#FAF8F3" />
          <path d="M 1105 280 A 10 10 0 0 1 1125 280 L 1125 315 L 1105 315 Z" fill="#FAF8F3" />
        </g>

        {/* Building R2 (Majestic Pink Townhouse - Main Right Side) */}
        <g fill="#EC9A9A">
          <rect x="1155" y="150" width="190" height="200" rx="4" />
          {/* Deep green-grey slate pitched roof */}
          <polygon points="1145,150 1250,95 1355,150" fill="url(#roofShadow)" />
          
          {/* Chimney */}
          <rect x="1300" y="105" width="16" height="32" fill="#C67026" />
          <rect x="1296" y="102" width="24" height="4" fill="#1F310C" />

          {/* Rows of multi-paned elegant white windows */}
          {/* Row 1 */}
          <rect x="1180" y="165" width="20" height="32" rx="2" fill="#FAF8F3" />
          <line x1="1190" y1="165" x2="1190" y2="197" stroke="#EC9A9A" strokeWidth="1" />
          <line x1="1180" y1="181" x2="1200" y2="181" stroke="#EC9A9A" strokeWidth="1" />

          <rect x="1215" y="165" width="20" height="32" rx="2" fill="#FAF8F3" />
          <line x1="1225" y1="165" x2="1225" y2="197" stroke="#EC9A9A" strokeWidth="1" />
          <line x1="1215" y1="181" x2="1235" y2="181" stroke="#EC9A9A" strokeWidth="1" />

          <rect x="1250" y="165" width="20" height="32" rx="2" fill="#FAF8F3" />
          <line x1="1260" y1="165" x2="1260" y2="197" stroke="#EC9A9A" strokeWidth="1" />
          <line x1="1250" y1="181" x2="1270" y2="181" stroke="#EC9A9A" strokeWidth="1" />

          <rect x="1285" y="165" width="20" height="32" rx="2" fill="#FAF8F3" />
          <line x1="1295" y1="165" x2="1295" y2="197" stroke="#EC9A9A" strokeWidth="1" />
          <line x1="1285" y1="181" x2="1305" y2="181" stroke="#EC9A9A" strokeWidth="1" />

          {/* Row 2 */}
          <rect x="1180" y="215" width="20" height="32" rx="2" fill="#FAF8F3" />
          <line x1="1190" y1="215" x2="1190" y2="247" stroke="#EC9A9A" strokeWidth="1" />
          <line x1="1180" y1="231" x2="1200" y2="231" stroke="#EC9A9A" strokeWidth="1" />

          <rect x="1215" y="215" width="20" height="32" rx="2" fill="#FAF8F3" />
          <line x1="1225" y1="215" x2="1225" y2="247" stroke="#EC9A9A" strokeWidth="1" />
          <line x1="1215" y1="231" x2="1235" y2="231" stroke="#EC9A9A" strokeWidth="1" />

          <rect x="1250" y="215" width="20" height="32" rx="2" fill="#FAF8F3" />
          <line x1="1260" y1="215" x2="1260" y2="247" stroke="#EC9A9A" strokeWidth="1" />
          <line x1="1250" y1="231" x2="1270" y2="231" stroke="#EC9A9A" strokeWidth="1" />

          <rect x="1285" y="215" width="20" height="32" rx="2" fill="#FAF8F3" />
          <line x1="1295" y1="215" x2="1295" y2="247" stroke="#EC9A9A" strokeWidth="1" />
          <line x1="1285" y1="231" x2="1305" y2="231" stroke="#EC9A9A" strokeWidth="1" />

          {/* Ground level double-door entrance & features */}
          <rect x="1210" y="275" width="35" height="58" rx="2" fill="#FAF8F3" />
          <rect x="1214" y="278" width="12" height="52" fill="#EADCB0" />
          <rect x="1229" y="278" width="12" height="52" fill="#EADCB0" />
          <circle cx="1219" cy="305" r="1.5" fill="#1F310C" />
          <circle cx="1234" cy="305" r="1.5" fill="#1F310C" />

          <rect x="1270" y="275" width="30" height="30" rx="2" fill="#FAF8F3" />
          <line x1="1285" y1="275" x2="1285" y2="305" stroke="#EC9A9A" strokeWidth="1" />
        </g>

        {/* Building R1 (Rightmost Terracotta building edge) */}
        <g fill="#C67026">
          <path d="M 1350 170 L 1440 170 L 1440 350 L 1350 350 Z" />
          <rect x="1350" y="170" width="90" height="8" fill="#FAF8F3" />
          {/* Curved top window */}
          <path d="M 1370 220 A 15 15 0 0 1 1400 220 L 1400 260 L 1370 260 Z" fill="#FAF8F3" />
          <path d="M 1373 223 A 12 12 0 0 1 1397 223 L 1397 257 L 1373 257 Z" fill="#FAF2DC" />
        </g>


        {/* ======================================================== */}
        {/*            ORGANIC TREES & GREENERY (Alto style)         */}
        {/* ======================================================== */}

        {/* Tree L1 (Under L1/L2) */}
        <g>
          <path d="M 125 290 Q 120 250 100 250 Q 70 250 85 290 Z" fill="#1F310C" opacity="0.85" />
          <circle cx="95" cy="260" r="22" fill="#1F310C" />
          <circle cx="115" cy="270" r="18" fill="#5C6454" opacity="0.9" />
          <circle cx="80" cy="275" r="15" fill="#5C6454" />
        </g>

        {/* Tree L2 (Under L3/L4) */}
        <g>
          <path d="M 370 310 Q 365 270 355 270 Q 340 270 350 310 Z" fill="#1F310C" />
          <circle cx="355" cy="280" r="20" fill="#1F310C" />
          <circle cx="370" cy="285" r="15" fill="#5C6454" />
        </g>

        {/* Tree R1 (Under R3/R4) */}
        <g>
          <path d="M 1045 310 Q 1040 280 1030 280 Q 1020 280 1025 310 Z" fill="#1F310C" />
          <circle cx="1035" cy="290" r="18" fill="#1F310C" />
          <circle cx="1045" cy="295" r="14" fill="#5C6454" />
        </g>

        {/* Large Corner Tree on far right (Alto aesthetic) */}
        <g>
          {/* Trunk */}
          <path d="M 1390 350 Q 1395 300 1375 270 L 1385 270 Q 1405 300 1402 350 Z" fill="#1F310C" />
          {/* Lush organic foliage layers */}
          <circle cx="1360" cy="250" r="32" fill="#1F310C" />
          <circle cx="1400" cy="235" r="40" fill="#1F310C" />
          <circle cx="1430" cy="255" r="28" fill="#1F310C" />
          <circle cx="1380" cy="245" r="25" fill="#5C6454" opacity="0.9" />
          <circle cx="1415" cy="240" r="22" fill="#5C6454" opacity="0.9" />
        </g>


        {/* ======================================================== */}
        {/*                  STREET LIFE & CHARACTERS                */}
        {/* ======================================================== */}

        {/* --- Left Foreground: Person Walking Dog --- */}
        <g id="streetlife-walker-dog">
          {/* Leash line */}
          <path d="M 215 330 Q 225 336 242 342" fill="none" stroke="#1F310C" strokeWidth="1" />

          {/* Dog */}
          <g>
            {/* Body */}
            <rect x="242" y="338" width="14" height="8" rx="2" fill="#C67026" />
            {/* Legs */}
            <line x1="244" y1="346" x2="244" y2="350" stroke="#C67026" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="248" y1="346" x2="248" y2="350" stroke="#C67026" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="251" y1="346" x2="251" y2="350" stroke="#C67026" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="254" y1="346" x2="254" y2="350" stroke="#C67026" strokeWidth="1.5" strokeLinecap="round" />
            {/* Head & Ears */}
            <circle cx="255" cy="336" r="3.5" fill="#C67026" />
            <path d="M 256 333 Q 258 335 257 338" stroke="#1F310C" strokeWidth="1" fill="none" />
            {/* Wagging Tail */}
            <motion.path
              d="M 242 340 Q 237 336 238 334"
              stroke="#C67026"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              variants={tailVariants}
              animate="animate"
              style={{ originX: "242px", originY: "340px" }}
            />
          </g>

          {/* Person */}
          <g>
            {/* Head */}
            <circle cx="210" cy="310" r="4.5" fill="#1F310C" />
            {/* Pink top jacket */}
            <path d="M 204 316 L 216 316 L 214 330 L 206 330 Z" fill="#E88B92" />
            {/* Blue Pants */}
            <line x1="207" y1="330" x2="205" y2="348" stroke="#1F310C" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="213" y1="330" x2="215" y2="348" stroke="#1F310C" strokeWidth="2.5" strokeLinecap="round" />
            {/* Walking arms */}
            <line x1="205" y1="318" x2="201" y2="328" stroke="#1F310C" strokeWidth="1.75" strokeLinecap="round" />
            <line x1="214" y1="318" x2="217" y2="330" stroke="#1F310C" strokeWidth="1.75" strokeLinecap="round" />
          </g>
        </g>


        {/* --- Center Perspective Cyclist riding away down the street --- */}
        <g id="streetlife-center-cyclist" opacity="0.95">
          {/* Bicycle Wheels in perspective (skewed oval) */}
          <ellipse cx="720" cy="336" rx="3" ry="8" fill="none" stroke="#1F310C" strokeWidth="1.5" />
          
          {/* Cyclist body */}
          <circle cx="720" cy="312" r="3.5" fill="#1F310C" />
          {/* Yellow shirt */}
          <path d="M 716 316 L 724 316 L 722 328 L 718 328 Z" fill="#EADCB0" />
          {/* Back pack */}
          <rect x="717" y="318" width="6" height="8" rx="1" fill="#C67026" />
          {/* Legs pedaling */}
          <line x1="718" y1="328" x2="716" y2="336" stroke="#1F310C" strokeWidth="2" />
          <line x1="722" y1="328" x2="724" y2="334" stroke="#1F310C" strokeWidth="2" />
        </g>


        {/* --- Right Foreground: Adult holding child's hand --- */}
        <g id="streetlife-parent-child">
          {/* Adult */}
          <g>
            {/* Head with styled hair */}
            <circle cx="1195" cy="308" r="4.5" fill="#1F310C" />
            <path d="M 1191 304 Q 1195 301 1199 304" stroke="#1F310C" strokeWidth="1.5" fill="none" />
            {/* Indigo Blue Outfit */}
            <path d="M 1189 314 Q 1195 312 1201 314 L 1198 335 L 1192 335 Z" fill="#5C6454" />
            {/* Legs walking */}
            <line x1="1192" y1="335" x2="1190" y2="349" stroke="#1F310C" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="1198" y1="335" x2="1201" y2="349" stroke="#1F310C" strokeWidth="2.5" strokeLinecap="round" />
            {/* Arm holding child */}
            <line x1="1198" y1="316" x2="1205" y2="326" stroke="#1F310C" strokeWidth="1.75" strokeLinecap="round" />
          </g>

          {/* Leaning connection / Holding hands */}
          <line x1="1204" y1="326" x2="1210" y2="332" stroke="#1F310C" strokeWidth="1.25" />

          {/* Child */}
          <g>
            {/* Head */}
            <circle cx="1214" cy="322" r="3" fill="#1F310C" />
            {/* Bright Yellow Shirt */}
            <rect x="1210" y="326" width="8" height="10" rx="1" fill="#EADCB0" />
            {/* Red/Orange pants */}
            <line x1="1212" y1="336" x2="1211" y2="346" stroke="#1F310C" strokeWidth="2" strokeLinecap="round" />
            <line x1="1216" y1="336" x2="1217" y2="346" stroke="#1F310C" strokeWidth="2" strokeLinecap="round" />
            {/* Arm holding parent */}
            <line x1="1211" y1="327" x2="1206" y2="331" stroke="#1F310C" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        </g>


        {/* --- Right Midground: Cyclist coming in from right --- */}
        <g id="streetlife-right-cyclist" opacity="0.9">
          {/* Bicycle Frame */}
          <line x1="975" y1="340" x2="995" y2="340" stroke="#1F310C" strokeWidth="1.5" />
          {/* Wheels with rotatable spokes style */}
          <g>
            <circle cx="975" cy="340" r="7" fill="none" stroke="#1F310C" strokeWidth="1.5" />
            <motion.line x1="968" y1="340" x2="982" y2="340" stroke="#1F310C" strokeWidth="0.5" variants={wheelRotateVariants} animate="animate" style={{ originX: "975px", originY: "340px" }} />
            <motion.line x1="975" y1="333" x2="975" y2="347" stroke="#1F310C" strokeWidth="0.5" variants={wheelRotateVariants} animate="animate" style={{ originX: "975px", originY: "340px" }} />
          </g>
          <g>
            <circle cx="995" cy="340" r="7" fill="none" stroke="#1F310C" strokeWidth="1.5" />
            <motion.line x1="988" y1="340" x2="1002" y2="340" stroke="#1F310C" strokeWidth="0.5" variants={wheelRotateVariants} animate="animate" style={{ originX: "995px", originY: "340px" }} />
            <motion.line x1="995" y1="333" x2="995" y2="347" stroke="#1F310C" strokeWidth="0.5" variants={wheelRotateVariants} animate="animate" style={{ originX: "995px", originY: "340px" }} />
          </g>
          {/* Rider */}
          <circle cx="985" cy="324" r="3.5" fill="#1F310C" />
          <path d="M 981 328 L 989 328 L 986 338 L 982 338 Z" fill="#E88B92" />
          {/* Arms holding handle bars */}
          <line x1="985" y1="330" x2="993" y2="335" stroke="#1F310C" strokeWidth="1.5" strokeLinecap="round" />
        </g>

      </svg>
    </div>
  );
}
