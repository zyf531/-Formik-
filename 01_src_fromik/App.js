import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: '' 
    },
    onSubmit: values =>{
      alert('Login Successful')
    },
    validate: values => {
      let errors = {};
      if(!values.emailField) {
         errors.emailError = 'Field required'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailField)
      ) {
        errors.emailError = 'Username should be an email';
      }

      if(!values.pswField) errors.pswdError = 'Field required';
      return errors;
    }
  })
  return (
    <div >
       <form onSubmit={formik.handleSubmit} >
        <div>Email</div>
        <input name="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField} />
        {formik.errors.emailError ? <div style={{color:'red'}} >{formik.errors.emailError}</div> : null }
        <div>Password</div>
        <input name="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField} />
        {formik.errors.pswdError ? <div style={{color:'red'}} >{formik.errors.pswdError}</div> : null }
        <button name="submitBtn" type="submit">Submit</button>
       </form>
      </div>
          );
}

export default App;
