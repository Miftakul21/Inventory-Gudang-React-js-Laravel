<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('penjualan', function (Blueprint $table) {
            $table->id();
            $table->char('id_customer', 10);
            $table->char('id_produk', 5);
            $table->char('nomor_pembelian', 10);
            $table->integer('qty_pembelian');
            $table->date('tanggal_pembelian');
            $table->text('deskripsi');
            $table->text('status_pembayaran');
            $table->text('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('penjualan');
    }
};