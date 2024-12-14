import * as React from "react";

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 80 80"
      fill="none"
      strokeWidth={4}
      {...props}
    >
      <path
        d="M30 64.164l20-48M23 24.164L5.84 39.417a1 1 0 000 1.494L23 56.164M57 24.164l17.16 15.253a1 1 0 010 1.494L57 56.164"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default React.memo(CodeIcon);
