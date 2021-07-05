import React, { useState } from "react";
import Exame from "./sample/Exame";
import { Inicio } from "./sample/Inicio";

export default function Tab() {
  const [começar, setStart1] = useState(false);

  return <div>{começar ? <Exame /> : <Inicio props={setStart1} />}</div>;
}
