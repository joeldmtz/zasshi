<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ContactSchedule;

class Schedules extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $schedules = ContactSchedule::where('status', 1)->paginate(5);
        return $schedules;
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
            'days' => 'required',
            'hours' => 'required'
        ]);

        $schedule = new ContactSchedule;
        $schedule->fill($request->all());
        $schedule->save();
        return $schedule;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $schedule = ContactSchedule::where('status', 1)->find($id);
        return $schedule;
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
            'days' => 'required',
            'hours' => 'required'
        ]);

        $schedule = ContactSchedule::where('status', 1)->find($id);
        $schedule->fill($request->all());
        $schedule->save();
        return $schedule;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $testimonial = ContactSchedule::where('status', 1)->find($id);
        $testimonial->update(['status' => 0]);
        return $testimonial;
    }
}
