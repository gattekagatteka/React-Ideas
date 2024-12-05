import React from "react";
import "./welcome.css";

function Welcome() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>
          <code>useState()</code> и <code>useEffect()</code>
        </h1>
        <p>
          В этой статье мы расскажем о таких хуках React как{" "}
          <code>useEffect()</code> и <code>useState()</code>, а также покажем
          что можно реализовать с помощью них
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between"}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "80px",
            width: "900px",
            backgroundColor: "aliceblue",
            borderRadius: "20px",
          }}
        >
          <h2 style={{ marginLeft: "20px" }}>
            <code>useState()</code>
          </h2>
          <p style={{ marginLeft: "20px" }}>
            Назначение: Позволяет добавлять состояние в функциональные
            компоненты.
            <br></br>
            Синтаксис:{" "}
            <code>const [state, setState] = useState(initialValue);</code>
            <br></br>
            <code>state</code>: текущее значение состояния.<br></br>
            <code>setState</code>: функция для обновления состояния.<br></br>
            <code>initialValue</code>: начальное значение состояния.
          </p>
          <h2 style={{ marginLeft: "20px" }}>
            <code>useEffect()</code>
          </h2>
          <p style={{ marginLeft: "20px" }}>
            Назначение: Позволяет выполнять побочные эффекты в функциональных{" "}
            <br />
            компонентах (например, запросы к API, подписки на события и т.д.).{" "}
            <br />
            Первый аргумент — функция эффекта. <br />
            Второй аргумент — массив зависимостей. Эффект будет выполняться при
            изменении значений из этого массива.
          </p>
        </div>
        <div
  style={{
    display: "flex",
    flexDirection: "column",
    marginRight: "80px",
    width: "600px",
    backgroundColor: "aliceblue",
    borderRadius: "20px",
    alignItems: "center"
  }}
>
  <h2>Читайте также:</h2>
  <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px" }}>
    <div 
      style={{ 
        backgroundColor: "white", 
        borderRadius: "10px", 
        padding: "15px", 
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
      }}
    >
      <h3>1. Введение в React</h3>
      <p>Узнайте основы React и как начать разработку вашего первого приложения.</p>
    </div>
    <div 
      style={{ 
        backgroundColor: "white", 
        borderRadius: "10px", 
        padding: "15px", 
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
      }}
    >
      <h3>2. Создание компонентов в React</h3>
      <p>Погрузитесь в мир компонентов и узнайте, как их эффективно использовать в вашем проекте.</p>
    </div>
    <div 
      style={{ 
        backgroundColor: "white", 
        borderRadius: "10px", 
        padding: "15px", 
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
      }}
    >
      <h3>3. React Hooks: Введение</h3>
      <p>Изучите основные хуки React и как они могут упростить вашу разработку.</p>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export { Welcome };
