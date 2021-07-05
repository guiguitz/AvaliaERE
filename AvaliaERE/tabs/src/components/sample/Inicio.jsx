import React from "react";
import { Button } from "@fluentui/react-northstar";
import "./Inicio.css";
import { useTeamsFx } from "./lib/useTeamsFx";
import { TeamsUserCredential } from "@microsoft/teamsfx";
import { useData } from "./lib/useData";
import { Typography, makeStyles, AppBar, Toolbar } from "@material-ui/core";

export const Inicio = ({ props }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

  const classes = useStyles;
  const { isInTeams } = useTeamsFx();
  const userProfile = useData(async () => {
    const credential = new TeamsUserCredential();
    return isInTeams ? await credential.getUserInfo() : undefined;
  })?.data;
  const userName = userProfile ? userProfile.displayName : "";

  const começarExame = () => props(true);

  return (
    <div>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              AvaliaERE
            </Typography>
          </Toolbar>
        </AppBar>
        <h1 className="titulo"> Criação de Provas</h1>
        <p className="subtitulo">
          Bem-vindo (a){userName ? ", " + userName : ""}, aqui você pode criar
          provas que serão aplicadas a equipes no Teams.
        </p>
        <Button
          className="button"
          style={{ margin: "0 auto", display: "flex" }}
          onClick={começarExame}
          content="Criar Nova Prova"
          primary
        />
      </div>
    </div>
  );
};
