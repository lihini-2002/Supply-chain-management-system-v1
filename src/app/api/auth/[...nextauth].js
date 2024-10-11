// [...nextauth].js

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        const res = await fetch("/api/auth/login", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        });
        const user = await res.json();

        if (res.ok && user) {
          return user;
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/auth/login',  // Customize the login page route
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirect to the homepage on success or back to login page on failure
      return url.startsWith(baseUrl) ? url : baseUrl
    }
  },
  session: {
    jwt: true
  },
  jwt: {
    secret: process.env.JWT_SECRET
  }
});
