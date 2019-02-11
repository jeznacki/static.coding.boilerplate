<?php

add_filter('post_gallery','customGallery',10,2);

function customGallery($string,$attr){

    $imgArr= get_posts(array('include' => $attr['ids'],'post_type' => 'attachment'));
    $imgArrLen=sizeof($imgArr);
    $idx=0;

    // start container main
    $output ='<div class="gallery  gallery-size-full" >';

    foreach($imgArr as $image){

		if($idx==0){
			// start container top // start gallery row
			$output .='<div class="gallery__container--top '.($imgArrLen==1?"single-image":"").'">';
			$output .=' <div class="gallery__row">';
		 }

		if($idx==2){
			// end gallery row 	// start container bottom
			$output .='</div>';
			$output .='<div class="gallery__container--bottom '.($imgArrLen==3?"single-image":"").($imgArrLen>=4?"children-inline-block":"").'">';
		}

		// start gallery row
		if($idx==2&&$imgArrLen==3){
			$output .=' <div class="gallery__row">';
		}

		// figure
		$output .='<figure class="gallery-item">';
		$output .= "<img src='".wp_get_attachment_image_src($image->ID, 'extralarge')[0]."' alt='' >";
		$output .='</figure>';

		//end gallery row for 1 or 3 items
		if($imgArrLen==1||$idx==2&&$imgArrLen==3){
			$output .='</div>';
		}

		//end gallery row
		if($idx==1){
			$output .='</div>';
		}

		$idx++;
    }
	// end inner container  // start container main
    $output .= "</div></div>";

    return $output;
}

?>