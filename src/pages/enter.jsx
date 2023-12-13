import React from 'react';
import Header from '../components/header';
import Footer_dw from '../components/footer_dw';
const Enter = () => {
    return (
        <div>
          <Header/>
          <div className="btn_ex m-auto" ><div className="btn_ex_txt" >Вход</div></div>
          <form className="w-25 m-auto p-3 mt-3 form_ent">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
              <div id="emailHelp" className="form-text">Мы никогда никому не передадим вашу электронную почту.</div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Пароль</label>
              <input type="password" className="form-control" id="exampleInputPassword1" required/>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" for="exampleCheck1">Я не робот</label>
            </div>
            <button  className="btn btn-primary">Войти</button>
            <p className="m-auto">Или</p>
            <button type="submit" className="btn btn-primary d-flex justify-content-center">Зарегистрироваться</button>
          </form>
          <Footer_dw/>
        </div>
    );
};
export default Enter;