import { SiteFooter, SiteHeader } from "@/components/shared/site-chrome";
import { NpfTrackingScript } from "@/components/shared/npf-tracking-script";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NpfTrackingScript />
      <SiteHeader />
      <main className="site-main bg-white">{children}</main>
      <SiteFooter />
    </>
  );
}
