import styled from "styled-components";

export const Header = styled.header`
      background-color: #FFF;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 10vh;

      ul {
         list-style: none;
         display: flex;
      }

      li {
         margin-right: 5vw;

         a {
            font-weight: 600;
            color: black;
            text-decoration: none;
          }
      }  
`;