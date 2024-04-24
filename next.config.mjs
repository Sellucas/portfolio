/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fonts.gstatic.com",
        port: "",
        pathname: "/s/e/notoemoji/latest/1f44b/512.gif",
      },
    ],
  },
};

export default nextConfig;
