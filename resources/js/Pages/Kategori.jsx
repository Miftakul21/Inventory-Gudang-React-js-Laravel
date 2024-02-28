import React from "react";
import Layout from "@/Layouts/Layout";

import { Head, Link, router, usePage } from "@inertiajs/react";

const Kategori = () => {
    const { kategori } = usePage().props;
    const { session } = usePage().props;

    const confirmDelete = (id) => {
        Swal.fire({
            title: "Anda yakin?",
            text: "Data yang dihapus tidak dapat kembali",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Tidak",
            confirmButtonText: "Ya",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/kategori/${id}`, {
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
            <Head title="Inventory - Kategori" />
            <section class="section">
                <div class="section-header">
                    <h1>Kategori</h1>
                </div>
                {/* {session.success &&
                    (Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${session.success}`,
                        showConfirmButton: false,
                        timer: 1500,
                    }),
                    router.get("/kategori"))} 
                    */}
                <div class="row">
                    <div className="col-8">
                        <Link
                            href="/kategori/create"
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
                                            <th scope="col">Kategori</th>
                                            <th scope="col">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {kategori.map((item, index) => (
                                            <tr>
                                                <th scope="row">
                                                    {(index += 1)}
                                                </th>
                                                <td>{item.nama_kategori}</td>
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
                                                        href={`/kategori/${item.id}/edit`}
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

export default Kategori;
