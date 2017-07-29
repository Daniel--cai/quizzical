import * as React from "react";
import * as ReactDOM from "react-dom";
import  Index from "./components/Index";
import { AppContainer } from 'react-hot-loader'

ReactDOM.render(
    <AppContainer>
        <Index compiler="TypeScript" framework="React" />
    </AppContainer>,
    document.getElementById("app")
);

if (module.hot) {
  module.hot.accept('./components/Index', () => {
    const NextApp = require('./components/Index').default;
    ReactDOM.render(
      <AppContainer> 
        <NextApp compiler="TypeScript" framework="React" />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}