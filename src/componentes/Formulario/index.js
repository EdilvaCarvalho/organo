import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({nome, cargo, imagem, time});
        setNome("");
        setCargo("");
        setImagem("");
        setTime("");
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" valor={nome} aoAlterado={valor => setNome(valor)} placeholder="Digite seu nome" obrigatorio={true} />
                <CampoTexto label="Cargo" valor={cargo} aoAlterado={valor => setCargo(valor)} placeholder="Digite seu cargo" obrigatorio={true} />
                <CampoTexto label="Imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} placeholder="Informe o endereço da imagem" />
                <ListaSuspensa label="Time" itens={props.times} aoAlterado={valor => setTime(valor)} obrigatorio={true} />
                <Botao>Criar card</Botao>
            </form>
        </section>
    );
}

export default Formulario;