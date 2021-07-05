import React, { Component } from "react";
import { Button } from "@fluentui/react-northstar";
import "./Exame.css";
import Questão from "./Questão";

class Exame extends Component {
  state = {
    questões: [
      { id: 1, key: 1, enun: "", alta: "", altb: "", altc: "", altd: "" },
    ],
  };
  numeroQuestões = 1;
  numeroKeys = 1;

  voltarInicio = () => window.location.reload();

  novaQuestão = () => {
    const questõesAdicionar = this.state.questões.slice();
    questõesAdicionar.push({
      id: this.numeroQuestões + 1,
      key: this.numeroKeys + 1,
    });
    this.numeroQuestões += 1;
    this.numeroKeys += 1;
    this.setState({ questões: questõesAdicionar });
  };

  excluirQuestão = (questãoId) => {
    let questõesRemover = this.state.questões.filter((q) => q.id !== questãoId);
    this.numeroQuestões -= 1;
    let i = 0;
    for (i = 0; i < this.numeroQuestões; i++) {
      questõesRemover[i].id = i + 1;
    }
    this.setState({ questões: questõesRemover });
  };

  salvarEntrada = (questãoId, questãoTexto) => {
    const questõesNovoTexto = this.state.questões.slice();
    console.log(questõesNovoTexto);
    console.log(questãoTexto.enunciado);
    questõesNovoTexto[questãoId - 1].enun = questãoTexto.enunciado;
    questõesNovoTexto[questãoId - 1].alta = questãoTexto.alternativa_a;
    questõesNovoTexto[questãoId - 1].altb = questãoTexto.alternativa_b;
    questõesNovoTexto[questãoId - 1].altc = questãoTexto.alternativa_c;
    questõesNovoTexto[questãoId - 1].altd = questãoTexto.alternativa_d;
    this.setState({ questões: questõesNovoTexto });
  };

  render() {
    return (
      <div className="welcome page">
        <div className="narrow page-padding">
          <Button
            onClick={this.voltarInicio}
            content="Voltar ao Início"
            primary
          />
          <Button
            className="button1"
            onClick={this.novaQuestão}
            content="Nova Questão"
            primary
          />
          <Button
            className="button2"
            onClick={this.salvarExame}
            content="Salvar"
            primary
          />
          <div>
            {this.state.questões.map((questão) => (
              <Questão
                key={questão.key}
                id={questão.id}
                onDelete={this.excluirQuestão}
                onChange={this.salvarEntrada}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Exame;
