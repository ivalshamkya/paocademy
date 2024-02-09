<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mux_data', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid');
            $table->string('asset_id');
            $table->string('playback_id')->nullable();
            $table->bigInteger('chapter_id')->unique();
            $table->timestamps();

            $table->foreign('chapter_id')->references('id')->on('chapters')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mux_data');
    }
};
