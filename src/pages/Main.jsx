import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Slide from '../components/slide';
import Card from '../components/card';

const Main = () => {
    return (
        <div>
          <Header/>
          <div className="search_animals"><div className="search_animals_text">Найденные животные</div></div>
          <div id="carouselExampleCaptions" className="carousel slide m-auto w-75">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" className="active" aria-current="true" data-bs-slide-to="0" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <Slide/>
            <Slide/>
            <Slide/>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Предыдущий</span>
        </button>   
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Следующий</span>
        </button>
      </div>
      <div className="search_animals"><div className="search_animals_text">Последние найденные животные</div></div>
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
      <div className="search_animals"><div className="search_animals_text">Подписка на новости</div></div>
      <form className="w-50 m-auto p-3">
        <div  className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">Мы никогда никому не передадим вашу электронную почту.</div>
        </div>
        <button type="submit" className="btn btn-primary">Отправить</button>
</form>
          <Footer/>
        </div>
    );
};
export default Main;