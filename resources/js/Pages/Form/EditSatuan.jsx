import React, { useState } from "react";
import Layout from "@/Layouts/Layout";

import { Head, Link, router, usePage } from "@inertiajs/react";

const EditSatuan = () => {
    const { errors } = usePage().props;
    const { satuan } = usePage().props;

    const [satuanUpdate, setSatuanUpdate] = useState(satuan.nama_satuan);

    const updateSatuan = (e) => {
        e.preventDefault();
        router.put(
            `/satuan/${satuan.id}`,
            {
                nama_satuan: satuanUpdate,
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
            <Head title="Inventory - Edit Satuan" />
            <section class="section">
                <div class="section-header">
                    <h1>Edit Satuan</h1>
                </div>
                <div class="row">
                    <div className="col-6">
                        <div class="card">
                            <div class="card-header">
                                <h4>Form satuan</h4>
                            </div>
                            <div class="card-body">
                                <form onSubmit={updateSatuan}>
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
                                            value={satuanUpdate}
                                            onChange={(e) =>
                                                setSatuanUpdate(e.target.value)
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

export default EditSatuan;
