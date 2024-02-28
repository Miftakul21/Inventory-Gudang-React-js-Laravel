import React from "react";
import { Link, usePage, Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

const DetailApprovePenjualan = () => {
    const { penjualan } = usePage().props;
    const { penjualanCustomer } = usePage().props;
    const { produk } = usePage().props;
    const { customer } = usePage().props;

    console.log("customer: ", customer);
    console.log("produk: ", produk);
    console.log("penjualan", penjualan);
    console.log("penjualanCustomer", penjualanCustomer);

    return (
        <Layout>
            <Head title="InventoryApp -  Detail Approve Penjualan" />
            <section className="section">
                <div className="section-header">
                    <h1>Detail Approve Penjualan</h1>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header font-weight-bold">
                                Daftar Pembelian
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <td>No</td>
                                            <td>Produk</td>
                                            <td>Jumlah Produk</td>
                                            <td>Harga Produk</td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default DetailApprovePenjualan;
