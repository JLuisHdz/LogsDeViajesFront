import React, { useState } from "react";

const NavBar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false)



  return (
    <>
      <div className="nav">
        <div className="leng">
              <a onClick={(e) => window.location.href = '/'}>Logs</a>
              <a onClick={(e) => window.location.href = '/listado'} >Listado</a>
              <div className="bt">
              </div>
          <div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;