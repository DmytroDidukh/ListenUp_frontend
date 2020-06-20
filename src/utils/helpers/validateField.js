export default  (key, errors, touched) => errors[key] && touched[key] ? 'error' : '';
