<?php

use App\Models\Register;
use App\Models\Students;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/dashboard', function () {
    $student = Students::where('users_id', Auth::user()->id)->first();
    $student ? $stage1 = true : $stage1 = false;
    if($student){
        Register::where('students_id', $student->id)->first() ? $stage2 = true : $stage2 = false;
    }else{
        $stage2 =null;
    }
    // dd($stage1);
    return Inertia::render('Dashboard', [
        'stage1' => $stage1,
        'stage2' => $stage2
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
