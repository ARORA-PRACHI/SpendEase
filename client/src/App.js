import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App">
      <div><Toaster></Toaster></div>
      <Routes>
        <Route path='/' element={<ProtectedRoutes><Home /></ProtectedRoutes>} ></Route>
      </Routes>
    </div>
  );
}



export default App;
