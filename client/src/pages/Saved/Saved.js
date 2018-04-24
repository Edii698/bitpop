import React, { Component } from "react";
// import Article from "../../components/Article";
import Footer from "../../components/Footer";
import FabricCanvas from "../../components/FabricCanvas";
import TemplateList from "../../components/TemplateList";
import { headlist, eyeslist } from '../../images/templates/index';
// import API from "../../utils/API";
import { fabric } from "fabric";
import { Card, CardTitle, Col, Row, Container, Button, Icon, Modal } from 'react-materialize'
// import { Canvas } from 'react-fabricjs';
import "./Saved.css";

// const canvas = new fabric.Canvas('c');

class Saved extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeProperty: null
    };
  }

  addToCanvas = (imgElement, property_type, z_Index) => {

    var imgInstance = new fabric.Image(imgElement, {
      left: 0,
      top: 0,
      width: 400,
      height: 400,
      the_type: property_type,
      zIndex: z_Index
    });

    this.setState({ activeProperty: imgInstance });

  }

  render() {
    return (
      <div>
          <Container>
            <Row>
              <Col s={12} m={6}>
                <h3 id="userName">User Name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, magni ex vitae quia mollitia dignissimos!</p>
              </Col>
              <Col s={12} m={6}>
                <div className="center-align">
                    <Button id="create-btn" className="#ff8f00 amber darken-3" waves='light'>Create New Character<Icon left>brush</Icon></Button>
                </div>
                <div className="center-align">
                    <Button id="orders-btn" className="#ff8f00 amber darken-3" waves='light'>View Characters<Icon left>insert_emoticon</Icon></Button>
                </div>
                <div className="center-align">
                    <Button id="orders-btn" className="#ff8f00 amber darken-3" waves='light'>View Orders<Icon left>view_module</Icon></Button>
                </div>  
              </Col>
            </Row>
        </Container>  

        <Row id="toCreate" className="#b3e5fc light-blue lighten-4">
          <Container>
            <Row>
              <Col s={6} className=''>
                <Row>
                  <Row> 
                    <Col s={6} className='center-align'>
                            <Modal className="modal-btn"
                              header='Modal Header'
                              trigger={<Button className='option-btn' waves='light'>Head</Button>}>
                              <TemplateList
                                data={headlist}
                                property_type="head"
                                zIndex={0}
                                addtocanvas={this.addToCanvas}
                              />
                            </Modal>
                      </Col>      

                    <Col s={6} className='center-align right-btn'>    
                            <Modal
                              header='Modal Header'
                              trigger={<Button className='option-btn' waves='light'>Eyes</Button>}>
                              <TemplateList
                                data={eyeslist}
                                property_type="eyes"
                                zIndex={1}
                                addtocanvas={this.addToCanvas}
                              />
                            </Modal>
                      </Col>
                  </Row>      
                        
                  <Row>
                        <Col s={6} className='center-align'>
                          <Button className='option-btn' waves='light'>Hair</Button>
                        </Col>
                    <Col s={6} className='center-align right-btn'>
                          <Button className='option-btn' waves='light'>Nose</Button>
                        </Col>
                  </Row> 

                  <Row> 
                    <Col s={6} className='center-align'>
                          <Button className='option-btn' waves='light'>Mouth</Button>
                        </Col>
                    <Col s={6} className='center-align right-btn'>   
                          <Button className='option-btn' waves='light'>Extras</Button>
                        </Col>
                  </Row>        
                      
                    
                </Row>
              </Col>  
              <Col s={6} className='home-info center-align'>
                <FabricCanvas
                  activeProperty={this.state.activeProperty}
                />
                
              </Col>
            </Row>
          </Container>
        </Row>

        <Row className="">
            <Container>
              <Row>
                  <Col s={12} m={4} className='home-info'>
                    <Card header={<CardTitle reveal image={"https://image.freepik.com/free-vector/pack-of-colorful-square-emoticons_23-2147589525.jpg"} waves='light' />}
                      title="Card Title"
                      reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                      <p><a href="#">This is a link</a></p>
                    </Card>
                  </Col>
                  <Col s={12} m={4} className='home-info'>
                    <Card header={<CardTitle reveal image={"https://image.freepik.com/free-vector/pack-of-colorful-square-emoticons_23-2147589525.jpg"} waves='light' />}
                      title="Card Title"
                      reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                      <p><a href="#">This is a link</a></p>
                    </Card>
                  </Col>
                  <Col s={12} m={4} className='home-info'>
                    <Card header={<CardTitle reveal image={"https://image.freepik.com/free-vector/pack-of-colorful-square-emoticons_23-2147589525.jpg"} waves='light' />}
                      title="Card Title"
                      reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                      <p><a href="#">This is a link</a></p>
                    </Card>
                  </Col>
              </Row>
            </Container>
        </Row>
        <Row className="center-align">
          <h4>Lorem ipsum dolor sit amet.</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit necessitatibus magni porro delectus!</p>
        </Row>
          
            
          <Footer />
      </div>
    );
  }
}

export default Saved;
