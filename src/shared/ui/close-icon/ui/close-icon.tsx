export function CloseIcon({
  width,
  height,
  className,
}: {
  width: string;
  className: string;
  height: string;
}) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3.71228"
        y="12.1976"
        width="12"
        height="1.5"
        transform="rotate(-45 3.71228 12.1976)"
        fill="currentColor"
      />
      <rect
        x="12.1976"
        y="13.2582"
        width="12"
        height="1.5"
        transform="rotate(-135 12.1976 13.2582)"
        fill="currentColor"
      />
    </svg>
  );
}
