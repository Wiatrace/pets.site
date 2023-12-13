import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Card from '../components/card';

const Vseobjav = () => {
    return (
        <div>
          <Header/>
          <nav className="navbar navbar_st" >
        <div className="container-fluid">
          <form className="d-flex m-auto w-50" role="search">
            <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск"/>
            <button className="btn btn-outline-success" type="submit">Поиск</button>
          </form>
        </div>
      </nav>
          <div className="">
        <button type="button" className="btn btn-primary btn_vseob" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Фильтры
        </button>
      </div>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Редактирование профиля</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
            </div>
            <div className="modal-body">
                <form className="w-50 m-auto p-3">
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Имя</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Район</label>
                        <input type="tel" className="form-control" id="exampleInputPassword1" required/>
                      </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">Дата</label>
                      <input type="date" className="form-control" id="exampleInputPassword1" required/>
                    </div>
                  </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
              <button type="button" className="btn btn-primary">Найти</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 card-ots">
      <Card/>
      <Card/>
      <Card/>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 card-ots">
      <Card/>
      <Card/>
      <Card/>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 card-ots">
      <Card/>
      <Card/>
      <Card/>
      </div>
      <div className="justify-content-center row row-cols-1 row-cols-md-3 g-4 card-ots">
      <Card/>
      </div>
      <nav className="nav_ots" >
        <ul className="pagination d-flex justify-content-center">
          <li className="page-item"><a className="page-link" href="#">Предыдущая</a></li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">Следующая</a></li>
        </ul>
      </nav>
          <Footer/>
        </div>
    );
};
export default Vseobjav;