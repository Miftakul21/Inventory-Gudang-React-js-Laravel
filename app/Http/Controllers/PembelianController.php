<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kategori;
use App\Models\Supplier;
use App\Models\Satuan;
use App\Models\Produk;
use App\Models\Pembelian;
use Inertia\Inertia;


class PembelianController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pembelian = Pembelian::all();
        $supplier = Supplier::all();
        $kategori = Kategori::all();
        $produk = Produk::all();

        return Inertia::render('Pembelian', [
            'pembelian' => $pembelian, 
            'supplier' => $supplier,
            'kategori' => $kategori,
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
        $pembelian = Pembelian::all();
        $supplier = Supplier::all();
        $kategori = Kategori::all();
        $satuan = Satuan::all();
        $produk = Produk::all();

        return Inertia::render('Form/CreatePembelian', [
            'dataSupplier' => $supplier,
            'dataKategori' => $kategori,
            'dataSatuan' => $satuan,
            'dataProduk' => $produk,
            
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
        // dd($request->all());
        $validation = $request->validate([
            'tanggal.*' => 'required',
            'nomor_pembelian.*' => 'required',
            'id_supplier.*' => 'required',
            'id_produk.*' => 'required',
            'qty.*' => 'required',
            'harga_produk.*' => 'required'
        ]);

        
        for($i = 0; $i < count($request->all()); $i++) {
            Pembelian::create([
                'nomor_pembelian' => $request[$i]['nomor_pembelian'],
                'id_supplier' => $request[$i]['id_supplier'],
                'id_kategori' => $request[$i]['id_kategori'],
                'id_produk' => $request[$i]['id_produk'],
                'qty' => $request[$i]['qty'],
                'harga_produk' => $request[0]['harga_produk'],
                'status' => 'pendding',
                'tanggal_pembelian' => $request[0]['tanggal_pembelian'] 
            ]);
        }

        return redirect()->route('pembelian.index');

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
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}