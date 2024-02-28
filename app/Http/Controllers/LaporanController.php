<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Inertia\Inertia;
use App\Models\Pembelian;
use App\Models\Kategori;
use App\Models\Supplier;
use App\Models\Produk;

class LaporanController extends Controller
{
    public function laporanPembelian(Request $request)
    {
        return Inertia::render('Form/FormLaporanPembelian');
    }

    public function showLaporanPembelian(Request $request) 
    {   
        $pembelian = Pembelian::whereBetween('tanggal_pembelian', 
                    [$request->tanggalAwal, $request->tanggalAkhir])
                    ->where('status', 'approve')->get();
        
        $produk = Produk::all();

        return Inertia::render('LaporanPembelian', [
            'pembelian' => $pembelian,
            'produk' => $produk
        ]);
    }
}