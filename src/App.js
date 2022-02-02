import "./App.css";
import React, { useState } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Info from "./components/Info";
import { Grid } from "@mui/material";
// В метод ReactDOM.render следует передавать один компонент App,
// который представляет из себя все приложение
function App({ heroes }) {
  const [isInfoOpen, setInfoOpen] = useState(false);
  return (
    <div className="App">
      <Header handleInfo={() => setInfoOpen(true)} />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {heroes.map((el) => (
          <Hero {...el} key={el.id} />
        ))}
      </Grid>
      <Info isInfoOpen={isInfoOpen} closeInfo={() => setInfoOpen(false)} />
    </div>
  );
}

export default App;
