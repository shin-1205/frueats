<?php 

// <!-- デフォルト投稿設定 -->

// <!-- function post_has_archive( $args, $post_type ) {
// if ( 'post' == $post_type ) {
//  $args['rewrite'] = true;
//  $args['has_archive'] = 'news'; //任意のスラッグ名　←アーカイブページを有効に
//  $args['label'] = 'お知らせ'; //管理画面左ナビに「投稿」の代わりに表示される
//  }
//  return $args;
// }
// add_filter( 'register_post_type_args', 'post_has_archive', 10, 2 );
//  -->


// <!-- 固定ページの入力欄を消す -->

// <!-- 
// add_filter('use_block_editor_for_post',function($use_block_editor,$post){
// 	if($post->post_type==='page'){
// 		if(in_array($post->post_name,['about','company'])){ //ページスラッグが「about」または「company」ならコンテンツエディターを非表示
// 			remove_post_type_support('page','editor');
// 			return false;
// 		}
// 	}
// 	return $use_block_editor;
// },10,2); -->



// <!-- アイキャッチ出力 -->

add_theme_support('post-thumbnails');