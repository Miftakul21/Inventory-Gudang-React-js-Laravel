<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Inertia\Inertia;
use App\Models\Supplier;
use App\Models\Kategori;
use App\Models\Pembelian;
use App\Models\Penjualan;
use App\Models\Customer;
use App\Models\Produk;
use App\Models\Stok;

class ApproveController extends Controller
{
    public function approvePembelian()
    {
        $supplier = Supplier::all();
        $kategori = Kategori::all();
        $produk = Produk::all();
        $pembelian = Pembelian::where('status', 'pendding')->get();
    
        return Inertia::render('ApprovePembelian', [
            'supplier' => $supplier,
            'kategori' => $kategori,
            'produk' => $produk,
            'pembelian' => $pembelian
        ]);
    }

    public function updateApprovePembelian(Request $request) {
        if($request->status == 'approve') {
            $dataPembelian = Pembelian::where('id', $request->id)->get();
            $dataStok = Stok::where('id_produk', $dataPembelian[0]->id_produk)->count();

            if($dataStok == 1){
                $stokAwal = Stok::where('id_produk', $dataPembelian[0]->id_produk)->get();
                Stok::where('id_produk', $dataPembelian[0]->id_produk)->update([
                    'qty_awal' => $stokAwal[0]->qty_awal + $dataPembelian[0]->qty
                ]);
            } else {
                Stok::create([
                    'id_produk' => $dataPembelian[0]->id_produk,
                    'id_supplier' => $dataPembelian[0]->id_supplier,
                    'qty_awal' => $dataPembelian[0]->qty,
                    'qty_keluar' => 0, 
                ]);
            }

            $updateStatus = Pembelian::where('id', $request->id)->update([
                'status' => $request->status
            ]);

            if($updateStatus) return redirect()->route('pembelian.index');

        } else {
            $updateStatus = Pembelian::where('id', $request->id)->update([
                'status' => $request->status
            ]);

            if($updateStatus) return redirect()->route('pembelian.index');
        }
    }

    public function approvePenjualan()
    {
        $penjualan = Penjualan::all();
        $customer = Customer::all();

        return Inertia::render('ApprovePenjualan', [
            'penjualan' => $penjualan,
            'customer' => $customer
        ]);
    }


    public function updateApprovePenjualan(Request $request) 
    {
        if($request->status == 'approve') {
            return;
        }
    }
}