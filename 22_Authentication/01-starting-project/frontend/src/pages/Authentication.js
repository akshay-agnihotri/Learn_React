import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

export async function authAction({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unstopped mode" }, { status: 422 });
  }

  const data = await request.formData();
  const authdata = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(authdata),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response) {
    throw json({ message: "Could not authenticate user." }, { status: 500 });
  }

  const resData = await response.json();
  const token = resData.token;
  

  localStorage.setItem("token", token);

  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  
  localStorage.setItem("expiration", expiration.toISOString());
  
  return redirect("/");
}

function Authentication() {
  return <AuthForm />;
}

export default Authentication;
