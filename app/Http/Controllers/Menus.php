<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SectionMenu;

class Menus extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $menus = SectionMenu::with('submenus')->where('status', 1)->paginate(5);
        return $menus;
    }

    public function indexFull() {
        $menus = SectionMenu::with('submenus')->where('status', 1)->get();
        return $menus;
    }

    public function indexAll()
    {
        $menus = SectionMenu::with('submenus_only')->where('status', 1)->get();
        return $menus;
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
            'name' => 'required|unique:section_menus|max:45'
        ]);

        $menu = new SectionMenu;
        $menu->fill($request->all());
        $menu->save();
        return $menu;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $menu = SectionMenu::with('submenus')->where('status', 1)->find($id);
        return $menu;
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
            'name' => 'required|max:45'
        ]);

        $menu = SectionMenu::where('status', 1)->find($id);
        $menu->update($request->all());
        return $menu;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $menu = SectionMenu::where('status', 1)->find($id);
        $menu->update(['status' => 0]);
        return $menu;
    }
}
