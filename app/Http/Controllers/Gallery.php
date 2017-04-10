<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SectionGalery;
use Image;

class Gallery extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $gallery = SectionGalery::where('status', 1)->get();
        return $gallery;
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
            'name' => 'required',
            'description' => 'required',
            'photo' => 'required'
        ]);

        $gallery = new SectionGalery;
        $gallery->fill($request->all());

        if ($request->hasFile('photo') && $request->file('photo')->isValid()) {
            $path = $request->photo->store('gallery', 'public');
            $gallery->url = $path;

            $thumbnail = 'thumbnail/'.explode('/', $path)[1];

            $background = Image::canvas(300, 300);
            $image = Image::make(file_get_contents($request->photo))
                ->resize(300, 300, function($c) {
                    $c->aspectRatio();
                    $c->upsize();
                });

            $background->insert($image, 'center');
            $background->save(storage_path('app/public/'.$thumbnail));

            $gallery->url_thumbnail = $thumbnail;
        }

        $gallery->save();
        return $gallery;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $gallery = SectionGalery::where('status', 1)->find($id);
        return $gallery;
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
            'name' => 'required',
            'description' => 'required'
        ]);

        $gallery = SectionGalery::where('status', 1)->find($id);
        $gallery->fill($request->all());

        if ($request->hasFile('photo') && $request->file('photo')->isValid()) {
            $path = $request->photo->store('gallery', 'public');
            $gallery->url = $path;

            $thumbnail = 'thumbnail/'.explode('/', $path)[1];

            $background = Image::canvas(300, 300);
            $image = Image::make(file_get_contents($request->photo))
                ->resize(300, 300, function($c) {
                    $c->aspectRatio();
                    $c->upsize();
                });

            $background->insert($image, 'center');
            $background->save(storage_path('app/public/'.$thumbnail));

            $gallery->url_thumbnail = $thumbnail;
        }

        $gallery->save();
        return $gallery;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $gallery = SectionGalery::where('status', 1)->find($id);
        $gallery->fill(['status'=> 0]);
        $gallery->save();
        return $gallery;
    }
}
