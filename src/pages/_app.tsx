import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Teko } from "next/font/google";

const teko = Teko({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ backgroundColor: "#5700B6" }}>
      <Layout className={teko.className}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
