import React from "react";
import "./welcome.css";

function Ending() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "80px",
          backgroundColor: "aliceblue"
        }}
      >
        <p>
          Надеюсь что наша статья о React хуках <code>useEffect()</code> и{" "}
          <code>useState()</code>, помогла вам понять их принцип работы.
        </p>
        <p>
          Мы постарались доступно показать примеры интерактивностей, которые
          можно реализовать используя эти два хука.
        </p>
        <p>
          Спасибо за прочтение нашей статьи, желаем вам успехов в
          программировании!
        </p>
      </div>
      <p style={{ fontSize: "14px", marginLeft: "20px", color: "gray" }}>Автор: Юров Александр</p>
    </div>
  );
}

export { Ending };
