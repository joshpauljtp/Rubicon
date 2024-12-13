import * as React from "react";

function HighBeam(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M60 28H82C99.6731 28 114 42.3269 114 60C114 77.6731 99.6731 92 82 92H60V28Z"
        fill="currentColor"
      />
      <rect x="12" y="36" width="40" height="4" rx="2" fill="currentColor" />
      <rect x="12" y="58" width="40" height="4" rx="2" fill="currentColor" />
      <rect x="12" y="79" width="40" height="4" rx="2" fill="currentColor" />
    </svg>
  );
}

export default React.memo(HighBeam);
