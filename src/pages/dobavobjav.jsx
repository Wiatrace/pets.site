import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const Dobavobjav = () => {
    return (
        <div>
          <Header/>
          <div className="btn_ex m-auto" ><div className="btn_ex_txt" >Добавить</div></div>
      <form className="m-auto w-25 p-3 mt-3 form_reg card_ots">
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Имя</label>
          <input type="text" className="form-control" id="exampleInputPassword1" required/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Телефон</label>
          <input type="tel" className="form-control" id="exampleInputPassword1" required/>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
          <div id="emailHelp" className="form-text">Мы никогда никому не передадим вашу электронную почту.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Пароль</label>
          <input type="password" className="form-control" id="exampleInputPassword1" required/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Повторите пароль</label>
          <input type="password" className="form-control" id="exampleInputPassword1" required/>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" for="inputGroupFile02">Фото 1</label>
          <input type="file" className="form-control" id="inputGroupFile02"required/>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" for="inputGroupFile02">Фото 2</label>
          <input type="file" className="form-control" id="inputGroupFile02"/>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" for="inputGroupFile02">Фото 3</label>
          <input type="file" className="form-control" id="inputGroupFile02"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Клеймо</label>
          <input type="text" className="form-control" id="exampleInputPassword1"/>
        </div> 
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Описание</label>
          <input type="text" className="form-control" id="exampleInputPassword1" required/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
          <label className="form-check-label" for="exampleCheck1">Согласие на обработку персональных данных.</label>
        </div>
        <button type="submit" className="btn btn-primary">Отправить</button>
      </form>
          <Footer/>
        </div>
    );
};
export default Dobavobjav;