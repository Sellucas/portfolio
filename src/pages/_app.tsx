import Layout from "@/components/Layout";
import "@/styles/global.css";
import type { AppProps } from "next/app";

import "../lib/i18n";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
