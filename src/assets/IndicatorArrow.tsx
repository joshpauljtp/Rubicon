import * as React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  dir: "left" | "right";
}

function IndicatorArrow({ dir, ...props }: Props) {
  const getDirectionElements = () => {
    switch (dir) {
      case "left":
        return (
          <>
            <g clipPath="url(#prefix__clip0_163_1148)" fill="currentColor">
              <path d="M1.4 12L12.05 1.607v20.785L1.4 12z" />
              <path d="M11.8 9.8h10.8v4.8H11.8z" />
            </g>
            <defs>
              <clipPath id="prefix__clip0_163_1148">
                <path fill="#fff" d="M0 0h24v24H0z" />
              </clipPath>
            </defs>
          </>
        );
      case "right":
        return (
          <>
            <g clip-path="url(#clip0_163_1143)">
              <path
                d="M22.5996 12.0002L11.9496 22.3925L11.9496 1.60794L22.5996 12.0002Z"
                fill="currentColor"
              />
              <rect
                x="12.2002"
                y="14.2004"
                width="10.8"
                height="4.8"
                transform="rotate(-180 12.2002 14.2004)"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_163_1143">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="matrix(-1 0 0 -1 24 24)"
                />
              </clipPath>
            </defs>
          </>
        );
    }
  };

  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      {getDirectionElements()}
    </svg>
  );
}

export default React.memo(IndicatorArrow);
