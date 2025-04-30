import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AdminDashboard = () => {
  return (
    <Container fluid className="pt-5">
      <Row>
        <Col md={4} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Overview</Card.Title>
              <Card.Text>
                Get a quick overview of system metrics and key statistics.
              </Card.Text>
              <Button variant="primary">View Overview</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Manage Users</Card.Title>
              <Card.Text>
                View and manage user accounts and permissions.
              </Card.Text>
              <Button variant="primary">Manage Users</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Reports</Card.Title>
              <Card.Text>
                Generate and view various reports for analytics.
              </Card.Text>
              <Button variant="primary">View Reports</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Recent Activities</Card.Title>
              <Card.Text>
                View recent activities and updates from the system.
              </Card.Text>
              {/* Add recent activity details here */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;


// import { useNavigate } from "react-router-dom";

// function AdminDashboard(){

//     const navigate = useNavigate()
    
    

//     return (
        
     
       
//         <div className="container mt-5">
//                  <header className="bg-dark text-white p-4">
//         <div className="container">
//           <h4 className="display-4">Rent Ease</h4>
      
//         </div>
//         </header>
//          <div className="row">
//            {/* Filter Sidebar */}
//            <div className="col-md-3">
//              <h4>Filters</h4>
//              <div className="mb-3">
//                <h5>Brand</h5>
//                <select className="form-control">
//                  <option>All</option>
//                  <option>Brand 1</option>
//                  <option>Brand 2</option>
//                  <option>Brand 3</option>
//                </select>
//              </div>
//              <div className="mb-3">
//                <h5>Category</h5>
//                <select className="form-control">
//                  <option>All</option>
//                  <option>Category 1</option>
//                  <option>Category 2</option>
//                  <option>Category 3</option>
//                </select>
//              </div>
//              <div className="mb-3">
//                <h5>Amount</h5>
//                <input type="range" className="form-control-range" min="0" max="1000" step="10"/>
//              </div>
//            </div>
   
//            {/* Main Renting Section */}
//            <div className="col-md-9">
//              <h1 className="text-center">Rent Gadgets</h1>
//              <p className="text-center">Find the perfect gadget for your needs and rent it at affordable prices.</p>
//              <div className="row">
//                {/* Example gadget card */}
//                <div className="col-md-4">
//                  <div className="card mb-4 shadow-sm">
//                    <img src="gadget-image-url" className="card-img-top" alt="Gadget" />
//                    <div className="card-body">
//                      <h5 className="card-title">Gadget Name</h5>
//                      <p className="card-text">Brief description of the gadget.</p>
//                      <p className="card-text"><strong>Price:</strong> $XX/day</p>
//                      <a href="#rent-now" className="btn btn-primary">Add To Cart</a>
//                    </div>
//                  </div>
//                </div>
//                         {/* Repeat the above block for more gadgets */}
//                          {/* Example gadget card */}
//                <div className="col-md-4">
//                  <div className="card mb-4 shadow-sm">
//                    <img src="gadget-image-url" className="card-img-top" alt="Gadget" />
//                    <div className="card-body">
//                      <h5 className="card-title">Gadget Name</h5>
//                      <p className="card-text">Brief description of the gadget.</p>
//                      <p className="card-text"><strong>Price:</strong> $XX/day</p>
//                      <a href="#rent-now" className="btn btn-primary">Add To Cart</a>
//                    </div>
//                  </div>
//                </div>
//                         {/* Repeat the above block for more gadgets */}
//                          {/* Example gadget card */}
//                <div className="col-md-4">
//                  <div className="card mb-4 shadow-sm">
//                    <img src="gadget-image-url" className="card-img-top" alt="Gadget" />
//                    <div className="card-body">
//                      <h5 className="card-title">Gadget Name</h5>
//                      <p className="card-text">Brief description of the gadget.</p>
//                      <p className="card-text"><strong>Price:</strong> $XX/day</p>
//                      <a href="#rent-now" className="btn btn-primary">Add To Cart</a>
//                    </div>
//                  </div>
//                </div>
//                         {/* Repeat the above block for more gadgets */}
//                          {/* Example gadget card */}
//                <div className="col-md-4">
//                  <div className="card mb-4 shadow-sm">
//                    <img src="gadget-image-url" className="card-img-top" alt="Gadget" />
//                    <div className="card-body">
//                      <h5 className="card-title">Gadget Name</h5>
//                      <p className="card-text">Brief description of the gadget.</p>
//                      <p className="card-text"><strong>Price:</strong> $XX/day</p>
//                      <a href="#rent-now" className="btn btn-primary">Add To Cart</a>
//                    </div>
//                  </div>
//                </div>
//                         {/* Repeat the above block for more gadgets */}
//                          {/* Example gadget card */}
//                <div className="col-md-4">
//                  <div className="card mb-4 shadow-sm">
//                    <img src="gadget-image-url" className="card-img-top" alt="Gadget" />
//                    <div className="card-body">
//                      <h5 className="card-title">Gadget Name</h5>
//                      <p className="card-text">Brief description of the gadget.</p>
//                      <p className="card-text"><strong>Price:</strong> $XX/day</p>
//                      <a href="#rent-now" className="btn btn-primary">Add To Cart</a>
//                    </div>
//                  </div>
//                </div>
//                         {/* Repeat the above block for more gadgets */}
//                          {/* Example gadget card */}
//                <div className="col-md-4">
//                  <div className="card mb-4 shadow-sm">
//                    <img src="gadget-image-url" className="card-img-top" alt="Gadget" />
//                    <div className="card-body">
//                      <h5 className="card-title">Gadget Name</h5>
//                      <p className="card-text">Brief description of the gadget.</p>
//                      <p className="card-text"><strong>Price:</strong> $XX/day</p>
//                      <a href="#rent-now" className="btn btn-primary">Add To Cart</a>
//                    </div>
//                  </div>
//                </div>
//                         {/* Repeat the above block for more gadgets */}
//                          {/* Example gadget card */}
//                <div className="col-md-4">
//                  <div className="card mb-4 shadow-sm">
//                    <img src="gadget-image-url" className="card-img-top" alt="Gadget" />
//                    <div className="card-body">
//                      <h5 className="card-title">Gadget Name</h5>
//                      <p className="card-text">Brief description of the gadget.</p>
//                      <p className="card-text"><strong>Price:</strong> $XX/day</p>
//                      <a href="#rent-now" className="btn btn-primary">Add To Cart</a>
//                    </div>
//                  </div>
//                </div>
//                         {/* Repeat the above block for more gadgets */}
//                          {/* Example gadget card */}
//                <div className="col-md-4">
//                  <div className="card mb-4 shadow-sm">
//                    <img src="gadget-image-url" className="card-img-top" alt="Gadget" />
//                    <div className="card-body">
//                      <h5 className="card-title">Gadget Name</h5>
//                      <p className="card-text">Brief description of the gadget.</p>
//                      <p className="card-text"><strong>Price:</strong> $XX/day</p>
//                      <a href="#rent-now" className="btn btn-primary">Add To Cart</a>
//                    </div>
//                  </div>
//                </div>
//                         {/* Repeat the above block for more gadgets */}
//                          {/* Example gadget card */}
//                <div className="col-md-4">
//                  <div className="card mb-4 shadow-sm">
//                    <img src="gadget-image-url" className="card-img-top" alt="Gadget" />
//                    <div className="card-body">
//                      <h5 className="card-title">Gadget Name</h5>
//                      <p className="card-text">Brief description of the gadget.</p>
//                      <p className="card-text"><strong>Price:</strong> $XX/day</p>
//                      <a href="#rent-now" className="btn btn-primary">Add To Cart</a>
//                    </div>
//                  </div>
//                </div>
//                         {/* Repeat the above block for more gadgets */}
//                          {/* Example gadget card */}
//                <div className="col-md-4">
//                  <div className="card mb-4 shadow-sm">
//                    <img src="gadget-image-url" className="card-img-top" alt="Gadget" />
//                    <div className="card-body">
//                      <h5 className="card-title">Gadget Name</h5>
//                      <p className="card-text">Brief description of the gadget.</p>
//                      <p className="card-text"><strong>Price:</strong> $XX/day</p>
//                      <a href="#rent-now" className="btn btn-primary">Add To Cart</a>
//                    </div>
//                  </div>
//                </div>
//                         {/* Repeat the above block for more gadgets */}
//                          {/* Example gadget card */}
//                <div className="col-md-4">
//                  <div className="card mb-4 shadow-sm">
//                    <img src="gadget-image-url" className="card-img-top" alt="Gadget" />
//                    <div className="card-body">
//                      <h5 className="card-title">Gadget Name</h5>
//                      <p className="card-text">Brief description of the gadget.</p>
//                      <p className="card-text"><strong>Price:</strong> $XX/day</p>
//                      <a href="#rent-now" className="btn btn-primary">Add To Cart</a>
//                    </div>
//                  </div>
//                </div>
//                         {/* Repeat the above block for more gadgets */}
//                          {/* Example gadget card */}
//                <div className="col-md-4">
//                  <div className="card mb-4 shadow-sm">
//                    <img src="gadget-image-url" className="card-img-top" alt="Gadget" />
//                    <div className="card-body">
//                      <h5 className="card-title">Gadget Name</h5>
//                      <p className="card-text">Brief description of the gadget.</p>
//                      <p className="card-text"><strong>Price:</strong> $XX/day</p>
//                      <a href="#rent-now" className="btn btn-primary">Add To Cart</a>
//                    </div>
//                  </div>
//                </div>
//                         {/* Repeat the above block for more gadgets */}
                        
//              </div>
//            </div>
//          </div>
//        </div>
           
        
//     );

// };

// export default AdminDashboard