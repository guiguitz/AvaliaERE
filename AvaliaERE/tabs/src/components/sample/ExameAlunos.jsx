import React, { Component } from "react";
import { Text, Button, Image, Checkbox } from "@fluentui/react-northstar";
import Countdown from 'react-countdown';
import "./Exame.css";

const questão1 = [
    "[ENADE 2017] Sejam as afirmações a seguir sobre a relação do Scrum com os princípios do manifesto ágil. (A) Scrum adota a entrega incremental por meio de Sprints. (B) Scrum adota a simplicidade por meio do uso da programação em pares. (C) Scrum adota o envolvimento do cliente com a priorização e a negociação dos requisitos na concepção de Sprints. Dentre essas afirmativas, são CORRETAS:",
    "Builder, Strategy, Fachada",
    "Factory, Proxy, Fachada",
    "Factory, Iterador, Strategy", "Factory, Visitor, Strategy"]

class Questãos1Alunos extends Component {
    state = {
        checkboxStatus: [true, false, false, false],
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
        return (
            <div>
                <div>
                    <h2> Questão 1</h2>
                    <div>
                        <Text
                            content={questão1[0]}
                            size="medium"
                            weight="none"
                        />
                    </div>
                    <div>
                        <Checkbox
                            onChange={() => this.mudarCheckbox(0)}
                            checked={this.state.checkboxStatus[0]}
                            className="checkbox"
                            aria-controls="lettuce tomato ketchup"
                            label={questão1[1]}
                            id="0"
                        />
                    </div>
                    <div>
                        <Checkbox
                            onChange={() => this.mudarCheckbox(1)}
                            checked={this.state.checkboxStatus[1]}
                            className="checkbox"
                            aria-controls="lettuce tomato ketchup"
                            label={questão1[2]}
                            id="1"
                        />
                    </div>
                    <div>
                        <Checkbox
                            onChange={() => this.mudarCheckbox(2)}
                            checked={this.state.checkboxStatus[2]}
                            className="checkbox"
                            aria-controls="lettuce tomato ketchup"
                            label={questão1[3]}
                            id="2"
                        />
                    </div>
                    <div>
                        <Checkbox
                            onChange={() => this.mudarCheckbox(3)}
                            checked={this.state.checkboxStatus[3]}
                            className="checkbox"
                            aria-controls="lettuce tomato ketchup"
                            label={questão1[4]}
                            id="3"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const questão2 = [
    "Histórias de usuários devem ser, EXCETO:",
    "Deve ser viável estimar o tamanho de uma história",
    "Agregar valor para o negócio dos clientes",
    "Épicas, que por sua importância devem ser colocadas no topo do backlog",
    "Independentes"]

class Questãos2Alunos extends Component {
    state = {
        checkboxStatus: [true, false, false, false],
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
        return (
            <div>
                <div>
                    <h2> Questão 2</h2>
                    <div>
                        <Text
                            content={questão2[0]}
                            size="medium"
                            weight="none"
                        />
                    </div>
                    <div>
                        <Checkbox
                            onChange={() => this.mudarCheckbox(0)}
                            checked={this.state.checkboxStatus[0]}
                            className="checkbox"
                            aria-controls="lettuce tomato ketchup"
                            label={questão2[1]}
                            id="0"
                        />
                    </div>
                    <div>
                        <Checkbox
                            onChange={() => this.mudarCheckbox(1)}
                            checked={this.state.checkboxStatus[1]}
                            className="checkbox"
                            aria-controls="lettuce tomato ketchup"
                            label={questão2[2]}
                            id="1"
                        />
                    </div>
                    <div>
                        <Checkbox
                            onChange={() => this.mudarCheckbox(2)}
                            checked={this.state.checkboxStatus[2]}
                            className="checkbox"
                            aria-controls="lettuce tomato ketchup"
                            label={questão2[3]}
                            id="2"
                        />
                    </div>
                    <div>
                        <Checkbox
                            onChange={() => this.mudarCheckbox(3)}
                            checked={this.state.checkboxStatus[3]}
                            className="checkbox"
                            aria-controls="lettuce tomato ketchup"
                            label={questão2[4]}
                            id="3"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const questão3 = [
    "São vantagens de programação em pares, EXCETO:",
    "Redução do número de bugs.",
    "Código de melhor qualidade.",
    "Disseminação de conhecimento entre os membros do time.",
    "Redução do tempo de build do sistema.y"]

class Questãos3Alunos extends Component {
    state = {
        checkboxStatus: [true, false, false, false],
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
        return (
            <div>
                <div>
                    <h2> Questão 3</h2>
                    <div>
                        <Text
                            content={questão3[0]}
                            size="medium"
                            weight="none"
                        />
                    </div>
                    <div>
                        <Checkbox
                            onChange={() => this.mudarCheckbox(0)}
                            checked={this.state.checkboxStatus[0]}
                            className="checkbox"
                            aria-controls="lettuce tomato ketchup"
                            label={questão3[1]}
                            id="0"
                        />
                    </div>
                    <div>
                        <Checkbox
                            onChange={() => this.mudarCheckbox(1)}
                            checked={this.state.checkboxStatus[1]}
                            className="checkbox"
                            aria-controls="lettuce tomato ketchup"
                            label={questão3[2]}
                            id="1"
                        />
                    </div>
                    <div>
                        <Checkbox
                            onChange={() => this.mudarCheckbox(2)}
                            checked={this.state.checkboxStatus[2]}
                            className="checkbox"
                            aria-controls="lettuce tomato ketchup"
                            label={questão3[3]}
                            id="2"
                        />
                    </div>
                    <div>
                        <Checkbox
                            onChange={() => this.mudarCheckbox(3)}
                            checked={this.state.checkboxStatus[3]}
                            className="checkbox"
                            aria-controls="lettuce tomato ketchup"
                            label={questão3[4]}
                            id="3"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
    // Render a countdown
    return <Text
        content={"Tempo restante: " + hours + ":" + minutes + ":" + seconds}
        size="larger"
        weight="none"
        style={{ float: 'right' }}
    />;
};

class ExameAlunos extends Component {

    state = {
        page: 1,
    };

    exameFinalizado = () => {
        this.setState({ page: 0 });
    }

    render() {
        if (this.state.page === 0) {
            return (
                <div className="welcome page">
                    <div className="narrow page-padding">
                        <div>
                            <div>
                                <Image src="concluded.png" />
                            </div>
                            <Text
                                content="Avaliação finalizada com sucesso!"
                                size="larger"
                                weight="none"
                            />
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="welcome page">
                    <div className="narrow page-padding">
                        <div>
                            <div>
                                <Countdown
                                    date={Date.now() + 6000000}
                                    renderer={renderer}
                                />
                                <div>
                                    <Button
                                        onClick={this.exameFinalizado}
                                        content="Finalizar Exame"
                                        primary
                                    />
                                </div>
                            </div>
                            <Questãos1Alunos />
                            <Questãos2Alunos />
                            <Questãos3Alunos />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default ExameAlunos;
