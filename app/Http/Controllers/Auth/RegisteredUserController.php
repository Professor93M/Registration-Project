<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        // dd($request);

        $request->validate([
            'name' => 'required|string',
            'mobile' => 'required|regex:/(07)[0-9]{9}/|unique:users,mobile',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ],[
            'name.required' => 'يجب ادخال اسم المستخدم', 
            'name.string' => 'اسم المستخدم غير صحيح', 
            
            'mobile.required' => 'يجب ادخال رقم الهاتف', 
            'mobile.regex' => 'رقم الهاتف المدخل غير صحيح', 
            'mobile.unique' => 'رقم الهاتف المدخل موجود فعلاً', 
            
            'password.required' => 'يجب ادخال كلمة المرور', 
            'password.confirmed' => 'كلمة المرور غير متطابقة', 
        ]);

        $user = User::create([
            'name' => $request->name,
            'mobile' => $request->mobile,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
