import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#0d47a1',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
      footer: '#2196f3'

    },
  },
});

export default theme;
