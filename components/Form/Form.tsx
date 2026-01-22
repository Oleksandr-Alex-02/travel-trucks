'use client';

import React from "react";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validation = Yup.object({
    name: Yup.string().required("Введіть ім’я"),
    email: Yup.string().email("Некоректна пошта").required("Введіть пошту"),
    date: Yup.date().required("Виберіть дату"),
    comment: Yup.string().required("Введіть коментар"),
});

const CampersForm = () => {
    const fildId = useId();

    return (
        <Formik
            initialValues={{ name: "", email: "", date: "", comment: "" }}
            validationSchema={validation}
            onSubmit={(values) => {
                console.log("Submitted values:", values);
            }}
        >
            {() => (
                <Form>
                    <div>
                        <label htmlFor={`${fildId}-name`}></label>
                        <Field id={`${fildId}-name`} name='name' type='text' placeholder='Name*' />
                        <ErrorMessage name='name' component="span" />
                    </div>

                    <div>
                        <label htmlFor={`${fildId}-email`}></label>
                        <Field id={`${fildId}-email`} name='email' type='email' placeholder='Email*' />
                        <ErrorMessage name='email' component="span" />
                    </div>

                    <div>
                        <label htmlFor={`${fildId}-date`}></label>
                        <Field id={`${fildId}-date`} name='date' type='date' placeholder='Booking date*' />
                        <ErrorMessage name='date' component="span" />
                    </div >

                    <div>
                        <label htmlFor={`${fildId}-comment`}></label>
                        <Field id={`${fildId}-comment`} name='comment' as="textarea" placeholder='Comment' />
                        <ErrorMessage name='comment' component="span" />
                    </div >

                    <button type="submit">Відправити</button>
                </Form >
            )}
        </Formik >
    )
};

export default CampersForm;