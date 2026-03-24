import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/bundle';
import 'react-toastify/dist/ReactToastify.css';
import 'react-modal-video/css/modal-video.css';
import 'react-photo-view/dist/react-photo-view.css';
import 'react-circular-progressbar/dist/styles.css';

import '@/assets/css/animate.css';
import '@/assets/css/font-awesome.css';
import '@/assets/css/flaticon-set.css';
import '@/assets/css/elegant-icons.css';

import '@/assets/css/gallery.css';
import '@/assets/css/helper.css';
import '@/assets/css/unit-test.css';
import '@/assets/css/validnavs.css';
import '@/assets/css/style.css'

import type { Metadata } from "next";
import Dependency from '@/components/utilities/Dependency';
import ScrollUpBtn from '@/components/utilities/ScrollUpBtn';

export const metadata: Metadata = {
  title: "Pie Labs",
  description:
    "Professional engineering and software development services. Build innovative solutions that move businesses forward.",
  keywords: "software development, engineering, technology, consulting, services, Embedded Solutions, Technology Adoption & Engineering Consulting",
  generator: "Pie labs",
  // metadataBase: new URL("https://www.habitatscraft.com"),
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [
      {
        url: "/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Dependency />
        {children}
        <ScrollUpBtn />
      </body>
    </html>
  );
}
