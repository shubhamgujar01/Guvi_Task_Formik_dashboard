import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { bookSchema } from '../Schemas/bookSchema';
import { Formik, Form, Field, setIn } from 'formik';
import { Form as FormBootstrap, FormGroup, FormControl, FormLabel, FormTextarea } from 'react-bootstrap';
const EditModal = ({show,handleClose,bookDetails,updateBook}) => {

    const handleFormSubmit = (values) =>{
        updateBook(values)
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
                            title: (bookDetails && bookDetails.title) || '',
                            Author: (bookDetails && bookDetails.Author) || '',
                            ISBN: (bookDetails && bookDetails.ISBN) || '',
                            date: (bookDetails && bookDetails.date) || null
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

export default EditModal
