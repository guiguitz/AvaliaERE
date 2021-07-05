import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AppBar from "@material-ui/core/AppBar";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function createData(name, Nota, Aproveitamento, Media) {
  return { name, Nota, Aproveitamento, Media };
}

const rows = [
  createData("Prova #1", 18, 60, 24),
  createData("Prova #2", 24, 80, 21),
  createData("Prova #3", 24, 80, 12),
  createData("Trabalho Prático #1", 5, 50, 7),
  createData("Total", 71, 71, 64),
];

export const Emiliano = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            AvaliaERE
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Relatório de Notas
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            <p>Aluno: João Doe</p>
            <p>Matrícula: 2005011784</p>
          </Typography>
        </Container>
      </div>
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Disciplina #1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Atividade</TableCell>
                    <TableCell align="right">Nota</TableCell>
                    <TableCell align="right">Aproveitamento (%)</TableCell>
                    <TableCell align="right">Média</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.Nota}</TableCell>
                      <TableCell align="right">{row.Aproveitamento}</TableCell>
                      <TableCell align="right">{row.Media}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Disciplina #2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Atividade</TableCell>
                    <TableCell align="right">Nota</TableCell>
                    <TableCell align="right">Aproveitamento (%)</TableCell>
                    <TableCell align="right">Média</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.Nota}</TableCell>
                      <TableCell align="right">{row.Aproveitamento}</TableCell>
                      <TableCell align="right">{row.Media}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Disciplina #3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Atividade</TableCell>
                    <TableCell align="right">Nota</TableCell>
                    <TableCell align="right">Aproveitamento (%)</TableCell>
                    <TableCell align="right">Média</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.Nota}</TableCell>
                      <TableCell align="right">{row.Aproveitamento}</TableCell>
                      <TableCell align="right">{row.Media}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Disciplina #4</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Atividade</TableCell>
                    <TableCell align="right">Nota</TableCell>
                    <TableCell align="right">Aproveitamento (%)</TableCell>
                    <TableCell align="right">Média</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.Nota}</TableCell>
                      <TableCell align="right">{row.Aproveitamento}</TableCell>
                      <TableCell align="right">{row.Media}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};
