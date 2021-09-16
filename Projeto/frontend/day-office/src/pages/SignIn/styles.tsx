import styled from "styled-components";

export const PageLogin = styled.div`
    background-color: #E5E5E5;
    height: 100vh;
    width: 100vw;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 4fr 1fr;
    grid-template-rows: 100vh;
    justify-self: center;
    align-self: center;
    overflow: hidden;

    @media (max-width: 700px) {
        grid-template-columns: 100vw;
    }
`;

export const Aside = styled.aside`
    grid-row: 1 / 10;
    grid-column-start: 2;
    justify-self: center;
        
    #illustration {
        height: 90vh;
    }

    @media (max-width: 700px){
        display: none;
    }
`;

export const Main = styled.main`
    height: 90vh;
    grid-column-start: 4;
    justify-self: center;
    align-self: center;

    h1 {
        margin-top: 15%;
        margin-bottom: 1vw;
        text-align: center;
        font-size: 3.7vw;
    }

    #separator {
        margin: auto;
        margin-bottom: 2.4vw;
        width: 80%;
        height: 0.2vw;
        background: #FE4400;
    }

    #texto {
        font-size: 1.7vw;
        width: 80%;
        margin-bottom: 7%;
        margin-left: 10%;
        text-align: center;
    }

    button {
        font-weight: 600;
        font-size: 1.3vw;
        background-color: #404099;
        border-radius: 30px;
        height: 3em;
        width: 80%;
        margin: 5% 10%;

        img {
            margin-right: 0.5vw;
        }
    }

    #recuperarSenha {
        font-size: 1.3vw;
        text-align: center;
    }

    @media (max-width: 800px){
            width: 45vw;
            height: 100%;

            #separator {
                width: 60%;
                margin-left: 20%;
            }

            #texto {
                font-size: 1.8vw;
                height: 20%;
                width: 70%;
                margin-left: 15%;
            }

            button {
                width: 70%;
                margin: 5% 15%;
            }

            #recuperarSenha {
                font-size: 1.5vw;
            }
        }

        @media (max-width: 700px) {
            grid-column-start: 1;
            width: 70vw;

            h1 {
                margin-bottom: 1vw;
                font-size: 3.7vw;
            }

            #separator {
                margin-bottom: 2.4vw;
                height: 0.2vw;
            }

            #texto {
                height: 18%;
                width: 70%;
                font-size: 2vw;
                margin-left: 15%;
            }

            button {
                height: 3em;
                font-size: 1.7vw;
                width: 60%;
                margin-left: 20%;
            }

            #recuperarSenha {
                font-size: 2vw;
            }
        }

        @media (max-width: 600px) {

            h1 {
                margin-bottom: 1vw;
                font-size: 5vw;
            }

            #separator {
                width: 50%;
                margin-left: 25%;
                margin-bottom: 3vw;
                height: 0.3vw;
            }

            #texto {
                height: 28%;
                width: 70%;
                font-size: 3vw;
                margin-left: 15%;
            }

            button {
                height: 3em;
                font-size: 2vw;
                width: 80%;
                margin-left: 10%;
            }

            #recuperarSenha {
                font-size: 2.5vw;
            }
        }

        @media (max-width: 500px) {

            h1 {
                margin-bottom: 1vw;
                font-size: 7vw;
            }

            #separator {
                width: 70%;
                margin-left: 15%;
                margin-bottom: 3vw;
                height: 0.4vw;
            }

            #texto {
                height: 38%;
                width: 70%;
                font-size: 4vw;
                margin-left: 15%;
            }

            button {
                height: 3em;
                font-size: 3vw;
                width: 80%;
                margin-left: 10%;
            }

            #recuperarSenha {
                font-size: 3vw;
            }
        }
`;