import React, { Component } from 'react';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {Link} from "react-router-dom";
class Etama extends Component {
  render() {
    return (
      <div className="app">
        <div className="etama-body">
          <main>
              <Row>
                <div className="position-relative">
                  <div style={{position: 'absolute',left: '-0.21%',right: '85.93%',top: '0%',bottom: '93.33%',background: '#C4C4C4'}}>
                    <h1 style={{padding: '15px'}}>Logo etama</h1>
                  </div>
                       <div>
                         <img className="img-fluid" width={'100%'}
                              src="/assets/img/robson-hatsukami-morgan-NKr0qBAkU4s-unsplash 2@2x.png"/>
                       </div>

                  <Row className="etama-home-content">
                    <Col md="12">
                      <div className="etama-better">
                        <h2 className="etama-better-h2">Make your</h2>
                      </div>
                      <div className="etama-home-trans">
                        Transportation Management System
                      </div>
                      <div className="etama-better">
                        <p className="etama-better-p">Better</p>
                      </div>
                      <div className="etama-home-nav">
                        <div >
                          <Link to="/register-in" className="nav-link">
                          <Button color="primary" className="etama-home-masuk">
                            Masuk Perusahaan
                          </Button>
                          </Link>
                        </div>
                        <div className="ml-4">
                          <Link to="/register-in" className="nav-link">
                          <Button className="etama-home-register">
                            Daftar Perusahaan
                          </Button>
                          </Link>
                        </div>
                      </div>
                    </Col>

                  </Row>
                </div>
              </Row>
          </main>
        </div>
      </div>
    );
  }
}

export default Etama;
