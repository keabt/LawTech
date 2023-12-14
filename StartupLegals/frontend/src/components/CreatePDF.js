import React from 'react'
import Logo from '../images/logo.png'
import Signature from '../images/signature.png'

  import {Font} from '@react-pdf/renderer';
  import { Document, Page, Text, PDFDownloadLink, StyleSheet, Image } from '@react-pdf/renderer';

  const styles = StyleSheet.create({
    page: {
      padding: 20,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 15,
      textDecoration: 'underline',
    },
    logo: {
      width: 100,
      height: 50,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 15,
    },
    sig: {
      width: 100,
      height: 50,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 15,
    },
    content: {
      fontSize: 12,
      marginBottom: 10,
      lineHeight: 1.5,
      textAlign: 'justify',
    },
  });

function CreatePDF( { trimmedDataURL }) {
  
    return (
      <Document>
          <Page size="A4" style={styles.page}>
          <Image style={styles.logo} src={Logo} />

      <Text style={styles.title}>Contract1</Text>
        <Text style={styles.content}>
        [Date of Agreement] 
        {'\n\n'}
        This Agreement ("Agreement") is made and entered into on this [Insert Date] between [Name of Professional Gamer], residing at [Address] ("Gamer"), and [Company/Individual Hiring], having its principal place of business at [Address] ("Hirer").
        {'\n\n'}
        Services:
        {'\n\n'}
        The Gamer agrees to provide gaming services to the Hirer for the purpose of [Specify the Purpose or Event]. The services may include, but are not limited to, gameplay, streaming, promotional appearances, and participation in tournaments.
        {'\n\n'}
        Compensation:
        {'\n\n'}
        In consideration for the services rendered, the Hirer agrees to compensate the Gamer with a payment of [Specify Amount or Method of Compensation]. Payment shall be made within [Specify Timeframe] from the completion of the services.
        {'\n\n'}
        Non-Payment and Remedies:
        {'\n\n'}
        In the event the Gamer completes the agreed-upon services, and the Hirer fails to provide the agreed compensation within [Specify Timeframe], the Gamer is entitled to take legal action for recovery of owed payments and may impose late fees of [Specify Amount or Percentage] per [Specify Time Period] until full payment is received.
        {'\n\n'}
        Terms and Conditions:
        {'\n\n'}
        a. Commencement: The services will commence on [Start Date] and conclude on [End Date], unless otherwise extended or terminated as per the terms of this Agreement.
        {'\n'}
        b. Obligations of Gamer: The Gamer shall perform the services diligently and in a professional manner. The Gamer shall also comply with any reasonable requests or guidelines provided by the Hirer.
        {'\n'}
        c. Intellectual Property: Any content, including but not limited to streams, videos, or promotional material created during the provision of services, shall belong to [Specify Ownership].
        {'\n'}
        d. Confidentiality: Both parties agree not to disclose any confidential information obtained during the term of this Agreement to any third party without prior written consent.
        {'\n'}
        e. Modifications: Any modifications to this Agreement must be made in writing and signed by both parties.
        {'\n'}
        f. Termination: Either party reserves the right to terminate this Agreement upon [Specify Termination Conditions] with [Specify Notice Period, if any].
        {'\n\n'}
        Governing Law and Jurisdiction:
        {'\n\n'}
        This Agreement shall be governed by and construed in accordance with the laws of England and Wales, and the parties agree to submit to the exclusive jurisdiction of the courts of England and Wales.
        {'\n\n'}
        Entire Agreement:
        {'\n\n'}
        This Agreement constitutes the entire understanding and agreement between the parties concerning the subject matter herein and supersedes all prior agreements, understandings, negotiations, and discussions.
        {'\n\n'}
        IN WITNESS WHEREOF, the parties hereto have executed this Agreement as of the date first above written.
        {'\n\n'}
        [Signature of Gamer] 
        {'\n\n'}

        <Image style={styles.sig} src={Signature} /> 
        {'\n\n'}
        [Date of Signature] 
      </Text>
      </Page>
    </Document>
    );
  };

export default CreatePDF