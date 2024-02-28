<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ApproveController;
use App\Http\Controllers\LaporanController;
use App\Http\Controllers\DashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', [AuthController::class, 'index'])->name('login')->middleware('guest');
Route::post('/authLogin', [AuthController::class, 'authLogin']);
Route::post('/logout', [AuthController::class, 'logout']);

// Error Page
Route::get('/error-page', [AuthController::class, 'errorPage'])->name('error-page');

Route::resource('/dashboard', \App\Http\Controllers\DashboardController::class)->middleware('isAdmin');
Route::resource('/user', \App\Http\Controllers\UserController::class)->middleware('isAdmin');
Route::resource('/produk', \App\Http\Controllers\ProdukController::class)->middleware('isAdmin');
Route::resource('/kategori', \App\Http\Controllers\KategoriController::class)->middleware('isAdmin');
Route::resource('/satuan', \App\Http\Controllers\SatuanController::class)->middleware('isAdmin');
Route::resource('/supplier', \App\Http\Controllers\SupplierController::class)->middleware('isAdmin');
Route::resource('/pembelian', \App\Http\Controllers\PembelianController::class)->middleware('isAdmin');
Route::resource('/penjualan', \App\Http\Controllers\PenjualanController::class)->middleware('isAdmin');
Route::resource('/customer', \App\Http\Controllers\CustomerController::class)->middleware('isAdmin');
Route::resource('/stok', \App\Http\Controllers\StokController::class)->middleware('isAdmin');

// Approval
Route::get('/approve-pembelian', [ApproveController::class, 'approvePembelian'])->middleware('isAdmin');
Route::post('/approve', [ApproveController::class, 'updateApprovePembelian']);
Route::get('/approve-penjualan', [ApproveController::class, 'approvePenjualan'])->middleware('isAdmin');
// Route::get('/approve-penjualan/{nomor_penjualan}', [ApproveController::class, 'detailApprovePenjualan']);

// Laporan
Route::get('/laporan-pembelian', [LaporanController::class, 'laporanPembelian'])->middleware('isAdmin'); // Halaman form laporan pembelian
Route::get('/show-laporan-pembelian', [LaporanController::class, 'showLaporanPembelian'])->middleware('isAdmin'); // Menampilkan hasil data laporan