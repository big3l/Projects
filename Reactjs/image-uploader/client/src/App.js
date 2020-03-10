import React from 'react';
import FileUpload from "./components/FileUpload";

import './App.css';

function App() {
  return (
    <div className="container mt-4 text-center">
      <h4>
        React File Uploader
      </h4>
      <FileUpload/>
    </div>
  );
}

export default App;
