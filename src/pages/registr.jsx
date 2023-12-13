import React from 'react';
import Header from '../components/header';
import Footer_dw from '../components/footer_dw';

const Registr = () => {
    return (
        <div>
          <Header/>
          <div className="btn_ex m-auto" ><div className="btn_ex_txt" >Регистрация</div></div>
          <form className="w-25 m-auto p-3 mt-3 form_reg" >
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
              <div id="emailHelp" className="form-text">Мы никогда никому не передадим вашу электронную почту.</div>
            </div>
            <div className="mb-3">
                <label for="telephone" className="form-label">Номер телефона</label>
                <input type="tel" className="form-control" id="telephone" required/>
              </div>
            <div className="mb-3">
              <label for="birthdayDate" className="form-label">Введите дату рождения</label>
              <input type="date" className="form-control" id="BirthdayDate" required/>
            </div>
            <div className="mb-3">
              <label for="Password1" className="form-label">Пароль</label>
              <input type="password" className="form-control" id="Password1" required/>
            </div>
          <div className="mb-3">
            <label for="Password2" className="form-label">Введите повторно пароль</label>
            <input type="password" className="form-control" id="Password2" required/>
          </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="Check1"/>
              <label className="form-check-label" for="Check1">Я не робот</label>
            </div>
            <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
          </form>
          <Footer_dw/>
        </div>
    );
};
export default Registr;