import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import { useState } from "react";
import FbFeed from '../src/views/Fb Feed';
import Profile from '../src/Assets/Images/Photo.jpg'
import ImageOne from '../src/Assets/Images/imageOne.jpg';
import ImageTwo from '../src/Assets/Images/imageTwo.jpg';
import ImageThree from '../src/Assets/Images/imageThree.jpg';
import ImageFour from '../src/Assets/Images/imageFour.jpeg';
import ImageFive from '../src/Assets/Images/imageFive.jpg';
import ImageSix from '../src/Assets/Images/imageSix.jpg';
import ImageSeven from '../src/Assets/Images/imageSeven.jpg';
function App() {

  const images = [
    ImageOne,
    ImageTwo,
    ImageThree,
    ImageFour,
    ImageFive,
    ImageSix,
    ImageSeven

  ]
  const profileDetails = {
    profileImage:Profile,
    profileName:'Usama haroon',
    date: new Date(Date.now()).toLocaleString(),
    userCaption:'all things are difficult before they become easy.',
  }
  return (
    <div className="App">
      <Container fluid>
        <FbFeed profileDetails={profileDetails} images={images}/>
      </Container>
    </div>
  );
}

export default App;
