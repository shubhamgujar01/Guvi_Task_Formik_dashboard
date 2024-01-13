import React from 'react';
import Navcomp from './Navcomp';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { Formik, Form, Field, setIn } from 'formik';

import Card from 'react-bootstrap/Card';
import DatePicker from 'react-datepicker'; // Import DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker styles
import { bookSchema } from '../Schemas/bookSchema';

import { Link } from 'react-router-dom';
import { Form as FormBootstrap, FormGroup, FormControl, FormLabel, FormTextarea } from 'react-bootstrap';
import EditModal from './EditModal';




const Books = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showEditModal,setShowEditModal] = useState(false);
    const [index,setIndex] = useState(null)


    const [bookArr, setBookArr] = useState([])

    const handleFormSubmit = (values, actions) => {
        // Add the submitted book to bookArr
        setBookArr([...bookArr, values]);

        // Reset the form after adding the book
        actions.resetForm();
    };

    const HandleEdit = (id) =>{

        setIndex(id);
        setShowEditModal(true)

    }

    const HandleDlt = (id) =>{
      const newArr =  bookArr.filter((book,index) =>{
            if(index!==id){
                return book
            }
        })

        setBookArr(newArr)
        
    }

   

    const updateBook = (updatedBookDetails) =>{
        const updatedBook = [...bookArr]

        updatedBook[index] = updatedBookDetails
        setBookArr(updatedBook)
    }





    return (
        <div>
            <Navcomp />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
              <Link to='/'> <Button variant="dark" style={{ marginRight: '10px' }}>Books</Button></Link> 
              <Link to='/author'>  <Button variant="light">Authors</Button></Link>
            </div>

            <Container>
                <h3 style={{ marginTop: '30px' }}>Books</h3>
                <Button variant="success" onClick={handleShow}>Add Books</Button>
                <hr></hr>

                {
                    bookArr.map((book,index) => {
                        return (
                            <Card style={{ width: '100%' }}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', left: '90%',top: '50px' }}>

                                    <i class="fa-solid fa-trash" style={{marginRight: '20px'}} onClick={()=>HandleDlt(index)} ></i>
                                    <i class="fa-solid fa-pen-to-square" onClick={()=>HandleEdit(index)}></i>

                                </div>
                                <Card.Body>
                                    <Card.Title>Book Title: {book.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Author's Name: {book.Author}</Card.Subtitle>
                                    <Card.Text>
                                        ISBN No: {book.ISBN}
                                    </Card.Text>

                                    <Card.Text>
                                        Date Of Publish: {book.date}
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
                            title: '',
                            Author: '',
                            ISBN: '',
                            date: null
                        }}
                        validationSchema={bookSchema}
                        onSubmit={handleFormSubmit}
                    >
                        {({ errors, touched, values, setFieldValue }) => (
                            <Form className="my-form">
                                <FormGroup controlId="title">
                                    <FormLabel>Title</FormLabel>
                                    <Field as={FormControl} name="title" />
                                    {errors.title && touched.title ? (
                                        <div className="error" style={{ color: 'red' }}>{errors.title}</div>
                                    ) : null}
                                </FormGroup>
                                <FormGroup controlId="Author">
                                    <FormLabel>Author</FormLabel>
                                    <Field as={FormControl} name="Author" />
                                    {errors.Author && touched.Author ? (
                                        <div className="error" style={{ color: 'red' }}>{errors.Author}</div>
                                    ) : null}
                                </FormGroup>
                                <FormGroup controlId="ISBN">
                                    <FormLabel>ISBN</FormLabel>
                                    <Field as={FormControl} name="ISBN" />
                                    {errors.ISBN && touched.ISBN ? (
                                        <div className="error" style={{ color: 'red' }}>{errors.ISBN}</div>
                                    ) : null}
                                </FormGroup>
                                <FormGroup controlId="date">
                                    <FormLabel>date</FormLabel>
                                    <Field as={FormControl} name="date" />
                                    {errors.date && touched.date ? (
                                        <div className="error" style={{ color: 'red' }}>{errors.date}</div>
                                    ) : null}
                                </FormGroup>
                                <Button variant="primary" type="submit" style={{marginTop: '20px'}}>Submit</Button>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
               
                
            </Modal>

            <EditModal 
            show={showEditModal}
            handleClose={() => setShowEditModal(false)}
            bookDetails={bookArr[index]}
            updateBook={updateBook}
             />
        </div>
    )
}

export default Books;
