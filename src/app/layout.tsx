"use client";
import type { Metadata } from "next";
import "./globals.css";
 import { Geist } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';


const geist = Geist({
  subsets: ['latin'],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"w-100 " + geist.className}>
      <head>
      <meta charSet="UTF-8" />
        <title>The Foxes Cup!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />  
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;700&display=swap" rel="stylesheet" />
    </head>
      <body className="w-100"> 
        <div className="bg-black text-white w-100">
        <img src="/cup.jpg" alt="The Foxes Cup" width={317} height={360} className="mx-auto d-block" />
        </div>
        <div className="hero-section text-center w-100">
            <div className="container">
                <h1 className="display-3 fw-bold mb-3">🏆 FOXES CUP CHAMPIONSHIP</h1>
                <p className="lead mb-4">8 Riders. 12 Races. One Champion.</p>
                <a href="/" className="btn btn-warning btn-lg mb-1 text-sm me-2">Standings</a>
                <a href="/races" className="btn btn-info btn-lg mb-1 text-sm me-2">Races</a> 
                <a href="/drivers" className="btn btn-info btn-lg mb-1 text-sm me-2">Drivers</a> 
            </div>
        </div>
        {children}
      </body>
    </html>
  );
}
