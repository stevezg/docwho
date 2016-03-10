<?php

namespace App\Http\Controllers;

use App;

class ProfileController extends Controller
{
    public function getIndex($doctorID)
    {
        $doctorData = json_decode(file_get_contents("http://docwho-api-dev.us-west-1.elasticbeanstalk.com/doctors/$doctorID"), true);
        $specialties = json_decode(file_get_contents("http://docwho-api-dev.us-west-1.elasticbeanstalk.com/specialities"), true);
        $reviews = json_decode(file_get_contents("http://docwho-api-dev.us-west-1.elasticbeanstalk.com/doctors/$doctorID/reviews"), true);

        $doctorData['speciality'] = $specialties[$doctorData['speciality_id']]['name'];
        $doctorData['reviews'] = $reviews;
        return view('profile.index', [
            'doctorData' => $doctorData,
            'isLocal' => App::isLocal()
        ]);
    }
}