// import React from "react";
// import axios from 'axios';
// import { Link } from "react-router-dom";
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardGroup,
//   CCol,
//   CContainer,
//   CForm,
//   CInput,
//   CInputGroup,
//   CInputGroupPrepend,
//   CInputGroupText,
//   CRow,
// } from "@coreui/react";
// import CIcon from "@coreui/icons-react";

// const Login = (props) => {
//   const username = React.useFormInput("");
//   const password = React.useFormInput("");
//   const [error, setError] = React.useState(null);
//   const [loading, setLoading] = React.useState(false);

//   // handle button click of login form
//    const handleLogin = () => {
//     setError(null);
//     setLoading(true);
//     axios.post('http://localhost:8000/users/Login', { username: username.value, password: password.value }).then(response => {
//       setLoading(false);
//       setUserSession(response.data.token, response.data.user);
//       props.history.push('/dashboard');
//     }).catch(error => {
//       setLoading(false);
//       if (error.response.status === 401) setError(error.response.data.message);
//       else setError("Something went wrong. Please try again later.");
//     });
//   }

//   return (
//     <div className="c-app c-default-layout flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md="8">
//             <CCardGroup>
//               <CCard className="p-4">
//                 <CCardBody>
//                   <CForm>
//                     <h1>Login</h1>
//                     <p className="text-muted">Sign In to your account</p>
//                     <CInputGroup className="mb-3">
//                       <CInputGroupPrepend>
//                         <CInputGroupText>
//                           <CIcon name="cil-user" />
//                         </CInputGroupText>
//                       </CInputGroupPrepend>
//                       <CInput
//                         type="text"
//                         {...username}
//                         placeholder="Username"
//                         autoComplete="username"
//                       />
//                     </CInputGroup>
//                     <CInputGroup className="mb-4">
//                       <CInputGroupPrepend>
//                         <CInputGroupText>
//                           <CIcon name="cil-lock-locked" />
//                         </CInputGroupText>
//                       </CInputGroupPrepend>
//                       <CInput
//                         type="password"
//                         {...password}
//                         placeholder="Password"
//                         autoComplete="current-password"
//                       />
//                     </CInputGroup>
//                     <CRow>
//                       <CCol xs="6">
//                         <CButton
//                           color="primary"
//                           onClick={handleLogin}
//                           disabled={loading}
//                           className="px-4"
//                         >
//                           {loading ? "Loading..." : "Login"}
//                         </CButton>
//                       </CCol>
//                       <CCol xs="6" className="text-right">
//                         <CButton color="link" className="px-0">
//                           Forgot password?
//                         </CButton>
//                       </CCol>
//                     </CRow>
//                   </CForm>
//                 </CCardBody>
//               </CCard>
//               <CCard
//                 className="text-white bg-primary py-5 d-md-down-none"
//                 style={{ width: "44%" }}
//               >
//                 <CCardBody className="text-center">
//                   <div>
//                     <h2>Sign up</h2>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipisicing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </p>
//                     <Link to="/register">
//                       <CButton
//                         color="primary"
//                         className="mt-3"
//                         active
//                         tabIndex={-1}
//                       >
//                         Register Now!
//                       </CButton>
//                     </Link>
//                   </div>
//                 </CCardBody>
//               </CCard>
//             </CCardGroup>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//   );

//   const useFormInput = initialValue => {
//   const [value, setValue] = useState(initialValue);

//   const handleChange = e => {
//     setValue(e.target.value);
//   }
//      return {
//     value,
//     onChange: handleChange
//   }
// };

// export default Login;
import React, { useState } from "react";
import axios from "axios";
// import { setUserSession } from "../../Utils/Common";

function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post("http://127.0.0.1:8000/login", {
        email: username.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);
        //setUserSession(response.data.token, response.data.user);
        props.history.push("/dashboard");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401)
          setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });
  };

  return (
    <div>
      Login
      <br />
      <br />
      <div>
        Username
        <br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password
        <br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && (
        <>
          <small style={{ color: "red" }}>{error}</small>
          <br />
        </>
      )}
      <br />
      <input
        type="button"
        value={loading ? "Loading..." : "Login"}
        onClick={handleLogin}
        disabled={loading}
      />
      <br />
    </div>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Login;
