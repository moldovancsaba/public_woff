import './globals.css';

export const metadata = {
  title: 'AS Roma Font Test',
  description: 'AS Roma font demo',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
