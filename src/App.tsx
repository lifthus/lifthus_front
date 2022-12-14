import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";
import { ThemeColor } from "./common/styles/theme.style";

import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import Main from "./contents/main/containers/Main";

const AppStyled = styled.section`
  text-align: center;
  background-color: ${ThemeColor.backgroundColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(14px + 2vmin);
  color: white;
  padding-bottom: 10vh;
`;

const App = () => {
  const { t, i18n } = useTranslation();

  const userId = useState(undefined);

  return (
    <div className="App">
      <header></header>
      <AppStyled>
        <Routes>
          {/* If the user signed in but not registered, the user needs to be registered. */}
          <Route path="/register/*" element={<div />} />

          <Route path="/*" element={<Main />} />
          {/* If the user haven't signed in, the user needs to be authenticated */}
          {userId === undefined && (
            <Route>
              <Route path="/sign" element={<div />} />
              <Route path="/signin" element={<div />} />
              <Route path="/signin/up" element={<div />} />
            </Route>
          )}
        </Routes>
      </AppStyled>
      <footer></footer>
    </div>
  );
};

export default App;
