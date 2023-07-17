/** @type {import('next').NextConfig} */
require('dotenv').config();

// const nextConfig = {
//     env: {
//         API_KEY: 'http://localhost:8080',
//       },  
//       css: ['./src/styles/globals.css'],
// }

// module.exports = nextConfig
const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
  },
  css: ['./src/styles/globals.css'],
};
console.log("prosss", process.env.API_KEY)
module.exports = nextConfig;