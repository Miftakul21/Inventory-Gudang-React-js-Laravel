import React, { useState } from "react";
import Layout from "@/Layouts/Layout";

import { Head, Link, router, usePage } from "@inertiajs/react";

const CreateKategori = () => {
    const { errors } = usePage().props;

    const [kategori, setKategori] = useState("");

    const storeKategori = (e) => {
        e.preventDefault();
        router.post(
            "/kategori",
            {
                nama_kategori: kategori,
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
            <Head title="Inventory - Tambah Kategori" />
            <section class="section">
                <div class="section-header">
                    <h1>Tambah Kategori</h1>
                </div>
                <div class="row">
                    <div className="col-6">
                        <div class="card">
                            <div class="card-header">
                                <h4>Form kategori</h4>
                            </div>
                            <div class="card-body">
                                <form onSubmit={storeKategori}>
                                    <div class="form-group">
                                        <label for="kategori">Kategori</label>
                                        <input
                                            type="text"
                                            className={
                                                errors.nama_kategori
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            id="kategori"
                                            placeholder="Masukkan kategori"
                                            value={kategori}
                                            onChange={(e) =>
                                                setKategori(e.target.value)
                                            }
                                        />
                                        {errors.nama_kategori && (
                                            <div class="invalid-feedback">
                                                {errors.nama_kategori}
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
                                            href="/kategori"
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

export default CreateKategori;
