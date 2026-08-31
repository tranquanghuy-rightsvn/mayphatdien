import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactForm } from "@/components/ContactForm";
import { siteInfo } from "@/lib/data";

export const metadata = { title: "Liên hệ – Toyota 01" };

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-[1200px] px-4 py-8">
          <Breadcrumb
            items={[{ label: "Trang chủ", href: "/" }, { label: "Liên hệ" }]}
          />
          <h1 className="mb-6 text-2xl font-bold uppercase text-foreground">
            Liên hệ
          </h1>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-3 text-base font-bold text-[#446084]">
                {siteInfo.companyName}
              </h2>
              <div className="space-y-1.5 text-sm text-foreground">
                <p>Trụ sở: {siteInfo.address}</p>
                <p>Email: {siteInfo.email}</p>
                <p>
                  Hotline:{" "}
                  <span className="font-bold text-primary">
                    {siteInfo.hotline}
                  </span>
                </p>
                <p>Website: {siteInfo.website}</p>
              </div>
              <div className="mt-6 overflow-hidden rounded-md border border-border">
                <iframe
                  src={siteInfo.mapEmbedUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Bản đồ"
                />
              </div>
            </div>
            <div>
              <h2 className="mb-3 text-base font-bold text-[#446084]">
                Gửi thông tin liên hệ
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
