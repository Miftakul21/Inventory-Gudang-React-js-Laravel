import React from "react";
import { Head, Link, router, usePage } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

const Satuan = () => {
    const { satuan } = usePage().props;

    const confirmDelete = (id) => {
        Swal.fire({
            title: "Anda yakin?",
            text: "Data yang terhapus tidak dapat dikembalikan",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Tidak",
            confirmButtonText: "Ya",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/satuan/${id}`, {
                    onSuccess: () => {
                        Swal.fire({
                            title: "Hapus!",
                            text: "Data berhasil hapus",
                            icon: "success",
                        });
                    },
                });
            }
        });
    };

    return (
        <Layout>
            <Head title="Inventory - Satuan" />
            <section class="section">
                <div class="section-header">
                    <h1>Satuan</h1>
                </div>
                <div class="row">
                    <div className="col-8">
                        <Link
                            href="/satuan/create"
                            class="btn btn-primary mb-3"
                        >
                            <i class="fas fa-plus mr-2"></i>
                            Tambah data
                        </Link>
                        <div class="card">
                            <div class="card-body">
                                <table class="table table-borderless table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Satuan</th>
                                            <th scope="col">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {satuan.map((item, index) => (
                                            <tr>
                                                <th scope="row">
                                                    {(index += 1)}
                                                </th>
                                                <td>{item.nama_satuan}</td>
                                                <td>
                                                    <button
                                                        onClick={() =>
                                                            confirmDelete(
                                                                item.id
                                                            )
                                                        }
                                                        class="btn btn-danger mr-2"
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                    <Link
                                                        href={`/satuan/${item.id}/edit`}
                                                        class="btn btn-warning"
                                                    >
                                                        <i className="fas fa-edit"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Satuan;
