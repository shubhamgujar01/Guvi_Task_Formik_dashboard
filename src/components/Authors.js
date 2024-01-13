import React from 'react';
import Navcomp from './Navcomp';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { Formik, Form, Field, setIn } from 'formik';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import DatePicker from 'react-datepicker'; // Import DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker styles
import { AuthorSchema } from '../Schemas/AuthorSchema';
import EditModalAuthor from './EditModalAuthor';
import { Form as FormBootstrap, FormGroup, FormControl, FormLabel, FormTextarea } from 'react-bootstrap';




const Authors = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showEditModal,setShowEditModal] = useState(false);
    const [index,setIndex] = useState(null)


    const [AuthorArr, setAuthorArr] = useState([])

    const handleFormSubmit = (values, actions) => {
        // Add the submitted Author to AuthorArr
        setAuthorArr([...AuthorArr, values]);

        // Reset the form after adding the Author
        actions.resetForm();
    };

    const HandleEdit = (id) =>{

        setIndex(id);
        setShowEditModal(true)

    }

    const HandleDlt = (id) =>{
      const newArr =  AuthorArr.filter((Author,index) =>{
            if(index!==id){
                return Author
            }
        })

        setAuthorArr(newArr)
        
    }

   

    const updateAuthor = (updatedAuthorDetails) =>{
        const updatedAuthor = [...AuthorArr]

        updatedAuthor[index] = updatedAuthorDetails
        setAuthorArr(updatedAuthor)
    }





    return (
        <div>
            <Navcomp />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
               <Link to='/'> <Button variant="light" style={{ marginRight: '10px' }}>Books</Button></Link>
             <Link to='/author'>  <Button variant="dark">Authors</Button></Link> 
            </div>

            <Container>
                <h3 style={{ marginTop: '30px' }}>Authors</h3>
                <Button variant="success" onClick={handleShow}>Add Authors</Button>
                <hr></hr>

                {
                    AuthorArr.map((Author,index) => {
                        return (
                            <Card style={{ width: '100%' }}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', left: '90%',top: '50px' }}>

                                    <i class="fa-solid fa-trash" style={{marginRight: '20px'}} onClick={()=>HandleDlt(index)} ></i>
                                    <i class="fa-solid fa-pen-to-square" onClick={()=>HandleEdit(index)}></i>

                                </div>
                                <Card.Body>
                                    <Card.Title>Author Name: {Author.Name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Author's DoB: {Author.DOB}</Card.Subtitle>
                                    <Card.Text>
                                      {Author.Biography}
                                    </Card.Text>

                                    


                                </Card.Body>


                            </Card>
                        )
                    })
                }
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{
                            Name: '',
                            DOB: '',
                            Biography: ''
                           
                        }}
                        validationSchema={AuthorSchema}
                        onSubmit={handleFormSubmit}
                    >
                        {({ errors, touched, values, setFieldValue }) => (
                            <Form className="my-form">
                                <FormGroup controlId="Name">
                                    <FormLabel>Name</FormLabel>
                                    <Field as={FormControl} name="Name" />
                                    {errors.Name && touched.Name ? (
                                        <div className="error" style={{ color: 'red' }}>{errors.Name}</div>
                                    ) : null}
                                </FormGroup>
                                <FormGroup controlId="DOB">
                                    <FormLabel>DOB</FormLabel>
                                    <Field as={FormControl} name="DOB" />
                                    {errors.DOB && touched.DOB ? (
                                        <div className="error" style={{ color: 'red' }}>{errors.DOB}</div>
                                    ) : null}
                                </FormGroup>
                                <FormGroup controlId="Biography">
                                    <FormLabel>Biography</FormLabel>
                                    <Field as="textarea" className="form-control" name="Biography" />
                                    {errors.Biography && touched.Biography ? (
                                        <div className="error" style={{ color: 'red' }}>{errors.Biography}</div>
                                    ) : null}
                                </FormGroup>
                                
                                <Button variant="primary" type="submit" style={{marginTop: '20px'}}>Submit</Button>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
               
            </Modal>

            <EditModalAuthor 
            show={showEditModal}
            handleClose={() => setShowEditModal(false)}
            AuthorDetails={AuthorArr[index]}
            updateAuthor={updateAuthor}
             />
        </div>
    )
}

export default Authors;
