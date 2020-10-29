<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;

class CSVController extends Controller
{
    /**
     * Generate CSV
     *
     * @return void
     */
    public function generate()
    {
        header("Content-Type: text/csv");
        header("Content-Disposition: attachment; filename=swapi.csv");
        header("Cache-Control: no-cache, no-store, must-revalidate");
        header("Pragma: no-cache");
        header("Expires: 0");

        $columns = [
            'name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender', 'homeworld', 'films', 'species', 'vehicles', 'starships', 'created', 'edited', 'url'
        ];

        // $callback = function () use ($columns) {
        $output = fopen('php://output', 'w');

        // add header row
        fputcsv($output, $columns);

        // add characters rows
        $characters = request()->all();
        foreach ($characters as $character) {
            $data = [];
            foreach ($columns as $col) {
                if (gettype($character[$col]) === 'array') {
                    $data[] = implode("\n", $character[$col]);
                } else {
                    $data[] = $character[$col];
                }
            }
            fputcsv($output, $data);
        }
        fclose($output);
    }
}
