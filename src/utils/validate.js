export default ({isAuth, values, errors}) => {

    const rules = {
        email: (value) => {
            if (!value) {
                errors.email = 'Enter your email, please';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.email = 'Invalid email address';
            }
        },

        username: (value) => {
            if (!value) {
                errors.username = 'Enter your name, please'
            } else if (value.length > 50) {
                errors.username = 'Your username is too long'
            }
        },

        password: (value) => {
            if (!value) {
                errors.password = 'Enter your password, please'
            } else if (!/(?=.*\d)(?=.*[a-z])[0-9a-z]{8,16}$/i.test(value)) {
                errors.password = 'Should contain 8-16 characters with at least one digit and one letter';
            }
        },

        confirmPass: (value) => {
            if (!value) {
                errors.confirmPass = 'Confirm your password, please'
            } else if (!/(?=.*\d)(?=.*[a-z])[0-9a-z]{8,16}$/i.test(value)) {
                errors.confirmPass = 'Password didn\'t match';
            }
        },
    };

    Object.keys(values).forEach( key => rules[key] && rules[key](values[key])
    )
}

