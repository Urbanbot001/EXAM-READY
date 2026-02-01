import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta name="title" content="ExamReady Nigeria - JAMB, WAEC & NECO Past Questions" />
        <meta name="description" content="Practice with thousands of past questions from JAMB, WAEC, and NECO. Get exam dates, study tips, and ace your exams. Free past questions for Nigerian students." />
        <meta name="keywords" content="JAMB past questions, WAEC past questions, NECO past questions, JAMB 2026, WAEC 2026, exam preparation Nigeria, UTME past questions, SSCE past questions, Nigerian exams" />
        <meta name="author" content="ExamReady Nigeria" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://examready.ng" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://examready.ng" />
        <meta property="og:title" content="ExamReady Nigeria - JAMB, WAEC & NECO Past Questions" />
        <meta property="og:description" content="Practice with thousands of past questions. Ace JAMB, WAEC & NECO exams!" />
        <meta property="og:image" content="https://examready.ng/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://examready.ng" />
        <meta property="twitter:title" content="ExamReady Nigeria - Exam Preparation" />
        <meta property="twitter:description" content="Practice with thousands of past questions from JAMB, WAEC & NECO" />
        <meta property="twitter:image" content="https://examready.ng/og-image.jpg" />

        {/* Google Analytics - REPLACE with your tracking ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Schema.org structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "ExamReady Nigeria",
              "url": "https://examready.ng",
              "logo": "https://examready.ng/logo.png",
              "description": "Free past questions and exam preparation for JAMB, WAEC, and NECO",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Nigeria"
              },
              "sameAs": [
                "https://twitter.com/ExamReadyNG",
                "https://facebook.com/ExamReadyNG"
              ]
            })
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}