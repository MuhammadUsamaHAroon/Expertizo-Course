import React from "react";
import "../Fb Feed/index.css";
import { Row, Col } from "react-bootstrap";
import FbImageLibrary from "react-fb-image-grid";
import { BiWorld } from "react-icons/bi";
// import profile from "../../Assets/Images/Photo.jpg"; 
// import { SlackSelector } from 'react-reactions';
import {AiOutlineLike} from 'react-icons/ai'
export default function FbFeed(props) {

  return (
    <>
      <Row
        style={{
          backgroundColor: "#eee",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Col xl={6}lg={6}md={7}sm={10}xs={12} style={{}}>
          <div className="feed-box">
            <Row>
              <Col
                style={{
                  paddingTop: "15px",
                  paddingBottom: "15px",
                  paddingLeft: "20px",
                }}
              >
                <div className="feed-head">
                  <div className="profile">
                    <img
                      src={props.profileDetails.profileImage}
                      className="img-fluid"
                    />
                  </div>
                  <div className="profile-box">
                    <div className="profile-name">
                      <span>{props.profileDetails.profileName}</span>
                    </div>
                    <div className="profile-date">
                      <span>{props.profileDetails.date}</span>
                      <BiWorld
                        color="gray"
                        size={18}
                        style={{
                          marginTop: "5px",
                          marginLeft: "7px",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="profile-caption">
                  <p>{props.profileDetails.userCaption}</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="user-images">
                  <FbImageLibrary images={props.images} width={'100'}/>
                </div>
              </Col>
            </Row>
            <Row><Col>
            {/* <SlackSelector/> */}
            <AiOutlineLike size={25}/>
            </Col></Row>
          </div>
        </Col>
      </Row>
    </>
  );
}