import React, { useState, useEffect } from 'react';
import api from '../../../services/api'
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import Barra from '../../../components/Barra'
import { Row, Col, TextInput } from 'react-materialize'

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
    const id = localStorage.getItem('idCliente')

    useEffect( () => {

        try {
            api.get(`cliente/busca/${id}`).then( response => {
                setNome(response.data[0].nome)
                setSobrenome(response.data[0].sobrenome)
                setCpf(response.data[0].cpf)
                setSexo(response.data[0].sexo)
                setEndereco(response.data[0].endereco)
                setCidade(response.data[0].cidade)
                setUf(response.data[0].uf)
                setEmail(response.data[0].email)
                setCelular(response.data[0].celular)
            })
        } catch (error) {
            
        }
    }, [id]);

    async function executarAtualizacao(e){
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
            await api.put(`/cliente/atualizar/${id}`, dados)
            alert('Dados atualizados com sucesso')
            navegacao('/cliente/lista')
        } catch (error) {
            alert('Erro ao tentar atualizar. Tente novamente.')
        }
    }
    return (
        <div className="atualizar-cliente-container">
            <div className="menu">
                <Barra/>
            </div>
            <div className="content-atualizar">
                <section className="cliente-form-atualizar">
                    <section className="logo-carrinho-compras">
                        <img src={CarrinhoCompras} alt="Carrinho de compras" style={{ width: '100%' }} />

                        <Link to="/"> 
                            <FiArrowLeftCircle size={30} color="#e02041"/>
                        </Link>
                    </section>
                    <section className="form-atualiza-cliente">
                        <h1>Atualizar cliente</h1>
                        <form onSubmit={executarAtualizacao}>
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

                            <button className="button" style={{ width: "95%"}} >
                                Atualizar
                            </button>
                        </form>
                    </section>
                </section>
            </div>
        </div>
    )
}