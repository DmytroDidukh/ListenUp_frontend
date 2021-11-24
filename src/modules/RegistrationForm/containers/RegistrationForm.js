import { withFormik } from 'formik';

import RegistrationForm from '../components/RegistrationForm';
import validateForm from '@utils/validate';

export default withFormik({
    validate: (values) => {
        let errors = {};

        validateForm({ isAuth: true, values, errors });

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            console.log(values);
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'RegistrationForm', // helps with React DevTools
})(RegistrationForm);
