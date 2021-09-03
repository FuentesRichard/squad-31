import React, { Component } from 'react';
import Link from 'next/link';
import styles from './App.module.css'

function Login() {
    return (
            <main id={styles.todo}>
                <div id={styles.esquerda}>
                    <header className={styles["logo-esq"]}>
                        <h1>Logo</h1>
                    </header>


                    <div id="texto-central">
                        <h1>Texto</h1>
                    </div>
                </div>
                <div id="direita">
                    <header className="logo-dir">
                        <h1>Logo</h1>
                    </header>


                    <div id="cont-login">
                        <p>E-mail</p>
                        <input type="text" placeholder="E-mail"/>
                        <p>Senha</p>
                        <input type="password" placeholder="Senha"/>
                    </div>


                    <footer>
                        <Link href="/">
                        <a>Página Home</a>
                        </Link>
                    </footer>
                </div>
            </main>
    )
}

export default Login