import React, { useState, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CRUD = () =>{

    const empdata = [{ id: 1, name: 'Said', age: 26, isActive: 1 }];
    const [data, setData] = useState(empdata);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const modifier = (id) =>{
        //alert(id)
        handleShow();
    }
    const supprimer =(id) => {
        if(window.confirm("Vous êtes de supprimer ce collaborateur") == true){
            alert(id)
        }

        //alert(id)
    }

    return(
        <Fragment>
            <Container>
                  <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                  </Row>
                  <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                  </Row>
                </Container>
            <Table striped bordered hover variant="dark">
                  <thead>
                      <tr>
                          <th>#</th>
                          <th>id</th>
                          <th>name</th>
                          <th>age</th>
                          <th>isActive</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                        {data && data.length > 0 ? (
                            data.map((item, index) => (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.isActive ? 'Yes' : 'No'}</td>
                                  <td colSpan={2}>
                                      <bouton className="btn btn-primary" onClick ={()=> modifier(item.id)}>Edit</bouton> &nbsp;
                                      <bouton className="btn btn-danger" onClick ={()=>supprimer(item.id)}>Delete</bouton>
                                  </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={5}>Loading...</td>
                            </tr>
                        )}
                  </tbody>

            </Table>
            <Modal show={show} onHide={handleClose}>
                     <Button variant="primary" onClick={handleShow}>
                        Launch demo modal
                     </Button>
                    <Modal.Header closeButton>
                      <Modal.Title>Modifier cette personne </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={modifier}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
            </Modal>

        </Fragment>
    )

}
export default CRUD





