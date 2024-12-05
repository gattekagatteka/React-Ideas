import React, { useState } from 'react';
import "./component.css"

const Form = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Привет, ${name}! Ваш пароль: ${password} Этот пример демонстрирует вариант передачи ваших данных при регистрации/авторизации на сайте`);
        setName('');
        setPassword('');
    };

    return (
        <div>
            <h1 style={{ marginLeft: "100px", fontSize: "60px" }}>Регистрация/авторизация</h1>
            <p style={{ marginLeft: "120px" }}>Также при помощи хуков <code>useState()</code> и <code>useEffect()</code> можно сделать форму регистрации/авторизации</p>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: "80px", marginTop: "50px" }}>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Введите логин" 
                required 
                style={{ width: "500px" }}
            />
            <input 
                type="password" 
                placeholder="Введите пароль" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}  
                style={{ width: "500px" }}
            />
            <button className="button" type="submit" style={{ marginTop: "30px" }}>Отправить</button>
        </form>
        </div>
    );
};

export { Form };
