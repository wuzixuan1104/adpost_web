/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

$(function () {
  $('.change_user').click(function() {
    $(this).find('.list').toggleClass('show');
    $('#layer').show();
  });

  $('#layer').click(function() {
    $('.change_user').find(".list.show").toggleClass('show');
    $('#layer').hide();
  })
});
