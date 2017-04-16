<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSubmenuTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sub_menus', function (Blueprint $table) {
            $table->string('name');
            $table->integer('section_menu_id')->unsigned();
            $table->foreign('section_menu_id')->references('id')->on('section_menus');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sub_menus', function(Blueprint $table) {
           $table->dropForeign('submenu_section_menu_id_foreign');
       });
        Schema::dropIfExists('sub_menus');
    }
}
