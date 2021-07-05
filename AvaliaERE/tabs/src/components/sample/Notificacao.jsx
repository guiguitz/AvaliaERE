import React from "react";
import "./Notificacao.css";
import { Image } from "@fluentui/react-northstar";
import { Checkbox,TextField, Button, Backdrop,CircularProgress } from '@material-ui/core';




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
    label="Data da prova/teste"
    type="datetime-local"
    defaultValue="2021-05-7T10:30"

    InputLabelProps={{
      shrink: true,
    }}
  />


<p>
 



</p>

  <TextField id="standard-basic" label="Nome da prova/teste" />
  <TextField id="filled-basic" label="Disciplina" variant="filled" />


  <p>

  </p>








  <Button variant="outlined" color="primary" onClick={""}>
  Programar prova
</Button>
<Backdrop   onClick={"handleClose"}>
  <CircularProgress color="inherit" />
</Backdrop>






    </div>

    
  );
}
