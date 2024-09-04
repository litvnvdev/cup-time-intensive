interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return <div className="mx-auto container max-w-[1400px]">{children}</div>;
}
