import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (
          (credentials?.username === "juanzhe2@gmail.com" ||
            "siauchai66@gmail.com") &&
          credentials?.password === "cshomestay2021"
        ) {
          if (credentials.username === "juanzhe2@gmail.com") {
            const user = {
              id: 1,
              email: "juanzhe2@gmail.com",
              name: "ezrachai",
            };
            return user;
          } else {
            const user = {
              id: 1,
              email: "juanzhe2@gmail.com",
              name: "ezrachai",
            };
            return user;
          }
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
});
