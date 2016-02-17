<?php

namespace App\Http\Controllers;

class SiteController extends Controller
{
    public function getIndex()
    {

        return view('home');
    }

    public function ajaxSearchDoctors()
    {
        header('Content-type: text/html');
        $doctors = array(
            [
                'name' => 'Peppy',
                'address' => '123rd Lane St
                Tukwila, WA 98188',
                'distance' => '2'
            ]
        );

        print view('site._searchResults', [
            'doctors' => $doctors
        ]);
    }
}