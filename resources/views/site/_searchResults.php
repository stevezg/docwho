<div id="white">
    <div class="container">
        <div class="row text-center" style="margin-bottom:20px;">
            <span><?= sizeof($doctors) ?> results found for Primary Doctor</span><br/>
            <span>within 5 miles of 90007</span><br/>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-offset-2 col-sm-8">
                <div class="panel panel-default">
                    <ul class="list-group" id="contact-list">
                        <?php foreach($doctors as $doctor) : ?>
                            <li class="list-group-item">
                                <div class="col-xs-12">
                                    <div class="col-xs-4">
                                        <span class="name"><?= $doctor['name'] ?></span><br/>
                                        <span class="name">Medical Doctor</span>
                                    </div>
                                    <div class="col-xs-1" style="width:5%;">
                                    <span class="glyphicon glyphicon-map-marker text-muted c-info" data-toggle="tooltip"
                                          title="5842 Hillcrest Rd"></span>
                                    </div>
                                    <div class="col-xs-3">
                                        <span class="name"><?= $doctor['address'] ?></span><br/>
                                    </div>
                                    <div class="col-xs-1">
                                        <span class="name"><?= $doctor['distance'] ?><br/>miles</span>
                                    </div>
                                    <div class="col-xs-3">
                                        <button class="btn btn-theme btn-lg">View Profile</button>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <div id="map"></div>
            </div>
        </div>
        <div class="row">
            Please note - If you see your doctor but don’t see the location you’re looking for,
            it means that the doctor is not in network for that location. You can still see the doctor,
            but you’ll have to go to one of the locations listed above.<br/>
        </div>
    </div>
</div>