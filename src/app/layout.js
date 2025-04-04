'use client';

import Container from '@/components/common/container';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import './layout.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <title>UnfoldProblems</title>
      <body>
        <Header />
        <div className='page'>
          
          <Container>{children}</Container>
        </div>
        <Footer />
      </body>
    </html>
  );
}
