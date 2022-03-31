import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,*::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    -webkit-text-size-adjust: 100%;
    line-height: 1.15;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: euclidCircularB, Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;

    color: #2f313f;
  }

	label {
		font-size: 14px;
		line-height: 20px;
	}

	h1 {
		font-size: 48px;
		line-height: 56px;
	}

	h2,h3,h4,h5 {
		margin: 0;
	}

	h2 {
		font-size: 34px;
		line-height: 40px;
	}

	h3,h4 {
		font-size: 24px;
		line-height: 32px;
	}

	h5 {
		font-size: 20px;
		font-weight: 400;
		line-height: 30px;
	}
`;
