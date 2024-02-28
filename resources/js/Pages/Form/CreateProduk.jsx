import React, { useState } from "react";
import { Link, Head, router, usePage } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

const CreateProduk = () => {
    const { errors } = usePage().props;
    const { satuan } = usePage().props;
    const { kategori } = usePage().props;
    const { supplier } = usePage().props;

    const [inputs, setInputs] = useState([
        {
            nama: "",
            id_supplier: "",
            id_satuan: "",
            id_kategori: "",
        },
    ]);

    const handleInputChanges = (e, index) => {
        const { name, value } = e.target;
        const listInputs = [...inputs];
        listInputs[index][name] = value;
        setInputs(listInputs);
    };

    const handleAddForm = () => {
        setInputs([
            ...inputs,
            {
                nama: "",
                id_supplier: "",
                id_satuan: "",
                id_kategori: "",
            },
        ]);
    };

    const handleDeleteForm = (index) => {
        const form = [...inputs];
        form.splice(index, 1);
        setInputs(form);
    };

    const storeProduk = (e) => {
        e.preventDefault();
        router.post(
            "/produk",
            { ...inputs },
            {
                onSuccess: () => {
                    Swal.fire({
                        title: "Simpan!",
                        text: "Data berhasil simpan",
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
                    <h1>Tambah Supplier</h1>
                </div>
                <div class="row">
                    <div class="col-10">
                        <div class="card">
                            <div class="card-header d-flex justify-content-between align-items-center border-bottom border-2">
                                <h4>Form produk</h4>
                                <button
                                    class="btn btn-warning"
                                    onClick={handleAddForm}
                                >
                                    Tambah
                                </button>
                            </div>
                            <form onSubmit={storeProduk}>
                                <div class="card-body">
                                    {inputs.map((formParams, index) => (
                                        <div
                                            className={
                                                index > 0
                                                    ? "p-3 border-top border-4"
                                                    : "p-3"
                                            }
                                        >
                                            {inputs.length !== 1 && (
                                                <div class="d-flex align-items-end flex-column">
                                                    <button
                                                        class="btn btn-danger btn-sm"
                                                        onClick={() =>
                                                            handleDeleteForm(
                                                                index
                                                            )
                                                        }
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            )}
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
                                                            onChange={(form) =>
                                                                handleInputChanges(
                                                                    form,
                                                                    index
                                                                )
                                                            }
                                                        />
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
                                                                "form-control"
                                                            }
                                                            name="id_supplier"
                                                            id="supplier"
                                                            onChange={(form) =>
                                                                handleInputChanges(
                                                                    form,
                                                                    index
                                                                )
                                                            }
                                                        >
                                                            <option
                                                                value=""
                                                                selected
                                                            >
                                                                Supplier
                                                            </option>
                                                            {supplier.map(
                                                                (
                                                                    item,
                                                                    index
                                                                ) => (
                                                                    <option
                                                                        value={
                                                                            item.id
                                                                        }
                                                                    >
                                                                        {
                                                                            item.nama_supplier
                                                                        }
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
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
                                                                "form-control"
                                                            }
                                                            id="kategori"
                                                            name="id_kategori"
                                                            onChange={(form) =>
                                                                handleInputChanges(
                                                                    form,
                                                                    index
                                                                )
                                                            }
                                                        >
                                                            <option
                                                                value=""
                                                                selected
                                                            >
                                                                Kategori
                                                            </option>
                                                            {kategori.map(
                                                                (
                                                                    item,
                                                                    index
                                                                ) => (
                                                                    <option
                                                                        value={
                                                                            item.id
                                                                        }
                                                                    >
                                                                        {
                                                                            item.nama_kategori
                                                                        }
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
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
                                                                "form-control"
                                                            }
                                                            name="id_satuan"
                                                            id="satuan"
                                                            onChange={(form) =>
                                                                handleInputChanges(
                                                                    form,
                                                                    index
                                                                )
                                                            }
                                                        >
                                                            <option
                                                                value=""
                                                                selected
                                                            >
                                                                Satuan
                                                            </option>
                                                            {satuan.map(
                                                                (
                                                                    item,
                                                                    index
                                                                ) => (
                                                                    <option
                                                                        value={
                                                                            item.id
                                                                        }
                                                                    >
                                                                        {
                                                                            item.nama_satuan
                                                                        }
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div class="card-footer d-flex border-top border-2">
                                    <button
                                        type="submit"
                                        class="btn btn-primary mr-3"
                                    >
                                        Simpan
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
