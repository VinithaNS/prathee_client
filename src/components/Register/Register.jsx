import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import TextField from "@mui/material/TextField";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "../../global";

export default function Login() {
  const navigate = useNavigate();

  const FormValidationSchema = yup.object({
    email: yup
      .string()
      .required("enter valid email")
      .min(5, "type more than 5 letters"),
    password: yup.string().required("enter valid password").min(3),
  });

  const { handleChange, handleBlur, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: { name: "", email: "", password: "", phonenumber: "" },
      validationSchema: FormValidationSchema,
      onSubmit: (values) => {
        login(values);
      },
    });

  const login = (data) => {
    fetch(`${API}/api/users/register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          toast.error("ERROR:" + data.error);
        } else {
          console.log(data);
          toast.success("success:" + data.msg);
          navigate("/login");
        }
      });
  };
  return (
    <div className="container-lg">
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit} className="user">
            <div class="mb-3">
              <TextField
                className="form-control form-control-user"
                type="name"
                name="name"
                label="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name && touched.name}
                helperText={errors.name && touched.name ? errors.name : ""}
              />
            </div>
            <div class="mb-3">
              <TextField
                className="form-control form-control-user"
                type="email"
                name="email"
                label="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email && touched.email}
                helperText={errors.email && touched.email ? errors.email : ""}
              />
            </div>
            <div class="mb-3">
              <TextField
                className="form-control form-control-user"
                type="password"
                name="password"
                label="Password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.password && touched.password}
                helperText={
                  errors.password && touched.password ? errors.password : ""
                }
              />
            </div>
            <div class="mb-3">
              <TextField
                className="form-control form-control-user"
                type="phonenumber"
                name="phonenumber"
                label="phonenumber"
                value={values.phonenumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.phonenumber && touched.phonenumber}
                helperText={
                  errors.phonenumber && touched.phonenumber
                    ? errors.phonenumber
                    : ""
                }
              />
            </div>
            <Button
              type="submit"
              className="btn btn-primary btn-user btn-block form-control form-control-user reg"
              variant="contained"
            >
              Register
            </Button>
            {/* <div>
          {" "}
          New User?{" "}
          <Link className="lgbtn" to="/register">
            Register
          </Link>
        </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}
