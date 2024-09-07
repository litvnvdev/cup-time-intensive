export function Hamburger({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="12"
      viewBox="0 0 20 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="20" height="1" fill="currentColor" />
      <rect y="5.5" width="20" height="1" fill="currentColor" />
      <rect y="10.5" width="20" height="1" fill="currentColor" />
    </svg>
  );
}
