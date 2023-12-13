import React from "react";
import card_img from "../image/149364-obezyana-nazemnye_zhivotnye-prirodnyj_zapovednik-chelovek-zhivaya_priroda-1920x1080.jpg"
import { Link } from "react-router-dom";
const Card = ()  => {
return(
<div>
<div className="col">
    <div className="card">
      <img src={card_img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Заголовок карточки</h5>
        <p className="card-text">Это более длинная карта С вспомогательным текстом ниже в качестве естественного перехода к дополнительному контенту. Этот контент немного длиннее.</p>
        <button className="btn btn-primary btn-col" type="submit" value="Перейти"><Link to ={'/card'}>Перейти</Link></button>
      </div>
    </div>
  </div>
</div>
);
};
export default Card;