/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
    env: {
        API_KEY: 'http://localhost:8080',
      },  
}


module.exports = nextConfig
