import styled from "styled-components";

export const PageHome = styled.div`
   height: 100vh;
   background: linear-gradient(180deg, #FFFFFF 22.51%, #E4CAFF 100%);
   main {

      .titles {
         background-color: #FFF;
         display: flex;
         justify-content: center;
         border-top: 0.5px solid rgba(126, 126, 126, 0.26);

         .ativo {
            box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
            transition: 0.23s
         }

         div {
            width: 40vw;
            height: 10vh;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
         }
      }

      h1 {
         font-size: 4vh;
         font-weight: normal;
      }

      input:focus {
         outline: none;
      }

      .container-eventos {
         display: flex;
         align-items: flex-end;
         margin: 0 9vw;
         box-sizing: border-box;
         margin-top: 3vw;

         h2 {
            width: 28vw;
            border-bottom: 2px solid #FE4400;
            padding-bottom: 1.8vh;
         }

         div {
            margin: 0 31px 0 29px;
            border: 1.5px solid #AAAAAA;
            border-radius: 30px;
            background-color: #FFF;
            width: 34vw;
            height: 8vh;
            display: flex;
            align-items: center;
         }

         label {
            margin-left: 25px;
         }

         input {
            width: 34vw;
            height: 7vh;
            border-radius: 30px;
            border:none;
            padding-left: 2vw;
            box-sizing: border-box;
            
         }
      }

      h2 {
         font-size: 4vh;
         display: inline;
         font-weight: 400;
      }

      button {
         height: 8vh;
         width: 10vw;
         text-transform: uppercase;
         letter-spacing: 1.19px;
         border: none;
         border-radius: 50px;
         background-color: #404099;
         color: #fff;
         box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);
      }
   }


   @media (max-width: 900px) {
      .container-eventos {
         div {
            width: 10vw;   
         }

         button {
            grid-row-start: 1;
            grid-column-start: 1;
            width: 15vw;
         }
      }
   }

   @media (max-width: 700px) {
      main {
         .titles {
            h1 {
               font-size: 3.5vh;
            }

            div {
               width: 50vw;
            }
         }

         .container-eventos {
            display: grid;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr;
            margin: 0 5vw;
            margin-top: 2vw;

            h2 {
               text-align: center;
               grid-row-start: 2;
               width: 85vw;
            }

            div {
               grid-row-start: 1;
               grid-column-start: 1;
               margin-left: 0;
               width: 60vw
            }

            button {
               grid-row-start: 1;
               grid-column-start: 1;
               margin-left: 65vw;
               width: 20vw;
            }
         }
      }
   }
`;

export const Evento = styled.div`
    margin: 0 auto;
    border: 1px solid #4B4FA1;
    font-size: 14px;
`;