require(['jquery', 'jquery/ui'], function ($) {

    /** ========= TRANSITION FOR DO BANNER ============== **/
    jQuery('document').ready(function () {
        addTransitionFor();
        if (jQuery(document).width() <= 700)
            spanTransitionMobile(10, 2000);
        else
            spanTransitionDesktop(11, 2000);
    });

    function spanTransitionDesktop(position, timer) {
        setTimeout(function () {
            addTransitionFor();
            jQuery('.forrepetition').css({ "transform": "translateY(-" + position + "%)" });
            if (position >= 66) {
                position += 11.5;
            } else {
                position += 11;

            }
            if (position >= 99) {
                setTimeout(function () {
                    removeTransitionFor();
                    jQuery('.forrepetition').css({ "transform": "translateY(0%)" });
                    spanTransitionDesktop(11, 1500);
                }, 500);
            } else {
                spanTransitionDesktop(position, 2000);

            }

        }, timer);
    }

    function spanTransitionMobile(position, timer) {
        setTimeout(function () {
            addTransitionFor();
            jQuery('.forrepetition').css({ "transform": "translateY(-" + position + "%)" });
            position += 10;
            if (position >= 90) {
                setTimeout(function () {
                    removeTransitionFor();
                    jQuery('.forrepetition').css({ "transform": "translateY(0%)" });
                    spanTransitionMobile(10, 1500);
                }, 500);
            } else {
                spanTransitionMobile(position, 2000);
            }
        }, timer);
    }

    function addTransitionFor() {
        jQuery('.forrepetition').addClass('transition-for');
    }

    function removeTransitionFor() {
        jQuery('.forrepetition').removeClass('transition-for');
    }

    jQuery('.controlervideo').on('click', function () {

        jQuery('#videomain').addClass('videoFullScreen');
        jQuery('.pausevideo').removeClass('hidde');
        jQuery('.pausevideo').addClass('pause-fixed');
    })

    jQuery('.pausevideo').on('click', function () {

        jQuery('#videomain').removeClass('videoFullScreen');
        jQuery('.pausevideo').addClass('hidde');
        jQuery('.pausevideo').removeClass('pause-fixed');
    })

    /***** 
    =========================
    JS SLIDER SHOP BY APPLICATION
    ==========================================
    *****/

    var position_slider = 800;
    var qtd_cliques = 1;
    var wait = 0;
    
    jQuery(document).ready(function () {
        removeTransition();
        jQuery('.column-slider-shop').append(jQuery('.firsts-sliders-shopby').clone().removeClass('firsts-sliders-shopby'));
        jQuery('.column-slider-shop').append(jQuery('.second-sliders-shopby').clone().removeClass('second-sliders-shopby'));
        jQuery('.column-slider-shop').append(jQuery('.firsts-sliders-shopby').clone().removeClass('firsts-sliders-shopby'));
        jQuery('.column-slider-shop').append(jQuery('.second-sliders-shopby').clone().removeClass('second-sliders-shopby'));

        jQuery('.section-img-middle').css({ "transform": "translate3d(-" + position_slider + "%, 0px, 0px)" });
        addTransition();
    });
    var transition_aux_left = 0;

    jQuery('.button_application_left').click(function () {
        if (wait == 0) {
            position_slider -= 100;

            addTransition();
            jQuery('.section-img-middle').css({ "transform": "translate3d(-" + position_slider + "%, 0px, 0px)" });
            if (position_slider == 0) {
                position_slider = 800;
                wait = 1;
                setTimeout(function () {
                    removeTransition();
                    jQuery('.section-img-middle').css({ "transform": "translate3d(-800%, 0px, 0px)" });
                    wait = 0;

                }, 800);
                addTransition();
            }
        }
    });

    var transition_aux = 0;
    jQuery('.button_application_right').click(function () {
        if (wait == 0) {
            addTransition();
            position_slider += 100;
            jQuery('.section-img-middle').css({ "transform": "translate3d(-" + position_slider + "%, 0px, 0px)" })
            if (position_slider == 1200) {
                position_slider = 400;
                wait = 1;
                setTimeout(function () {
                    removeTransition();
                    jQuery('.section-img-middle').css({ "transform": "translate3d(-" + position_slider + "%, 0px, 0px)" });
                    wait = 0;
                }, 800);
                addTransition();
            }
        }
    });

    jQuery(".section-img-middle").hover(function () {
        jQuery('.section-img-middle').removeClass('withoutopacity');
        jQuery(this).addClass('withoutopacity');
    });

    jQuery('.section-img-middle').mouseout(function () {
        jQuery('.section-img-middle').removeClass('withoutopacity');
    })

    function removeTransition() {
        jQuery('.section-img-middle').removeClass('transition-option');
    }

    function addTransition() {
        jQuery('.section-img-middle').addClass('transition-option');
    }

    /** =============== =================
        JS CIRCULOS ABAIXO BANNER E BLOCOS DO BULLET
        ==============================
            **/



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
        jQuery('.circulos_ .cmd-bullet .circle_bar').addClass('less-circle');
        var element = jQuery(jQuery('.circulos_').children()[0]).children()[0];
        jQuery(element).removeClass('less-circle');
        jQuery(jQuery('.circulos_').children()[0]).addClass('animate_progress');
        jQuery(jQuery('.circulos_').children()[0]).addClass('active-overcircle');
        //makeTransitionContent(jQuery('.circulos_').children()[0]); 
        timeout_transitions(1);
    });

    function removeTransitionBullet() {
        jQuery('.circulos_').removeClass('transition-option');
        jQuery('.circle_bar').addClass('withoutransition');
    }
    
    function addTransitionBullet() {
        jQuery('.circulos_').addClass('transition-option');
        jQuery('.circle_bar').removeClass('withoutransition');
    }

    jQuery('.our-products-mobile').on('click', function () {
        if (jQuery('.mobile-icons-products').hasClass('hidde')) {
            jQuery('.mobile-icons-products').removeClass('hidde')
        } else {
            jQuery('.mobile-icons-products').addClass('hidde')
        }
    })
});