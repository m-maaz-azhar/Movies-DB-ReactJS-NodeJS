import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import Navbar from "../Components/Navbar";
import "./style.scss";

export default function SignUp() {
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState("");

  let navigate = useNavigate();

  let handleSignUp = (e: any) => {
    e.preventDefault();
    setLoading(true);
    let uname = e.target.uname.value;
    let password = e.target.password.value;
    let email = e.target.email.value;
    let firstName = e.target.firstName.value;
    let lastName = e.target.lastName.value;

    fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: uname,
        password: password,
        profile: "",
        email: email,
        firstName: firstName,
        lastName: lastName,
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
          <h1>SIGN UP</h1>
          <form onSubmit={handleSignUp}>
            <label>username</label>
            <br />
            <input type="text" name="uname" />
            <br />
            <label>First Name</label>
            <br />
            <input type="text" name="firstName" />
            <br />
            <label>Last Name</label>
            <br />
            <input type="text" name="lastName" />
            <br />
            <label>Email</label>
            <br />
            <input type="email" name="email" />
            <br />
            <label>Password</label>
            <br />
            <input type="password" name="password" />
            {Error ? <p>{Error}</p> : null}
            <input type="submit" value="Sign Up" />
          </form>
        </div>
      )}
      <Footer />
    </>
  );
}
