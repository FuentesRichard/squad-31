import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
  --orange-first: #FE4400;
  --orange-second: #FC6027;
  --orange-third: #EF653C;
  --orange-fourth: #FE885C;

  --blue-first: #4B4FA1;
  --blue-second: #414099;
  --blue-third: #686DC4;
  --blue-fourth: #96B3F2;

  --black: #303033;
  --grey: #C1C1C1;

  --purple: #4A1A8C;

  --yellow: #FFC91D;

  --select-border: #777;
  --select-focus: blue;
  --select-arrow: var(--select-border);
}

* {
  margin : 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body, input, button, textarea, select {
  font: 400 16px 'Montserrat', sans-serif;
}

button {
  height: 3em;
  width: 200px;
  border-radius: 8px;
  margin-top: 10px;
  font-weight: 500; 
  background-color: #404099;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  &:hover {
      filter: brightness(0.9);
  }       
}

`;