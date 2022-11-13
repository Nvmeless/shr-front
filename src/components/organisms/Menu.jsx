
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
const theme = {
  test:"blue"
}
const MenuStyle = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: red;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */


  /* For Theme */
  color: ${props => props?.theme?.primary}
`
MenuStyle.defaultProps = {
  theme: {
      primary:"white",
      
  }
}


const Menu = () => {
  return (
    <div>
    <MenuStyle>Hello</MenuStyle>
    <ThemeProvider theme={theme}>
    <MenuStyle>
      Hello
    </MenuStyle>
    </ThemeProvider>
    </div>
  )
}


export default Menu;