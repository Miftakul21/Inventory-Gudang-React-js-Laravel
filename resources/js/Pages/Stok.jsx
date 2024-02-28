import React from "react";
import { Link, Head, usePage, router } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

const Stok = () => {
    const { user } = usePage().props;
    const { stok } = usePage().props;
    const { supplier } = usePage().props;
    const { produk } = usePage().props;

    const supplierName = (id) => {
        return supplier
            .filter((item) => {
                return item.id == id;
            })
            .map((item) => {
                return item.nama_supplier;
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
            <Head title="InventoryApp - Stok"></Head>
            <section class="section">
                <div class="section-header">
                    <h1>Stok</h1>
                </div>
                <div class="row">
                    <div className="col-12">
                        <div class="card">
                            <div class="card-body table-responsive">
                                <table class="table table-borderless table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Supplier</th>
                                            <th scope="col">Produk</th>
                                            <th scope="col">Stok Masuk</th>
                                            <th scope="col">Stok Keluar</th>
                                            <th scope="col">Total Stok</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {stok.map((stok, index) => {
                                            return (
                                                <tr>
                                                    <td>{(index += 1)}</td>
                                                    <td>
                                                        {supplierName(
                                                            stok.id_supplier
                                                        )}
                                                    </td>
                                                    <td>
                                                        {produkName(
                                                            stok.id_produk
                                                        )}
                                                    </td>
                                                    <td>{stok.qty_awal}</td>
                                                    <td>{stok.qty_keluar}</td>
                                                    <td>
                                                        {stok.qty_awal -
                                                            stok.qty_keluar}
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

export default Stok;
