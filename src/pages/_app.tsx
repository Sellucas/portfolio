import Layout from "@/components/Layout";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import "../lib/i18n";
import { useEffect, useState } from "react";
import Loading from "@/components/utils/Loading/Loading";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading && <Loading />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
