export function Button({ children }: { children: string }) {
  return (
    <button className="cursor-pointer bg-inherit border border-violet-700 text-violet-700 rounded py-3 px-4 font-normal">
      {children}
    </button>
  );
}
