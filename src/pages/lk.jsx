import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import photo from '../image/ava2-bg.webp'
import x from 'bootstrap-icons/icons/twitter-x.svg'
import Cardlk from '../components/cardlk'
const Lk = () => {
    return (
        <div>
          <Header/>
          <section  className='sectio-col'>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-4">
      
              <div className="card card-bord">
                <div className="card-body text-center">
                  <div className="mt-3 mb-4">
                    <img src={photo} className="rounded-circle img-fluid photo_wid" alt='' />
                  </div>
                  <h4 className="mb-2">Julie L. Arsenault</h4>
                  <p className="text-muted mb-4">+7(999)-999-99-99 <span className="mx-2">|</span> <a
                      href="#!">example@mail.ru</a></p>
                  <div className="mb-4 pb-2">
                    <button type="button" className="btn btn-outline-primary btn-floating">
                      <img src={x} alt=''/>
                    </button>
                    <button type="button" className="btn btn-outline-primary btn-floating">
                      <img src={x} alt=''/>
                    </button>
                    <button type="button" className="btn btn-outline-primary btn-floating">
                      <img src={x} alt=''/>
                    </button>
                  </div>
                  <button type="button" className="btn btn-primary btn-marg" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                    Редактирование
                  </button>
                  <ul className="list-group list-group-flush" >
                    <li className="list-group-item" >Адрес: Г.Санкт-Петербург, Пр. Авиаконструкторов 28.</li>
                    <li className="list-group-item">Дата рождения: 11.11.11</li>
                  </ul>
                </div>
              </div>
      
            </div>
          </div>
        </div>
      </section>
          <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Редактирование профиля</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                </div>
                <div className="modal-body">
                    <form className="w-50 m-auto p-3">
                        <div className="mb-3">
                          <label for="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Номер телефона</label>
                            <input type="tel" className="form-control" id="exampleInputPassword1" required/>
                          </div>
                        <div className="mb-3">
                          <label for="exampleInputPassword1" className="form-label">Введите дату рождения</label>
                          <input type="date" className="form-control" id="exampleInputPassword1" required/>
                        </div>
                        <div className="mb-3">
                          <label for="exampleInputPassword1" className="form-label">Пароль</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" required/>
                        </div>
                      <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Введите повторно пароль</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" required/>
                      </div>
                      </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                  <button type="button" className="btn btn-primary">Сохранить изменения</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4 card-ots">
          <Cardlk/>
          </div>
          <Footer/>
        </div>
    );
};
export default Lk;