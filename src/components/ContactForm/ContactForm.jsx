import css from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup";

const dataSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short!").max(50, "Too long!").required('Required'),
    number: Yup.string().min(3, "Too short!").max(50, "Too long!").required('Required'),
})

const initialValues = {
    name: "",
    number: ""
};

function ContactForm({ handleSubmit }) {
    const nameFieldName = useId();
    const numberFieldName = useId();

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={dataSchema}>
                <Form className={css.formElement}>
                    <label htmlFor={nameFieldName}>Name</label>
                    <Field className={css.dataInputField} type='text' name='name' id={nameFieldName} />
                    <ErrorMessage name="name" component="span" />

                    <label htmlFor={numberFieldName}>Phone</label>
                    <Field className={css.dataInputField} type='text' name='number' id={numberFieldName} />
                    <ErrorMessage name="number" component="span" />

                    <button className={css.submitButton} type="submit">Add contact</button>
                </Form>
            </Formik>
        </>
    )
}

export default ContactForm;