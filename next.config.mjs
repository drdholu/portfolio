    /** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          "api.microlink.io", // Microlink Image Preview
        ],
    },
    webpack: (config) => {
        config.module.rules.push({
          test: /\.md$/,
          use: 'raw-loader',
        });
        return config;
      },    
};

export default nextConfig;
