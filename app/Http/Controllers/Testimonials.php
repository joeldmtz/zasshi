<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SectionTestimonial;

class Testimonials extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $testimonials = SectionTestimonial::where('status', 1)->get();
        return $testimonials;
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
            'user' => 'required',
            'comment' => 'required',
            'rank' => 'required|min:1|max:5'
        ]);

        $testimonial = new SectionTestimonial;
        $testimonial->fill($request->all());
        $testimonial->save();
        return $testimonial;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $testimonial = SectionTestimonial::where('status', 1)->find($id);
        return $testimonial;
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
            'user' => 'required',
            'comment' => 'required',
            'rank' => 'required|min:1|max:5'
        ]);

        $testimonial = SectionTestimonial::where('status', 1)->find($id);
        $testimonial->fill($request->all());
        $testimonial->save();
        return $testimonial;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $testimonial = SectionTestimonial::where('status', 1)->find($id);
        $testimonial->update(['status', 0]);
        return $testimonial;
    }
}
