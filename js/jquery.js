// 1. 動くきっかけを独自の名前（関数：fadeAnime）で定義

function fadeAnime() {

  //動きの指定
  $('.fadeInTrigger').each(function () { //fadeInTriggerというクラス名が
    var elemPos = $(this).offset().top - 50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeIn');// 画面内に入ったらfadeInというクラス名を追記
    } else {
      $(this).removeClass('fadeIn');// 画面外に出たらfadeInというクラス名を外す
    }
  });

}

// 2. 定義した名前をページが読み込まれた後・スクロールした後それぞれのきっかけに指定

// 画面をスクロールをしたら動く場合の記述
$(window).scroll(function () {

  fadeAnime();/* アニメーション用の関数を呼ぶ*/

});// ここまで画面をスクロールをしたら動く場合の記述

// 画面が読み込まれたらすぐに動く場合の記述
$(window).on('load', function () {

  fadeAnime();/* アニメーション用の関数を呼ぶ*/

});// ここまで画面が読み込まれたらすぐに動く場合の記述


/* test1 */


function fadeAnime1() {

  //動きの指定
  $('.test1').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeIn1');
    } else {
      $(this).removeClass('fadeIn1');
    }
  });

}

// 画面をスクロールをしたら動く場合の記述
$(window).scroll(function () {

  fadeAnime1();

});

$(window).on('load', function () {

  fadeAnime1();

});


/* test2 */


function fadeAnime2() {

  //動きの指定
  $('.test2').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeIn2');
    } else {
      $(this).removeClass('fadeIn2');
    }
  });

}

// 画面をスクロールをしたら動く場合の記述
$(window).scroll(function () {

  fadeAnime2();

});

$(window).on('load', function () {

  fadeAnime2();

});


/* test3 */


function fadeAnime3() {

  //動きの指定
  $('.test3').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeIn3');
    } else {
      $(this).removeClass('fadeIn3');
    }
  });

}

// 画面をスクロールをしたら動く場合の記述
$(window).scroll(function () {

  fadeAnime3();

});

$(window).on('load', function () {

  fadeAnime3();

});



/* logoMove */



function logoMove1() {

  //動きの指定
  $('.logoMove').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('logoMove3');
    } else {
      $(this).removeClass('logoMove3');
    }
  });

}

// 画面をスクロールをしたら動く場合の記述
$(window).scroll(function () {

  logoMove1();

});

$(window).on('load', function () {

  logoMove1();

});


/* story-left */



function storyMoveAnime1() {

  //動きの指定
  $('.story-left').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('storyMove1');
    } else {
      $(this).removeClass('storyMove1');
    }
  });

}

// 画面をスクロールをしたら動く場合の記述
$(window).scroll(function () {

  storyMoveAnime1();

});

$(window).on('load', function () {

  storyMoveAnime1();

});


/* story-left */



function storyMoveAnime2() {

  //動きの指定
  $('.story-right').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('storyMove2');
    } else {
      $(this).removeClass('storyMove2');
    }
  });

}

// 画面をスクロールをしたら動く場合の記述
$(window).scroll(function () {

  storyMoveAnime2();

});

$(window).on('load', function () {

  storyMoveAnime2();

});



/* Product */


function productAnime1() {

  //動きの指定
  $('.productimg1').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('productLeft1');
    } else {
      $(this).removeClass('productLeft1');
    }
  });

}

// 画面をスクロールをしたら動く場合の記述
$(window).scroll(function () {

  productAnime1();

});

$(window).on('load', function () {

  productAnime1();

});



function productAnime2() {

  //動きの指定
  $('.productimg2').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('productLeft2');
    } else {
      $(this).removeClass('productLeft2');
    }
  });

}

// 画面をスクロールをしたら動く場合の記述
$(window).scroll(function () {

  productAnime2();

});

$(window).on('load', function () {

  productAnime2();

});



function productAnime3() {

  //動きの指定
  $('.productimg3').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('productLeft3');
    } else {
      $(this).removeClass('productLeft3');
    }
  });

}

// 画面をスクロールをしたら動く場合の記述
$(window).scroll(function () {

  productAnime3();

});

$(window).on('load', function () {

  productAnime3();

});





function productAnime4() {

  //動きの指定
  $('.product-right').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('productMove1');
    } else {
      $(this).removeClass('productMove1');
    }
  });

}

// 画面をスクロールをしたら動く場合の記述
$(window).scroll(function () {

  productAnime4();

});

$(window).on('load', function () {

  productAnime4();

});





function productAnime5() {

  //動きの指定
  $('.secBtnAll,#news').each(function () {
    var elemPos = $(this).offset().top - 100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('secBtn1');
    } else {
      $(this).removeClass('secBtn1');
    }
  });

}

// 画面をスクロールをしたら動く場合の記述
$(window).scroll(function () {

  productAnime5();

});

$(window).on('load', function () {

  productAnime5();

});


/* News */


function newsAnime1() {

  //動きの指定
  $('#news,.product-article').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('newsMove1');
    } else {
      $(this).removeClass('newsMove1');
    }
  });

}

// 画面をスクロールをしたら動く場合の記述
$(window).scroll(function () {

  newsAnime1();

});

$(window).on('load', function () {

  newsAnime1();

});



/* media */




function mediaMoveAnime1() {

  //動きの指定
  $('#media,#magazine').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('mediaMove');
    } else {
      $(this).removeClass('mediaMove');
    }
  });

}

// 画面をスクロールをしたら動く場合の記述
$(window).scroll(function () {

  mediaMoveAnime1();

});

$(window).on('load', function () {

  mediaMoveAnime1();

});


/* toggle */


$('.toggle_btn').on('click', function () {
  if ($('#header').hasClass('open')) {
    $('#header').removeClass('open');
  } else {
    $('#header').addClass('open');
  }
});

// #maskのエリアをクリックした時にメニューを閉じる
$('#mask').on('click', function () {
  $('#header').removeClass('open');
});

// リンクをクリックした時にメニューを閉じる
$('#navi a').on('click', function () {
  $('#header').removeClass('open');
});



/* product slider */

$(function () {
  $slide = $('.slide');
  $navigation = $('.slide-navigation .item');

  $slide.slick({  //slickスライダー作成
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  });
  $navigation.each(function (index) { //サムネイルに連番付与属性
    $(this).attr('data-number', index);
  });
  $navigation.eq(0).addClass('current');  //1枚をオーバーレイ

  $navigation.on('click', function () { //サムネイルクリック時イベント
    var number = $(this).attr('data-number');
    $slide.slick('slickGoTo', number, true);
    $(this).siblings().removeClass('current');
    $(this).addClass('current');
  });
});


/* acodion */

$(function () {
  $('.accordion li').click(function () {
    $(this)
      .children('.subMenu').slideToggle();

    if ($(this).children('.menu').hasClass('is-active')) {
      $(this).children('.menu').removeClass('is-active');
    } else {
      $(this).children('.menu').addClass('is-active');
    }
    return false;
  });
});


/* product popup */

$(function () {
  // 変数にクラスを入れる
  var section = $('.product-popup');

  //スクロールして、スクロール量が100を超えたら表示
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 550) {
      section.addClass('popup');
    } else {
      section.removeClass('popup');
    }
  });


});




