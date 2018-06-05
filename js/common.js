/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

$(function () {
  $('.change_user').click(function() {
    $(this).find('.list').toggleClass('show');
    $('.outer-layer').addClass('show');

    $('.inner-layer').addClass('show');
    $('.inner-layer').click(function() {
      $('.change_user').find(".list.show").removeClass('show');
      $(this).toggleClass('show');
    });
  });

  $('.outer-layer').click(function() {
    $('.change_user').find(".list.show").toggleClass('show');
    $('.outer-layer').removeClass('hide');
    $('.sidemenu').removeClass('show');
  });

  $('.icon-menu').click(function() {
    $('.sidemenu').toggleClass('show');
    $('.outer-layer').toggleClass('show');
    if( $('.sidemenu').hasClass('show') )
      $('.outer-layer').addClass('show');

    $('.change_user').click(function() {
      var list = $(this).find('.list');
      list.addClass('show');
      $('.inner-layer').addClass('show');
      $('.inner-layer').click(function() {
        list.removeClass('show');
        $(this).toggleClass('show');
      });

      $('.icon-close').click( function() {
        $('.sidemenu').removeClass('show');
        list.removeClass('show');
      });
    });
  });



});
