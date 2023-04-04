import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import SelectScreen from "./components/SelectScreen";
import BlueGame from "./components/Blue/BlueGame";

function App() {
  const isSelecting = useSelector((state) => state.select.isSelecting);
  const blue = useSelector((state) => state.select.blue);

  return (
    <Fragment>
      {isSelecting && <SelectScreen />}
      {blue && <BlueGame />}
    </Fragment>
  );
}

export default App;
