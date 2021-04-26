import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  direction: "ltr",
  typography: {
    htmlFontSize: 10,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Heebo',
      'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main: '#ff7f41',
      light: '#f2f2f2',
    },
    secondary: {
      main: '#97c121'
    },
    error: {
      main: '#F97575'
    }
  },
  overrides: {
    
  }
});