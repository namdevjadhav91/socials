import configureStore from '../src/redux/store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import MainPage from 'pages/main/MainPage';
import MainPage from '../src/pages/main/MainPage';


const store = configureStore();
// console.log('store', store.getState());
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <MainPage />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
