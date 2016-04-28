<input type="hidden" id="offset" value="<?= $offset ?>"/>
<input type="hidden" id="specialityId" value="<?= $specialityId ?>"/>
<div id="white">
    <div class="resultsContainer container">
        <div class="row text-center" style="margin-bottom:20px;">
            <span>Showing <?= $offset+1 ?>-<?= $offset+10 ?> of <?= $count ?> results found</span><br/>
            <span>within Los Angeles</span><br/>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-offset-2 col-sm-8">
                <div class="panel panel-default">
                    <ul class="list-group" id="contact-list">
                        <?php foreach($doctors as $doctor) : ?>
                            <li class="list-group-item">
                                <div class="col-xs-12" style="margin-top: 20px">
                                    <?php /*<div class="col-xs-1">*/ ?>
                                        <?php /*<p><img src="" width="50" height="50"></p>*/ ?>
                                    <?php /*</div>*/ ?>
                                    <div class="col-xs-3">
                                        <span class="name"><?= $doctor['name'] ?></span><br/>
                                        <span class="name"><?= $doctor['speciality'] ?></span>
                                    </div>
                                    <div class="col-xs-1" style="width:5%;">
                                    <span class="glyphicon glyphicon-map-marker text-muted c-info" data-toggle="tooltip"
                                          title="5842 Hillcrest Rd"></span>
                                    </div>
                                    <div class="col-xs-3">
                                        <span class="name"><?= isset($doctor['address']) ? $doctor['address'] : $doctor['practice']['latitude'] . ',' . $doctor['practice']['longtitude']//($doctor['addressData']['results'][0]['formatted_address']) ? print_r($doctor['addressData']['results'][0]['formatted_address']) : ''?></span><br/>
                                    </div>
                                    <div class="col-xs-2">
                                        <span class="name">Rating: <?= $doctor['rating'] ?><br/></span>
                                    </div>
                                    <div class="col-xs-3">
                                        <a href="/profile/<?= $doctor['id'] ?>" class="btn btn-theme btn-lg">View Profile</a>
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
        <?php /*<div class="row">*/ ?>
            <?php /*Please note - If you see your doctor but don’t see the location you’re looking for,*/ ?>
            <?php /*it means that the doctor is not in network for that location. You can still see the doctor,*/ ?>
            <?php /*but you’ll have to go to one of the locations listed above.<br/>*/ ?>
        <?php /*</div>*/ ?>
        <?php /*</br></br></br>*/ ?>
    </div>
</div>
