<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSectionContactTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('section_contacts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('address');
            $table->string('telephone');
            $table->string('email');
            $table->string('lat');
            $table->string('long');
            $table->string('icon_mark');
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
        Schema::dropIfExists('section_contacts');
    }
}
