import './App.css';
import UserTable from './UserTable';
import PostRoute from './UserPost';
import Posts from './ViewPost';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/user' element={<UserTable/>}></Route>
          <Route path='/posts/:userId' element={<PostRoute/>}></Route>
          <Route path='/post' element={<Posts/>}></Route>
          <Route path='*' element={<h1>Page Note Found</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
