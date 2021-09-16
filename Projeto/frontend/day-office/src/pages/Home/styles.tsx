import styled from "styled-components";

export const PageHome = styled.div`
   height: 100vh;
   background: linear-gradient(180deg, #FFFFFF 22.51%, #E4CAFF 100%);

   header {
      background-color: #FFF;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 74.67px;

      ul {
         list-style: none;
         display: flex;
      }

      li {
         margin-right: 49px;
      }
   }

   main {
    .titles {
        background-color: #FFF;
        display: flex;
        justify-content: space-around;

        .ativo {
            box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
         }

        div {
            width: 540px;
            height: 92px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    h1 {
        font-size: 24px;
        font-weight: normal;
    }

    input:focus {
        outline: none;
    }

    .container-eventos {
        display: flex;
        align-items: flex-end;
        margin: 0 165px;
        box-sizing: border-box;
        margin-top: 32px;

        h2 {
        width: 445px;
        border-bottom: 2px solid #FE4400;
        padding-bottom: 18px;
        }

        div {
        margin: 0 31px 0 29px;
        border: 1.5px solid #AAAAAA;
        border-radius: 30px;
        background-color: #FFF;
        width: 445px;
        height: 50px;
        display: flex;
        align-items: center;
        }

        label {
        margin-left: 25px;
        }

        input {
        width: 400px;
        height: 48px;
        border-radius: 30px;
        border:none;
        padding-left: 36px;
        box-sizing: border-box;
        
        }
    }

    h2 {
        font-size: 24px;
        display: inline;
        font-weight: 400;
    }

    button {
        height: 48px;
        width: 105.16px;
        font-family: Roboto;  
        text-transform: uppercase;
        letter-spacing: 1.19px;
        border: none;
        border-radius: 50px;
        background-color: #404099;
        color: #fff;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);
    }
   }
`;