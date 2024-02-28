import React, { useState } from "react";
import Layout from "@/Layouts/Layout";

import { Head, Link, router, usePage } from "@inertiajs/react";

const EditSupplier = () => {
    const { errors } = usePage().props;
    const { supplier } = usePage().props;

    const [supplierUpdate, setSupplierUpdate] = useState(
        supplier.nama_supplier
    );
    const [nomorTeleponUpdate, setNomorTeleponUpdate] = useState(
        supplier.nomor_telepon
    );
    const [emailUpdate, setEmailUpdate] = useState(supplier.email);
    const [alamatUpdate, setAlamatUpdate] = useState(supplier.alamat);

    const updateSupplier = (e) => {
        e.preventDefault();
        router.put(
            `/supplier/${supplier.id}`,
            {
                nama_supplier: supplierUpdate,
                nomor_telepon: nomorTeleponUpdate,
                email: emailUpdate,
                alamat: alamatUpdate,
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
            <Head title="Inventory - Edit Kategori" />
            <section class="section">
                <div class="section-header">
                    <h1>Edit Supplier</h1>
                </div>
                <div class="row">
                    <div className="col-6">
                        <div class="card">
                            <div class="card-header">
                                <h4>Form Supplier</h4>
                            </div>
                            <div class="card-body">
                                <form onSubmit={updateSupplier}>
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
                                            value={supplierUpdate}
                                            onChange={(e) =>
                                                setSupplierUpdate(
                                                    e.target.value
                                                )
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
                                                errors.nomor_telepon
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            id="no_telepon"
                                            placeholder="Masukkan nomor telepon"
                                            value={nomorTeleponUpdate}
                                            onChange={(e) =>
                                                setNomorTeleponUpdate(
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.nomor_telepon && (
                                            <div class="invalid-feedback">
                                                {errors.nomor_telepon}
                                            </div>
                                        )}
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input
                                            type="email"
                                            className={
                                                errors.email
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            id="email"
                                            placeholder="Masukkan supplier"
                                            value={emailUpdate}
                                            onChange={(e) =>
                                                setEmailUpdate(e.target.value)
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
                                        <input
                                            type="text"
                                            className={
                                                errors.alamat
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            id="alamat"
                                            placeholder="Masukkan alamat"
                                            value={alamatUpdate}
                                            onChange={(e) =>
                                                setAlamatUpdate(e.target.value)
                                            }
                                        />
                                        {errors.alamat && (
                                            <div class="invalid-feedback">
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

export default EditSupplier;
