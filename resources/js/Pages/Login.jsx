import React, { useState } from "react";
import { Head, router, usePage } from "@inertiajs/react";
import LoginLayout from "@/Layouts/LoginLayout";

const Login = () => {
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues((items) => ({
            ...items,
            [name]: value,
        }));
    };

    const handleAuthentication = (e) => {
        e.preventDefault();

        router.post("/authLogin", values, {
            onSuccess: () => {
                Swal.fire({
                    title: "Login!",
                    text: "Berhasil login",
                    icon: "success",
                });
            },
        });
    };

    return (
        <LoginLayout>
            <Head title="InventoryApp - Login" />
            <div className="card card-primary">
                <div className="card-header">
                    <h4>Login</h4>
                </div>
                <div className="card-body">
                    <form
                        onSubmit={handleAuthentication}
                        className="needs-validation"
                    >
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                className={
                                    errors.email
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }
                                name="email"
                                tabIndex="1"
                                autoFocus
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && (
                                <div className="invalid-feedback">
                                    {errors.email}
                                </div>
                            )}
                        </div>

                        <div className="form-group">
                            <div className="d-block">
                                <label
                                    htmlFor="password"
                                    className="control-label"
                                >
                                    Password
                                </label>
                            </div>
                            <input
                                id="password"
                                type="password"
                                className={
                                    errors.password
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                            {errors.password && (
                                <div className="invalid-feedback">
                                    {errors.password}
                                </div>
                            )}
                            <div className="float-right mt-2">
                                <a
                                    href="auth-forgot-password.html"
                                    className="text-small"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                        </div>

                        <div className="form-group mt-5">
                            <button
                                type="submit"
                                className="btn btn-primary btn-lg btn-block"
                                tabIndex="4"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </LoginLayout>
    );
};

export default Login;
