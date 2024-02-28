import React from "react";
import Layout from "@/Layouts/Layout";
import { Head, Link, router, usePage } from "@inertiajs/react";

const Supplier = () => {
    const { supplier } = usePage().props;
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
                router.delete(`/supplier/${id}`, {
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
            <Head title="Inventory - Supplier" />
            <section class="section">
                <div class="section-header">
                    <h1>Supplier</h1>
                </div>
                <div class="row">
                    <div className="col-12">
                        <Link
                            href="/supplier/create"
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
                                            <th scope="col">Supplier</th>
                                            <th scope="col">Nomor Telepon</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Alamat</th>
                                            <th scope="col">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {supplier.map((item, index) => (
                                            <tr>
                                                <th scope="row">
                                                    {(index += 1)}
                                                </th>
                                                <td>{item.nama_supplier}</td>
                                                <td>{item.nomor_telepon}</td>
                                                <td>{item.email}</td>
                                                <td>{item.alamat}</td>
                                                <td class="d-flex">
                                                    <button
                                                        onClick={() =>
                                                            confirmDelete(
                                                                item.id
                                                            )
                                                        }
                                                        class="btn btn-danger mr-2 align-self-center"
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                    <Link
                                                        href={`/supplier/${item.id}/edit`}
                                                        class="btn btn-warning align-self-center"
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

export default Supplier;
