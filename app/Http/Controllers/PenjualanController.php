<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Customer;
use App\Models\Penjualan;
use App\Models\Produk;
use App\Models\Stok;
use App\Models\Pembelian;
use App\Models\Kategori;
use App\Models\SubPenjualan;

class PenjualanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $penjualan = Penjualan::all();
        $customer = Customer::all();
        
        return Inertia::render('Penjualan', [
            'customer' => $customer,
            'penjualan' => $penjualan,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $customer = Customer::all();
        $produk = Produk::all();
        $stok = Stok::all();
        $pembelian = Pembelian::all();
        $kategori = Kategori::all();

        $randomNumber = sprintf('%03d', random_int(1, 200));


        return Inertia::render('Form/CreatePenjualan', [
            'customer' => $customer,
            'produk' => $produk,
            'stok' => $stok,
            'pembelian' => $pembelian,
            'kategori' => $kategori,
            'nomor_penjualan' => $randomNumber,
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
        // dd($request->penjualan[0]['id_produk']);
        $insert = Penjualan::create([
            'id_customer' => $request->id_customer,
            'nomor_penjualan' => $request->nomor_penjualan,
            'tanggal_penjualan' => $request->tanggal,
            'deskripsi' => $request->deskripsi,
            'status_pembayaran' => $request->pembayaran,
            'status' => 'pendding',
        ]);

        $array = [];
        for($i = 0; $i < count($request->penjualan); $i++) {
            $array[] = [
                'nomor_penjualan' => $request->nomor_penjualan,
                'id_customer' => $request->id_customer,
                'id_produk' => $request->penjualan[$i]['id_produk'],
                'qty' => $request->penjualan[$i]['qty'],
            ];
        }

        SubPenjualan::insert($array);

        if($insert) {
            return redirect()->route('penjualan.index');
        }
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
        $penjualan = Penjualan::where('id', $id)->get();
        $penjualanCustomer = SubPenjualan::where('nomor_penjualan', $penjualan[0]->nomor_penjualan)->get();
        $produk = Produk::all();
        $customer = Customer::all();

        return Inertia::render('Form/DetailApprovePenjualan', [
            'penjualan' => $penjualan,
            'penjualanCustomer' => $penjualanCustomer,
            'produk' => $produk,
            'customer' => $customer,
        ]);
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