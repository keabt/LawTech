import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import SignaturePad from 'react-signature-canvas';
import styles from './SignContract.css';
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import CreatePDF from '../../components/CreatePDF';

function SignContract() {
    const [trimmedDataURL, setTrimmedDataURL] = useState(null);
    const sigPad = useRef();
  
    const clear = () => {
      sigPad.current.clear();
      setTrimmedDataURL(null);
    };
  
    const trim = () => {
      if (sigPad.current.isEmpty()) {
        return; 
      }
      setTrimmedDataURL(sigPad.current.getTrimmedCanvas().toDataURL('image/png'));
    };
    const saveSignature = () => {
        const link = document.createElement('a');
        link.href = trimmedDataURL;
        link.download = 'signature.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      const takeToPdf = () => {
        const url = 'http://localhost:3000/test';
        window.open(url, '_blank');
    };
  
    return (
      <div className={styles.container}>
        <div className={styles.sigContainer}>
          <SignaturePad
            canvasProps={{width: 500, height: 200, className: 'sigCanvas' }}
            ref={sigPad}
          />

        </div>
        <div>
          
          <Button id='buttonClear' className={styles.buttons} onClick={clear}variant="outlined" startIcon={<DeleteIcon />}>
            clear
        </Button>

          <Button id='buttonConfirm' variant="outlined" className={styles.buttons} onClick={trim} endIcon={<SendIcon />}>
            confirm
        </Button>
        <Button id='buttonSave' variant="outlined" className={styles.buttons} onClick={saveSignature}>
            Save Signature
          </Button>
          <Button id='buttonSave' variant="outlined" className={styles.buttons} onClick={takeToPdf}>
            next 
          </Button>
        </div>
        {trimmedDataURL ? (
          <img className={styles.sigImage} src={trimmedDataURL} alt="Signature" />
        ) : null}
        
      </div>
    );
  }

export default SignContract;