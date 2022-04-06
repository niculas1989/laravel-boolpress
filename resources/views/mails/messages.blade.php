@component('mail::message')
# Nuovo messaggio da:

<p><strong>Email from: {{ $contact['email'] }}</strong></p>
<p><strong>Message: {{ $contact['message'] }}</strong></p>
@endcomponent