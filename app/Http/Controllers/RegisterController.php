<?php

namespace App\Http\Controllers;

use App\Models\Register;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function create(){
        $student = Students::where('users_id', Auth::user()->id)->first();
        Register::where('students_id', $student->id)->first() ? $reg = true : $reg = false;
        if(!$reg){
            return Insetia::render('Register/Create');
        }
    }

    public function store(Request $request){
        $request->validate([
            'dept' => 'required|numeric',
            'type' => 'required|numeric'
        ]);

        Register::create([
            'dept' => $request->dept,
            'type' => $request->type,
            'students_id' => Students::where('users_id', Auth::user()->id)->first('id')
        ]);

        return Redirect::route('dashboard')->with('success', ['icon' => 'success' ,'title' => 'نجحت العملية', 'message' => 'تم اختيار القسم']);
    }

    public function show(Register $register){
        return Inertia::render('Register/Show', [
            'register' => $register,
        ]);
    }

    public function information(Register $register){
        return Inertia::render('Register/Show', [
            'register' => $register->with('students')->get(),
            'columns' => ['#', 'الاسم', 'المعدل', 'سنة التخرج', 'التولد', 'القسم', 'الدراسة', 'تاريخ التسجيل']
        ]);
    }
}
