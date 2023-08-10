import { createGlobalStyle } from "styled-components";

export const GlobalResponsiveStyle = createGlobalStyle`

/**
* Mobile
*/
/* responsive scrollbar */
@media (max-width:${({ theme }) => theme.media.mobile}){
  body::-webkit-scrollbar {
  width: 0.3rem;
}

body::-webkit-scrollbar-track {
   background-color:transparent;
}
body::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.colors.primary};
}
html {
      font-size: 50%;
}
.grid{
  gap: 3.2rem;
}
.grid-two-column , .grid-three-column, .grid-four-column{
  grid-template-columns: 1fr;
}
}

/**
* Tablet
*/
@media (max-width: ${({ theme }) => theme.media.tab}) {
.container {
    max-width: 130rem;
    padding: 0 3.2rem;
 }
 }
`;
