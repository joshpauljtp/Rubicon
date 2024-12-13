import * as React from "react";

function Service(props: React.SVGProps<SVGSVGElement>) {
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
        d="M54.6045 43.2908L97.9382 86.6245C101.062 89.7487 101.062 94.814 97.9382 97.9382C94.814 101.062 89.7487 101.062 86.6245 97.9382L43.2908 54.6045L54.6045 43.2908Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.2637 28.8085C16.446 31.0518 16 33.4738 16 36C16 47.598 25.402 57 37 57C48.598 57 58 47.598 58 36C58 24.402 48.598 15 37 15C35.0064 15 33.0778 15.2778 31.2506 15.7968L42.2473 26.7935C45.3715 29.9177 45.3715 34.983 42.2473 38.1072L40.0617 40.2928C36.9375 43.417 31.8722 43.417 28.748 40.2928L17.2637 28.8085Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default React.memo(Service);
