import React, { useState } from "react";
import Layout from "@/Layouts/Layout";
import { Link, Head, usePage, router } from "@inertiajs/react";
import CreateKategori from "./CreateKategori";

const CreatePembelian = () => {
    const { dataProduk } = usePage().props;
    const { dataSupplier } = usePage().props;
    const { dataSatuan } = usePage().props;
    const { dataKategori } = usePage().props;

    const [tanggal, setTanggal] = useState("");
    const [nomorPembelian, setNomorPembelian] = useState("");
    const [supplier, setSupplier] = useState("");
    const [kategori, setKategori] = useState("");
    const [produk, setProduk] = useState("");
    const [deskripsi, setDeskripsi] = useState("");

    const [inputs, setInputs] = useState([]);

    const handleFormInput = () => {
        setInputs([
            ...inputs,
            {
                nomor_pembelian: nomorPembelian,
                id_supplier: supplier,
                id_kategori: kategori,
                id_produk: produk,
                deskripsi: deskripsi,
                qty: 0,
                harga_produk: 0,
                status: "pending",
                tanggal_pembelian: tanggal,
            },
        ]);
    };

    const handleInputChanges = (e, index) => {
        const { name, value } = e.target;
        const listInputs = [...inputs];
        listInputs[index][name] = value;
        setInputs(listInputs);
    };

    let sum = 0;

    const handleDeleteForm = (index) => {
        const form = [...inputs];
        form.splice(index, 1);
        setInputs(form);
    };

    const storePembelian = (e) => {
        e.preventDefault();
        router.post("/pembelian", { ...inputs });
    };

    return (
        <Layout>
            <Head title="Inventory - Tambah Pembelian" />
            <section className="section">
                <div className="section-header">
                    <h1>Tambah Supplier</h1>
                </div>
                <div className="row">
                    {/* Form tambah input */}
                    <div className="col-10">
                        <div className="card">
                            <div className="card-header">
                                <h4>Form Pembelian</h4>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label for="tanggal_masuk">
                                                Tanggal
                                            </label>
                                            <input
                                                type="date"
                                                name="tanggal_masuk"
                                                className="form-control"
                                                onChange={(e) =>
                                                    setTanggal(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <label for="nomor_pembelian">
                                            Nomor Pembelian
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="nomor_pembelian"
                                            onChange={(e) =>
                                                setNomorPembelian(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="col-4">
                                        <label for="id_supplier">
                                            Supplier
                                        </label>
                                        <select
                                            name="id_supplier"
                                            id="id_supplier"
                                            className="form-control"
                                            onChange={(e) =>
                                                setSupplier(e.target.value)
                                            }
                                        >
                                            <option select>Supplier</option>
                                            {dataSupplier.map(
                                                (data_supplier, index) => (
                                                    <option
                                                        value={data_supplier.id}
                                                    >
                                                        {
                                                            data_supplier.nama_supplier
                                                        }
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label for="id_kategori">
                                                Kategori
                                            </label>
                                            <select
                                                name="id_kategori"
                                                id="id_kategori"
                                                className="form-control"
                                                onChange={(e) =>
                                                    setKategori(e.target.value)
                                                }
                                            >
                                                <option select>Kategori</option>
                                                {dataKategori.map(
                                                    (data_kategori, index) => (
                                                        <option
                                                            value={
                                                                data_kategori.id
                                                            }
                                                        >
                                                            {
                                                                data_kategori.nama_kategori
                                                            }
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label for="id_produk">
                                                Produk
                                            </label>
                                            <select
                                                name="id_produk"
                                                id="id_produk"
                                                className="form-control"
                                                onChange={(e) =>
                                                    setProduk(e.target.value)
                                                }
                                            >
                                                <option select>Produk</option>
                                                {dataProduk.map(
                                                    (data_produk, index) => (
                                                        <option
                                                            value={
                                                                data_produk.id
                                                            }
                                                        >
                                                            {data_produk.nama}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-3 d-flex align-items-center">
                                        <button
                                            className="btn btn-warning"
                                            onClick={handleFormInput}
                                        >
                                            <i className="fas fa-plus mr-2"></i>
                                            Tambah
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Form Input */}
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={storePembelian}>
                                    <table className="table table-hover table-bordered">
                                        <thead>
                                            <th scope="col">Kategori</th>
                                            <th scope="col">Produk</th>
                                            <th scope="col">Qty</th>
                                            <th scope="col">Harga</th>
                                            <th scope="col">Deskripsi</th>
                                            <th scope="col">Total Harga</th>
                                            <th scope="col">Aksi</th>
                                        </thead>
                                        <tbody>
                                            {inputs.map((formInputs, index) => {
                                                sum +=
                                                    inputs[index].qty *
                                                    inputs[index].harga_produk;
                                                return (
                                                    <tr>
                                                        <td>
                                                            {dataKategori.map(
                                                                (
                                                                    data_kategori,
                                                                    index
                                                                ) => {
                                                                    return data_kategori.id ==
                                                                        formInputs.id_kategori
                                                                        ? data_kategori.nama_kategori
                                                                        : "";
                                                                }
                                                            )}
                                                            <input
                                                                type="hidden"
                                                                name="id_kategori"
                                                                value={
                                                                    formInputs.kategori
                                                                }
                                                                onChange={(e) =>
                                                                    handleInputChanges(
                                                                        e,
                                                                        index
                                                                    )
                                                                }
                                                            />
                                                        </td>
                                                        <td>
                                                            {dataProduk.map(
                                                                (
                                                                    data_produk,
                                                                    index
                                                                ) => {
                                                                    return data_produk.id ==
                                                                        formInputs.id_produk
                                                                        ? data_produk.nama
                                                                        : "";
                                                                }
                                                            )}
                                                            <input
                                                                type="hidden"
                                                                name="id_produk"
                                                                value={
                                                                    formInputs.produk
                                                                }
                                                                onChange={(e) =>
                                                                    handleInputChanges(
                                                                        e,
                                                                        index
                                                                    )
                                                                }
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                name="qty"
                                                                onChange={(e) =>
                                                                    handleInputChanges(
                                                                        e,
                                                                        index
                                                                    )
                                                                }
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                name="harga_produk"
                                                                onChange={(e) =>
                                                                    handleInputChanges(
                                                                        e,
                                                                        index
                                                                    )
                                                                }
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="deskripsi"
                                                                onChange={(e) =>
                                                                    handleInputChanges(
                                                                        e,
                                                                        index
                                                                    )
                                                                }
                                                            />
                                                        </td>
                                                        <td>
                                                            {inputs[index].qty *
                                                                inputs[index]
                                                                    .harga_produk}
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="btn btn-danger"
                                                                onClick={() =>
                                                                    handleDeleteForm(
                                                                        index
                                                                    )
                                                                }
                                                            >
                                                                <i className="fas fa-trash"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                            <tr>
                                                <td
                                                    colspan="5"
                                                    align="right"
                                                    style={{
                                                        fontWeight: "bold",
                                                        fontSize: 18,
                                                    }}
                                                >
                                                    Total:
                                                </td>
                                                <td
                                                    colspan="2"
                                                    style={{
                                                        fontWeight: "bold",
                                                        fontSize: 18,
                                                    }}
                                                >
                                                    {sum}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="d-flex">
                                        <button
                                            type="submit"
                                            className="btn btn-primary mr-3"
                                            style={{ width: 110 }}
                                        >
                                            Beli
                                        </button>
                                        <Link
                                            href="/pembelian"
                                            className="btn btn-secondary"
                                            style={{ width: 110 }}
                                        >
                                            Batal
                                        </Link>
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

export default CreatePembelian;
