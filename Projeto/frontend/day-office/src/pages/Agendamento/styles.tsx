import styled from "styled-components";

export const PageAgendamento = styled.div` 
  height: 100vh;  
  overflow-y: scroll;  
  overflow-x: hidden;
  background: linear-gradient(180deg, #FFFFFF 22.51%, #E4CAFF 100%);

  display: grid;
  grid-template-rows: 1fr 9fr;

  main {
    background-image: url("../../asset/images/Online_friends_pana.svg");
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
      background-image: none;
    }
  }

  form {
    height: 40vh;
    flex-direction: column;
    text-align: center;

    #Titulo-div {
      margin-bottom: 10px;
    }

    #vector_7 {
      height: 7vh;
      float: left;
    }

    img {
      margin-top: 5px;
      margin-right: 10px;
      margin-left: 3vw;
    }

    strong {
      font-size: 2.3em;
    }

    #input-div {
      width: 104%;
      margin: 0 auto;
    }

    .div-input {
      float: left;
      width: 25ch;
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
          margin-top: 5px;
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

    .div-input2 {
      display: inline-block;
      width: 25ch;
      height: 5ch;
      border-top: 1px solid var(--select-border);
      border-bottom: 1px solid var(--select-border);
      padding: 0.25em 0.5em;
      font-size: 1rem;
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
      width: 20ch;
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
        margin: 8px 0 0 5px;
        width: 90%;
        font-family: inherit;
        font-size: 0.8em;
        font-weight: 300;
        cursor: pointer;
        line-height: inherit;
        outline: none;
      }
    }

    #div-saida {
      border-right: 1px solid var(--select-border);
      border-radius: 0em 0.25em 0.25em 0em;
    }

    #div-saida2 {
      float: right;
      border-right: 1px solid var(--select-border);
      border-radius: 0em 0.25em 0.25em 0em;

      p {
        margin-left: 3px;
        font-size: 0.7em;
        font-weight: 600;
        float: left;
      }
    }

    button {
      margin-left: 45%;
      margin-top: 90px;
      font-weight: 600;
      font-size: 1.3vw;
      border-radius: 30px;
      width: 30%;
    }

    #botao2 {
      margin-top: 20px;
    }

    @media (max-width: 950px) {
      .div-input {
        width: 22ch;
      }
    }

    @media(max-width: 850px) {
      .div-input {
        width: 20ch;
      }
    }

    @media (max-width: 800px) {
      strong {
        font-size: 1.5em;
      }

      #input-div {
        width: 104%;
        max-width: 650px;
        margin: 0 auto;
      }
  
      .div-input {
        float: left;
        width: 25ch;
        height: 4.25ch;
        margin-left: 23vw;
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
  
      .div-input2 {
        display: inline-block;
        width: 25ch;
        height: 5ch;
        margin-left: auto;
        margin-right: auto;
        border-top: 1px solid var(--select-border);
        border-bottom: 1px solid var(--select-border);
        padding: 0.25em 0.5em;
        font-size: 1rem;
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
        border: 1px solid var(--select-border);
        border-radius: 0.25em;
  
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
        border: 1px solid var(--select-border);
        border-radius: 0.25em;
      }

      #div-saida {
        border: 1px solid var(--select-border);
        border-radius: 0.25em;
      }
  
      #div-saida2 {
        float: right;
        border-right: 1px solid var(--select-border);
        border-radius: 0.25em;
  
        p {
          margin-left: 3px;
          font-size: 0.7em;
          font-weight: 600;
          float: left;
        }
      }
  
      button {
        margin-left: auto;
        margin-right: auto;
        margin-top: 190px;
        font-size: 3vw;
        width: 40%;
        height: 8vh;
      }
    }

    @media (max-width: 600px) {
      > img {
        margin-top: 5px;
        margin-right: 5px;
        margin-left: 6vw;
      }

      .div-input {
        font-size: 1.2rem;
        margin-left: 18vw;
      }

      button {
        font-size: 4vw;
        width: 50%;
        height: 8vh;
      }
    }

    @media (max-width: 500px) {
      .div-input {
        margin-left: 15vw;
      }
    }

    @media (max-width: 450px) {
      .div-input {
        margin-left: 10vw;
      }
    }
  }
`;

export const TituloAgendamento = styled.div`
    margin-bottom: 65px;
`;

export const Mesa = styled.div`
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 20pc;
    background-color: grey;
    text-align: center;        
    color: white;
`;

export const MesaOcupada = styled.div`
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 20pc;
    background-color: grey;
    text-align: center;        
    color: white;
    cursor: not-allowed;
`;