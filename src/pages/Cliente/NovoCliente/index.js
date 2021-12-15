import React, { useState } from 'react';
import api from '../../../services/api'
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import Barra from '../../../components/Barra'
import { TextInput, Row, Col } from 'react-materialize'


import './style.css'

import CarrinhoCompras from '../../../assets/img/carrinho-de-compras.png'

export default function NovoCliente() {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [cpf, setCpf] = useState('')
    const [sexo, setSexo] = useState('')
    const [endereco, setEndereco] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')
    const [email, setEmail] = useState('')
    const [celular, setCelular] = useState('')

    const navegacao = useNavigate();

    async function executarCadastro(e) {
        e.preventDefault();

        const dados = {
            nome,
            sobrenome,
            cpf,
            sexo,
            endereco,
            cidade,
            uf,
            email,
            celular
        }

        try {
            const response = await api.post('/cliente/cadastro', dados)
            alert(`Seja bem-vindo. Seu id de acesso é ${response.data}`)
            navegacao('/')
        } catch (error) {
            alert('Erro ao tentar cadastrar. Tente novamente.')
        }
    }


    return (
        <div className="novo-cliente-container">
            <div className="menu">
                <Barra />
            </div>
            <div className="content">
                <section className="cliente-form">
                    <section className="logo-carrinho-compras">
                        <img src={CarrinhoCompras} alt="Carrinho de compras" style={{ width: '80%' }} />

                        <Link to="/">
                            <FiArrowLeftCircle size={30} color="#520d18"/>
                        </Link>
                    </section>
                    <section className="form-cadastro-cliente">
                        <h1>Cadastro de clientes</h1>
                        <form onSubmit={executarCadastro}>
                            <Row>
                                <Col s={12}>
                                    <Row>
                                        <Col s={6}>
                                            <TextInput
                                                icon="person"
                                                label="Nome"
                                                value={nome}
                                                onChange={e => setNome(e.target.value)}
                                            />
                                        </Col>
                                        <Col s={6}>
                                            <TextInput
                                                icon="person"
                                                label="Sobrenome"
                                                value={sobrenome}
                                                onChange={e => setSobrenome(e.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col s={6}>
                                            <TextInput
                                                icon="looks_one"
                                                label="CPF"
                                                value={cpf}
                                                onChange={e => setCpf(e.target.value)}
                                            />
                                        </Col>
                                        <Col s={3}>
                                            <TextInput
                                                icon="face"
                                                placeholder="Sexo"
                                                value={sexo}
                                                onChange={e => setSexo(e.target.value)}
                                            />
                                        </Col>
                                        <Col s={3}>
                                            <TextInput
                                                icon="map"
                                                placeholder="UF"
                                                value={uf}
                                                onChange={e => setUf(e.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col s={6}>
                                            <TextInput
                                                icon="location_on"
                                                placeholder="Endereço"
                                                value={endereco}
                                                onChange={e => setEndereco(e.target.value)}
                                            />
                                        </Col>
                                        <Col>
                                            <TextInput
                                                icon="location_city"
                                                placeholder="Cidade"
                                                value={cidade}
                                                onChange={e => setCidade(e.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col s={6}>
                                            <TextInput
                                                icon="phone_iphone"
                                                placeholder="Celular"
                                                value={celular}
                                                onChange={e => setCelular(e.target.value)}
                                            />
                                        </Col>
                                        <Col s={6}>
                                            <TextInput
                                                icon="mail"
                                                placeholder="E-mail"
                                                value={email}
                                                type="Email"
                                                onChange={e => setEmail(e.target.value)}
                                            />
                                        </Col>

                                    </Row>
                                </Col>
                            </Row>

                            <button className="button" style={{ width: "95%" }} >
                                Cadastrar
                            </button>
                        </form>
                    </section>
                </section>
            </div>
        </div>
    )
}