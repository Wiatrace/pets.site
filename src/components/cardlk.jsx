import React from "react";
import card_img from "../image/149364-obezyana-nazemnye_zhivotnye-prirodnyj_zapovednik-chelovek-zhivaya_priroda-1920x1080.jpg"
const Cardlk = ()  => {
return(
<div>
<div className="col card_ots">
    <div className="card">
      <img src={card_img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Заголовок карточки</h5>
        <p className="card-text">Это более длинная карта С вспомогательным текстом ниже в качестве естественного перехода к дополнительному контенту. Этот контент немного длиннее.</p>
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" type="submit" value="Редактировать">Редактировать</button>
      </div>
    </div>
  </div>
  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Редактирование карточки</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                </div>
                <div className="modal-body">
                    <form className="w-50 m-auto p-3">
                        <div className="mb-3">
                          <label for="exampleInputEmail1" className="form-label">Имя</label>
                          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Дата нахождения</label>
                            <input type="date" className="form-control" id="exampleInputPassword1" required/>
                          </div>
                        <div className="mb-3">
                          <label for="exampleInputPassword1" className="form-label">Место нахождения</label>
                          <input type="text" className="form-control" id="exampleInputPassword1" required/>
                        </div>
                        <div className="mb-3">
                          <label for="exampleInputPassword1" className="form-label">Клеймо</label>
                          <input type="text" className="form-control" id="exampleInputPassword1" required/>
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
</div>
);
};
export default Cardlk;