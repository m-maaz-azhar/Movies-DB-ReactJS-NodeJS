import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import Navbar from "../Components/Navbar";
import "./style.scss";

export default function Login() {
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState("");
  let navigate = useNavigate();

  let handleLogin = (e: any) => {
    e.preventDefault();
    setLoading(true);
    let uname = e.target.uname.value;
    let password = e.target.password.value;
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: uname,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.success) {
          localStorage.setItem("movies-db-session", "true");
          navigate("/");
        } else {
          setError(data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      {Loading ? (
        <Loader />
      ) : (
        <div className="loginContainer">
          <h1>LOGIN</h1>
          <form onSubmit={handleLogin}>
            <label>username</label>
            <br />
            <input type="text" name="uname" />
            <br />
            <label>Password</label>
            <br />
            <input type="password" name="password" />
            {Error ? <p>{Error}</p> : null}
            <input type="submit" value="Login" />
          </form>
        </div>
      )}
      <Footer />
    </>
  );
}
