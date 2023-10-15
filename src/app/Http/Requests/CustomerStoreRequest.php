<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CustomerStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'user_id'       => 'required|integer|exists:users,id',
            'name'          => 'required|string|max:255',
            'address'       => 'required|string',
            'phone_number'  => 'required|string|max:20',
            'email'         => 'required|email|unique:customers,email',
        ];
    }
}
