import React, { Component } from 'react';
import '../styles/Login.scss'

export function Login() {
    return (
        <div id="page-login">
            <aside>
                <header>
                    <h1>Logo</h1>
                </header>

                <div>
                    <p>Texto</p>
                </div>
            </aside>
            <main>
                <h1>Logo</h1>
                <form>
                    <div>
                        <label htmlFor="cpf">CPF</label>
                        <input id="cpf" type="text" placeholder="CPF" />
                        <label htmlFor="senha">Senha</label>
                        <input id="senha" type="password" placeholder="Senha" />
                        <button>Entrar</button>
                    </div>
                </form>

                <footer>
                    <a href="/home">Página Home</a>
                </footer>
            </main>
        </div>
    )
}
