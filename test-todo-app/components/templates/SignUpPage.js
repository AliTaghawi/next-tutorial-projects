import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function SignUpPage() {
  const [formData, setFromData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const changeHandler = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  const registerHandler = async () => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.status === "successful") router.replace("/signin");
  };
  return (
    <div className="signin-form">
      <h2>SignUp Form</h2>
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
      <button onClick={registerHandler}>Register</button>
      <div>
        <p>Have an account? </p>
        <Link href="/signin">Sign in</Link>
      </div>
    </div>
  );
}

export default SignUpPage;
