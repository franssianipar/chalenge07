
import './App.css';

import {Provider} from 'react-redux'
import store from './reducer/store';
import {BrowserRouter,Routes,Route} from 'react-router-dom' 

import Header from './component/Header';

import Detail from './pages/Detail';
import Search from './pages/Search';


function App() {

  

  return (
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Header/>}/>
            <Route path='/movie/:id' element={<Detail/>}/>
            <Route path="/search" element={<Search/>}/>  
          </Routes>

      </BrowserRouter>
      

    </Provider>
    
  );
}

export default App;
