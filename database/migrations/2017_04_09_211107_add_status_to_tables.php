<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddStatusToTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('contact_schedules', function(Blueprint $table) {
            $table->tinyInteger('status')->length(1)->default(1);
        });

        Schema::table('dishes', function(Blueprint $table) {
            $table->tinyInteger('status')->length(1)->default(1);
        });

        Schema::table('dish_ingredients', function(Blueprint $table) {
            $table->tinyInteger('status')->length(1)->default(1);
        });

        Schema::table('migrations', function(Blueprint $table) {
            $table->tinyInteger('status')->length(1)->default(1);
        });

        Schema::table('section_abouts', function(Blueprint $table) {
            $table->tinyInteger('status')->length(1)->default(1);
        });

        Schema::table('section_contacts', function(Blueprint $table) {
            $table->tinyInteger('status')->length(1)->default(1);
        });

        Schema::table('section_galeries', function(Blueprint $table) {
            $table->tinyInteger('status')->length(1)->default(1);
        });

        Schema::table('section_menus', function(Blueprint $table) {
            $table->tinyInteger('status')->length(1)->default(1);
        });

        Schema::table('section_testimonials', function(Blueprint $table) {
            $table->tinyInteger('status')->length(1)->default(1);
        });

        Schema::table('sub_menus', function(Blueprint $table) {
            $table->tinyInteger('status')->length(1)->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
