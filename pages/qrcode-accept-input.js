import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import router, { useRouter } from 'next/router';

function App() {

  const [inputText, setInputText] = useState('');
  const [qrCodeText, setQRCodeText] = useState('');
  const router = useRouter();

  // generate QR code
  const generateQRCode = () => {
    setQRCodeText(inputText);
  }

  // download QR code
  const downloadQRCode = () => {
    const qrCodeURL = document.getElementById('qrCodeEl')
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(qrCodeURL)
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
    router.push("/");
  }

  return (
  
        <div className="b py-16 bg-gray-50 px-4 sm:px-6 h-screen w-screen flex justify-center items-center">
        <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
  
    <div className="App">
      <h3>Enter your phone number and click generate QR code </h3>
      <div className="qr-input">
        <input
          type="text"
          placeholder="Enter input"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
        <input
          type="button"
          value="Generate"
          onClick={generateQRCode}
        />
      </div>
      <QRCode
        id="qrCodeEl"
        size={150}
        value={qrCodeText}
      />
      <br />
      <input
        type="button"
        className="download-btn"
        value="Download"
        onClick={downloadQRCode}
        
      />
    </div>
    </div>
    </div>
  );
}

export default App;