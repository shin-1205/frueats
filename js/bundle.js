"use strict";function fadeAnime(){$(".fadeInTrigger").each(function(){var o=$(this).offset().top-50,n=$(window).scrollTop();o-$(window).height()<=n?$(this).addClass("fadeIn"):$(this).removeClass("fadeIn")})}function fadeAnime1(){$(".test1").each(function(){var o=$(this).offset().top-50,n=$(window).scrollTop();o-$(window).height()<=n?$(this).addClass("fadeIn1"):$(this).removeClass("fadeIn1")})}function fadeAnime2(){$(".test2").each(function(){var o=$(this).offset().top-50,n=$(window).scrollTop();o-$(window).height()<=n?$(this).addClass("fadeIn2"):$(this).removeClass("fadeIn2")})}function fadeAnime3(){$(".test3").each(function(){var o=$(this).offset().top-50,n=$(window).scrollTop();o-$(window).height()<=n?$(this).addClass("fadeIn3"):$(this).removeClass("fadeIn3")})}function logoMove1(){$(".logoMove").each(function(){var o=$(this).offset().top-50,n=$(window).scrollTop();o-$(window).height()<=n?$(this).addClass("logoMove3"):$(this).removeClass("logoMove3")})}function storyMoveAnime1(){$(".story-left").each(function(){var o=$(this).offset().top-50,n=$(window).scrollTop();o-$(window).height()<=n?$(this).addClass("storyMove1"):$(this).removeClass("storyMove1")})}function storyMoveAnime2(){$(".story-right").each(function(){var o=$(this).offset().top-50,n=$(window).scrollTop();o-$(window).height()<=n?$(this).addClass("storyMove2"):$(this).removeClass("storyMove2")})}function productAnime1(){$(".productimg1").each(function(){var o=$(this).offset().top-50,n=$(window).scrollTop();o-$(window).height()<=n?$(this).addClass("productLeft1"):$(this).removeClass("productLeft1")})}function productAnime2(){$(".productimg2").each(function(){var o=$(this).offset().top-50,n=$(window).scrollTop();o-$(window).height()<=n?$(this).addClass("productLeft2"):$(this).removeClass("productLeft2")})}function productAnime3(){$(".productimg3").each(function(){var o=$(this).offset().top-50,n=$(window).scrollTop();o-$(window).height()<=n?$(this).addClass("productLeft3"):$(this).removeClass("productLeft3")})}function productAnime4(){$(".product-right").each(function(){var o=$(this).offset().top-50,n=$(window).scrollTop();o-$(window).height()<=n?$(this).addClass("productMove1"):$(this).removeClass("productMove1")})}function productAnime5(){$(".secBtnAll,#news").each(function(){var o=$(this).offset().top-100,n=$(window).scrollTop();o-$(window).height()<=n?$(this).addClass("secBtn1"):$(this).removeClass("secBtn1")})}function newsAnime1(){$("#news,.product-article").each(function(){var o=$(this).offset().top-50,n=$(window).scrollTop();o-$(window).height()<=n?$(this).addClass("newsMove1"):$(this).removeClass("newsMove1")})}function mediaMoveAnime1(){$("#media,#magazine").each(function(){var o=$(this).offset().top-50,n=$(window).scrollTop();o-$(window).height()<=n?$(this).addClass("mediaMove"):$(this).removeClass("mediaMove")})}$(window).scroll(function(){fadeAnime()}),$(window).on("load",function(){fadeAnime()}),$(window).scroll(function(){fadeAnime1()}),$(window).on("load",function(){fadeAnime1()}),$(window).scroll(function(){fadeAnime2()}),$(window).on("load",function(){fadeAnime2()}),$(window).scroll(function(){fadeAnime3()}),$(window).on("load",function(){fadeAnime3()}),$(window).scroll(function(){logoMove1()}),$(window).on("load",function(){logoMove1()}),$(window).scroll(function(){storyMoveAnime1()}),$(window).on("load",function(){storyMoveAnime1()}),$(window).scroll(function(){storyMoveAnime2()}),$(window).on("load",function(){storyMoveAnime2()}),$(window).scroll(function(){productAnime1()}),$(window).on("load",function(){productAnime1()}),$(window).scroll(function(){productAnime2()}),$(window).on("load",function(){productAnime2()}),$(window).scroll(function(){productAnime3()}),$(window).on("load",function(){productAnime3()}),$(window).scroll(function(){productAnime4()}),$(window).on("load",function(){productAnime4()}),$(window).scroll(function(){productAnime5()}),$(window).on("load",function(){productAnime5()}),$(window).scroll(function(){newsAnime1()}),$(window).on("load",function(){newsAnime1()}),$(window).scroll(function(){mediaMoveAnime1()}),$(window).on("load",function(){mediaMoveAnime1()}),$(".toggle_btn").on("click",function(){$("#header").hasClass("open")?$("#header").removeClass("open"):$("#header").addClass("open")}),$("#mask").on("click",function(){$("#header").removeClass("open")}),$("#navi a").on("click",function(){$("#header").removeClass("open")}),$(function(){$slide=$(".slide"),$navigation=$(".slide-navigation .item"),$slide.slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0}),$navigation.each(function(o){$(this).attr("data-number",o)}),$navigation.eq(0).addClass("current"),$navigation.on("click",function(){var o=$(this).attr("data-number");$slide.slick("slickGoTo",o,!0),$(this).siblings().removeClass("current"),$(this).addClass("current")})}),$(function(){$(".accordion li").click(function(){return $(this).children(".subMenu").slideToggle(),$(this).children(".menu").hasClass("is-active")?$(this).children(".menu").removeClass("is-active"):$(this).children(".menu").addClass("is-active"),!1})});