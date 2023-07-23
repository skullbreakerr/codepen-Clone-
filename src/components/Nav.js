import React, { useState, useEffect } from 'react';
import '../index.css';

function Nav() {

  return (
    <>
      <div id="navigation-bar">
        <img src="data:image/png;base64,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" />

        <h1>Codepen</h1>
        <div id="options">
          
        <h3><div class="btn-group">
  <button class="btn btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Mode
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="./Clang.js">C</a></li>
    <li><a class="dropdown-item active" href="#">HTML/CSS/JS</a></li>
    <li><a class="dropdown-item" href="#">Java</a></li>
  </ul>
</div></h3>
          
          <h3 ><div class="btn btn-lg">Contact Us</div></h3>
          <h3 ><div class="btn btn-lg">About Us</div></h3>
        </div>
      </div>
    </>
  );
}

export default Nav;
