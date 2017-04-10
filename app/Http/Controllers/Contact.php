<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SectionContact;

class Contact extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contacts = SectionContact::where('status', 1)->get();
        return $contacts;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'address' => 'required',
            'telephone' => 'required',
            'email' => 'email|nulleable',
            'lat' => 'required',
            'long' => 'required',
            'icon_mark' => 'nulleable'
        ]);

        $contact = new SectionContact;
        $contact->fill($request->all());
        $contact->save();
        return $contact;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $contact = SectionAbout::where('status', 1)->find($id);
        return $contact;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'address' => 'required',
            'telephone' => 'required',
            'email' => 'email|nulleable',
            'lat' => 'required',
            'long' => 'required',
            'icon_mark' => 'required'
        ]);

        $contact = SectionContact::where('status', 1)->find($id);
        $contact->fill($request->all());
        $contact->save();
        return $contact;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $contact = SectionContact::where('status', 1)->find($id);
        $contact->update(['status' => 0]);
        return $contact;
    }
}
