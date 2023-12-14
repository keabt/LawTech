import React from 'react';
import CreatePDF from './components/CreatePDF';
import { PDFDownloadLink } from "@react-pdf/renderer";

function Test() {
  return (
    <div className="App">
      <PDFDownloadLink document={<CreatePDF />} fileName="contract.pdf">
    {({ blob, url, loading, error }) =>
      loading ? 'Loading document...' : 'Download PDF'
    }
  </PDFDownloadLink>
    </div>
  )
}

export default Test