<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produk;
use App\Models\Kategori;
use App\Models\Satuan;
use App\Models\Supplier;
use Inertia\Inertia;
use Validator;


class ProdukController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {           
        $satuan = Satuan::all();
        $kategori = Kategori::all();
        $supplier = Supplier::all();
        $produk = Produk::all();
        
        return Inertia::render('Produk', [
            'satuan' => $satuan,
            'kategori' => $kategori,
            'supplier' => $supplier,
            'produk' => $produk,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $satuan = Satuan::all();
        $kategori = Kategori::all();
        $supplier = Supplier::all();
        
        return Inertia::render('Form/CreateProduk', [
            'satuan' => $satuan,
            'kategori' => $kategori,
            'supplier' => $supplier,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Produk::insert($request->all());
        return redirect()->route('produk.index')->with(['success' => 'Data berhasil disimpan']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Produk $produk)
    {
        $satuan = Satuan::all();
        $kategori = Kategori::all();
        $supplier = Supplier::all();
        
        return Inertia::render('Form/EditProduk', [
            'dataSatuan' => $satuan,
            'dataKategori' => $kategori,
            'dataSupplier' => $supplier,
            'produk' => $produk
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Produk $produk)
    {
        $validation = $request->validate([
            'nama' => 'required',
            'id_supplier' => 'required',
            'id_kategori' => 'required',
            'id_satuan' => 'required',
        ]);

        $produk->update([
            'nama' => $request->nama, 
            'id_supplier' => $request->id_supplier,
            'id_kategori' => $request->id_kategori,
            'id_satuan' => $request->id_satuan,
        ]);

        return redirect()->route('produk.index')->with(['success' => 'Data berhasil hapus']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Produk $produk)
    {
        $produk->delete();
        return redirect()->route('produk.index')->with(['success' => 'Data berhasil hapus']);
    }
}