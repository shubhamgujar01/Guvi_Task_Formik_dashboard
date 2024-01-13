import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AuthorSchema } from '../Schemas/AuthorSchema';
import { Formik, Form, Field, setIn } from 'formik';
import { Form as FormBootstrap, FormGroup, FormControl, FormLabel, FormTextarea } from 'react-bootstrap';
const EditModalAuthor = ({show,handleClose,AuthorDetails,updateAuthor}) => {

    const handleFormSubmit = (values) =>{
        updateAuthor(values)
        handleClose();
    }
    return (
        <div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body><Formik
                        initialValues={{
                            Name: (AuthorDetails && AuthorDetails.Name) || '',
                            DOB: (AuthorDetails && AuthorDetails.DOB) || '',
                            Biography: (AuthorDetails && AuthorDetails.Biography) || '',
                          
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
                           
                           <Button variant="primary" type="submit">Submit</Button>
                       </Form>
                        )}
                    </Formik></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default EditModalAuthor;
