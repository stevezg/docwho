<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>DocWho</title>

    <!-- Bootstrap core CSS -->
    <link href="/assets/bootstrap/css/bootstrap.css" rel="stylesheet">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

    <!-- Custom styles for this template -->
    <link href="/assets/styles/profile.css" rel="stylesheet">
    <link href="/assets/styles/font-awesome.min.css" rel="stylesheet">

    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="http://maps.googleapis.com/maps/api/js"></script>
    <script src="/assets/js/profile/profile.js"></script>


    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->

</head>

<body>

<!-- Fixed navbar -->
<?php
echo View::make('_navbar', [
        'isLocal' => $isLocal
]);
?>
<input type="hidden" id="latitude" value="<?= $doctorData['practice']['latitude'] ?>" />
<input type="hidden" id="longitude" value="<?= $doctorData['practice']['longitude'] ?>" />
<div id="white">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="row>">
                    <?php /*<div class="col-lg-5 centered">*/ ?>
                        <?php /*<p><img class="img-responsive img-rounded" src="" width="190" height="120"></p>*/ ?>
                    <?php /*</div>*/ ?>
                    <div class="col-lg-7">
                        <h1 style="margin-top: 0;"><?= $doctorData['name']; ?></h1>
                        <h2><?= $doctorData['speciality']; ?></h2>
                        <h3><?= isset($doctorData['practiceData']['name']) ? $doctorData['practiceData']['name'] : '' ?> </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php /*GOOGLE MAPS*/ ?>
<div id="googleMaps" style="height:380px;">
</div>

<div id="white">
    <div class="container">
        <div class="row">
            <h2><span id="address"><?= $doctorData['address'] ?></span></h2></br>
            <h3>Phone </h3>
            <h4><?= $doctorData['phone_number'] ?></h4></br>
            <h3>Spoken Languages</h3>
            <?php foreach ($doctorData['languages'] as $language) : ?>
            <h4><?= $language ?></h4></br>
            <?php endforeach; ?>
            <h3>Average Rating</h3>
            <h4><?= round($doctorData['rating'], 2) ?></h4></br>
            <h3>Insurances</h3>
            <?php foreach ($doctorData['practiceData']['insurances'] as $insurance) : ?>
            <h6><?= $insurance['name'] ?></h6>
            <?php endforeach; ?>
            <hr>
        </div>
        <div class="row">
            <h2>Reviews</h2></br>
            <?php if (empty($doctorData['reviews'])) : ?>
            <h4>No reviews found for this doctor.</h4>
            <?php endif; ?>
            <?php foreach ($doctorData['reviews'] as $review) : ?>
            <div class="panel panel-default">
                <div class="panel-heading">
            <span itemscope itemtype="http://schema.org/Review">
            <h3 class="panel-title" itemprop="name">Yelp Review</h3>
                </div><!--/panel-heading-->
                <div class="panel-body" itemprop="reviewBody">
                    <p><?= $review['text'] ?></p>

            <span itemprop="author" itemscope itemtype="http://schema.org/Person">
              <small>
                  <span itemprop="name"><?= !empty($review['external_user']) ? $review['external_user']['name'] : '' ?></span>
            </span><!--/author schema -->

                    <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>

                    <meta itemprop="datePublished" content="01-01-2016">
                    <?php
                    $date = date_create($review['date']);
                    echo date_format($date, "m/d/Y H:i:s");
                    ?>

                    <span class="pull-right">
              <span class="reviewRating" itemscope itemtype="http://schema.org/Rating">
                <meta itemprop="worstRating" content="1">
                  <span itemprop="ratingValue"><?= $review['rating'] ?></span> /
                <span itemprop="bestRating"> stars </span>
              </span><!--/reviewRating-->
              <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
              <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
              <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
              <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
              <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                        </small>
                </div><!--/panel-body-->
                <div class="panel-footer clearfix">
                    <div class="col-sm-1"><i class="fa fa-facebook-official fa-2x"></i></div>
                    <div class="col-sm-1"><i class="fa fa-twitter-square fa-2x"></i></div>
                    <div class="col-sm-1"><i class="fa fa-google-plus fa-2x"></i></div>
                </div><!--/panel-footer-->
            </div><!--/panel-->
            <?php endforeach; ?>
        </div>
    </div>
    </br></br></br>
</div>


</body>

</html>
