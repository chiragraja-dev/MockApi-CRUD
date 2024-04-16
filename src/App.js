
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './Component/Create';
import Home from './Component/Home';
import Edit from './Component/Edit';
import { useState } from 'react';


function App() {
  const [editData, setEditData] = useState("")
  //callback function
  let name = "vaibhav"
  //function declaration
  const getEditData = (data) => {

    setEditData(data)

  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Create />} /> */}
          <Route path="/" element={<Home getEditData={getEditData} firstName={name} />} />
          <Route path="/Edit" element={<Edit editData={editData} />} />
          <Route path="/Edit/:id" element={<Edit editData={editData} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
