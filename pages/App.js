import React from "react";
// import "./styles.css";

import { useBarcode } from 'react-barcodes';

export default function App() {
  const { inputRef } = useBarcode({
    value: '12345 6789',
    options: {
      background: '#ccffff',
    }
  });
  
  return (
    <div className="App">
      <h1>react-barcodfddes</h1>
      <svg ref={inputRef} />;
    </div>
  );
}
