import React from 'react';
import { Navbar, Icon, NavItem, Dropdown, Divider } from 'react-materialize';
import { Link } from 'react-router-dom';

import Logo from '../assets/img/logo-loja-removebg.png'

export default function Barra() {
    return (
        <div className="barra">
            <Navbar
                alignLinks="left"
                brand={<a className="brand-logo" href="/"><span style={{ fontFamily:'Corinthia', letterSpacing: 10}}>TL Bijoux</span></a>}
                id="mobile-nav"
                style={{ backgroundColor: '#520d18' }}
                menuIcon={<Icon>menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
            >
                <NavItem href="/">
                    Home
                </NavItem>
                <Dropdown
                    id="Dropdown_14"
                    options={{
                        alignment: 'left',
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: true,
                        container: null,
                        coverTrigger: true,
                        hover: false,
                        inDuration: 150,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 250
                    }}
                    trigger={<a href="#!">Cliente{' '}<Icon right>arrow_drop_down</Icon></a>}
                >
                    <Link to="/cliente/cadastro">
                        Cadastro
                    </Link>
                    <Link to="/cliente/lista">
                        Lista
                    </Link>
                </Dropdown>
                <Dropdown
                    id="Dropdown_15"
                    options={{
                        alignment: 'left',
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: true,
                        container: null,
                        coverTrigger: true,
                        hover: false,
                        inDuration: 150,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 250
                    }}
                    trigger={<a href="#!">Produto{' '}<Icon right>arrow_drop_down</Icon></a>}
                >
                    <Link to="/produto/cadastro">
                        Cadastro
                    </Link>
                    <Link to="/produto/lista">
                        Lista
                    </Link>
                </Dropdown>
                <Dropdown
                    id="Dropdown_16"
                    options={{
                        alignment: 'left',
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: true,
                        container: null,
                        coverTrigger: true,
                        hover: false,
                        inDuration: 150,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 250
                    }}
                    trigger={<a href="#!">Vendas{' '}<Icon right>arrow_drop_down</Icon></a>}
                >
                    <Link to="/produto/cadastro">
                        Realizar venda
                    </Link>
                    <Link to="/produto/lista">
                        Listar vendas
                    </Link>
                </Dropdown>
            </Navbar>
        </div>
    )
}