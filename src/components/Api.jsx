import React, { useEffect, useState } from "react";
import "./component.css"

function Api() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOffers = async () => {
    try {
      const response = await fetch(
        "https://674d10f454e1fca9290e3e1b.mockapi.io/react-ideas/arr/offer-example"
      );
      if (!response.ok) {
        throw new Error("Ошибка");
      }
      const data = await response.json();
      setOffers(data);
    } catch (error) {
      console.error("Ошибка:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  return (
    <div className="api-offers" style={{marginTop: "80px"}}>
      <div>
        <h1 style={{ marginLeft: "100px", fontSize: "60px" }}>Запрос данных с API</h1>
        <p style={{ marginLeft: "120px", fontSize: "25px" }}>
          С помощью хуков <code>useState()</code> и <code>useEffect()</code> можно получать данные из API и загружать их на свой сайт
        </p>
      </div>
      <div
        className="contract-info"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {loading ? (
          <div class="progress">
            <div class="indeterminate"></div>
          </div>
        ) : (
          offers.map((offer) => (
            <div
              key={offer.id}
              className="card"
              style={{
                width: "300px",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2 style={{ fontSize: "40px" }}>{offer.name}</h2>
              <p className="price">Цена: {offer.price}</p>
              <p style={{ fontSize: "20px", marginTop: "5px" }}>
                {offer.description}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export { Api };
