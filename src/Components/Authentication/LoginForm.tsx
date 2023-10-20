import React, { useState, useEffect } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

interface LoginFormProps {
  user?: UserProfile;
  onLogin: (credentials: UserCredentials) => void;
}

interface UserProfile {
  id: number;
  name: string;
  profilePicUrl?: string;
}

interface UserCredentials {
  mobile_no: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ user, onLogin }) => {
  const formik = useFormik({
    initialValues: {
      mobile_no: "",
      password: "",
    },
    validationSchema: Yup.object({
      mobile_no: Yup.string().required("Mobile No. is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      onLogin(values);
      resetForm();
      setSubmitting(false);
    },
  });

  useEffect(() => {
    formik.setValues({ mobile_no: user?.name || "", password: "" });
  }, [user]);

  return (
    <div className="flex flex-col w-1/2 p-4 items-center space-y-4">
      <div className="flex flex-row w-full justify-center space-x-4">
        {user?.profilePicUrl ? (
          <img
            src={user.profilePicUrl}
            alt={user.name}
            className="w-24 h-24 rounded-full mb-2"
          />
        ) : (
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-2" />
        )}
        <div className="flex flex-col justify-center items-center text-2xl font-semibold">
          <span className="title">ANUMOD</span>
          <span className="title">BAKERY</span>
        </div>
      </div>
      <div className="bg-white rounded-lg border-2 p-4">
        <span className="flex justify-center font-semibold text-xl pb-4">
          User Login
        </span>
        <form
          onSubmit={e => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}
        >
          <div className="mb-4 flex flex-row items-center space-x-6 justify-between">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Mobile No
            </label>
            <div className="flex flex-col gap-1">
              <input
                type="text"
                id="mobile_no"
                name="mobile_no"
                className={`border rounded py-2 px-3 ${
                  formik.errors.mobile_no && formik.touched.mobile_no
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mobile_no}
              />
              {formik.touched.mobile_no && formik.errors.mobile_no && (
                <div className="text-red-500">{formik.errors.mobile_no}</div>
              )}
            </div>
          </div>

          <div className="mb-4 flex flex-row items-center space-x-6 justify-between">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <div className="flex flex-col gap-1">
              <input
                type="password"
                id="password"
                name="password"
                className={`border rounded py-2 px-3 ${
                  formik.errors.password && formik.touched.password
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500">{formik.errors.password}</div>
              )}
            </div>
          </div>

          <div className="mb-2">
            <button
              type="submit"
              className="bg-gray-200 w-full py-2 px-4 rounded hover:bg-blue-500 hover:text-white font-semibold"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
