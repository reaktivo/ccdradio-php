<?php
  include('_top.php');
  $contents = file_get_contents("programacion.json");
  $programacion = json_decode($contents);

  function ftime($str) {
    return substr($str, 0, 2) . ':' . substr($str, 2, 2);
  }

?>
<div class="programacion">
  <div class="calendario">

    <?php foreach ($programacion as $day): ?>
      <div class="<?php echo strtolower($day->day)?>">
        <h2><?php echo $day->day?></h2>
        <?php foreach ($day->shows as $show):?>
          <a href="<?php echo $show->link?>" data-layer="2" data-start="<?php echo $show->start?>" class="show">
            <span class="time">De <?php echo ftime($show->start) . ' a ' . ftime($show->end)?></span>
            <h3><?php echo $show->name ?></h3>
            <span class="host"><?php echo $show->host ?></span>
          </a>
        <?php endforeach ?>
      </div>
    <?php endforeach ?>

  </div>
</div>
<?php include('_bottom.php') ?>
