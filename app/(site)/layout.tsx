import { SiteFooter, SiteHeader } from "@/components/shared/site-chrome";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      <main className="site-main bg-white">{children}</main>
      <SiteFooter />
    </>
  );
}
