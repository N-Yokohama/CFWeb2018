$(window).ready(function(){
  $('modal-options').iziModal();
  $(document).on('click', '.open-options', function(event) {
    event.preventDefault();
    $('#modal-options').iziModal('open',this);
  });
  $('#modal-options').iziModal({
    headerColor: '#8ce68c', //ヘッダー部分の色
    width: 300, //横幅
    overlay: true, 
    overlayColor: 'rgba(0, 0, 0, 0.1)', //モーダルの背景色
    fullscreen: false, //全画面表示
    transitionIn: 'fadeInUp', //表示される時のアニメーション
    transitionOut: 'fadeOutDown',//非表示になる時のアニメーション
  })
});

$(window).ready(function(){
$(document).on('click', '.modal-option-2', function (event) {
    event.preventDefault();
    // $('#modal').iziModal('setZindex', 99999);
    // $('#modal').iziModal('open', { zindex: 99999 });
    $('#modal-option-2').iziModal('open');
});
$('#modal-option-2').iziModal({
  headerColor: '#8ce68c', //ヘッダー部分の色
  width: 300, //横幅
  overlay: true, 
  overlayColor: 'rgba(0, 0, 0, 0.1)', //モーダルの背景色
  fullscreen: false, //全画面表示
  transitionIn: 'fadeInUp', //表示される時のアニメーション
  transitionOut: 'fadeOutDown',//非表示になる時のアニメーション
})
});

$(window).ready(function(){
  $(document).on('click', '.modal-option-3', function (event) {
      event.preventDefault();
      // $('#modal').iziModal('setZindex', 99999);
      // $('#modal').iziModal('open', { zindex: 99999 });
      $('#modal-option-3').iziModal('open');
  });
  $('#modal-option-3').iziModal({
    headerColor: '#8ce68c', //ヘッダー部分の色
    width: 300, //横幅
    overlay: true, 
    overlayColor: 'rgba(0, 0, 0, 0.1)', //モーダルの背景色
    fullscreen: false, //全画面表示
    transitionIn: 'fadeInUp', //表示される時のアニメーション
    transitionOut: 'fadeOutDown',//非表示になる時のアニメーション
  })
  });

  $(window).ready(function(){
    $(document).on('click', '.modal-option-4', function (event) {
        event.preventDefault();
        // $('#modal').iziModal('setZindex', 99999);
        // $('#modal').iziModal('open', { zindex: 99999 });
        $('#modal-option-4').iziModal('open');
    });
    $('#modal-option-4').iziModal({
      headerColor: '#8ce68c', //ヘッダー部分の色
      width: 300, //横幅
      overlay: true, 
      overlayColor: 'rgba(0, 0, 0, 0.1)', //モーダルの背景色
      fullscreen: false, //全画面表示
      transitionIn: 'fadeInUp', //表示される時のアニメーション
      transitionOut: 'fadeOutDown',//非表示になる時のアニメーション
    })
    });

    $(window).ready(function(){
      $(document).on('click', '.modal-option-5', function (event) {
          event.preventDefault();
          // $('#modal').iziModal('setZindex', 99999);
          // $('#modal').iziModal('open', { zindex: 99999 });
          $('#modal-option-5').iziModal('open');
      });
      $('#modal-option-5').iziModal({
        headerColor: '#8ce68c', //ヘッダー部分の色
        width: 300, //横幅
        overlay: true, 
        overlayColor: 'rgba(0, 0, 0, 0.1)', //モーダルの背景色
        fullscreen: false, //全画面表示
        transitionIn: 'fadeInUp', //表示される時のアニメーション
        transitionOut: 'fadeOutDown',//非表示になる時のアニメーション
      })
      });