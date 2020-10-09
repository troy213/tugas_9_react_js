import React, { Component } from 'react';
import { Row, Col, Container, Nav, NavDropdown, Navbar, Button, Form, FormControl,
  Breadcrumb, Spinner, Tab, Tabs, Table, ProgressBar, Pagination, Popover,
  OverlayTrigger, Collapse } from 'react-bootstrap';

const transfer = [
  {
  	nama: "marouane fellaini",
  	tim: "manchester united",
  	transfer: "shandong luneng",
  	proses: 85
  },
  {
  	nama: "luis nani",
  	tim: "sporting cp",
  	transfer: "orlando city",
  	proses: 55
  },
  {
  	nama: "marek hamsik",
  	tim: "napoli",
  	transfer: "dalian yifang",
  	proses: 95
  },
  {
  	nama: "sardar azmoun",
  	tim: "rubin kazan",
  	transfer: "zenit st petersburg",
  	proses: 100
  },
  {
  	nama: "michy batshijayi",
  	tim: "chelsea",
  	transfer: "crystal palace",
  	proses: 50
  },
  {
  	nama: "lucas piazon",
  	tim: "chelsea",
  	transfer: "chievo",
  	proses: 100
  }
];

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Informasi Website</Popover.Title>
    <Popover.Content>
      Website ini dibuat untuk memudahkan dalam pencarian informasi terkini
      tentang berita olahraga
    </Popover.Content>
  </Popover>
);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      buka: false
    }
  }

  render(){
    return(
      <Container fluid>
        <Row>
          <Col>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand href="#home">Akses Sport</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Berita</Nav.Link>
                  <Nav.Link href="#link">Live Scores</Nav.Link>
                  <NavDropdown title="Piala & Liga" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#link">Transfer Pemain</Nav.Link>
                  <Nav.Link href="#link">Tim</Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-info">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col xs={{ span:4, offset:8 }} >
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Liga Inggris</Breadcrumb.Item>
                <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Rumor Transfer Pemain</h3>
            </Col>
            <Col style={{textAlign:"right"}}>
              <Spinner animation="border" variant="success" />
              <Spinner animation="grow" variant="success" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Tabs defaultActiveKey="transfer" id="uncontrolled-tab-example"
                className="nav-justified">
                <Tab eventKey="transfer" title="Semua Transfer">
                </Tab>
                <Tab eventKey="inggris" title="Liga Primer Inggris">
                </Tab>
                <Tab eventKey="seriea" title="Serie A">
                </Tab>
                <Tab eventKey="primera" title="Divisi Primera">
                </Tab>
                <Tab eventKey="bundesliga" title="Bundesliga">
                </Tab>
                <Tab eventKey="indonesia" title="Liga 1 Indonesia">
                </Tab>
              </Tabs>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nama Pemain</th>
                    <th>Tim</th>
                    <th>Transfer</th>
                    <th>Proses Transfer</th>
                  </tr>
                </thead>
                <tbody>
                  { transfer.map((value,index) => {
                    return(
                        <tr>
                          <td>{index +1}</td>
                          <td>{value.nama.toUpperCase()}</td>
                          <td>{value.tim.toUpperCase()}</td>
                          <td>{value.transfer.toUpperCase()}</td>
                          <td>
                            <ProgressBar animated now={value.proses}
                              label={`${value.proses}%`} />
                          </td>
                        </tr>
                    );
                  })}
                </tbody>
              </Table>
              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </Col>
          </Row>
          <Row>
            <Col>
              <table>
                <tr>
                  <td>
                    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                      <Button variant="primary">Informasi</Button>
                    </OverlayTrigger>
                  </td>
                  <td>
                    <Button variant="primary" onClick={()=>this.setState({ buka: !this.state.buka })}>
                    Versi Website
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <Collapse in={this.state.buka}>
                      <p>Akses Sport V1.0</p>
                    </Collapse>
                  </td>
                </tr>
              </table>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default App;
