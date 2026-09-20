import './globals.css';

export const metadata = {
  title: 'Xiami — Product Designer Portfolio',
  description: 'Single-page product designer portfolio built with Next.js and GSAP.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
