interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return <main className="mx-auto container max-w-[1400px]">{children}</main>;
}
