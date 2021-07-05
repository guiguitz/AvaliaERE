import React, { Component } from "react";
import { TextArea, Input, Button, Checkbox } from "@fluentui/react-northstar";
import "./Questão.css";

class Questão extends Component {
  state = {
    questão: [
      {
        enunciado: "",
        alternativa_a: "",
        alternativa_b: "",
        alternativa_c: "",
        alternativa_d: "",
      },
    ],
    checkboxStatus: [true, false, false, false],
  };

  novaEntrada = () => {
    this.props.onChange(this.props.id, this.state.questão);
  };

  mudarCheckbox = (checkboxId) => {
    const index = [0, 1, 2, 3];
    const checkboxUncheck = this.state.checkboxStatus.slice();
    checkboxUncheck[checkboxId] = true;
    let checkboxUncheckIndex = index.filter((q) => q !== checkboxId);
    checkboxUncheck[checkboxUncheckIndex[0]] = false;
    checkboxUncheck[checkboxUncheckIndex[1]] = false;
    checkboxUncheck[checkboxUncheckIndex[2]] = false;
    this.setState({ checkboxStatus: checkboxUncheck });
  };

  render() {
    // console.log(this.state.alternativa_a);
    return (
      <div>
        <div>
          <h2 className="tituloQuestão"> Questão {this.props.id}</h2>
          <Button
            className="button"
            onClick={() => this.props.onDelete(this.props.id)}
            content="Excluir Questão"
            size="small"
            primary
          />
          <TextArea
            onChange={(event) =>
              this.setState({ enunciado: event.target.value }, this.novaEntrada)
            }
            resize="both"
            fluid
            placeholder="Escreva o enunciado da questão aqui."
          />
          <div>
            <Input
              onChange={(event) =>
                this.setState(
                  { alternativa_a: event.target.value },
                  this.novaEntrada
                )
              }
              className="option"
              label="a)"
              labelPosition="inline"
              id="inside-label"
            />
            <Checkbox
              onChange={() => this.mudarCheckbox(0)}
              checked={this.state.checkboxStatus[0]}
              className="checkbox"
              aria-controls="lettuce tomato ketchup"
              label="Correta"
              id="0"
            />
          </div>
          <div>
            <Input
              onChange={(event) =>
                this.setState(
                  { alternativa_b: event.target.value },
                  this.novaEntrada
                )
              }
              className="option"
              label="b)"
              labelPosition="inline"
              id="inside-label"
            />
            <Checkbox
              onChange={() => this.mudarCheckbox(1)}
              checked={this.state.checkboxStatus[1]}
              className="checkbox"
              aria-controls="lettuce tomato ketchup"
              label="Correta"
              id="1"
            />
          </div>
          <div>
            <Input
              onChange={(event) =>
                this.setState(
                  { alternativa_c: event.target.value },
                  this.novaEntrada
                )
              }
              className="option"
              label="c)"
              labelPosition="inline"
              id="inside-label"
            />
            <Checkbox
              onChange={() => this.mudarCheckbox(2)}
              checked={this.state.checkboxStatus[2]}
              className="checkbox"
              aria-controls="lettuce tomato ketchup"
              label="Correta"
              id="2"
            />
          </div>
          <div>
            <Input
              onChange={(event) =>
                this.setState(
                  { alternativa_d: event.target.value },
                  this.novaEntrada
                )
              }
              className="option"
              label="d)"
              labelPosition="inline"
              id="inside-label"
            />
            <Checkbox
              onChange={() => this.mudarCheckbox(3)}
              checked={this.state.checkboxStatus[3]}
              className="checkbox"
              aria-controls="lettuce tomato ketchup"
              label="Correta"
              id="3"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Questão;
