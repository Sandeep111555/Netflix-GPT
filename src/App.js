import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appRouter from './components/Body';
import { RouterProvider } from 'react-router-dom';
import appStore from './utils/appStore';


function App() {
return(
  <>
  <Provider store={appStore}>
    <Body/>
  </Provider>
  </>
)
}

export default App;
