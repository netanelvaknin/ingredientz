import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import GlobalStyles from "./styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "styled-components";
import theme from "./theme/index";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <CssBaseline />
            <App />
          </ThemeProvider>
        </MuiThemeProvider>
      </Router>
    </Suspense>
  </StrictMode>,
  document.getElementById("root")
);
