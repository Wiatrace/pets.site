import React from "react";
import slide_img from "../image/149364-obezyana-nazemnye_zhivotnye-prirodnyj_zapovednik-chelovek-zhivaya_priroda-1920x1080.jpg"
const Slide = ()  => {
return(
<div>
<div className="carousel-item active">
<img src={slide_img}  height="600px" className="d-block w-100 center" alt=""/>
<div className="carousel-caption d-none d-md-block">
  <h5>Найдена сбежавшая из зоопарка лиса</h5>
  <p>Лиса уже доставлена обратно в зоопарк и находится в удовлетворительном состоянии. </p>
</div>
</div>
</div>
);
};
export default Slide;