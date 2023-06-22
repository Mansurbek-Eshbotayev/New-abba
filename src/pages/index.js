import React from "react";
import { Main } from "../layouts/Main/Main";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./MainPage";
import { MinSmesttilel } from "./MinSimestitel/MinSmesttilel";
import { MinBath } from "./MinBath/MinBath";
import { MinToil } from "./MinToil/MinToil";
import { ErrorPage } from "./ErrorPage/ErrorPage";

export const Modules = () => {
  return (
    <Main>
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/smestitlel" element={<MinSmesttilel />} />
        <Route path="/bath" element={<MinBath />} />
        <Route path="/toil" element={<MinToil />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Main>
  );
};
