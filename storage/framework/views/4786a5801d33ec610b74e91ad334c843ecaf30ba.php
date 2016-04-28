<!DOCTYPE html>
<head>
    <!-- start Mixpanel --><script type="text/javascript">(function(e,b){if(!b.__SV){var a,f,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
            for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=e.createElement("script");a.type="text/javascript";a.async=!0;a.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";f=e.getElementsByTagName("script")[0];f.parentNode.insertBefore(a,f)}})(document,window.mixpanel||[]);
        mixpanel.init("d2e3f1563c0f0f55b0a7e7f1026a937e");
        mixpanel.track("User Visit");
    </script><!-- end Mixpanel —>

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
    <style>
        .disabled {
            z-index: 1000;
            opacity: 0.6;
            pointer-events: none;
        }

        #spinner {
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
        }

        .spinner {
            -webkit-animation: rotator 1.4s linear infinite;
            animation: rotator 1.4s linear infinite;
        }

        @-webkit-keyframes rotator {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(270deg);
                transform: rotate(270deg);
            }
        }

        @keyframes  rotator {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(270deg);
                transform: rotate(270deg);
            }
        }
        .path {
            stroke-dasharray: 187;
            stroke-dashoffset: 0;
            -webkit-transform-origin: center;
            -ms-transform-origin: center;
            transform-origin: center;
            -webkit-animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
            animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
        }

        @-webkit-keyframes colors {
            0% {
                stroke: #74cfae;
            }
            25% {
                stroke: #74cfae;
            }
            50% {
                stroke: #74cfae3;
            }
            75% {
                stroke: #74cfae;
            }
            100% {
                stroke: #74cfae3;
            }
        }

        @keyframes  colors {
            0% {
                stroke: #74cfae;
            }
            25% {
                stroke: #74cfae;
            }
            50% {
                stroke: #74cfae3;
            }
            75% {
                stroke: #74cfae;
            }
            100% {
                stroke: #74cfae3;
            }
        }
        @-webkit-keyframes dash {
            0% {
                stroke-dashoffset: 187;
            }
            50% {
                stroke-dashoffset: 46.75;
                -webkit-transform: rotate(135deg);
                transform: rotate(135deg);
            }
            100% {
                stroke-dashoffset: 187;
                -webkit-transform: rotate(450deg);
                transform: rotate(450deg);
            }
        }
        @keyframes  dash {
            0% {
                stroke-dashoffset: 187;
            }
            50% {
                stroke-dashoffset: 46.75;
                -webkit-transform: rotate(135deg);
                transform: rotate(135deg);
            }
            100% {
                stroke-dashoffset: 187;
                -webkit-transform: rotate(450deg);
                transform: rotate(450deg);
            }
        }

    </style>

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
<?php
echo View::make('_navbar', [
   'isLocal' => $isLocal
]);
?>

<div id="hello">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 centered">
                <h1>DocWho</h1>
                <h4 style="color:grey;"><i>Finding doctors that matter</i></h4>
                <form id="doctorSearch">
                    <select id="doctorTypeSelect" class="form-control input-lg">
                        <option>Select Doctor Type</option>
                        <?php foreach ($specialties as $specialty) : ?>
                        <option value="<?= $specialty['id'] ?>"><?= $specialty['name'] ?></option>
                        <?php endforeach; ?>
                    </select>
                </form>
                <div id="spinner" style="display: none; padding-top:50px;">
                    <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                        <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
                    </svg>
                </div>
            </div><!-- /col-lg-8 -->
        </div><!-- /row -->
        <?php /*<form id="doctorSearch">*/ ?>
            <?php /*<div class="row" style="text-align:center;">*/ ?>
                <?php /*<div class="col-lg-6" style="padding-right: 0px;padding-left: 0px;">*/ ?>
                    <?php /*<select class="form-control input-lg">*/ ?>
                        <?php /*<option>Doctor Type</option>*/ ?>
                    <?php /*</select>*/ ?>
                <?php /*</div>*/ ?>
                <?php /*<div class="col-lg-6" style="padding-right: 0px;padding-left: 0px;">*/ ?>
                <?php /*<input type="text" class="form-control input-lg" name="search"*/ ?>
                <?php /*placeholder="Search a type of doctor"/>*/ ?>
                <?php /*</div>*/ ?>
                <?php /*<div class="col-lg-2">*/ ?>
                    <?php /*<button class="btn btn-theme btn-lg">Search</button>*/ ?>
                <?php /*</div>*/ ?>
            <?php /*</div>*/ ?>
        <?php /*</form>*/ ?>
    </div> <!-- /container -->
</div><!-- /hello -->


<div id="searchResults">
</div>
<div id="pagination" style="display: none;" class="container">
<div class="row">
    <div class="col-xs-12 col-sm-offset-2 col-sm-8">
        <div class="pull-right">
            <a id="prev" href="#">Prev</a>      <a id="next" href="#">Next</a>
        </div>
        <div class="row">
            Please note - If you see your doctor but don’t see the location you’re looking for,
            it means that the doctor is not in network for that location. You can still see the doctor,
            but you’ll have to go to one of the locations listed above.<br/>
        </div>
        </br></br></br>
    </div>
</div>
    </div>

</body>

</html>
