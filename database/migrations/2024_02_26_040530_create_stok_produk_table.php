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
        Schema::create('stok_produk', function (Blueprint $table) {
            $table->id();
            $table->char('id_produk', 8);
            $table->char('id_supplier', 8 );
            $table->integer('qty_awal'); // atau qty masuk
            $table->integer('qty_keluar'); // atau qty keluar            
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
        Schema::dropIfExists('stok_produk');
    }
};