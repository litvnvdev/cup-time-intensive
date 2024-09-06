interface TitleProps {
  children: string;
}

export function Title({ children }: TitleProps) {
  return <h2 className="text-4xl text-violet-800 font-normal">{children}</h2>;
}
