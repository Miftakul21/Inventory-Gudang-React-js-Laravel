import React, { useState } from "react";
import Layout from "@/Layouts/Layout";

import { Head, Link, router, usePage } from "@inertiajs/react";

const EditUser = () => {
    const { errors } = usePage().props;
    const { user } = usePage().props;

    console.log(user);

    const [values, setValues] = useState({
        name: user.name,
        email: user.email,
        password: "",
        role: user.role,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((item) => ({
            ...item,
            [name]: value,
        }));
    };

    const updateUser = (e) => {
        e.preventDefault();
        router.put(`/user/${user.id}`, values, {
            onSuccess: () => {
                Swal.fire({
                    title: "Update!",
                    text: "Data berhasil update",
                    icon: "success",
                });
            },
        });
    };

    const role = ["admin", "pegawai"];

    return (
        <Layout>
            <Head title="Inventory - Edit User" />
            <section class="section">
                <div class="section-header">
                    <h1>Edit User</h1>
                </div>
                <div class="row">
                    <div className="col-6">
                        <div class="card">
                            <div class="card-header">
                                <h4>Form user</h4>
                            </div>
                            <div class="card-body">
                                <form onSubmit={updateUser}>
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input
                                            type="text"
                                            className={
                                                errors.name
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            id="name"
                                            placeholder="Masukkan satuan"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                        />
                                        {errors.name && (
                                            <div class="invalid-feedback">
                                                {errors.name}
                                            </div>
                                        )}
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input
                                            type="text"
                                            className={
                                                errors.email
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            id="email"
                                            placeholder="Masukkan satuan"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                        {errors.name && (
                                            <div class="invalid-feedback">
                                                {errors.name}
                                            </div>
                                        )}
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input
                                            type="password"
                                            className={
                                                errors.password
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            id="password"
                                            placeholder="Masukkan satuan"
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                        />
                                        {errors.password && (
                                            <div class="invalid-feedback">
                                                {errors.password}
                                            </div>
                                        )}
                                    </div>
                                    <div class="form-group">
                                        <label for="role">Role</label>
                                        <select
                                            name="role"
                                            id="role"
                                            className={
                                                errors.role
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            onChange={handleChange}
                                        >
                                            {role.map((role) => {
                                                return role == user.role ? (
                                                    <option
                                                        value={role}
                                                        selected
                                                    >
                                                        {role
                                                            .charAt(0)
                                                            .toUpperCase() +
                                                            role.slice(1)}
                                                    </option>
                                                ) : (
                                                    <option value={role}>
                                                        {role
                                                            .charAt(0)
                                                            .toUpperCase() +
                                                            role.slice(1)}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                        {errors.role && (
                                            <div class="invalid-feedback">
                                                {errors.role}
                                            </div>
                                        )}
                                    </div>

                                    <div className="d-flex align-items-center">
                                        <button
                                            type="submit"
                                            class="btn btn-primary mr-3"
                                        >
                                            Update
                                        </button>
                                        <Link
                                            href="/satuan"
                                            class="btn btn-secondary"
                                        >
                                            Batal
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default EditUser;
