import React, { useState } from 'react';
import "./component.css"

const Clicker = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{marginTop: "80px"}}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h1>Примеры использования</h1>
            </div>
            <h2 style={{ marginLeft: "100px", fontSize: "60px" }}>Счетчик: {count}</h2>
            <p style={{ marginLeft: "120px" }}>Самый базовый пример использования хука <code>useState()</code> — это создание кликера(счетчика), который <br /> наглядно показывает изменение состояния счетчика при нажатии</p>
            <button className="button" onClick={() => setCount(count + 1)} style={{ marginLeft: "120px" }}>Увеличить</button>
            <button className="button" onClick={() => setCount(count - 1)} style={{ marginLeft: "20px" }}>Уменьшить</button>
        </div>
    );
};

export { Clicker };