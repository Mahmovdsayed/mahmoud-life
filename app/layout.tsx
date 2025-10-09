import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/provider/Providers";
import Footer from "@/components/section/Footer";
import Theme from "@/components/ui/Theme";
import CardMotion from "@/components/motion/CardMotion";
import { Analytics } from "@vercel/analytics/next"


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const metadataBase = new URL('https://mahmoud.life');

export const metadata: Metadata = {
  title: "Mahmoud Sayed",
  description: "Hello there! I’m Mahmoud, a full-stack developer from Egypt who’s been building modern web and mobile apps for a year now. I’m particularly good at React.js, Next.js, Node.js, and React Native using Expo. I’m always on the lookout for new challenges and opportunities to grow as a developer. I love working on projects that make a real impact and push the boundaries of what’s possible. I’m all about creating responsive user interfaces and scalable backend solutions that deliver high-quality digital experiences. I’m also a big believer in continuous learning and I thrive in collaborative environments that value creativity and problem-solving.",
  keywords: "Mahmoud Sayed, Mahmoud, Sayed, frontend developer, backend developer, fullstack developer, react, nextjs, nodejs, expressjs, react native, expo, mongodb, mongoose, postgresql, prisma, typescript, javascript, tailwindcss, material ui, chakra ui, shadcn ui, docker, git, github, gitlab, vercel, netlify, heroku, aws, azure, google cloud, firebase, sanity, graphql, apollo, redux, zustand, recoil, jotai, swr, react query, trpc, socket.io, webRTC, stripe, paypal, jwt, oauth, passport, bcrypt, nodemailer, twilio, cloudinary, sentry, cypress, jest, react testing library, playwright, storybook, webpack, vite, rollup, babel, eslint, prettier, husky, lint-staged, conventional commits, semantic release, github actions, circleci, travisci, jenkins, sonarqube, sonarlint, postman, insomnia, figma, photoshop, illustrator, xd, sketch, miro, trello, notion, slack, discord, zoom, google meet, microsoft teams, asana, jira, confluence, github projects, linear, clickup, monday.com, airtable, zapier, make, ifttt, n8n, activepieces, pipedream, appsmith, retool, budibase, tooljet, internal.io, superblocks, lowdefy, refine, react-admin, strapi, payloadcms, keystonejs, medusajs, saleor, shopify, woocommerce, magento, bigcommerce, prestashop, opencart, cs-cart, drupal, wordpress, joomla, laravel, symfony, codeigniter, zend framework, yii, ruby on rails, django, flask, spring, .net, go, rust, swift, kotlin, java, c#, c++, python, php, ruby, perl, bash, powershell, sql, nosql, graphql, rest, soap, grpc, websocket, http, tcp, udp, dns, ssh, ftp, sftp, scp, rsync, vpn, firewall, proxy, load balancer, api gateway, message queue, cache, database, object storage, block storage, file storage, CDN, serverless, microservices, monolithic, saas, paas, iaas, faas, baas, devops, sre, gitops, mlops, aiobs, finops",
  creator: "Mahmoud Sayed",
  publisher: "Mahmoud Sayed",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: metadataBase.toString(),
  },
  applicationName: "Mahmoud Sayed",
  authors: {
    name: "Mahmoud Sayed",
    url: metadataBase.toString(),
  },
  openGraph: {
    title: "Mahmoud Sayed",
    description: "Hello there! I’m Mahmoud, a full-stack developer from Egypt who’s been building modern web and mobile apps for a year now. I’m particularly good at React.js, Next.js, Node.js, and React Native using Expo. I’m always on the lookout for new challenges and opportunities to grow as a developer. I love working on projects that make a real impact and push the boundaries of what’s possible. I’m all about creating responsive user interfaces and scalable backend solutions that deliver high-quality digital experiences. I’m also a big believer in continuous learning and I thrive in collaborative environments that value creativity and problem-solving.",
    url: metadataBase.toString(),
    type: "website",
    images: [
      {
        url: 'https://res.cloudinary.com/daaehlqpd/image/upload/v1760034599/MAHMOUDSAYED_qfescd.png',
        alt: "Mahmoud Sayed",
        width: 1200,
        height: 630,
      }
    ]

  },
  twitter: {
    card: "summary_large_image",
    site: "@mahmoud.life",
    title: "Mahmoud Sayed",
    description: "Hello there! I’m Mahmoud, a full-stack developer from Egypt who’s been building modern web and mobile apps for a year now. I’m particularly good at React.js, Next.js, Node.js, and React Native using Expo. I’m always on the lookout for new challenges and opportunities to grow as a developer. I love working on projects that make a real impact and push the boundaries of what’s possible. I’m all about creating responsive user interfaces and scalable backend solutions that deliver high-quality digital experiences. I’m also a big believer in continuous learning and I thrive in collaborative environments that value creativity and problem-solving.",
    images: ["https://res.cloudinary.com/daaehlqpd/image/upload/v1760034599/MAHMOUDSAYED_qfescd.png"],

  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className="light scrollbar-thin scrollbar-light dark:scrollbar-dark">
      <body
        className={`${inter.variable} antialiased overflow-x-hidden bg-[#f9f9f9] dark:bg-black`}
      >
        <Providers>
          {children}
          <Theme />
          <CardMotion delay={0.8}>
            <Footer />
          </CardMotion>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
