import React, { Component } from 'react';
import {
  Button, Card,
  CardBody, CardFooter,
  CardHeader,
  Col,
  Container, FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText, Label, Modal, ModalBody, ModalFooter, ModalHeader,
  Row
} from 'reactstrap';
import { connect } from 'react-redux';

import { userActions } from '../../../_actions';
class Regindiv extends Component {
  constructor(props) {
    super(props);
    this.toggleSuccess = this.toggleSuccess.bind(this);
    this.state = {
      user: {
        email: '',
        fullName: '',
        username: '',
        password: ''
      },
      submitted: false,
      success: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggleSuccess() {
    this.setState({
      success: !this.state.success,
    });
  }
  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.email && user.fullName && user.username && user.password) {
      this.props.register(user);
      this.setState({ success: true });
    }
  }

  render() {
    const { registering  } = this.props;
    const { user, submitted } = this.state;
    const { alert } = this.props;
    console.log('this.props register', this.props);
    return (
      <div className="app">
        <div className="etama-body">
          <main>
            <Row>
              <div className="position-relative">
                <div style={{position: 'absolute',left: '-0.21%',right: '85.93%',top: '0%',bottom: '93.33%',background: '#C4C4C4'}}>
                  <h2 style={{padding: '15px'}}>Logo etama</h2>
                </div>
                <div>
                  <img className="img-fluid" width={'100%'}
                       src="/assets/img/robson-hatsukami-morgan-NKr0qBAkU4s-unsplash 2@2x.png"/>
                </div>

                <Row className="etama-home-reg">
                  <Col md="12" className="reg-content">
                    <Card  className="etama-card-body">
                      <CardHeader className="etama-card-header">
                        <h1 className="display-3 etama-h1-reg">Daftar</h1>
                      </CardHeader>
                      <CardBody>
                        <form name="form" onSubmit={this.handleSubmit}>
                        <Row>
                          <Col xs="12">
                            <FormGroup>
                              <Label className="etama-txt-clr-1 etama-txt-style-1" htmlFor="name">Nama Lengkap</Label>
                              <Input placeholder="Masukkan Nama Lengkap" className="etama-input etama-txt-style-1" type="text" id="name" required
                                     name="fullName" value={user.fullName} onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="12">
                            <FormGroup>
                              <Label className="etama-txt-clr-1 etama-txt-style-1" htmlFor="ccnumber">Username</Label>
                              <Input placeholder="Masukkan username" type="text" className="etama-input etama-txt-style-1" id="ccnumber" required
                                     name="username" value={user.username} onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="12">
                            <FormGroup>
                              <Label className="etama-txt-clr-1 etama-txt-style-1" htmlFor="ccnumber">Email</Label>
                              <Input placeholder="Masukkan Email" name="email"
                                     type="text" className="etama-input etama-txt-style-1" id="ccnumber" required
                                     value={user.email} onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="12">
                            <FormGroup>
                              <Label className="etama-txt-clr-1 etama-txt-style-1" htmlFor="ccnumber">Password</Label>
                              <Input placeholder="Masukkan Password" type="text" className="etama-input etama-txt-style-1" id="ccnumber" required
                                     name="password" value={user.password} onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6">

                            {registering ? (
                              <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            ):(
                              <Button className="etma-btn-reg p-2" type="submit" color="primary"><span className="etama-txt-clr-1 etama-txt-style-1 p-5">Daftar</span></Button>
                            )
                            }
                          </Col>

                          <Col md="6">
                            <Label className="etama-txt-clr-1 etama-txt-style-2" htmlFor="ccnumber">
                              Sudah punya akun?
                              Login Disini
                            </Label>
                          </Col>
                        </Row>
                        </form>
                      </CardBody>

                    </Card>
                  </Col>

                </Row>
              </div>
            </Row>
          </main>

          {alert.message &&
          <Modal isOpen={this.state.success} toggle={this.toggleSuccess}
                 className={this.props.className}>
            <ModalHeader toggle={this.toggleSuccess}>{alert.message}</ModalHeader>
          </Modal>
          }


        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { registering } = state.registration;
  const { alert } = state;
  return { registering,alert };
}

const actionCreators = {
  register: userActions.register
}

export default connect(mapState, actionCreators)(Regindiv);
