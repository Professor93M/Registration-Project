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

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
                ->name('logout');
});

Route::middleware('auth')->group(function () {
    Route::get('create', [StudentsController::class, 'create'])->name('create');
    Route::get('show', [StudentsController::class, 'show'])->name('show');
    Route::post('store', [StudentsController::class, 'store'])->name('store');

    Route::get('dept', [RegisterController::class, 'create'])->name('dept');
    Route::get('save', [RegisterController::class, 'store'])->name('deptsave');
    Route::get('dshow/{id}', [RegisterController::class, 'show'])->name('dshow');
});

