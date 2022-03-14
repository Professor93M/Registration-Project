<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\StudentsController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])
                ->name('register');

    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('login', [AuthenticatedSessionController::class, 'create'])
                ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);

});

Route::middleware('auth')->group(function () {
    Route::get('create', [StudentsController::class, 'create'])->name('create');
    Route::post('store', [StudentsController::class, 'store'])->name('store');
    Route::get('show', [StudentsController::class, 'show'])->name('show');
    Route::put('update', [StudentsController::class, 'update'])->name('update');
    
    Route::get('dept', [RegisterController::class, 'create'])->name('dept');
    Route::post('save', [RegisterController::class, 'store'])->name('deptsave');
    Route::get('dshow', [RegisterController::class, 'show'])->name('dshow');
    Route::put('dupdate', [RegisterController::class, 'update'])->name('dupdate');
    
    Route::get('information', [RegisterController::class, 'information'])->name('information');
    
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
                ->name('logout');
});

