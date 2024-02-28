import React, { useEffect, useState } from "react";
import { Head, Link, usePage, router } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

const CreatePenjualan = () => {
    const { produk } = usePage().props;
    const { kategori } = usePage().props;
    const { pembelian } = usePage().props;
    const { customer } = usePage().props;
    const { nomor_penjualan } = usePage().props;
    const { stok } = usePage().props;
    const { errors } = usePage().props;
    const [inputs, setInputs] = useState([]);

    const [values, setValues] = useState({
        id_kategori: "",
        id_produk: "",
        qty: 0,
        harga: 0,
    });

    const handleChangeValue = (e) => {
        const { value, name } = e.target;
        setValues((val) => ({
            ...val,
            [name]: value,
        }));
    };

    const [nomorPembayaran, setNomorPembayaran] = useState(
        `#${nomor_penjualan}`
    );

    const [tanggal, setTanggal] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [idCustomer, setIdCustomer] = useState("");
    const [pembayaran, setPembayaran] = useState("");
    const [discount, setDiscount] = useState(0);

    const handleInput = () => {
        setInputs([
            ...inputs,
            {
                tanggal: tanggal,
                id_kategori: values.id_kategori,
                id_produk: values.id_produk,
                qty: 0,
                harga: 0,
            },
        ]);
    };

    const handleInputs = (e, index) => {
        const { name, value } = e.target;
        const listInputs = [...inputs];
        listInputs[index][name] = value;
        setInputs(listInputs);
    };

    let qtyProduk = stok
        .filter((stok) => {
            return stok.id_produk == values.id_produk;
        })
        .map((item) => {
            let stokAwal = item.qty_awal;
            let stokKeluar = item.qty_keluar;

            return stokAwal - stokKeluar;
        });

    let sum = 0;

    const handleDeleteForm = (index) => {
        let form = [...inputs];
        form.splice(index, 1);
        setInputs(form);
    };

    const handleStore = (e) => {
        e.preventDefault();

        router.post("/penjualan", {
            nomor_penjualan: `#${nomor_penjualan}`,
            tanggal: tanggal,
            id_customer: idCustomer,
            pembayaran: pembayaran,
            deskripsi: deskripsi,
            discount: discount,
            penjualan: [...inputs],
        });
    };

    return (
        <Layout>
            <Head title="InventoryApp - Tambah Penjualan" />
            <section className="section">
                <div className="section-header">
                    <h1>Tambah Penjualan</h1>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h6>Form Pembayaran</h6>
                                <h6>No. Pembayaran #{nomor_penjualan}</h6>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label htmlFor="tanggal">
                                                Tanggal
                                            </label>
                                            <input
                                                type="date"
                                                id="tanggal"
                                                className="form-control"
                                                name="tanggal"
                                                value={tanggal}
                                                onChange={(e) =>
                                                    setTanggal(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label htmlFor="id_kategori">
                                                Kategori
                                            </label>
                                            <select
                                                name="id_kategori"
                                                id="id_kategori"
                                                className="form-control"
                                                onChange={handleChangeValue}
                                                defaultValue={""}
                                            >
                                                <option value="">
                                                    Kategori
                                                </option>
                                                {kategori.map(
                                                    (kategori, index) => (
                                                        <option
                                                            value={kategori.id}
                                                        >
                                                            {
                                                                kategori.nama_kategori
                                                            }
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label htmlFor="id_produk">
                                                Produk
                                            </label>
                                            <select
                                                name="id_produk"
                                                id="id_produk"
                                                className="form-control"
                                                onChange={handleChangeValue}
                                                defaultValue={""}
                                            >
                                                <option value="">Produk</option>
                                                {produk.map((produk, index) => {
                                                    return produk.id ==
                                                        values.id_kategori ? (
                                                        <option
                                                            value={produk.id}
                                                        >
                                                            {produk.nama}
                                                        </option>
                                                    ) : (
                                                        ""
                                                    );
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <div className="form-group">
                                            <label htmlFor="stok">Stok</label>
                                            <input
                                                type="text"
                                                name="qty"
                                                className="form-control"
                                                value={qtyProduk}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className="col-2 d-flex justify-content-center">
                                        <button
                                            className="btn btn-warning align-self-center"
                                            onClick={handleInput}
                                        >
                                            <i className="fas fa-plus mr-2"></i>
                                            Tambah
                                        </button>
                                    </div>
                                </div>

                                {/* Table handle input */}
                                <div className="row mt-2">
                                    <table className="table table-borderles">
                                        <thead>
                                            <tr>
                                                <th>Kategori</th>
                                                <th>Produk</th>
                                                <th>Qty</th>
                                                <th>Harga</th>
                                                <th style={{ width: 200 }}>
                                                    Total
                                                </th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {inputs.map((formInputs, index) => {
                                                sum +=
                                                    inputs[index].qty *
                                                    inputs[index].harga;

                                                return (
                                                    <tr>
                                                        <td>
                                                            {kategori.map(
                                                                (kategori) => {
                                                                    return kategori.id ==
                                                                        formInputs.id_kategori
                                                                        ? kategori.nama_kategori
                                                                        : "";
                                                                }
                                                            )}
                                                        </td>
                                                        <td>
                                                            {produk.map(
                                                                (produk) => {
                                                                    return produk.id ==
                                                                        formInputs.id_kategori
                                                                        ? produk.nama
                                                                        : "";
                                                                }
                                                            )}
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                name="qty"
                                                                min="0"
                                                                onChange={(e) =>
                                                                    handleInputs(
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
                                                                name="harga"
                                                                min="0"
                                                                onChange={(e) =>
                                                                    handleInputs(
                                                                        e,
                                                                        index
                                                                    )
                                                                }
                                                            />
                                                        </td>
                                                        <td>
                                                            {inputs[index].qty *
                                                                inputs[index]
                                                                    .harga}
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
                                                    colSpan={4}
                                                    style={{
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    Discount
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        value={discount}
                                                        className="form-control"
                                                        onChange={(e) =>
                                                            setDiscount(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    colSpan={4}
                                                    style={{
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    Total
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        value={sum - discount}
                                                        className="form-control"
                                                        disabled
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <form onSubmit={handleStore}>
                                    <div className="row mt-2">
                                        <div className="col-4">
                                            <div className="form-group">
                                                <label htmlFor="deskripsi">
                                                    Deskripsi
                                                </label>
                                                <textarea
                                                    id="deskripsi"
                                                    placeholder="Deskripsi..."
                                                    className="form-control"
                                                    onChange={(e) => {
                                                        setDeskripsi(
                                                            e.target.value
                                                        );
                                                    }}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <label htmlFor="pembayaran">
                                                Pembayaran
                                            </label>
                                            <select
                                                name="pembayaran"
                                                id=""
                                                className="form-control"
                                                defaultValue={""}
                                                onChange={(e) =>
                                                    setPembayaran(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">
                                                    Pembayaran
                                                </option>
                                                <option value="full paid">
                                                    Full paid
                                                </option>
                                                <option value="full due">
                                                    Full due
                                                </option>
                                                <option value="partial due">
                                                    Partial due
                                                </option>
                                            </select>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-group">
                                                <label htmlFor="customer">
                                                    Customer
                                                </label>
                                                <select
                                                    name="customer"
                                                    id="customer"
                                                    className={
                                                        errors.id_customer
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                    defaultValue={""}
                                                    onChange={(e) =>
                                                        setIdCustomer(
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">
                                                        Customer
                                                    </option>
                                                    {customer.map(
                                                        (customer, index) => {
                                                            return (
                                                                <option
                                                                    value={
                                                                        customer.id
                                                                    }
                                                                >
                                                                    {
                                                                        customer.nama
                                                                    }
                                                                </option>
                                                            );
                                                        }
                                                    )}
                                                </select>
                                                {errors.id_customer && (
                                                    <div className="invalid-feedback">
                                                        {errors.id_customer}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-6">
                                            <button
                                                type="submit"
                                                className="btn btn-primary mr-2"
                                            >
                                                Simpan
                                            </button>
                                            <Link
                                                href="/penjualan"
                                                className="btn btn-secondary"
                                            >
                                                Batal
                                            </Link>
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

export default CreatePenjualan;
