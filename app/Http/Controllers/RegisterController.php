<?php

namespace App\Http\Controllers;

use App\Models\Register;
use App\Models\Students;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function create(){
        $student = Students::where('users_id', Auth::user()->id)->first();
        Register::where('students_id', $student->id)->first() ? $reg = true : $reg = false;
        if(!$reg){
            return Inertia::render('Register/Create', [
                'student' => $student
            ]);
        }else{
            return Redirect::back()->with('success', ['icon' => 'warning' ,'title' => 'انتباه', 'message' => 'لايمكنك دخول هذه الصفحة']);
        }
    }

    public function store(Request $request){
        $request->validate([
            'dept' => 'required',
            'type' => 'required'
        ],[
            'dept.required' => 'يجب تحديد القسم',
            'type.required' => 'يجب تحديد نوع الدراسة',
        ]);
        $id = Students::select('id')->where('users_id', Auth::user()->id)->first();
        Register::create([
            'dept' => $request->dept,
            'type' => $request->type,
            'students_id' => $id['id']
        ]);

        return Redirect::route('dashboard')->with('success', ['icon' => 'success' ,'title' => 'نجحت العملية', 'message' => 'تم اختيار القسم']);
    }

    public function show(){
        $std = Students::where('users_id', Auth::user()->id)->first();
        $register = Register::where('students_id', $std->id)->first();
        return Inertia::render('Register/Show', [
            'register' => $register ? $register : null,
            'student' => $std
        ]);
    }

    public function update(Request $request){
        $std = Students::where('users_id', Auth::user()->id)->first('id');
        $register = Register::where('students_id', $std->id)->first();

        $request->validate([
            'dept' => 'required',
            'type' => 'required'
        ],[
            'dept.required' => 'يجب تحديد القسم',
            'type.required' => 'يجب تحديد نوع الدراسة',
        ]);
        if($request->dept !== $register->dept || $request->type !== $register->type){
            $register->update([
                'dept' => $request->dept,
                'type' => $request->type,
            ]);
            return Redirect::route('dashboard')->with('success', ['icon' => 'success' ,'title' => 'نجحت العملية', 'message' => 'تم تحديث اختيار القسم']);
        }else{
            return Redirect::route('dashboard');
        }
    }

    public function information(Register $register){
        $std = Students::where('users_id', Auth::user()->id)->first('id');
        $reg = Register::where('students_id', $std['id'])->first();
        return Inertia::render('Register/Information', [
            'dept' => $reg->dept,
            'register' => $register->with('students')->where('dept', $reg->dept)->get(),
            'columns' => ["id" => '#', "fullname" => 'الاسم الكامل', "avg" => 'المعدل', "year" => 'سنة التخرج', "DOB" => 'التولد', "dept" => 'القسم', "type" => 'نوع الدارسة', "created_at" => 'تاريخ التسجيل', ]
            // 'columns' => ['#', 'الاسم', 'المعدل', 'سنة التخرج', 'التولد', 'القسم', 'الدراسة', 'تاريخ التسجيل']
        ]);
    }
}
