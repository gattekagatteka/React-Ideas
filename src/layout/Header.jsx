import React from "react";

function Header() {
  return (
    <nav class="#03a9f4 light-blue">
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo center">
          React Ideas
        </a>
        <ul class="left hide-on-med-and-down">
          <li>
            <a href="#">Как стать автором?</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
