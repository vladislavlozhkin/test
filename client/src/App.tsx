import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';
import theme from 'themes/defaultTheme';

import HomePage from 'pages/HomePage';
import ReviewPage from 'pages/ReviewPage';
import GlobalStyle from 'components/GloablStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Router>
        <Switch>
          <Route path="/review">
            <ReviewPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
