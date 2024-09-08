export function Button({
  children,
  onClick,
}: {
  children: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer bg-inherit border border-violet-700 text-violet-700 rounded py-3 px-4 font-normal"
    >
      {children}
    </button>
  );
}
