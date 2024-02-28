import React from "react";
import { Link, Head, usePage } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import ImageEmpty from "@/Assets/Image/ImageEmpty.svg";

const LaporanPembelian = () => {
    const { pembelian } = usePage().props;
    const { produk } = usePage().props;

    let total = 0;

    return (
        <Layout>
            <Head title="InventoryApp - Hasil Laporan" />
            <section class="section">
                <div className="section-header">
                    <h1>Laporan Pembelian</h1>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Link href="/laporan-pembelian" class="btn btn-primary">
                            <i className="fas fa-arrow-left mr-2"></i>
                            Kembali
                        </Link>
                        {!pembelian.length ? (
                            <>
                                <div className="mt-3 d-flex justify-content-center">
                                    <img
                                        src={ImageEmpty}
                                        alt="image-empty"
                                        style={{ width: 300, height: 300 }}
                                    />
                                </div>
                                <h2 class="text-center text-primary">
                                    Data Not Found
                                </h2>
                            </>
                        ) : (
                            <div className="card mt-3">
                                <div className="card-body">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Nomor Pembelian</th>
                                                <th>Tanggal</th>
                                                <th>Produk</th>
                                                <th>Qty</th>
                                                <th>Harga</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {pembelian.map(
                                                (pembelian, index) => {
                                                    total +=
                                                        pembelian.harga_produk;
                                                    return (
                                                        <tr>
                                                            <td>
                                                                {(index += 1)}
                                                            </td>
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
                                                                {produk.map(
                                                                    (
                                                                        produk,
                                                                        item
                                                                    ) => {
                                                                        return pembelian.id_produk ==
                                                                            produk.id
                                                                            ? produk.nama
                                                                            : "";
                                                                    }
                                                                )}
                                                            </td>
                                                            <td>
                                                                {pembelian.qty}
                                                            </td>
                                                            <td>
                                                                {
                                                                    pembelian.harga_produk
                                                                }
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            )}
                                            <tr>
                                                <td
                                                    colspan="5"
                                                    align="right"
                                                    style={{
                                                        fontSize: 16,
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    Total:
                                                </td>
                                                <td
                                                    coslspan="1"
                                                    style={{
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    Rp. {total}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default LaporanPembelian;
