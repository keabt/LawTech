
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './CreateContract.css'; 

 
function CreateContract() {
  const [currentPage, setCurrentPage] = useState(0);
  const [personInfo, setPersonInfo] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    dob: '',
    address: '',
  });

  const [gameInfo, setGameInfo] = useState({
    title: '',
    genre: '',
    releaseDate: '',
    platform: '',
    signingBonus: '',
    equipment: '',
  });

  const [contractInfo, setContractInfo] = useState({
    contractTitle: '',
    contractDescription: '',
    startDate: '',
    endDate: '',
  });
  const handlePersonInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonInfo({ ...personInfo, [name]: value });
  };

  const handleGameInfoChange = (e) => {
    const { name, value } = e.target;
    setGameInfo({ ...gameInfo, [name]: value });
  };

  const handleContractInfoChange = (e) => {
    const { name, value } = e.target;
    setContractInfo({ ...contractInfo, [name]: value });
  };

  const handleSlideChange = (index) => {
    setCurrentPage(index);
  };
  const handleSubmitPersonInfo = (e) => {
    e.preventDefault();

  };

  const handleSubmitGameInfo = (e) => {
    e.preventDefault();

  };

  const handleSubmitContractInfo = (e) => {
    e.preventDefault();
 
  };


  return (
    <div className="contract-page">
      <div className="top-bar">
        <h1>Create Contract</h1>
      </div>
      <div className="carousel-container">
        <Carousel showThumbs={false} showStatus={false} onChange={handleSlideChange} selectedItem={currentPage}>
          <div className="carousel-page">
            <h2>Person Information</h2>
            <form onSubmit={handleSubmitPersonInfo}>
          <input type="text" name="name" placeholder="Name" value={personInfo.name} onChange={handlePersonInfoChange} /><br/>
          <input type="email" name="email" placeholder="Email" value={personInfo.email} onChange={handlePersonInfoChange} /><br/>
          <input type="tel" name="phoneNumber" placeholder="Phone Number" value={personInfo.phoneNumber} onChange={handlePersonInfoChange} /><br/>
          <button type="submit">Next</button>
        </form>
            
          </div>

          <div className="carousel-page">
            <h2>Game Details</h2>
            <form onSubmit={handleSubmitGameInfo}>
          <input type="text" name="title" placeholder="Game Title" value={gameInfo.title} onChange={handleGameInfoChange} />
          <button type="submit">Next</button>
        </form>
          </div>

          <div className="carousel-page">
            <h2>Contract Info</h2>
            <form onSubmit={handleSubmitContractInfo}>
          <input type="text" name="contractTitle" placeholder="Contract Title" value={contractInfo.contractTitle} onChange={handleContractInfoChange} />
          <button type="submit">Submit</button>
        </form>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CreateContract







