import styled from "styled-components";

export const PageAgendamento = styled.div` 

    
    height: 100vh;  
    

    display: grid;
    grid-template-rows: 1fr 9fr;

    main {
        grid-row-start: 2;
        width: 100vw;
        height: 90vh;
        border-radius: 8px;
        padding: 10px;
    
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (max-width: 700px){
        height: 100vh;
        width: 100vw;
        }
    }

    form {
        height: 40vh;
        flex-direction: column;
        text-align: center;

        #Titulo {
        margin-bottom: 20px;
        }

        #vector_7 {
        height: 7vh;
        float: left;
        }

        strong {
        font-size: 30px;
        }

        .div-input {
        float: left;
        width: 20ch;
        height: 5ch;
        border-top: 1px solid var(--select-border);
        border-bottom: 1px solid var(--select-border);
        padding: 0.25em 0.5em;
        font-size: 1.25rem;
        line-height: 1.1;
        background-color: #fff;
        background-image: linear-gradient(to top, #f9f9f9, #fff 33%);

        div {
            margin-bottom: 20px;
            
            p {
            margin-left: 3px;
            font-size: 0.7em;
            font-weight: 600;
            float: left;
            }

            img {
            float: left;
            }
        }

        input {
            border: none;
            padding: 0 1em 0 0;
            margin: 0 0 0 5px;
            width: 85%;
            font-family: inherit;
            font-size: 0.9em;
            font-weight: 300;
            cursor: pointer;
            line-height: inherit;
            outline: none;
        }
        }

        #select-div {
        width: 25ch;
        border-left: 1px solid var(--select-border);
        border-radius: 0.25em 0em 0em 0.25em;

        select {
            -webkit-appearance: none;
            -moz-appearance: none; 
            appearance: none;

            background-color: transparent;
            background-image: url('data:image/svg+xml,<svg width="21" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M16 7.61911C16 12.9524 9.14286 17.5239 9.14286 17.5239C9.14286 17.5239 2.28572 12.9524 2.28572 7.61911C2.28572 5.80048 3.00817 4.05634 4.29413 2.77037C5.58009 1.48441 7.32424 0.761963 9.14286 0.761963C10.9615 0.761963 12.7056 1.48441 13.9916 2.77037C15.2776 4.05634 16 5.80048 16 7.61911Z" stroke="#111111" stroke-width="2.28571" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.14286 9.90492C10.4052 9.90492 11.4286 8.88158 11.4286 7.61921C11.4286 6.35685 10.4052 5.3335 9.14286 5.3335C7.8805 5.3335 6.85715 6.35685 6.85715 7.61921C6.85715 8.88158 7.8805 9.90492 9.14286 9.90492Z" stroke="#111111" stroke-width="2.28571" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0"><rect width="18.2857" height="18.2857" fill="white"/></clipPath></defs></svg>');
            background-position-x: 100%;
            background-position-y: 15px;
            border: none;
            padding: 0 1em 0 0;
            margin: 0 0 0 5px;
            width: 85%;
            font-family: inherit;
            font-size: 0.9em;
            font-weight: 300;
            cursor: pointer;
            line-height: inherit;
            outline: none;
        }
        }

        #div-entrada {
        
        }

        #div-saida {
        border-right: 1px solid var(--select-border);
        border-radius: 0em 0.25em 0.25em 0em;
        }

        button {
        margin-left: 45%;
        margin-top: 90px;
        font-weight: 600;
        font-size: 1.3vw;
        border-radius: 30px;
        width: 30%;
        }
    }
`;