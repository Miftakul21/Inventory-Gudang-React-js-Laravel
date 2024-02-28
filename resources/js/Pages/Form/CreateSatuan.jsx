import React, { useState } from "react";
import Layout from "@/Layouts/Layout";

import { Head, Link, router, usePage } from "@inertiajs/react";

const CreateSatuan = () => {
    const { errors } = usePage().props;

    const [satuan, setSatuan] = useState("");

    const storeSatuan = (e) => {
        e.preventDefault();
        router.post(
            "/satuan",
            {
                nama_satuan: satuan,
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
            <Head title="Inventory - Tambah Satuan" />
            <section class="section">
                <div class="section-header">
                    <h1>Tambah Satuan</h1>
                </div>
                <div class="row">
                    <div className="col-6">
                        <div class="card">
                            <div class="card-header">
                                <h4>Form satuan</h4>
                            </div>
                            <div class="card-body">
                                <form onSubmit={storeSatuan}>
                                    <div class="form-group">
                                        <label for="satuan">Satuan</label>
                                        <input
                                            type="text"
                                            className={
                                                errors.nama_satuan
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            id="satuan"
                                            placeholder="Masukkan satuan"
                                            value={satuan}
                                            onChange={(e) =>
                                                setSatuan(e.target.value)
                                            }
                                        />
                                        {errors.nama_satuan && (
                                            <div class="invalid-feedback">
                                                {errors.nama_satuan}
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

export default CreateSatuan;
