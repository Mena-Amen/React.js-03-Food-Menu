import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
const CardList = ({ itemsData }) => {
  return (
    <Row>
      {itemsData.length >= 1 ? (
        itemsData.map((item) => {
          return (
            <Zoom>
              <Col key={item.id} sm="12" className="mb-3">
                <Card
                  className="d-flex flex-row"
                  style={{ backgroundColor: "#f8f8f8" }}
                >
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src={item.imgUrl}
                  />
                  <Card.Body className="py-5 mx-2">
                    <Card.Title className="d-flex justify-content-between">
                      <div className="card-title">{item.title}</div>
                      <div className="card-price">{item.price}</div>
                    </Card.Title>
                    <Card.Text className="py-2">
                      <div className="card-desc">{item.desc}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Zoom>
          );
        })
      ) : (
        <h3 className="text-center">لا يوجد اصناف</h3>
      )}
    </Row>
  );
};

export default CardList;
