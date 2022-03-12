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
        $student = Students::where('users_id', Auth::user()->id)->first('id');
        if($student){
            return Redirect::back()->with('success', ['icon' => 'warning' ,'title' => 'انتباه', 'message' => 'لايمكنك دخول هذه الصفحة']);
        }else{
            return Inertia::render('Students/Information');
        }
    }

    public function store(Request $request){
        $request->validate([
            'fullname' => 'required|min:10',
            'dob' => 'required|date',
            'year' => 'required',
            'gender' => 'required',
            'n_lessons' => 'required|numeric',
            'sum' => 'required|numeric',
            'round' => 'required',
            'branch' => 'required',
        ]);

        Students::create([
            'fullname' => $request->fullname,
            'DOB' => $request->dob,
            'year' => $request->year,
            'gender' => $request->gender,
            'n_lessons' => $request->n_lessons,
            'sum' => $request->sum,
            'avg' => $request->sum/$request->n_lessons,
            'round' => $request->round,
            'branch' => $request->branch,
            'users_id' => Auth::user()->id
        ]);

        return Redirect::route('dashboard')->with('success', ['icon' => 'success' ,'title' => 'نجحت العملية', 'message' => 'تم خزن بياناتك']);
    }
    
    public function show(){
        $student = Students::where('users_id', Auth::user()->id)->first();
        return Inertia::render('Students/Show', [
            'student' => $student
        ]);
    }

    public function update(Request $request){
        $student = Students::where('users_id', Auth::user()->id)->first();
        $request->validate([
            'fullname' => 'required|min:10',
            'dob' => 'required|date',
            'year' => 'required',
            'gender' => 'required',
            'n_lessons' => 'required|numeric',
            'sum' => 'required|numeric',
            'round' => 'required',
            'branch' => 'required',
        ]);
        if($request->fullname !== $student->fullname || $request->dob !== $student->DOB || 
        $request->year !== $student->year || $request->gender !== $student->gender ||
        $request->n_lessons !== $student->n_lessons || $request->sum !== $student->sum ||
        $request->round !== $student->round || $request->branch !== $student->branch){
            $student->update([
                'fullname' => $request->fullname,
                'DOB' => $request->dob,
                'year' => $request->year,
                'gender' => $request->gender,
                'n_lessons' => $request->n_lessons,
                'sum' => $request->sum,
                'avg' => $request->sum/$request->n_lessons,
                'round' => $request->round,
                'branch' => $request->branch,
                'users_id' => Auth::user()->id
            ]);
            return Redirect::route('dashboard')->with('success', ['icon' => 'success' ,'title' => 'نجحت العملية', 'message' => 'تم تحديث بياناتك']);
        }
        return Redirect::route('dashboard');
    }
}
