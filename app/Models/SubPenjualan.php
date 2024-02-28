<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubPenjualan extends Model
{
    use HasFactory;

    protected $table = 'sub_penjualan';
    protected $id = 'id_sub_penjualan';
    protected $fillable = [
        'nomor_penjualan',
        'id_customer',
        'id_produk',
        'qty',
    ];

    public $timestamps = false;


}