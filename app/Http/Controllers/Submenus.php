<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SectionMenu;
use App\SubMenu;

class Submenus extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($menu_id)
    {
        $submenus = SectionMenu::where('status', 1)->find($menu_id)->submenus;
        return $submenus;
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
    public function store(Request $request, $menu_id)
    {
        $this->validate($request, [
            'name' => 'required|unique:sub_menus|max:45'
        ]);

        $submenu = new SubMenu;
        $submenu->fill($request->all());

        $menu = SectionMenu::where('status', 1)
            ->find($menu_id);

        $menu->submenus()->save($submenu);
        return $submenu;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($menu_id, $id)
    {
        $submenu = SectionMenu::where('status', 1)
            ->find($menu_id)
            ->submenus()
            ->find($id);

        return $submenu;
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
    public function update(Request $request, $menu_id, $id)
    {
        $this->validate($request, [
            'name' => 'required|max:45'
        ]);

        $menu = SubMenu::where('status', 1)->find($menu_id);

        $submenu = SubMenu::find($id);
        $submenu->fill($request->all());
        $submenu->menu->associate($menu);
        $submenu->save();

        return $submenu;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($menu_id, $id)
    {
        $submenu = SubMenu::where('status', 1)->find($id);
        $submenu->update(['status' => 0]);
        return $submenu;
    }
}
