import React from "react";
import { Link, Head, usePage, router } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

const User = () => {
    const { user } = usePage().props;

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
                router.delete(`/user/${id}`, {
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
            <Head title="InventoryApp - User"></Head>
            <section class="section">
                <div class="section-header">
                    <h1>User</h1>
                </div>
                <div class="row">
                    <div className="col-12">
                        <Link href="/user/create" class="btn btn-primary mb-3">
                            <i class="fas fa-plus mr-2"></i>
                            Tambah data
                        </Link>
                        <div class="card">
                            <div class="card-body table-responsive">
                                <table class="table table-borderless table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Role</th>
                                            <th scope="col">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {user.map((item, index) => {
                                            return (
                                                <tr>
                                                    <td>{(index += 1)}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>
                                                        {item.role[0].toUpperCase() +
                                                            item.role.slice(1)}
                                                    </td>
                                                    <td>
                                                        <button
                                                            class="btn btn-danger mr-2"
                                                            onClick={() => {
                                                                confirmDelete(
                                                                    item.id
                                                                );
                                                            }}
                                                        >
                                                            <i className="fas fa-trash"></i>
                                                        </button>
                                                        <Link
                                                            href={`/user/${item.id}/edit`}
                                                            class="btn btn-warning"
                                                        >
                                                            <i className="fas fa-edit"></i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            );
                                        })}
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

export default User;
