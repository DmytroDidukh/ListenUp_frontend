import RegistrationForm from '../components/RegistrationForm';
import {withFormik} from 'formik';

export default withFormik({
    validate: (values) => {
        let errors = {};

        if (!values.email) {
            errors.email = 'Enter your email, please';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Enter your password, please'
        } else if (!/(?=.*\d)(?=.*[a-z])[0-9a-z]{8,16}$/i.test(values.password)) {
            errors.password = 'Should contain 8-16 characters with at least one digit and one letter';
        }

        if (!values.username) {
            errors.username = 'Enter your name, please'
        } else if (values.username.length > 50) {
            errors.username = 'Your username is too long'
        }

        if (!values.confirmPass) {
            errors.confirmPass = 'Confirm your password, please'
        } else if (values.confirmPass !== values.password) {
            errors.confirmPass = 'Password didn\'t match';
        }

        return errors;
    },

    handleSubmit: (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'RegistrationForm', // helps with React DevTools
})(RegistrationForm);
