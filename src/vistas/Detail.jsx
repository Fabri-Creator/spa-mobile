import { useReducer, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import getMobile from "../services/getMobile";
import fetchSingleProduct from "../services/fetchSingleProduct";
import defaultUrl from "../services/variables";

import "./vistas.css";



const reducer = (state, action) => {
    switch (action.type) {
      case 'fetch':
        return { ...state, id: action.payload, loading: true };
      
      case 'update':
        return { ...state, ...action.payload };

      case 'ready':
        return { ...state, loading: false};

      default:
        throw new Error(`no action supported for ${action.type}`)
    }
}

function Detail() {
  const { id } = useParams();
  const [state, dispatch] = useReducer(reducer, getMobile());

  useEffect(() => {
    if (state.id != id) {
      dispatch({ type: 'fetch', payload: id });

    }
  }, [id]);

  useEffect(() => {
    if (state.loading) {
      fetchSingleProduct(`${defaultUrl}/${id}`).then((data) =>  dispatch({ type: 'ready'}))
    } else {
      dispatch({ type: 'update', payload: getMobile()})

    }
  }, [state.loading])

  return (
    <div className="vista-container">
      <Header item={state}></Header>

      <div className="detail-wraper">
        {!state.loading && (
          <>
            <div className="img-detail-container">
              <img
                className="img-detail"
                src={`${state.imgUrl}`}
                alt={`${state.name}`}
              />
            </div>
            <div className="detail-desc-container">
              <section className="detail-section">
                <p className="detail-data">Marca</p>
                <p className="detail-data-left">{state.brand}</p>
              </section>
              <section className="detail-section">
                <p className="detail-data">Modelo</p>
                <p className="detail-data-left">{state.model}</p>
              </section>
              <section className="detail-section">
                <p className="detail-data">Precio</p>
                <p className="detail-data-left">{state.price}</p>
              </section>
              <section className="detail-section">
                <p className="detail-data">CPU</p>
                <p className="detail-data-left">{state.cpu}</p>
              </section>
              <section className="detail-section">
                <p className="detail-data">RAM</p>
                <p className="detail-data-left">{state.ram}</p>
              </section>
              <section className="detail-section">
                <p className="detail-data">Sistema Operativo</p>
                <p className="detail-data-left">{state.os}</p>
              </section>
              <section className="detail-section">
                <p className="detail-data">Resolucion de pantalla</p>
                <p className="detail-data-left">{state.displayResolution}</p>
              </section>
              <section className="detail-section">
                <p className="detail-data">Bateria</p>
                <p className="detail-data-left">{state.battery}</p>
              </section>
              <section className="detail-section">
                <p className="detail-data">Camaras</p>
                <p className="detail-data-left">{`${state.primaryCamera} - ${state.secondaryCmera}`}</p>
              </section>
              <section className="detail-section">
                <p className="detail-data">Dimensiones</p>
                <p className="detail-data-left">{state.dimentions}</p>
              </section>
              <section className="detail-section">
                <p className="detail-data">Peso</p>
                <p className="detail-data-left">{state.weight}</p>
              </section>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Detail;
