
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componetes/Header/Header';
import Home from './componetes/Home/Home';
import ReviewPage from './componetes/ReviewPage/ReviewPage';

import Dashboard from './componetes/DashBoard/DashBoard';
import Blog from './componetes/Blog/Blog';
import About from './componetes/About/About';
import NotFund from './componetes/NotFund/NotFund';

function App() {
  return (
    <div >
      <Header />
      <Routes> 
       <Route path="/" element={<Home />}></Route>
       <Route path='/reviewpage' element={ <ReviewPage></ReviewPage>}></Route>
       <Route path='/dashboard' element={<Dashboard />}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/about' element={<About />}></Route>
       <Route path='*' element={<NotFund />}></Route>
      </Routes>
    </div>
  );
}

export default App;
