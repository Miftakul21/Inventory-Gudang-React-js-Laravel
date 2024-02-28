import React, { useState } from "react";
import Layout from "@/Layouts/Layout";

import { Head, Link, router, usePage } from "@inertiajs/react";

const CreateSatuan = () => {
    const { errors } = usePage().props;

    const [supplier, setSupplier] = useState("");
    const [nomorTelepon, setNomorTelepon] = useState("");
    const [email, setEmail] = useState("");
    const [alamat, setAlamat] = useState("");

    const storeSupplier = (e) => {
        e.preventDefault();
        router.post(
            "/supplier",
            {
                nama_supplier: supplier,
                nomor_telepon: nomorTelepon,
                email: email,
                alamat: alamat,
            },
            {
                onSuccess: () => {
                    Swal.fire({
                        title: "Simpan!",
                        text: "Data berhasil simpan",
                        icon: "success",
                    });
                },
            }
        );
    };

    return (
        <Layout>
            <Head title="Inventory - Tambah Supplier" />
            <section class="section">
                <div class="section-header">
                    <h1>Tambah Supplier</h1>
                </div>
                <div class="row">
                    <div className="col-6">
                        <div class="card">
                            <div class="card-header">
                                <h4>Form supplier</h4>
                            </div>
                            <div class="card-body">
                                <form onSubmit={storeSupplier}>
                                    <div class="form-group">
                                        <label for="supplier">Supplier</label>
                                        <input
                                            type="text"
                                            className={
                                                errors.nama_supplier
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            id="supplier"
                                            placeholder="Masukkan supplier"
                                            value={supplier}
                                            onChange={(e) =>
                                                setSupplier(e.target.value)
                                            }
                                        />
                                        {errors.nama_supplier && (
                                            <div class="invalid-feedback">
                                                {errors.nama_supplier}
                                            </div>
                                        )}
                                    </div>
                                    <div class="form-group">
                                        <label for="no_telepon">
                                            Nomor Telepon
                                        </label>
                                        <input
                                            type="text"
                                            className={
                                                errors.no_telepon
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            id="no_telepon"
                                            placeholder="Masukkan nomor telepon"
                                            value={nomorTelepon}
                                            onChange={(e) =>
                                                setNomorTelepon(e.target.value)
                                            }
                                        />
                                        {errors.no_telepon && (
                                            <div class="invalid-feedback">
                                                {errors.no_telepon}
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
                                            placeholder="Masukkan email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                        {errors.email && (
                                            <div class="invalid-feedback">
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
                                            Tambah
                                        </button>
                                        <Link
                                            href="/supplier"
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

export default CreateSatuan;
