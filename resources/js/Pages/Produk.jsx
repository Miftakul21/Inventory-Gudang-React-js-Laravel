import React from "react";
import { Link, Head, usePage, router } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

const Produk = () => {
    const { produk } = usePage().props;
    const { satuan } = usePage().props;
    const { kategori } = usePage().props;
    const { supplier } = usePage().props;

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
                router.delete(`/produk/${id}`, {
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
            <Head title="Inventory - Produk" />
            <section class="section">
                <div class="section-header">
                    <h1>Produk</h1>
                </div>
                <div class="row">
                    <div className="col-12">
                        <Link
                            href="/produk/create"
                            class="btn btn-primary mb-3"
                        >
                            <i class="fas fa-plus mr-2"></i>
                            Tambah data
                        </Link>
                        <div class="card">
                            <div class="card-body table-responsive">
                                <table class="table table-borderless table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Produk</th>
                                            <th scope="col">Kategori</th>
                                            <th scope="col">Satuan</th>
                                            <th scope="col">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {produk.map((item, index) => (
                                            <tr>
                                                <th scope="row">
                                                    {(index += 1)}
                                                </th>
                                                <td>{item.nama}</td>

                                                <td>
                                                    {kategori.map(
                                                        (kategori, index) => {
                                                            return kategori.id ==
                                                                item.id_kategori
                                                                ? kategori.nama_kategori
                                                                : "";
                                                        }
                                                    )}
                                                </td>
                                                <td>
                                                    {satuan.map(
                                                        (satuan, index) => {
                                                            return satuan.id ==
                                                                item.id_satuan
                                                                ? satuan.nama_satuan
                                                                : "";
                                                        }
                                                    )}
                                                </td>
                                                <td>
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

export default Produk;
