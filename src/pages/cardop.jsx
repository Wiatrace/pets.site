import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import photo_ob from '../image/149364-obezyana-nazemnye_zhivotnye-prirodnyj_zapovednik-chelovek-zhivaya_priroda-1920x1080.jpg'

const Cardop = () => {
    return (
        <div>
          <Header/>
          <div className="photo_card photo_card_style">
          <img className="image_card_s" src={photo_ob} alt=''/>
          </div>
        <div className="card m-auto card_wid">
           <ul className="list-group list-group-flush">
           <li className="list-group-item">Имя: Бобик</li>
           <li className="list-group-item">Дата нахождения: 25.11.2023</li>
           <li className="list-group-item">Место нахождения: Пр.Большевиков д.54.</li>
           <li className="list-group-item">Клеймо: Бобик</li>
           </ul>
        </div>
          <Footer/>
        </div>
    );
};
export default Cardop;