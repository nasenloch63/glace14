"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { useLanguage } from "@/contexts/language-context"

export default function LegalPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-background">
      <Navigation variant="dark" />

      {/* Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body inline-flex items-center gap-2 mb-8"
          >
            <span>&larr;</span> {t("legal.backHome")}
          </Link>
          <nav className="flex gap-6">
            <a
              href="#imprint"
              className="text-body-sm font-emphasis text-foreground hover:text-muted-foreground transition-colors border-b border-foreground pb-1"
            >
              {t("legal.imprintTitle")}
            </a>
            <a
              href="#privacy"
              className="text-body-sm font-emphasis text-foreground hover:text-muted-foreground transition-colors border-b border-foreground pb-1"
            >
              {t("legal.privacyTitle")}
            </a>
          </nav>
        </div>
      </section>

      {/* Imprint Section */}
      <section id="imprint" className="px-6 md:px-12 py-16 md:py-24 border-b border-border scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="heading-lg font-heading mb-10">{t("legal.imprintTitle")}</h1>

          <div className="space-y-8 text-body-sm font-body leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-body-base font-emphasis text-foreground mb-3">Company Information</h2>
              <p>
                Studio Glace14<br />
                15 Avenue du Général Leclerc<br />
                75014 Paris, FRANCE
              </p>
            </div>

            <div>
              <h2 className="text-body-base font-emphasis text-foreground mb-3">Contact</h2>
              <p>
                Phone: <a href="tel:+33648133831" className="text-foreground hover:text-muted-foreground transition-colors">+33 6 48 13 38 31</a><br />
                Email: <a href="mailto:simon@glace14.com" className="text-foreground hover:text-muted-foreground transition-colors">simon@glace14.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-body-base font-emphasis text-foreground mb-3">Responsible for Content</h2>
              <p>
                Simon Glace14 Studio<br />
                15 Avenue du Général Leclerc<br />
                75014 Paris, FRANCE
              </p>
            </div>

            <div>
              <h2 className="text-body-base font-emphasis text-foreground mb-3">Hosting</h2>
              <p>
                This website is hosted by Vercel Inc.<br />
                440 N Barranca Avenue #4133<br />
                Covina, CA 91723, USA<br />
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-muted-foreground transition-colors">vercel.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-body-base font-emphasis text-foreground mb-3">Web Development</h2>
              <p>
                <a href="https://www.naser-solutions.de" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-muted-foreground transition-colors">Web Development by Naser Solutions</a>
              </p>
            </div>

            <div>
              <h2 className="text-body-base font-emphasis text-foreground mb-3">Disclaimer</h2>
              <p className="mb-3">
                <strong className="text-foreground">Liability for Content:</strong> The content of our pages has been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages under general law. However, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
              </p>
              <p>
                <strong className="text-foreground">Liability for Links:</strong> Our website contains links to external websites of third parties over whose content we have no control. Therefore, we cannot accept any liability for this third-party content. The respective provider or operator of the pages is always responsible for the content of the linked pages.
              </p>
            </div>

            <div>
              <h2 className="text-body-base font-emphasis text-foreground mb-3">Copyright</h2>
              <p>
                The content and works created by the site operators on these pages are subject to copyright law. Duplication, processing, distribution, or any form of commercialisation of such material beyond the scope of copyright law requires the prior written consent of Studio Glace14. Downloads and copies of this site are only permitted for private, non-commercial use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Declaration Section */}
      <section id="privacy" className="px-6 md:px-12 py-16 md:py-24 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="heading-lg font-heading mb-10">{t("legal.privacyTitle")}</h1>

          <div className="space-y-8 text-body-sm font-body leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-body-base font-emphasis text-foreground mb-3">1. Data Protection Overview</h2>
              <p>
                The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data by which you can be personally identified. For detailed information on the subject of data protection, please refer to our privacy declaration listed below.
              </p>
            </div>

            <div>
              <h2 className="text-body-base font-emphasis text-foreground mb-3">2. Data Collection on This Website</h2>
              <p className="mb-3">
                <strong className="text-foreground">Who is responsible for data collection on this website?</strong><br />
                Data processing on this website is carried out by the website operator: Studio Glace14, 15 Avenue du Général Leclerc, 75014 Paris, FRANCE. Phone: +33 6 48 13 38 31, Email: simon@glace14.com.
              </p>
              <p>
                <strong className="text-foreground">How do we collect your data?</strong><br />
                Your data is collected when you provide it to us, for example by filling out a contact form or making a booking. Other data is collected automatically or with your consent by our IT systems when you visit the website. This is primarily technical data such as the browser and operating system you are using or the time of the page request.
              </p>
            </div>

            <div>
              <h2 className="text-body-base font-emphasis text-foreground mb-3">3. Purpose of Data Processing</h2>
              <p>
                Some of the data is collected to ensure the error-free provision of the website. Other data may be used to analyse your user behaviour. If contracts can be concluded or initiated via the website, the transmitted data will also be processed for contract offers, orders, or other business enquiries.
              </p>
            </div>

            <div>
              <h2 className="text-body-base font-emphasis text-foreground mb-3">4. Your Rights</h2>
              <p>
                You have the right to receive information about the origin, recipient, and purpose of your stored personal data free of charge at any time. You also have the right to request the correction or deletion of this data. If you have given your consent to data processing, you can revoke this consent at any time for the future. You also have the right to request the restriction of the processing of your personal data under certain circumstances. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.
              </p>
            </div>

            <div>
              <h2 className="text-body-base font-emphasis text-foreground mb-3">5. Hosting</h2>
              <p>
                This website is hosted by Vercel Inc. When you visit our website, your personal data is processed on Vercel's servers. This may involve the transmission of your IP address, browser type, operating system, referrer URL, time of the server request, and other technically necessary data to Vercel's servers, which may be located in the USA. Vercel processes this data on the basis of our legitimate interests in an efficient and secure provision of our website.
              </p>
            </div>

            <div>
              <h2 className="text-body-base font-emphasis text-foreground mb-3">6. Booking and Calendar Services</h2>
              <p>
                When you make a booking through our website, we use the Calendly scheduling service. By using this service, your data such as name, email address, and selected time slot will be transmitted to Calendly. Calendly's privacy policy applies to the processing of this data. We use this data exclusively for the purpose of managing your studio booking.
              </p>
            </div>

            <div>
              <h2 className="text-body-base font-emphasis text-foreground mb-3">7. Cookies and Analytics</h2>
              <p>
                This website uses only technically necessary cookies to ensure the proper functioning of the website, such as storing your language preference. No tracking cookies or third-party analytics services are used. Your language preference is stored locally in your browser and is not transmitted to our servers.
              </p>
            </div>

            <div>
              <h2 className="text-body-base font-emphasis text-foreground mb-3">8. Contact</h2>
              <p>
                If you contact us by phone, email, or via a contact form, your details will be stored for the purpose of processing your enquiry and in case of follow-up questions. We will not share this data without your consent. The processing of this data is based on your consent or our legitimate interest in the effective processing of enquiries directed to us.
              </p>
            </div>

            <div>
              <h2 className="text-body-base font-emphasis text-foreground mb-3">9. Data Retention</h2>
              <p>
                We retain your personal data only for as long as is necessary for the purposes for which it was collected, or as required by law. Booking data is typically retained for the duration of the business relationship and the applicable statutory retention periods. You may request deletion of your data at any time by contacting us at simon@glace14.com.
              </p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-body-xs text-muted-foreground">
                Last updated: February 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-body-xs text-muted-foreground font-body">
                {t("footer.rights")}
              </p>
              <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
                <Link href="/" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                  {t("footer.home")}
                </Link>
                <Link href="/booking" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                  {t("nav.book")}
                </Link>
                <Link href="/production" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                  {t("nav.production")}
                </Link>
                <a href="https://instagram.com/glace14studio" target="_blank" rel="noopener noreferrer" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                  Instagram
                </a>
              </nav>
            </div>
            <div className="flex justify-center gap-4 md:gap-6 pt-4 border-t border-border/50">
              <a href="#imprint" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                {t("footer.imprint")}
              </a>
              <a href="#privacy" className="text-body-xs text-muted-foreground hover:text-foreground transition-colors font-body">
                {t("footer.privacy")}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
