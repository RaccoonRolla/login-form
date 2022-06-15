import React from 'react';
import { Formik, Form, Field } from 'formik';
import FormField from './FormField';

const Signup = () => {
  const initialValues = {
    username: '',
    email: '',
    phone: '',
    language: '',
  };
  return (
    <Formik
      className="signupForm"
      initialValues={initialValues}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Обязательное поле';
        } else if (!values.username) {
          errors.username = 'Обязательное поле';
        } else if (!values.phone) {
          errors.phone = 'Обязательное поле';
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Введено некорректное значение';
        } else if (!/^[a-zA-Z.\s\-]/.test(values.username)) {
          errors.username = 'Поле «Имя» не может содержать цифры и символы кроме пробела и дефиса';
        } else if (!/^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/.test(values.phone)) {
          errors.phone =
            'В поле «Номер телефона» можно ввести только 11 цифр, круглые скобки, дефис и знак плюс';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}>
      {/* {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <TextField label="Имя" name="username" type="text" />
          <input
            type="username"
            name="username"
            placeholder="Введите Ваше имя"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />
          {errors.username && touched.username && errors.username}
          <input
            type="email"
            name="email"
            placeholder="Введите Ваш email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="phone"
            name="phone"
            placeholder="Введите номер телефона"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
          />
          {errors.phone && touched.phone && errors.phone}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )} */}
      {(formik) => (
        <div>
          <div className="form-header">
            <h1>Регистрация</h1>
            <div className="form-header__login">
              <div>Уже есть аккаунт?</div>
              <a href="#">Войти</a>
            </div>
          </div>
          <Form>
            <FormField label="Имя" name="username" type="text" placeholder="Введите Ваше имя" />
            <FormField label="Email" name="email" type="email" placeholder="Введите Ваш email" />
            <FormField
              label="Номер телефона"
              name="phone"
              type="tel"
              placeholder="Введите номер телефона"
            />
            <FormField label="Язык" name="language" type="select" />
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Signup;




