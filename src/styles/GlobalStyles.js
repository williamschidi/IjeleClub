import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

  html {
    font-size: 62.5%;
  
}
:root{
  --primary-color:#001489;
  /* --secondary-color: #339af0; */
  --secondary-color: #1864ab;
  --intermediate-color : #9e9ea6;
  --intermediate-tint-color:#868e96;
  --intermediate-shade-color : #343a40;
  --white-color: #fff;
  --advertBackground-color : #f8f9fa;
  --SpecialCase-color:#f59f00
}
body{
  font-family: inter;
  
}





`;

export default GlobalStyle;
