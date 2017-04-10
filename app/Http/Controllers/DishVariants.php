<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SectionMenu;
use App\SubMenu;
use App\Dish;
use App\DishIngredient;

class DishVariants extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($menu_id, $submenu_id, $dish_id)
    {
        $variants = SectionMenu::where('status', 1)
            ->find($menu_id)
            ->submenus()
            ->find($submenu_id)
            ->dishes()
            ->find($dish_id)
            ->variants;

        return $variants;
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
    public function store(Request $request, $menu_id, $submenu_id, $dish_id)
    {
        $this->validate($request, [
            'name' => 'required|unique:dish_ingredients|max:45',
            'price' => 'required|numeric'
        ]);

        $dish = SectionMenu::where('status', 1)
            ->find($menu_id)
            ->submenus()
            ->find($submenu_id)
            ->dishes()
            ->find($dish_id);

        $variant = new DishIngredient;
        $variant->fill($request->all());
        $dish->variants()->save($variant);
        return $variant;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($menu_id, $submenu_id, $dish_id, $id)
    {
        $variant = SectionMenu::where('status', 1)
            ->find($menu_id)
            ->submenus()
            ->find($submenu_id)
            ->dishes()
            ->find($dish_id)
            ->variants()
            ->find($id);

        return $variant;
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
    public function update(Request $request, $menu_id, $submenu_id, $dish_id, $id)
    {
        $this->validate($request, [
            'name' => 'required|max:45',
            'price' => 'required|numeric'
        ]);

        $dish = SectionMenu::where('status', 1)
            ->find($menu_id)
            ->submenus()
            -find($submenu_id)
            ->dishes()
            ->find($dish_id);

        $variant = DishIngredient::find($id);
        $variant->fill($request->all());
        $variant->dish()->associate($dish);
        $variant->save();
        return $variant;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($menu_id, $submenu_id, $dish_id, $id)
    {
        $variant = SectionMenu::where('status', 1)
            ->find($menu_id)
            ->submenus()
            ->find($submenu_id)
            ->dishes()
            ->find($dish_id)
            ->variants()
            ->find($id);

        $variant->update(['status' => 0]);
        return $variant;
    }
}
