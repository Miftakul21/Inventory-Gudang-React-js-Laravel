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
        // Table untuk pembelian bayar supplier
        Schema::create('pembelian', function (Blueprint $table) {
            $table->id();
            $table->char('nomor_pembelian');
            $table->string('id_supplier', 10);
            $table->string('id_kategori', 10);
            $table->string('id_produk', 10);
            $table->integer('qty')->nullable();
            $table->integer('harga_produk');
            $table->text('status'); // Improv pembelian
            $table->date('tanggal_pembelian');
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
        Schema::dropIfExists('pembelian');
    }
};