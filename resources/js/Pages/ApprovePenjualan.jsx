import React from "react";
import { Head, usePage, Link } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

const ApprovePenjualan = () => {
    const { penjualan } = usePage().props;
    const { customer } = usePage().props;

    return (
        <Layout>
            <Head title="InventoryApp - Penjualan" />
            <section className="section">
                <div className="section-header">
                    <h1>Penjualan</h1>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Link
                            href="/penjualan/create"
                            className="btn btn-primary mb-3"
                        >
                            <i className="fas fa-plus mr-2"></i>
                            Tambah data
                        </Link>
                        <div className="card">
                            <div className="card-body responsive">
                                <table className="table table-borderless table-hover">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Customer Name</th>
                                            <th>Nomor Pembayaran</th>
                                            <th>Tanggal</th>
                                            <th>Deskripsi</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {penjualan.map((penjualan, index) => {
                                            return (
                                                <tr>
                                                    <td>{(index += 1)}</td>
                                                    <td>
                                                        {customer
                                                            .filter((item) => {
                                                                return (
                                                                    penjualan.id_customer ==
                                                                    item.id
                                                                );
                                                            })
                                                            .map((customer) => {
                                                                return customer.nama;
                                                            })}
                                                    </td>
                                                    <td>
                                                        {
                                                            penjualan.nomor_penjualan
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            penjualan.tanggal_penjualan
                                                        }
                                                    </td>
                                                    <td>
                                                        {penjualan.deskripsi}
                                                    </td>
                                                    <td>
                                                        <Link
                                                            href={`/penjualan/${penjualan.id}/edit`}
                                                            className="btn btn-success"
                                                        >
                                                            <i className="fas fa-check-circle"></i>
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

export default ApprovePenjualan;
