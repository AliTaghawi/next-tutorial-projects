import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const AuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (err) {
          throw new Error("failed to connect DB!");
        }

        if (!email || !password) throw new Error("Invalid data!");

        const user = await User.findOne({ email }).select("+password");

        if (!user) throw new Error("User does not exist!");

        const isVerify = await verifyPassword(password, user.password);

        if (!isVerify) throw new Error("Username or Password is increct!");

        return { email, name: user.name || "", lastName: user.lastName || "" };
      },
    }),
  ],
};

export default NextAuth(AuthOptions);
