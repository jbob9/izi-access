import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter as FontSans } from "next/font/google";
import { SessionProvider } from "next-auth/react"
import { Toaster } from "@/components/ui/toaster"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${fontSans.style.fontFamily};
        }
      `}</style>
       <SessionProvider session={pageProps.session}>
        <div className={`${fontSans.variable} font-sans`}>
          
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Toaster/>
        </div>
       </SessionProvider>
      
    </>
  );
}
