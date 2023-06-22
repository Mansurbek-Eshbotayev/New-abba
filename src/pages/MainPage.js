import React from "react";
import { Carousel } from "../components/Carousel/Carousel";
import { OurProduct } from "../components/OurProduct/OurProduct";
import { Radiators } from "../components/Radiators/Radiators";
import { About } from "../components/About/About";
import { Quality } from "../components/Quality/Quality";
import { Smestitel } from "../components/Smestitel/Smestitel";
import { Showing } from "../components/Showing/Showing";
import { Connect } from "../components/Connect/Connct";

export const MainPage = () => {
  return (
    <div>
      <Carousel />
      <OurProduct />
      <Radiators />
      <About />
      <Quality />
      <Smestitel />
      <Showing />
      <Connect />
    </div>
  );
};
