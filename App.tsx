import React from 'react';
import Routes from './src/routes';
import store from './src/store';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  return(
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App;