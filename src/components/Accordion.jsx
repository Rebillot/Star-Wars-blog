import React from "react";
import Characters from "./Characters";
import Vehicles from "./Vehicles";
import Planets from "./Planets";
import "../App.css";

    function MainDropDown() {
    return (
        <div class="accordion " id="accordionExample">
        <div class="accordion-item  bg-black ">
            <h2 class="accordion-header ">
<button
  className="accordion-button bg-black"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#collapseOne"
  aria-expanded="true"
  aria-controls="collapseOne"
>
  <span className="button-text">Characters</span>
  <span className="image-container">
    <picture className="image">
      <source
        className=""
        srcSet="https://www.looper.com/img/gallery/rules-darth-vader-has-to-follow-in-the-star-wars-universe/intro-1616173821.jpg"
        type="image/webp"
      />
      <img
        className="image-content"
        src="https://www.looper.com/img/gallery/rules-darth-vader-has-to-follow-in-the-star-wars-universe/intro-1616173821.jpg"
        alt="Character"
      />
    </picture>
  </span>
</button>

            </h2>
            <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            >
            <div class="accordion-body">
                <Characters />
            </div>
            </div>
        </div>
        <div class="accordion-item bg-black">
            <h2 class="accordion-header">
            <button
                class="accordion-button bg-black collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
            >
                Vehicles
            </button>
            </h2>
            <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            >
            <div class="accordion-body">
                <Vehicles />
            </div>
            </div>
        </div>
        <div class="accordion-item bg-black">
            <h2 class="accordion-header">
            <button
                class="accordion-button bg-black collapsed "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
            >
                Planets
            </button>
            </h2>
            <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            >
            <div class="accordion-body">
                <Planets />
            </div>
            </div>
        </div>
        </div>
    );
    }

    export default MainDropDown;
