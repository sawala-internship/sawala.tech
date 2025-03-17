/** @type {import('next').NextConfig} */

const REQUIRED_CONFIG = {
  reactStrictMode: true,
  env: {
    SITE_NAME: 'Sawala Boilerplate',
    BASE_URL: process.env.BASE_URL,
    API_URL: process.env.API_URL
  },
  images: {
    domains: ['sawalatech.s3.ap-southeast-1.amazonaws.com']
  }
}

module.exports = REQUIRED_CONFIG
