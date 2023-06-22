import React from "react";

export const Search = () => {
  return (
    <div className="search">
      <h3 className="search__title">Поиск по сайту</h3>
      <form action="https://echo.htmlacademy.ru/courses">
        <input
          className="search__input"
          name="search"
          type="search"
          placeholder="Galaxy Z Flip4"
        />
      </form>
    </div>
  );
};
