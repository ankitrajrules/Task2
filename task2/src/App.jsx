import { useState, useEffect } from 'react'
import './App.css'
import React from 'react';
import './App.css';
import Task from './Pages/Task';
import UploadImg from './Pages/Upload';
import Login from './loginPage';
import { BrowserRouter, Route, Routes , Navigate} from 'react-router-dom';
function App() {
  const [token, setToken] = useState();
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <>
      <div className="p-5">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/task" element={<Task />}>
            
          </Route>
          <Route path="/upload" element={<UploadImg />}>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App;
