<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pembelian extends Model
{
    use HasFactory;

    protected $table = 'pembelian';
    protected $primaryKey = 'id';
    
    protected $fillable = [
        'nomor_pembelian', 
        'id_supplier',
        'id_kategori',
        'id_produk',
        'qty',
        'harga_produk',
        'status',
        'tanggal_pembelian'
    ];

    public $timestamps = true;
    
}