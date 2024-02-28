import React from "react";
import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

const Dashboard = () => {
    return (
        <Layout>
            <Head title="InventoryApp - Dashboard" />
            <section className="section">
                <div className="section-header">
                    <h1>Dashboard</h1>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="card card-statistic-1">
                            <div className="card-icon bg-primary">
                                <i className="far fa-user"></i>
                            </div>
                            <div className="card-wrap">
                                <div className="card-header">
                                    <h4>Produk</h4>
                                </div>
                                <div className="card-body">10</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="card card-statistic-1">
                            <div className="card-icon bg-danger">
                                <i className="far fa-newspaper"></i>
                            </div>
                            <div className="card-wrap">
                                <div className="card-header">
                                    <h4>Supplier</h4>
                                </div>
                                <div className="card-body">42</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="card card-statistic-1">
                            <div className="card-icon bg-warning">
                                <i className="far fa-file"></i>
                            </div>
                            <div className="card-wrap">
                                <div className="card-header">
                                    <h4>Pembelian Produk</h4>
                                </div>
                                <div className="card-body">1,201</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="card card-statistic-1">
                            <div className="card-icon bg-success">
                                <i className="fas fa-circle"></i>
                            </div>
                            <div className="card-wrap">
                                <div className="card-header">
                                    <h4>Penjualan Produk</h4>
                                </div>
                                <div className="card-body">47</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Dashboard;
