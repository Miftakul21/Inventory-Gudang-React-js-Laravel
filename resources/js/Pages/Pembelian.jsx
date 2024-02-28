import React from "react";
import { Link, Head, usePage, router } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

const Pembelian = () => {
    const { pembelian } = usePage().props;
    const { kategori } = usePage().props;
    const { supplier } = usePage().props;
    const { produk } = usePage().props;
    console.log(pembelian);

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
                router.delete(`/pembelian/${id}`);
            }
        });
    };

    const handleStatus = (status) => {
        if (status == "approve") {
            return "btn btn-success";
        } else if (status == "reject") {
            return "btn btn-danger";
        } else {
            return "btn btn-warning";
        }
    };

    // function show supplier name
    const supplierName = (id) => {
        return supplier
            .filter((items) => {
                return items.id == id;
            })
            .map((items) => {
                return items.nama_supplier;
            });
    };

    // function show produk name
    const produkName = (id) => {
        return produk
            .filter((items) => {
                return items.id == id;
            })
            .map((items) => {
                return items.nama;
            });
    };

    const statusPembelian = (status) => {
        if (status == "pendding") {
            return "btn btn-warning";
        } else if (status == "approve") {
            return "btn btn-success";
        } else {
            return "btn btn-primary";
        }
    };

    return (
        <Layout>
            <Head title="Inventory - Pembelian" />
            <section class="section">
                <div class="section-header">
                    <h1>Pembelian</h1>
                </div>
                <div class="row">
                    <div className="col-12">
                        <Link
                            href="/pembelian/create"
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
                                            <th scope="col">No. Pembelian</th>
                                            <th scope="col">Tanggal</th>
                                            <th scope="col">Supplier</th>
                                            <th scope="col">Kategori</th>
                                            <th scope="col">Qty</th>
                                            <th scope="col">Produk</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pembelian.map((pembelian, index) => {
                                            return (
                                                <tr>
                                                    <td>{(index += 1)}</td>
                                                    <td>
                                                        {
                                                            pembelian.nomor_pembelian
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            pembelian.tanggal_pembelian
                                                        }
                                                    </td>
                                                    <td>
                                                        {supplierName(
                                                            pembelian.id_supplier
                                                        )}
                                                    </td>
                                                    <td>
                                                        {produkName(
                                                            pembelian.id_produk
                                                        )}
                                                    </td>
                                                    <td>{pembelian.qty}</td>
                                                    <td>
                                                        Rp.{" "}
                                                        {pembelian.harga_produk}
                                                    </td>
                                                    <td>
                                                        <button
                                                            className={statusPembelian(
                                                                pembelian.status
                                                            )}
                                                        >
                                                            {pembelian.status[0].toUpperCase() +
                                                                pembelian.status.slice(
                                                                    1
                                                                )}
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-danger"
                                                            onClick={() => {
                                                                confirmDelete(
                                                                    pembelian.id
                                                                );
                                                            }}
                                                        >
                                                            <i className="fas fa-trash"></i>
                                                        </button>
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

export default Pembelian;
