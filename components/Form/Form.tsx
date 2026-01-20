
import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validation = Yup.object({
    name: Yup.string().required("Введіть ім’я"),
    email: Yup.string().email("Некоректна пошта").required("Введіть пошту"),
    date: Yup.date().required("Виберіть дату"),
    comment: Yup.string().required("Введіть коментар"),
});

const CampersForm = () => {

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
                        <label htmlFor="name">Name</label>
                        <Field id='name' name='name' type='text' />
                        <ErrorMessage name='name' component="span" />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <Field id='email' name='email' type='email' />
                        <ErrorMessage name='email' component="span" />
                    </div>

                    <div>
                        <label htmlFor="date">Data</label>
                        <Field id='date' name='date' type='date' />
                        <ErrorMessage name='date' component="span" />
                    </div>

                    <div>
                        <label htmlFor="comment">Comment</label>
                        <Field id='comment' name='comment' as="textarea" />
                        <ErrorMessage name='comment' component="span" />
                    </div>

                    <button type="submit">Відправити</button>
                </Form>
            )}
        </Formik>
    )
};

export default CampersForm;