import React, { useState } from "react";
import Layout from "@/Layouts/Layout";

import { Head, Link, router, usePage } from "@inertiajs/react";

const EditCustomers = () => {
    const { errors } = usePage().props;
    const { customer } = usePage().props;

    const [nama, setNama] = useState(customer.nama);
    const [nomorTelepon, setNomorTelepon] = useState(customer.nomor_telepon);
    const [email, setEmail] = useState(customer.email);
    const [alamat, setAlamat] = useState(customer.alamat);

    const storeCustomer = (e) => {
        e.preventDefault();
        router.put(
            `/customer/${customer.id}`,
            {
                nama: nama,
                nomor_telepon: nomorTelepon,
                email: email,
                alamat: alamat,
            },
            {
                onSuccess: () => {
                    Swal.fire({
                        title: "Update!",
                        text: "Data berhasil update",
                        icon: "success",
                    });
                },
            }
        );
    };

    return (
        <Layout>
            <Head title="Inventory - Edit Customer" />
            <section class="section">
                <div class="section-header">
                    <h1>Edit customer</h1>
                </div>
                <div class="row">
                    <div className="col-6">
                        <div class="card">
                            <div class="card-header">
                                <h4>Form customer</h4>
                            </div>
                            <div class="card-body">
                                <form onSubmit={storeCustomer}>
                                    <div class="form-group">
                                        <label for="nama">Nama</label>
                                        <input
                                            type="text"
                                            class={
                                                errors.nama
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            id="nama"
                                            value={nama}
                                            placeholder="Masukkan nama"
                                            onChange={(e) =>
                                                setNama(e.target.value)
                                            }
                                        />
                                        {errors.nama && (
                                            <div className="invalid-feedback">
                                                {errors.nama}
                                            </div>
                                        )}
                                    </div>
                                    <div class="form-group">
                                        <label for="nomor_telepon">
                                            Nomor Telepon
                                        </label>
                                        <input
                                            type="text"
                                            class={
                                                errors.nomor_telepon
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            id="nomor_telepon"
                                            value={nomorTelepon}
                                            placeholder="Masukkan nomor telepon"
                                            onChange={(e) =>
                                                setNomorTelepon(e.target.value)
                                            }
                                        />
                                        {errors.nomor_telepon && (
                                            <div className="invalid-feedback">
                                                {errors.nomor_telepon}
                                            </div>
                                        )}
                                    </div>
                                    <div class="form-group">
                                        <label for="eamil">Email</label>
                                        <input
                                            type="text"
                                            class={
                                                errors.email
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            id="email"
                                            placeholder="Masukkan email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                        {errors.email && (
                                            <div className="invalid-feedback">
                                                {errors.email}
                                            </div>
                                        )}
                                    </div>
                                    <div class="form-group">
                                        <label for="alamat">Alamat</label>
                                        <textarea
                                            class={
                                                errors.alamat
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            placeholder="Masukkan alamat..."
                                            id="alamat"
                                            style={{ height: 100 }}
                                            value={alamat}
                                            onChange={(e) =>
                                                setAlamat(e.target.value)
                                            }
                                        ></textarea>
                                        {errors.alamat && (
                                            <div className="invalid-feedback">
                                                {errors.alamat}
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

export default EditCustomers;
