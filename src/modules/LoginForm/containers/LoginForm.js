import LoginForm from '../components/LoginForm'
import {withFormik} from 'formik';

import validateForm from 'utils/validate';


export default withFormik({
    validate: (values) => {
        let errors = {};

        validateForm({isAuth: true, values, errors})

        return errors;
    },

    handleSubmit: (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'LoginForm', // helps with React DevTools
})(LoginForm);
