import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }
        
    #root{
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
`;
