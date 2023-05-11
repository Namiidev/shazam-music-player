/** @type {import('next').NextConfig} */
require('dotenv').config()
const nextConfig = {
    env: {
        RAPID_API_KEY: process.env.RAPID_API_KEY
    }
}

module.exports = nextConfig
