import React, { useState } from "react";
import Layout from "@/Layouts/Layout";

import { Head, Link, router, usePage } from "@inertiajs/react";

const EditKategori = () => {
    const { errors } = usePage().props;
    const { kategori } = usePage().props;

    const [kategoriUpdate, setKategoriUpdate] = useState(
        kategori.nama_kategori
    );

    const updateKategori = (e) => {
        e.preventDefault();
        router.put(
            `/kategori/${kategori.id}`,
            {
                nama_kategori: kategoriUpdate,
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
                    <h1>Edit Kategori</h1>
                </div>
                <div class="row">
                    <div className="col-6">
                        <div class="card">
                            <div class="card-header">
                                <h4>Form kategori</h4>
                            </div>
                            <div class="card-body">
                                <form onSubmit={updateKategori}>
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
                                            value={kategoriUpdate}
                                            onChange={(e) =>
                                                setKategoriUpdate(
                                                    e.target.value
                                                )
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
                                            Update
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

export default EditKategori;
