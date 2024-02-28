<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stok extends Model
{
    use HasFactory;

    protected $table = 'stok_produk';
    protected $primaryKey = 'id';
    protected $fillable = [
        'id_produk',
        'id_supplier',
        'qty_awal',
        'qty_keluar'
    ];

    public $timestamps = true;

}