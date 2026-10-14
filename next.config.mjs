/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "abhedge.vercel.app" }],
        destination: "https://grouphedge.org/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.grouphedge.org" }],
        destination: "https://grouphedge.org/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
