import React from "react";
import "./Notificacao.css";
import { Image } from "@fluentui/react-northstar";
import { Checkbox,TextField } from '@material-ui/core';

import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';



export function Notificacao(props) {
  const { docsUrl } = {
    docsUrl: "https://aka.ms/teamsfx-docs",
    ...props,
  };
  return (
    <div className="deploy page">
      <Checkbox
         value="checkedA"
          inputProps={{ 'aria-label': 'Checkbox A' }}
      />Enviar para turma 1 (T1)

      <Checkbox
         value="checkedA"
          inputProps={{ 'aria-label': 'Checkbox A' }}
      />Enviar para turma 1 (T2)

      <Checkbox
         value="checkedA"
          inputProps={{ 'aria-label': 'Checkbox A' }}
      />Enviar para turma 1 (T3)

<p>
 



</p>

  <TextField
    id="datetime-local"
    label="Próxima Prova/teste"
    type="datetime-local"
    defaultValue="2021-05-7T10:30"

    InputLabelProps={{
      shrink: true,
    }}
  />


<p>
 



</p>

  <TextField id="standard-basic" label="Nome para prova/teste" />
  <TextField id="filled-basic" label="Disciplina" variant="filled" />














    </div>

    
  );
}
