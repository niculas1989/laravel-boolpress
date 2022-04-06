<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use App\Mail\ContactMessage;

class ContactMessageController extends Controller
{
    public function send(Request $request)
    {
        $data = $request->all();
        $validator = Validator::make(
            $data,
            [
                'email' => 'required|email',
                'message' => 'required'
            ],
            [
                'email.required' => 'Mail obbligatoria.',
                'email.email' => 'Indirizzo mail non valido.',
                'message.required' => 'Testo necessario per andare avanti.',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()]);
        }

        $mail = new ContactMessage($data);
        Mail::to(env('MAIL_ADMIN'))->send($mail);
        return response('Mail sent', 204);
        /*  return response()->json($data); */
    }
}
