<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SectionAbout;

class About extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $abouts = SectionAbout::where('status', 1)->get();
        return $abouts;
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
            'title' => 'required|unique:section_abouts|max:45',
            'description' => 'required'
        ]);

        $about = new SectionAbout;
        $about->fill($request->all());
        $about->save();
        return $about;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $about = SectionAbout::where('status', 1)->find($id);

        return $about;
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
            'title' => 'required|max:45',
            'description' => 'required'
        ]);

        $about = SectionAbout::where('status', 1)->find($id);
        $about->fill($request->all());
        $about->save();
        return $about;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $about = SectionAbout::where('status', 1)->find($id);
        $about->update(['status' => 0]);
        return $about;
    }
}
