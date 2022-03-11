<?php

namespace App\Http\Controllers;

use App\Models\Students;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class StudentsController extends Controller
{
    public function create(){
        $student = Students::where('users_id', Auth::user()->id);
        if($student){
            return Redirect::back()->with('success', ['icon' => 'warning' ,'title' => 'انتباه', 'message' => 'لايمكنك دخول هذه الصفحة']);
        }else{
            return Inertia::render('Students/Information');
        }
    }

    public function store(Request $request){
        $request->validate([
            'fullname' => 'required|min:10',
            'DOB' => 'required|date',
            'year' => 'required|date_format:Y',
            'n_lessons' => 'required|numeric',
            'sum' => 'required|numeric',
            'round' => 'required|numeric',
            'branch' => 'required|numeric',
        ]);

        Students::create([
            'fullname' => $request->fullname,
            'DOB' => $request->dob,
            'year' => $request->year,
            'n_lessons' => $request->n_lessons,
            'sum' => $request->sum,
            'avg' => $request->sum/$request->n_lessons,
            'round' => $request->round,
            'branch' => $request->branch,
            'users_id' => Auth::user()->id
        ]);

        return Redirect::route('dashboard')->with('success', ['icon' => 'success' ,'title' => 'نجحت العملية', 'message' => 'تم خزن بياناتك']);
    }
    
    public function show(Students $id){
        return Inertia::render('Students/Show', [
            'student' => Students::findOrFail($id)
        ]);
    }
}
