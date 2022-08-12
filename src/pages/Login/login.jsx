import "./login.css"
import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useTranslation } from 'react-i18next';

export default function Login() {
  const { t } = useTranslation(['translate']);
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "Start" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "success", payload: res.data });
    } catch (err) {
      dispatch({ type: "failure" });
    }
  };

  return (
    <div className="login">
      <span className="logTitle">{t("Iniciar sesion")}</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>{t("user")}</label>
        <input
          type="text"
          placeholder={t("coloca usuario")}
          ref={userRef}
        />
        <label>{t("pass")}</label>
        <input
          type="password"
          placeholder={t("coloca contraseña")}
          ref={passwordRef}
        />
        <button className="btnl" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="btnl">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}