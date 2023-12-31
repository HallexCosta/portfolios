/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/HallanCosta/be-a-savior/raw/main/docs/images/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/HallexCosta/habits-tracker/blob/main/docs/images/web/**",
      },
    ],
  },
};
