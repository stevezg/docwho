<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>DocWho</title>

    <!-- Bootstrap core CSS -->
    <link href="assets/bootstrap/css/bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="assets/styles/main.css" rel="stylesheet">
    <link href="assets/styles/font-awesome.min.css" rel="stylesheet">

    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="http://maps.googleapis.com/maps/api/js?sensor=false&language=en"></script>
    <script src="assets/js/site/home.js"></script>


    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
</head>

<body>

<!-- Fixed navbar -->
<div class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#"><i class="fa fa-bolt"></i></a>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
                <li class="active"><a href="#contact">Contact</a></li>
            </ul>
        </div><!--/.nav-collapse -->
    </div>
</div>

<div id="hello">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 centered">
                <h1>DocWho</h1>
                <h2>Finding the right doctor</h2>
            </div><!-- /col-lg-8 -->
        </div><!-- /row -->
        <form id="doctorSearch">
            <div class="row" style="text-align:center;">
                <div class="col-lg-3" style="padding-right: 0px;padding-left: 0px;">
                    <select class="form-control input-lg">
                        <option>Doctor Type</option>
                    </select>
                </div>
                <div class="col-lg-6" style="padding-right: 0px;padding-left: 0px;">
                    <input type="text" class="form-control input-lg" name="search"
                           placeholder="Search a type of doctor"/>
                </div>
                <div class="col-lg-2">
                    <button class="btn btn-theme btn-lg">Search</button>
                </div>
            </div>
        </form>
    </div> <!-- /container -->
</div><!-- /hello -->

<div id="searchResults">
</div>


</html>
