import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { signIn } from "next-auth/react";

function SigninPage() {
  const [formData, setFromData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const changeHandler = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginHandler = async () => {
    const res = await signIn("credentials", { ...formData, redirect: false });
    if (!res.error) router.replace("/");
  };

  return (
    <div className="signin-form">
      <h2>Login Form</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={changeHandler}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={changeHandler}
      />
      <button onClick={loginHandler}>login</button>
      <div>
        <p>Create account:</p>
        <Link href="/signup">Sign Up</Link>
      </div>
    </div>
  );
}

export default SigninPage;
