import "./NavBar.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useTranslation } from 'react-i18next';


export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const { t, i18n } = useTranslation(['translate']);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="nav">
      <div className="nLeft">
      <ul className="nList">
          <li className="nListItem">
            <Link className="link" to="/">
            {t("inicio")}
            </Link>
          </li>
          <li className="nListItem">
            <Link className="link" to="/crear">
            {t("crear")}
            </Link>
          </li>
          <li className="nListItem" onClick={handleLogout}>
            {user && "Cerrar sesion"}
          </li>
        </ul>
      </div>
      <div className="nCenter">
      <div className="btt">
                <button onClick={(e) => i18n.changeLanguage('en')}>Español</button>
                <button onClick={(e) => i18n.changeLanguage('es')}>Ingles</button>
              </div>
      </div>
      <div className="nRight">
        {user ? (
          <>
          </>
        ) : (
          <ul className="nList">
            <li className="nListItem">
              <Link className="link" to="/login">
              {t("iniciar sesion")}
              </Link>
            </li>
            <li className="nListItem">
              <Link className="link" to="/register">
              {t("registrarse")}
              </Link>
            </li>
          </ul>
        )}
        <i className="nSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}