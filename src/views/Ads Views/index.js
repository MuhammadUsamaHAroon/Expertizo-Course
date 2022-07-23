import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "../Ads Views/index.css";
import { adsData, uploadImage } from '../../Config/index'
import { async } from "@firebase/util";
export default function AdsView() {
    const [imageUri, setImageUri] = useState()
  const [adsDetails, setAdsDetails] = useState({
    title: "",
    description: "",
    price: "",
  });

  const onHandleChange = (name, val) => {
    setAdsDetails({ ...adsDetails, [name] : val })
}

const createAds = async () => {
    try{
        console.log(adsDetails) 
        const url = await uploadImage(imageUri)
        const result1 = await adsData(adsDetails)
    }
    catch (e) {
        console.log(e.message)
    }
}
  return (
    <>
      <Row>
        <Col>
          <div className="create-ads-box">
            <Row>
              <Col xl={12}>
                <span>Select and Add Your Image</span>
              </Col>
              <Col>
                <input
                className="form-control mt-2 "
                  type="file"
                  onChange={(e) => setImageUri(e.target.files[0])}
                />
              </Col>
            </Row>
            <Row>
              <Col
                xl={6}
                lg={6}
                md={8}
                sm={10}
                xs={10}
                style={{ margin: "auto" }}
              >
                <input
                  placeholder="Title..."
                  className="form-control mt-4"
                  type='text'
                  value={adsDetails.title}
                  name='title'
                  onChange={(e) => onHandleChange('title', e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col
                xl={6}
                lg={6}
                md={8}
                sm={10}
                xs={10}
                style={{ margin: "auto" }}
              >
                <input
                  placeholder="Description..."
                  className="form-control mt-4"
                  type='text'
                  value={adsDetails.description}
                  name='description'
                  onChange={(e) => onHandleChange('description', e.target.value)}
                />
              </Col>
            </Row>{" "}
            <Row>
              <Col
                xl={6}
                lg={6}
                md={8}
                sm={10}
                xs={10}
                style={{ margin: "auto" }}
              >
                <input placeholder="Price..."
                 className="form-control mt-4"
                 type='text'
                  value={adsDetails.price}
                  name='price'
                  onChange={(e) => onHandleChange('price', e.target.value)}
                  />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className="mt-4" onClick={createAds}>Create</Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
}
