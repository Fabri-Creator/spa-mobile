import Header from "../components/Header";

import "./vistas.css";

function Detail({ item }) {
  return (
    <div className="vista-container">
      <Header item={item}></Header>

      <div className="detail-wraper">
        {item && (
          <>
            <div className="img-detail-container">
              <img
                className="img-detail"
                src={`${item.imgUrl}`}
                alt={`${item.name}`}
              />
            </div>
            <div className="detail-desc-container">
              <section className="detail-section">
                <p className="detail-data">Marca</p>
                <p className="detail-data-left">{item.brand}</p>
              </section>
              <section className="detail-section">
                <p className="detail-data">Modelo</p>
                <p className="detail-data-left">{item.model}</p>
              </section>
              <section className="detail-section">
                <p className="detail-data">Precio</p>
                <p className="detail-data-left">{item.price}</p>
              </section>
              <section className="detail-section">
                <p className="detail-data">CPU</p>
                <p className="detail-data-left">{item.cpu}</p>
              </section>
              <section className="detail-section">
                <p className="detail-data">RAM</p>
                <p className="detail-data-left">{item.ram}</p>
              </section>
              <section className="detail-section">
                <p className="detail-data">Sistema Operativo</p>
                <p className="detail-data-left">{item.os}</p>
              </section>
              <section className="detail-section">
                <p className="detail-data">Resolucion de pantalla</p>
                <p className="detail-data-left">{item.displayResolution}</p>
              </section>
              <section className="detail-section">
                <p className="detail-data">Bateria</p>
                <p className="detail-data-left">{item.battery}</p>
              </section>
              <section className="detail-section">
                <p className="detail-data">Camaras</p>
                <p className="detail-data-left">{`${item.primaryCamera} - ${item.secondaryCmera}`}</p>
              </section>
              <section className="detail-section">
                <p className="detail-data">Dimensiones</p>
                <p className="detail-data-left">{item.dimentions}</p>
              </section>
              <section className="detail-section">
                <p className="detail-data">Peso</p>
                <p className="detail-data-left">{item.weight}</p>
              </section>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Detail;
