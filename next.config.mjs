import path from "node:path";

const nextConfig = {
  /* config options here */
    compiler: {
        styledComponents: true,
    },
    sassOptions: {
        includePaths: [path.resolve('styles')],
    },
    // output: 'standalone',
};

export default nextConfig;
