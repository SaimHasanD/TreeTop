/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Placeholder images are served from placehold.co until real photos
    // are dropped into /public/images.
    remotePatterns: [{ protocol: "https", hostname: "placehold.co" }],
  },
};

export default nextConfig;
