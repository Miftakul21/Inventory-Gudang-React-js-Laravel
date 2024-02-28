import React, { useState } from "react";
import Layout from "@/Layouts/Layout";

import { Head, Link, router, usePage } from "@inertiajs/react";

const CreateUser = () => {
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((item) => ({
            ...item,
            [name]: value,
        }));
    };

    const storeUser = (e) => {
        e.preventDefault();
        router.post("/user", values, {
            onSuccess: () => {
                Swal.fire({
                    title: "Simpan!",
                    text: "Data berhasil simpan",
                    icon: "success",
                });
            },
        });
    };

    const role = ["admin", "pegawai"];

    return (
        <Layout>
            <Head title="Inventory - Tambah User" />
            <section class="section">
                <div class="section-header">
                    <h1>Tambah User</h1>
                </div>
                <div class="row">
                    <div className="col-6">
                        <div class="card">
                            <div class="card-header">
                                <h4>Form user</h4>
                            </div>
                            <div class="card-body">
                                <form onSubmit={storeUser}>
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
                                            <option value="" selected>
                                                Role
                                            </option>
                                            {role.map((role) => {
                                                return (
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
                                            Tambah
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

export default CreateUser;
