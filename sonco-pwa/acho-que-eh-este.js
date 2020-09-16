// ==================
// aparentemente, isso tudo é somente para os bullets
// ==================

var selected_circle = 'one-circle';

jQuery('.circle_bar').click(function () {
    jQuery('.circle_bar').addClass('less-circle');
    jQuery(this).removeClass('less-circle');

    if (selected_circle == 'one-circle' && jQuery(this).attr('id') == 'second-circle') /** primeiro para segundo **/ {
        jQuery('#one-circle').removeClass('pass-left');
        jQuery('#one-circle').addClass('pass-right');

    } else if (selected_circle == 'second-circle' && jQuery(this).attr('id') == 'one-circle')/*segundo para terceiro*/ {
        jQuery('#one-circle').removeClass('pass-right');
        jQuery('#one-circle').addClass('pass-left');

    } else if (selected_circle == 'second-circle' && jQuery(this).attr('id') == 'third-circle')/*terceiro para segundo */ {
        jQuery('#second-circle').removeClass('pass-left');
        jQuery('#second-circle').addClass('pass-right');

    } else if (selected_circle == 'third-circle' && jQuery(this).attr('id') == 'second-circle') /** terceiro para quarto */ {
        jQuery('#second-circle').removeClass('pass-right');
        jQuery('#second-circle').addClass('pass-left');
    } else if (selected_circle == 'third-circle' && jQuery(this).attr('id') == 'fourth-circle') /** quarto para terceiro */ {
        jQuery('#third-circle').removeClass('pass-left');
        jQuery('#third-circle').addClass('pass-right');
    } else if (selected_circle == 'fourth-circle' && jQuery(this).attr('id') == 'third-circle') /** quarto para terceiro */ {
        jQuery('#third-circle').removeClass('pass-right');
        jQuery('#third-circle').addClass('pass-left');
    } else if (selected_circle == 'fourth-circle' && jQuery(this).attr('id') == 'fifth-circle') /** quarto para terceiro */ {
        jQuery('#fourth-circle').removeClass('pass-left');
        jQuery('#fourth-circle').addClass('pass-right');
    } else if (selected_circle == 'fifth-circle' && jQuery(this).attr('id') == 'fourth-circle') /** quarto para terceiro */ {
        jQuery('#fourth-circle').removeClass('pass-right');
        jQuery('#fourth-circle').addClass('pass-left');
    }
    selected_circle = jQuery(this).attr('id');
});


function makeTransitionContent(element) {
    var continue_ = true;
    var key_ = -1;

    jQuery('.circulos_ .cmd-bullet').removeClass('active-overcircle');
    jQuery(element).addClass('active-overcircle');
    for (var i = 0; i < jQuery('.circulos_').children().length && continue_ == true; i++) {
        if (element == jQuery('.circulos_').children()[i]) {
            continue_ = false;
            key_ = i;
        }
    }

    if (key_ >= 0) {
        jQuery('.content-block-bullet').removeClass('active-content-bullet');
        jQuery('.content-bullet-' + key_).addClass('active-content-bullet');
    }
}
jQuery('.circulos_ .cmd-bullet .circle_bar').click(function () {
    continue_transactions = false;
    jQuery('.circulos_ .cmd-bullet').removeClass('animate_progress');
    makeTransitionContent(jQuery(this).parent()[0]);
});

var continue_transactions = true;
function resetAllTransitions() {
    jQuery('#one-circle').removeClass('one-circle-rightleft');
    jQuery('#one-circle').addClass('one-circle-leftright');

    jQuery('#third-circle').removeClass('third-circle-leftright');
    jQuery('#third-circle').addClass('third-circle-rightleft');
}

var atual_elemento = 0;
jQuery('.goRBullet').on('click', function () {


    resetAllTransitions();
    continue_transactions = false;
    if (atual_elemento == 4)
        atual_elemento = -1;

    makeTransitionContent(jQuery('.circulos_').children()[++atual_elemento]);
});

jQuery('.goLBullet').on('click', function () {
    continue_transactions = false;
    if (atual_elemento == 0)
        atual_elemento = 5;

    makeTransitionContent(jQuery('.circulos_').children()[--atual_elemento]);
})

