import React from "react";
import logo from '../image/koala-svgrepo-com.svg'
import { Link } from "react-router-dom";
const Header = ()  => {
return(
<div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand" style={{"marginLeft": "10%"}} href="zxc.html"><img src={logo} style={{'width': '50px','height': '70px;'}} alt=""/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Переключатель навигации">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav" style={{'marginLeft': '20.5%'}}>
              <li className="nav-item">
                <Link to={'/'} className="nav-link active" aria-current="page" href="zxc.html">Главная</Link>
              </li>
              <li className="nav-item">
                <Link to={'/allobjav'} className="nav-link" href="zxc2.html">Поиск по объявлениям</Link>
              </li>
              <li className="nav-item">
                <Link to={'/addobjav'} className="nav-link" href="zxc5.html">Добавить объявление</Link>
              </li>
              <li className="nav-item">
                <Link to={'/lk'} className="nav-link" href="zxc6.html">Личный кабинет</Link>
              </li>
              <li className="nav-item">
                <Link to={'/login'} className="nav-link" href="zxc6.html">Вход</Link>
              </li>
              <li className="nav-item">
                <Link to={'/registration'} className="nav-link" href="zxc6.html">Регистрация</Link>
              </li>
            </ul>
          </div>
          <nav className="navbar" >
            <div className="container-fluid">
              <form className="d-flex m-auto w-100" role="search">
                <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск"/>
                <button className="btn btn-outline-success" type="submit">Поиск</button>
              </form>
            </div>
          </nav>
        </div>
      </nav>
</div>
);
};
export default Header;