import React, { useState } from "react";
import { Link, Head, router, usePage } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

const CreateProduk = () => {
    const { errors } = usePage().props;
    const { produk } = usePage().props;
    const { dataSatuan } = usePage().props;
    const { dataKategori } = usePage().props;
    const { dataSupplier } = usePage().props;

    const [nama, setNama] = useState(produk.nama);
    const [supplier, setSupplier] = useState(produk.id_supplier);
    const [satuan, setSatuan] = useState(produk.id_satuan);
    const [kategori, setKategori] = useState(produk.id_kategori);

    const editProduk = (e) => {
        e.preventDefault();
        router.put(
            `/produk/${produk.id}`,
            {
                nama: nama,
                id_supplier: supplier,
                id_satuan: satuan,
                id_kategori: kategori,
            },
            {
                onSuccess: () => {
                    Swal.fire({
                        title: "Update!",
                        text: "Data berhasil update",
                        icon: "success",
                    });
                },
            }
        );
    };

    return (
        <Layout>
            <Head title="Inventory - Tambah Produk" />
            <section class="section">
                <div class="section-header">
                    <h1>Edit Supplier</h1>
                </div>
                <div class="row">
                    <div class="col-10">
                        <div class="card">
                            <div class="card-header border-bottom border-2">
                                <h4>Form produk</h4>
                            </div>
                            <form onSubmit={editProduk}>
                                <div class="card-body">
                                    <div>
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label for="produk">
                                                        Produk{" "}
                                                        <span class="text-danger">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input
                                                        id="produk"
                                                        className={
                                                            errors.nama
                                                                ? "is-invalid form-control"
                                                                : "form-control"
                                                        }
                                                        placeholder="Masukkan produk"
                                                        name="nama"
                                                        value={nama}
                                                        onChange={(e) =>
                                                            setNama(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    {errors.nama && (
                                                        <div className="invalid-feedback">
                                                            {errors.nama}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label for="supplier">
                                                        Supplier
                                                        <span class="text-danger">
                                                            *
                                                        </span>
                                                    </label>
                                                    <select
                                                        className={
                                                            errors.id_supplier
                                                                ? "is-invalid form-control"
                                                                : "form-control"
                                                        }
                                                        id="supplier"
                                                        name="id_supplier"
                                                        onChange={(e) =>
                                                            setSupplier(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        {dataSupplier.map(
                                                            (
                                                                data_supplier,
                                                                index
                                                            ) => {
                                                                return produk.id_supplier ==
                                                                    data_supplier.id ? (
                                                                    <option
                                                                        value={
                                                                            data_supplier.id
                                                                        }
                                                                        selected
                                                                    >
                                                                        {
                                                                            data_supplier.nama_supplier
                                                                        }{" "}
                                                                    </option>
                                                                ) : (
                                                                    <option
                                                                        value={
                                                                            data_supplier.id
                                                                        }
                                                                    >
                                                                        {
                                                                            data_supplier.nama_supplier
                                                                        }
                                                                    </option>
                                                                );
                                                            }
                                                        )}
                                                    </select>
                                                    {errors.id_supplier && (
                                                        <div className="invalid-feedback">
                                                            {errors.id_supplier}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label for="kategori">
                                                        Kategori
                                                        <span class="text-danger">
                                                            *
                                                        </span>
                                                    </label>
                                                    <select
                                                        className={
                                                            errors.id_kategori
                                                                ? "is-invalid form-control"
                                                                : "form-control"
                                                        }
                                                        id="kategori"
                                                        name="id_kategori"
                                                        onChange={(e) =>
                                                            setKategori(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        {dataKategori.map(
                                                            (
                                                                data_kategori,
                                                                index
                                                            ) => {
                                                                return produk.id_kategori ==
                                                                    data_kategori.id ? (
                                                                    <option
                                                                        value={
                                                                            data_kategori.id
                                                                        }
                                                                        selected
                                                                    >
                                                                        {
                                                                            data_kategori.nama_kategori
                                                                        }{" "}
                                                                    </option>
                                                                ) : (
                                                                    <option
                                                                        value={
                                                                            data_kategori.id
                                                                        }
                                                                    >
                                                                        {
                                                                            data_kategori.nama_kategori
                                                                        }
                                                                    </option>
                                                                );
                                                            }
                                                        )}
                                                    </select>
                                                    {errors.id_kategori && (
                                                        <div className="invalid-feedback">
                                                            {errors.id_kategori}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label for="satuan">
                                                        Satuan
                                                        <span class="text-danger">
                                                            *
                                                        </span>
                                                    </label>
                                                    <select
                                                        className={
                                                            errors.id_satuan
                                                                ? "is-invalid form-control"
                                                                : "form-control"
                                                        }
                                                        id="satuan"
                                                        name="id_satuan"
                                                        onChange={(e) =>
                                                            setSatuan(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        {dataSatuan.map(
                                                            (
                                                                data_satuan,
                                                                index
                                                            ) => {
                                                                return produk.id_satuan ==
                                                                    data_satuan.id ? (
                                                                    <option
                                                                        value={
                                                                            data_satuan.id
                                                                        }
                                                                        selected
                                                                    >
                                                                        {
                                                                            data_satuan.nama_satuan
                                                                        }
                                                                    </option>
                                                                ) : (
                                                                    <option
                                                                        value={
                                                                            data_satuan.id
                                                                        }
                                                                    >
                                                                        {
                                                                            data_satuan.nama_satuan
                                                                        }
                                                                    </option>
                                                                );
                                                            }
                                                        )}
                                                    </select>
                                                    {errors.id_satuan && (
                                                        <div className="invalid-feedback">
                                                            {errors.id_satuan}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer d-flex border-top border-2">
                                    <button
                                        type="submit"
                                        class="btn btn-primary mr-3"
                                    >
                                        Update
                                    </button>
                                    <Link
                                        href="/produk"
                                        class="btn btn-secondary"
                                    >
                                        Batal
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default CreateProduk;
