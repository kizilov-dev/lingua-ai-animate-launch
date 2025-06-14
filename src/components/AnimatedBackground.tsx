
import React from "react";

const AnimatedBackground = () => (
  <div
    aria-hidden
    className="
      pointer-events-none fixed inset-0 z-0
      bg-gradient-to-tr from-blue-100 via-indigo-50 to-violet-50
      animate-none
      before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] before:from-purple-100/60 before:to-transparent before:blur-2xl
      after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] after:from-sky-100/75 after:to-transparent after:blur-2xl
    "
    style={{ zIndex: 0 }}
  />
);

export default AnimatedBackground;
