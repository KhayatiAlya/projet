(function($) {
    $.fn.extend({
        toggleSwitch: function(){
            $('.toggle-switch').on('click',function(){
                if($(this).hasClass('toggle-off')){
                    $(this).removeClass('toggle-off').addClass('toggle-on')
                }else{
                    $(this).removeClass('toggle-on').addClass('toggle-off')
                }
            })
        }
    })
})(jQuery)