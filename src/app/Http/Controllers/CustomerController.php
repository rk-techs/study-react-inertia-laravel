<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerStoreRequest;
use App\Http\Requests\CustomerUpdateRequest;
use App\Models\Customer;
use Inertia\Inertia;

use function Termwind\render;

class CustomerController extends Controller
{
    public function index()
    {
        return Inertia::render('Customer/Index', [
            'customers' => Customer::with('user')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Customer/Create');
    }

    public function store(CustomerStoreRequest $request)
    {
        $inputs = $request->only([
            'user_id',
            'name',
            'address',
            'phone_number',
            'email',
        ]);

        Customer::create($inputs);

        return redirect()->route('customers.index');
    }

    public function edit(Customer $customer)
    {
        return Inertia::render('Customer/Edit', [
            'customer' => $customer,
        ]);
    }

    public function update(CustomerUpdateRequest $request, Customer $customer)
    {
        $inputs = $request->only([
            'user_id',
            'name',
            'address',
            'phone_number',
            'email',
        ]);

        $customer->update($inputs);

        return redirect()->route('customers.index');
    }

    public function destroy(Customer $customer)
    {
        $customer->delete();

        return redirect()->route('customers.index');
    }
}
