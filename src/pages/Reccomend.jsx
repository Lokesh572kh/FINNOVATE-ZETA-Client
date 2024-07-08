// App.js
import React from "react";
import CarouselComponent from "../components/CarouselComponent";
import { content } from "../constants/index";

function Reccomen() {
  const items = content.back_1_f;
  return (
    <div className="">
      <h2 className="text-[30px] text-center font-poppins font-semibold">
        Modules specially Curated for you{" "}
      </h2>
      <CarouselComponent items={items} />
    </div>
  );
}

export default Reccomen;