function timeout_transitions(number) {
    setTimeout(function () {
        if (number < 5)
            addTransitionBullet();
        else
            removeTransitionBullet();
        var element = jQuery(jQuery('.circulos_').children()[number]).children()[0];/* GET THE ELEMENT CIRCLE_BAR*/
        jQuery('.circulos_ .cmd-bullet .circle_bar').addClass('less-circle');         /* ADD LESS CIRCLE TO ALL CIRCLE BAR**/
        if (number < 5 && continue_transactions) {
            jQuery(element).removeClass('less-circle');        /** REMOVE LESS CIRCLE FROM SPECIFIED CIRCLE **/
            jQuery('.circulos_ .cmd-bullet').removeClass('animate_progress'); /* REMOVE ANIMATE_PROGRESS FROM ALL CIRCLE */
            jQuery(jQuery('.circulos_').children()[number]).addClass('animate_progress');/* ADD ANIMATE_PROGRESS TO SPECIEFD CIRCLE **/



            switch (number) {
                case 1:
                    jQuery('#one-circle').removeClass('pass-left');
                    jQuery('#one-circle').addClass('pass-right');
                    break;
                case 2:
                    jQuery('#second-circle').removeClass('pass-left');
                    jQuery('#second-circle').addClass('pass-right');
                    break;
                case 3:
                    jQuery('#third-circle').removeClass('pass-left');
                    jQuery('#third-circle').addClass('pass-right');
                    break;
                case 4:
                    jQuery('#fourth-circle').removeClass('pass-left');
                    jQuery('#fourth-circle').addClass('pass-right');
                    break;
            }
            /** SIMULATE CLICK TO TRANSITION OF CONTENTS */
            atual_elemento = number;
            makeTransitionContent(jQuery('.circulos_').children()[number]);
            timeout_transitions(++number);
        } else if (continue_transactions) {
            var element = jQuery(jQuery('.circulos_').children()[0]).children()[0];
            jQuery('.circulos_ .cmd-bullet .circle_bar').addClass('less-circle');
            jQuery(element).removeClass('less-circle');
            jQuery('.circulos_ .cmd-bullet').removeClass('animate_progress');
            jQuery(jQuery('.circulos_').children()[0]).addClass('animate_progress');
            jQuery('#one-circle').removeClass('one-circle-leftright');
            jQuery('#one-circle').addClass('one-circle-rightleft');
            makeTransitionContent(jQuery('.circulos_').children()[0]);

            resetAllTransitions();
            timeout_transitions(1);
        }

    }, 10000);
};

jQuery(document).ready(function () {
    // jQuery('.circulos_ .cmd-bullet .circle_bar').addClass('less-circle');
    
    var circulos = document.getElementsByClassName('circle_bar');
    for(var i=0; i<circulos.length; i++)
        circulos[i].classList.add('less-circle');

    var primeiro = circulos[0];
    primeiro.classList.remove('less-circle');
    primeiro.classList.add('animate_progress');
    primeiro.classList.add('active-overcircle');

    // var element = jQuery(jQuery('.circulos_').children()[0]).children()[0];
    // jQuery(element).removeClass('less-circle');
    // jQuery(jQuery('.circulos_').children()[0]).addClass('animate_progress');
    // jQuery(jQuery('.circulos_').children()[0]).addClass('active-overcircle');
    makeTransitionContent(jQuery('.circulos_').children()[0]); 
    timeout_transitions(1);
});






function removeTransitionBullet() {
    var elem;

    elem = document.getElementsByClassName('sc-icons-top__home'); 
    elem = elem[0];

    elem.classList.remove('transition-option');
    
    elem = document.getElementsByClassName('circle_bar');
    for(var i=0; i<elem.length; i++)
        elem[i].classList.add('withoutransition')
    // jQuery('.circulos_').removeClass('transition-option');
    // jQuery('.circle_bar').addClass('withoutransition');
}

function addTransitionBullet() {

    var elem;

    elem = document.getElementsByClassName('sc-icons-top__home');
    elem = elem[0];
    elem.classList.add('transition-option');

    elem = document.getElementsByClassName('circle_bar')
    for(var i=0; i<elem.length; i++)
        elem[i].classList.remove('withoutransition');
    // jQuery('.circulos_').addClass('transition-option');
    // jQuery('.circle_bar').removeClass('withoutransition');
}