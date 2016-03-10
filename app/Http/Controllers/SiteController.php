<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App;

class SiteController extends Controller
{
    public function getIndex()
    {
        $specialties = json_decode(file_get_contents("http://docwho-api-dev.us-west-1.elasticbeanstalk.com/specialities"), true);
        return view('site.home', [
            'specialties' => $specialties,
            'isLocal' => App::isLocal()
        ]);
    }

    public function ajaxSearchResults(Request $request)
    {
        header('Content-type: text/html');
        $doctors = $request->input('doctors');
        $specialties = json_decode(file_get_contents("http://docwho-api-dev.us-west-1.elasticbeanstalk.com/specialities"), true);
        //manually add address and distance for now
        foreach ($doctors as &$doctor) {
            $doctor['address'] = "123rd Lane St<br />Los Angeles, CA 90007";
            $doctor['distance'] = "3";
            $doctor['speciality'] = $specialties[$doctor['speciality_id']]['name'];
        }

        print view('site._searchResults', [
            'doctors' => $doctors,
            'isLocal' => App::isLocal()
        ]);
    }
}