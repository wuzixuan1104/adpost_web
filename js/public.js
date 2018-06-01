/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

$(function () {
  $('.icon-menu').click(function() {
    $('.sidemenu').toggleClass('show');
  });
  $(document).not('.icon-menu', '.sidemenu').click(function() {
    if( $('.sidemenu').hasClass('show') ) {
      $('.sidemenu').toggleClass('show');
    }
    // $('.sidemenu').hasClass('show').toggleClass('show');
  });
});
