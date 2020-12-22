import React, { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";

function Testing() {

    const [values, setValues] = useState({
        username: '',
        email: '',
    });
    const [errors, setErrors] = useState({});


    const validate = (values) => {
        let errors = {};

        let isValid = true;

        if (!values.username) {
            errors.username = 'Username required';
            isValid = false;
        }
        // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
        //   errors.name = 'Enter a valid name';
        // }

        if (!values.email) {
            errors.email = 'Email required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(values.email.trim())) {
            errors.email = 'Email address is invalid';
            isValid = false;
        }
        setErrors(errors)
        return isValid;
    }

   


    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (validate(values)) {
            alert('You have been successfully registered.')
        }
        console.log(values.email)
    };

    return (
        <Container>
            <div className='form-inputs'>
                <label className='form-label'>Email</label>
                <input
                    className='form-input'
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
            </div >

            <br />
            <button onClick={handleSubmit}>Submit</button>
        </Container>
    )
}

export default Testing;





// import React, { useState } from "react";

// function Testing() {

//     const [values, setValues] = useState({
//         username: '',
//         email: '',
//         password: '',
//         password2: ''
//     });
//     const [errors, setErrors] = useState({});



//     const validate = (values) => {
//         let errors = {};

//         let isValid = true;

//         if (!values.username) {
//             errors.username = 'Username required';
//             isValid = false;
//         }
//         // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
//         //   errors.name = 'Enter a valid name';
//         // }

//         if (!values.email) {
//             errors.email = 'Email required';
//             isValid = false;
//         } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//             errors.email = 'Email address is invalid';
//             isValid = false;
//         }
//         if (!values.password) {
//             errors.password = 'Password is required';
//             isValid = false;
//         } else if (values.password.length < 6) {
//             errors.password = 'Password needs to be 6 characters or more';
//             isValid = false;
//         }

//         if (!values.password2) {
//             errors.password2 = 'Password is required';
//             isValid = false;
//         } else if (values.password2 !== values.password) {
//             errors.password2 = 'Passwords do not match';
//             isValid = false;
//         }
//         setErrors(errors)
//         return isValid;
//     }


//     //   console.log('errors state are -')
//     //   console.log(errors)




//     const handleChange = e => {
//         const { name, value } = e.target;
//         setValues({
//             ...values,
//             [name]: value
//         });
//     };

//     const handleSubmit = e => {
//         e.preventDefault();

//         //   let data = validate(values);
//         //   if (data !== '') {
//         //       setErrors(data)
//         //   }

//         // let data = setErrors(validate(values));
//         //   if (data == '') {
//         //       alert('hii')
//         //   }
//         if (validate(values)) {
//             alert('You have been successfully registered.')
//         }



//     };


//     return (
//         <div className='form-content-right'>
//             <form onSubmit={handleSubmit} className='form' noValidate>

//                 <div className='form-inputs'>
//                     <label className='form-label'>Username</label>
//                     <input
//                         className='form-input'
//                         type='text'
//                         name='username'
//                         placeholder='Enter your username'
//                         value={values.username}
//                         onChange={handleChange}
//                     />
//                     {errors.username && <p>{errors.username}</p>}
//                 </div>
//                 <div className='form-inputs'>
//                     <label className='form-label'>Email</label>
//                     <input
//                         className='form-input'
//                         type='email'
//                         name='email'
//                         placeholder='Enter your email'
//                         value={values.email}
//                         onChange={handleChange}
//                     />
//                     {errors.email && <p>{errors.email}</p>}
//                 </div>
//                 <div className='form-inputs'>
//                     <label className='form-label'>Password</label>
//                     <input
//                         className='form-input'
//                         type='password'
//                         name='password'
//                         placeholder='Enter your password'
//                         value={values.password}
//                         onChange={handleChange}
//                     />
//                     {errors.password && <p>{errors.password}</p>}
//                 </div>
//                 <div className='form-inputs'>
//                     <label className='form-label'>Confirm Password</label>
//                     <input
//                         className='form-input'
//                         type='password'
//                         name='password2'
//                         placeholder='Confirm your password'
//                         value={values.password2}
//                         onChange={handleChange}
//                     />
//                     {errors.password2 && <p>{errors.password2}</p>}
//                 </div>
//                 <button className='form-input-btn' type='submit'>
//                     Sign up
//         </button>
//                 <span className='form-input-login'>
//                     Already have an account? Login <a href='#'>here</a>
//                 </span>
//             </form>
//         </div>
//     )
// }

// export default Testing;