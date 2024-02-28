import React, { useState } from "react";
import { Link, Head, usePage, router } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

const FormLaporanPembelian = () => {
    const [tanggalAwal, setTanggalAwal] = useState("");
    const [tanggalAkhir, setTanggalAkhir] = useState("");

    const showDataPembelian = (e) => {
        e.preventDefault();
        router.get("/show-laporan-pembelian", {
            tanggalAwal: tanggalAwal,
            tanggalAkhir: tanggalAkhir,
        });
    };

    return (
        <Layout>
            <Head title="InventoryApp - Laporan Pembelian" />
            <section class="section">
                <div className="section-header">
                    <h1>Laporan Pembelian</h1>
                </div>
                <div className="row">
                    <div className="col-8">
                        <div className="card">
                            <div className="card-body shadow-sm">
                                <form onSubmit={showDataPembelian}>
                                    <div className="row">
                                        <div className="col-5">
                                            <div className="form-group">
                                                <label for="tanggal_awal">
                                                    Tanggal Awal
                                                </label>
                                                <input
                                                    type="date"
                                                    class="form-control"
                                                    id="tanggal_awal"
                                                    value={tanggalAwal}
                                                    onChange={(e) =>
                                                        setTanggalAwal(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <div className="form-group">
                                                <label for="tanggal_akhir">
                                                    Tanggal Akhir
                                                </label>
                                                <input
                                                    type="date"
                                                    class="form-control"
                                                    id="tanggal_akhir"
                                                    value={tanggalAkhir}
                                                    onChange={(e) =>
                                                        setTanggalAkhir(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-2 d-flex align-items-center">
                                            <button class="btn btn-success">
                                                <i className="fas fa-search"></i>{" "}
                                                Search
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default FormLaporanPembelian;
