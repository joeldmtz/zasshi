<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SectionMenu;
use App\SubMenu;
use App\Dish;

class Dishes extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($menu_id, $submenu_id)
    {
        $dishes = SectionMenu::where('status', 1)
            ->find($menu_id)
            ->submenus()
            ->find($submenu_id)
            ->dishes;
        return $dishes;
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
    public function store(Request $request, $menu_id, $submenu_id)
    {
        $this->validate($request, [
            'name' => 'required|unique:dishes|max:45',
            'description' => 'required',
            'price' => 'required|numeric'
        ]);

        $submenu = SectionMenu::where('status', 1)
            ->find($menu_id)
            ->submenus()
            ->find($submenu_id);

        $dish = new Dish;
        $dish->fill($request->all());
        $submenu->dishes()->save($dish);
        return $dish;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($menu_id, $submenu_id, $id)
    {
        $dish = SectionMenu::where('status', 1)
            ->find($menu_id)
            ->submenus()
            ->find($submenu_id)
            ->dishes()
            ->find($id);

        return $dish;
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
    public function update(Request $request, $menu_id, $submenu_id, $id)
    {
        $this->validate($request, [
            'name' => 'required|max:45',
            'description' => 'required',
            'price' => 'required|numeric'
        ]);

        $submenu = SectionMenu::where('status', 1)
            ->find($menu_id)
            ->submenus()
            ->find($submenu_id);

        $dish = Dish::find($id);
        $dish->fill($request->all());
        $dish->submenu()->associate($submenu);
        $dish->save();
        return $dish;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($menu_id, $submenu_id, $id)
    {
        $dish = SectionMenu::where('status', 1)
            ->find($menu_id)
            ->submenus()
            ->find($submenu_id)
            ->dishes()
            ->find($id);

        $dish->update(['status' => 0]);
        return $dish;
    }
}
