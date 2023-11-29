// Clients.js

import React, { useEffect, useCallback } from 'react';
import Header from './Header';
import Column from './Column';
import './clients.css'; // Import your CSS file

//Importing images

import graphy from '../../assets/image 842graphy.png';
import jamoons from '../../assets/WhatsApp Image 2023-11-29 at 19.21.30.jpeg';
import cloons from '../../assets/WhatsApp Image 2023-11-29 at 19.21.31.jpeg';
import blessed from '../../assets/4-removebg-preview 2blessed.png';
import culti from '../../assets/cultivators.png';
import timespro from '../../assets/Timespro_logo_8db0780773 1timespro.png';
import tessolve from '../../assets/tessolve.png';
import amazon from '../../assets/Company Logoamazon.png';
import koshys from '../../assets/koshys.png';
import meraki from '../../assets/GETMAX HR RPO 3meraki.png';
import marina from '../../assets/image 841marina_club.png';
import sa from '../../assets/sacollege.png';
import symbiosis from '../../assets/image 839symbiosis.png';
import satya from '../../assets/oxford.png';
const Clients = () => {
  return (
    <div className='cli-maincontainer' style={{height:'100px'}}>
      <Header />
      <div className="cli-container">
      
        <Column title="Technology Partners" images={[graphy, jamoons, cloons, blessed]} className="1" />
        <Column title="Placements and Trainings" images={[culti,timespro,tessolve,amazon]} className="2" />
        <Column title="Digital Services" images={[koshys,meraki,cloons,marina]} className="3" />
        <Column title="Educational Institutions" images={[koshys,sa,symbiosis,satya]} className="4" />
      </div>
    </div>
  );
};

export default Clients;
