<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>DocWho</title>

    <!-- Bootstrap core CSS -->
    <link href="resources/assets/bootstrap/css/bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="resources/assets/styles/main.css" rel="stylesheet">
    <link href="resources/assets/styles/font-awesome.min.css" rel="stylesheet">

    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="http://maps.googleapis.com/maps/api/js?sensor=false&language=en"></script>
    <!-- <script src="assets/js/chart.js"></script> -->


    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
</head>

<?php /*<body>*/ ?>

<?php /*<!-- Fixed navbar -->*/ ?>
<?php /*<div class="navbar navbar-default navbar-fixed-top">*/ ?>
    <?php /*<div class="container">*/ ?>
        <?php /*<div class="navbar-header">*/ ?>
            <?php /*<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">*/ ?>
                <?php /*<span class="icon-bar"></span>*/ ?>
                <?php /*<span class="icon-bar"></span>*/ ?>
                <?php /*<span class="icon-bar"></span>*/ ?>
            <?php /*</button>*/ ?>
            <?php /*<a class="navbar-brand" href="#"><i class="fa fa-bolt"></i></a>*/ ?>
        <?php /*</div>*/ ?>
        <?php /*<div class="navbar-collapse collapse">*/ ?>
            <?php /*<ul class="nav navbar-nav navbar-right">*/ ?>
                <?php /*<li class="active"><a href="#contact">Contact</a></li>*/ ?>
            <?php /*</ul>*/ ?>
        <?php /*</div><!--/.nav-collapse -->*/ ?>
    <?php /*</div>*/ ?>
<?php /*</div>*/ ?>


<?php /*<div id="hello">*/ ?>
    <?php /*<div class="container">*/ ?>
        <?php /*<div class="row">*/ ?>
            <?php /*<div class="col-lg-8 col-lg-offset-2 centered">*/ ?>
                <?php /*<h1>DocWho</h1>*/ ?>
                <?php /*<h2>Finding the right doctor</h2>*/ ?>
            <?php /*</div><!-- /col-lg-8 -->*/ ?>
        <?php /*</div><!-- /row -->*/ ?>
        <?php /*<form>*/ ?>
            <?php /*<div class="row" style="text-align:center;">*/ ?>
                <?php /*<div class="col-lg-3" style="padding-right: 0px;padding-left: 0px;">*/ ?>
                    <?php /*<select class="form-control input-lg">*/ ?>
                        <?php /*<option>Doctor Type</option>*/ ?>
                    <?php /*</select>*/ ?>
                <?php /*</div>*/ ?>
                <?php /*<div class="col-lg-6" style="padding-right: 0px;padding-left: 0px;">*/ ?>
                    <?php /*<input type="text" ng-model="searchText" class="form-control input-lg" name="email" placeholder="Search a type of doctor"/>*/ ?>
                <?php /*</div>*/ ?>
                <?php /*<div class="col-lg-2">*/ ?>
                    <?php /*<button ng-click="searchButton(searchText)" class="btn btn-theme btn-lg">Search</button>*/ ?>
                <?php /*</div>*/ ?>
            <?php /*</div>*/ ?>
        <?php /*</form>*/ ?>
    <?php /*</div> <!-- /container -->*/ ?>
<?php /*</div><!-- /hello -->*/ ?>

<?php /*<div id="white">*/ ?>
    <?php /*<div class="container">*/ ?>
        <?php /*<div class="row text-center" style="margin-bottom:20px;">*/ ?>
            <?php /*<span>2 results found for Primary Doctor</span><br/>*/ ?>
            <?php /*<span>within 5 miles of 90007</span><br/>*/ ?>
        <?php /*</div>*/ ?>
        <?php /*<div class="row">*/ ?>
            <?php /*<div class="col-xs-12 col-sm-offset-2 col-sm-8">*/ ?>
                <?php /*<div class="panel panel-default">*/ ?>
                    <?php /*<ul class="list-group" id="contact-list">*/ ?>
                        {{--<?php foreach($doctors as $doctor) : ?>--}}
                        <?php /*<li class="list-group-item">*/ ?>
                            <?php /*<div class="col-xs-12">*/ ?>
                                <?php /*<div class="col-xs-4">*/ ?>
                                    {{--<span class="name"><?= $doctor->name ?></span><br/>--}}
                                    <?php /*<span class="name">Medical Doctor</span>*/ ?>
                                <?php /*</div>*/ ?>
                                <?php /*<div class="col-xs-1" style="width:5%;">*/ ?>
                                    <?php /*<span class="glyphicon glyphicon-map-marker text-muted c-info" data-toggle="tooltip" title="5842 Hillcrest Rd"></span>*/ ?>
                                <?php /*</div>*/ ?>
                                <?php /*<div class="col-xs-3">*/ ?>
                                    {{--<span class="name"><?= $doctor->address ?></span><br/>--}}
                                <?php /*</div>*/ ?>
                                <?php /*<div class="col-xs-1">*/ ?>
                                    {{--<span class="name"><?= $doctor->distance ?><br/>miles</span>--}}
                                <?php /*</div>*/ ?>
                                <?php /*<div class="col-xs-3">*/ ?>
                                    <?php /*<button ng-click="" class="btn btn-theme btn-lg">View Profile</button>*/ ?>
                                <?php /*</div>*/ ?>
                            <?php /*</div>*/ ?>
                            <?php /*<div class="clearfix"></div>*/ ?>
                        <?php /*</li>*/ ?>
                        {{--<?php endforeach; ?>--}}
                    <?php /*</ul>*/ ?>
                <?php /*</div>*/ ?>
                <?php /*<div id="map"></div>*/ ?>
            <?php /*</div>*/ ?>
        <?php /*</div>*/ ?>
        <?php /*<div class="row">*/ ?>
            <?php /*Please note - If you see your doctor but don’t see the location you’re looking for,*/ ?>
            <?php /*it means that the doctor is not in network for that location. You can still see the doctor,*/ ?>
            <?php /*but you’ll have to go to one of the locations listed above.<br/>*/ ?>
        <?php /*</div>*/ ?>
    <?php /*</div>*/ ?>
<?php /*</div>*/ ?>

<?php /*<div id="f">*/ ?>
    <?php /*<div class="container">*/ ?>
        <?php /*<div class="row">*/ ?>
            <?php /*<p>DocWho</p>*/ ?>
        <?php /*</div>*/ ?>
    <?php /*</div>*/ ?>
<?php /*</div>*/ ?>

<?php /*<!-- Bootstrap core JavaScript*/ ?>
<?php /*================================================== -->*/ ?>
<?php /*<!-- Placed at the end of the document so the pages load faster -->*/ ?>
<?php /*<script src="resources/assets/bootstrap/js/bootstrap.js"></script>*/ ?>
<?php /*</body>*/ ?>
</html>
