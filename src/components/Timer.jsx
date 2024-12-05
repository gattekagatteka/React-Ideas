import React, { useState, useEffect } from 'react';
import "./component.css"

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{marginTop: "80px"}}>
            <h1 style={{ marginLeft: "100px", fontSize: "60px" }}>Таймер: {seconds} секунд</h1>
            <p style={{ marginLeft: "120px" }}>Как пример использования сразу двух хуков <code>useState()</code> и <code>useEffect()</code> часто приводят создание таймера, <br /> в котором <code>useState()</code> отвечает за показатель времени, а <code>useEffect()</code> передает саму функцию запуска таймера</p>
        </div>
    );
};

export { Timer };
