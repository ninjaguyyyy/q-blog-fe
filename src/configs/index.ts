export const serverConfig = {
  auth: {
    url: process.env.NEXTAUTH_URL,
    secret: process.env.NEXTAUTH_SECRET,
  },
  api_server_url: process.env.NEXT_PUBLIC_API_SERVER_URL,
};
