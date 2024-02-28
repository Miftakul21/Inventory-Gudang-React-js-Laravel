import React from "react";
import { Link, Head, usePage, router } from "@inertiajs/react";
import Layout from "../Layouts/Layout";

const Customer = () => {
    const { customer } = usePage().props;

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
                router.delete(`/customer/${id}`, {
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
            <Head title="InventoryApp - Customer" />
            <section class="section">
                <div class="section-header">
                    <h1>Customer</h1>
                </div>
                <div class="row">
                    <div className="col-12">
                        <Link
                            href="/customer/create"
                            class="btn btn-primary mb-3"
                        >
                            <i class="fas fa-plus mr-2"></i>
                            Tambah data
                        </Link>
                        <div className="card">
                            <div className="card-body">
                                <table class="table table-borderd table-hover">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Nama</th>
                                            <th>Nomor Telepon</th>
                                            <th>Email</th>
                                            <th>Alamat</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {customer.map((item, index) => (
                                            <tr>
                                                <td>{(index += 1)}</td>
                                                <td>{item.nama}</td>
                                                <td>{item.nomor_telepon}</td>
                                                <td>{item.email}</td>
                                                <td>{item.alamat}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-danger mr-2"
                                                        onClick={() =>
                                                            confirmDelete(
                                                                item.id
                                                            )
                                                        }
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                    <Link
                                                        href={`/customer/${item.id}/edit`}
                                                        className="btn btn-warning"
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

export default Customer;
