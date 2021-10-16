import React from "react";
import PropTypes from "prop-types";
// import React, { Fragment } from "react";
// imr import react
function App({ salud, subtitle }) {
  const obj = {
    name: "Enmnauel",
    age: 26,
  };
  return (
    <>
      <h1>{salud}</h1>
      <p>{subtitle}</p>
    </>
  );
}

// This Allow me to expecify the data tyep of my object
App.propTypes = {
  salud: PropTypes.string.isRequired,
};

App.defaultProps = {
  subtitle: "Soy un subtitulo",
};

export default App;

{
  /* Comments React way */
}
{
  /* <p>{JSON.stringify(obj, null, 3)}</p> */
}
