import * as React from "react";

function Neutral(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 120 120" fill="none" {...props}>
      <path
        d="M22.059 98V23.12h13.416l50.128 59.696V23.12h11.336V98H83.523L33.29 38.2V98H22.059z"
        fill="currentColor"
      />
    </svg>
  );
}

export default React.memo(Neutral);
