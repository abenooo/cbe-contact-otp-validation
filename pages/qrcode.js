import React from "react";

import { useBarcode } from "react-barcodes";

export default function Index() {
  const { inputRef } = useBarcode({
    value: "187878 785 ddddd eeeeee",
    // format:"CODE39",
  //  format:"codabar",

    options: {
      displayValue :false,
      // format:"CODE39",
      // format:"ITF-14",
      format:"code128",
      background: "#ccffff",
    },
  });

  return (
    <>
      <div className="b py-16 bg-gray-50 px-4 sm:px-6 h-screen w-screen flex justify-center items-center">
        <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
          <h1 px-15>Your ticket barcode is here please click the download button</h1>
          <button className="bg-gray" onClick={downloadQCcode}>Download</button>
          <img ref={inputRef} />
        </div>
      </div>
    </>
  );
}
