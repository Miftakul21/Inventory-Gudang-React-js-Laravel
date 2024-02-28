import React, { useState, useRef } from "react";
import { Link, Head, usePage, router } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

const ApprovePembelian = () => {
    const { supplier } = usePage().props;
    const { produk } = usePage().props;
    const { kategori } = usePage().props;
    const { pembelian } = usePage().props;

    const { values, setValues } = useState({
        id_produk: "",
        id_supplier: "",
        qty_awal: 0,
        qty_keluar: 0,
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        setValues((val) => ({
            ...val,
            [name]: value,
        }));
    };

    const confirmApprove = (id) => {
        Swal.fire({
            title: "Approval pembelian produk?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Approval",
            denyButtonText: `Not Approval`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                router.post(
                    `/approve`,
                    {
                        id: id,
                        status: "approve",
                    },
                    {
                        onSuccess: () => {
                            Swal.fire("Approve!", "", "success");
                        },
                    }
                );
            } else if (result.isDenied) {
                router.post(
                    `/approve`,
                    {
                        id: id,
                        status: "reject",
                    },
                    {
                        onSuccess: () => {
                            Swal.fire("Reject!", "", "error");
                        },
                    }
                );
            }
        });
    };

    const supplierName = (id) => {
        return supplier
            .filter((item) => {
                return item.id == id;
            })
            .map((item) => {
                return item.nama_supplier;
            });
    };

    const kategoriName = (id) => {
        return kategori
            .filter((item) => {
                return item.id == id;
            })
            .map((item) => {
                return item.nama_kategori;
            });
    };

    const produkName = (id) => {
        return produk
            .filter((item) => {
                return item.id == id;
            })
            .map((item) => {
                return item.nama;
            });
    };

    return (
        <Layout>
            <Head title="InventoryApp - Approve Pembelian " />
            <section className="section">
                <div className="section-header">
                    <h1>Approved Pembelian</h1>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body table-responsive">
                                <table className="table table-hover table-bordered">
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
                                                        <input
                                                            type="hidden"
                                                            name="id_supplier"
                                                            value={
                                                                pembelian.id_supplier
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                    </td>
                                                    <td>
                                                        {kategoriName(
                                                            pembelian.id_kategori
                                                        )}
                                                    </td>
                                                    <td>
                                                        {pembelian.qty}
                                                        <input
                                                            type="hidden"
                                                            name="qty_awal"
                                                            value={
                                                                pembelian.qty
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                    </td>
                                                    <td>
                                                        {produkName(
                                                            pembelian.id_produk
                                                        )}
                                                        <input
                                                            type="hidden"
                                                            name="id_produk"
                                                            value={
                                                                pembelian.id_produk
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-warning">
                                                            {pembelian.status[0].toUpperCase() +
                                                                pembelian.status.slice(
                                                                    1
                                                                )}
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-success"
                                                            onClick={() => {
                                                                confirmApprove(
                                                                    pembelian.id
                                                                );
                                                            }}
                                                        >
                                                            <i className="fas fa-check-circle"></i>
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

export default ApprovePembelian;
