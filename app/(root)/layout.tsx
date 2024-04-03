import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header'
import { Main } from 'next/document';
import React from 'react'

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className='flex flex-col h-screen'>
        <Header></Header>
        <main>{children}</main>
        <Footer>
            
        </Footer>
      </div>
    );
  }
  