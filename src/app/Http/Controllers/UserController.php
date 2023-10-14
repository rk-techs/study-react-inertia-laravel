<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return Inertia::render('User/Index', [
            'users' => $users,
        ]);
    }

    public function create()
    {
        return Inertia::render('User/Create');
    }

    public function store(UserStoreRequest $request)
    {
        $user = User::create([
            'name'      => $request->input('name'),
            'email'     => $request->input('email'),
            'password'  => Hash::make($request->input('password')),
        ]);

        return to_route('users.index');
    }

    public function edit(string $id)
    {
        $user = User::FindOrFail($id);
        return Inertia::render('User/Edit', compact('user'));
    }

    public function update(UserUpdateRequest $request, string $id)
    {
        $user = User::FindOrFail($id);
        $inputs = $request->only(['name', 'email']);
        $user->update($inputs);
        return to_route('users.index');
    }
}
