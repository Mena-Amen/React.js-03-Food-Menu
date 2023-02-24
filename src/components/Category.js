import React from "react";
import { Row, Col } from "react-bootstrap";

const Category = ({ filterByCategory, allCategory }) => {
  // To Filter By Category
  const onFilter = (cat) => {
    filterByCategory(cat);
  };
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        {allCategory.length >= 1 ? (
          allCategory.map((cat) => {
            return (
              <div>
                <button
                  onClick={() => onFilter(cat)}
                  style={{ border: "1px solid #b45b35" }}
                  className="cat-btn mx-2"
                >
                  {cat}
                </button>
              </div>
            );
          })
        ) : (
          <h4>لا يوجد تصنيفات</h4>
        )}
      </Col>
    </Row>
  );
};

export default Category;
