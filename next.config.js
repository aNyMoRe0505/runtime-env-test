/** @type {import('next').NextConfig} */
const { configureRuntimeEnv } = require('next-runtime-env/build/configure');

configureRuntimeEnv();

const nextConfig = {
  reactStrictMode: false,
}

module.exports = nextConfig
