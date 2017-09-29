/*
	Author: Zeshan Amjad
	Version: 0.1
	Requires: jQuery
	For use by Jack Thomas (@JackT2) only.
*/

(function($) {

    // START EXTENDING
    $.fn.slide = function(options) {

        var sliderObject = this;

        // DEFAULT OPTIONS
        if (!options) {
            options = {
                speed: 600,
                easingFunc: 'ease',
                controls: {
                    visible: true,
                    prevLabelText: 'Prev',
                    nextLabelText: 'Next'
                }
            };
        }

        // METHODS
        var obj = {
            children: {
                elements: this.children(),
                singleWidth: function(){
                    return $(obj.children.elements[0]).width();
                },
                singleHeight: function(){
                    return $(obj.children.elements[0]).height();
                },
                totalWidth: function(){
                    var total = 0;
                    obj.children.elements.each(function(){
                        total += $(this).width();
                    });
                    return total;
                }
            },
            structure: function(){
                sliderObject.css({
                    'width': obj.children.singleWidth(),
                    'height': obj.children.singleHeight(),
                    'overflow': 'hidden'
                });
                obj.children.elements.wrapAll('<div class="slideContainer"></div>')
                .parent().css({
                    'width': obj.children.totalWidth(),
                    'position':'relative',
                    '-webkit-transition': 'margin-left ' + options.speed + 'ms ' + options.easingFunc,
                    '-moz-transition': 'margin-left ' + options.speed + 'ms ' + options.easingFunc,
                    '-o-transition': 'margin-left ' + options.speed + 'ms ' + options.easingFunc,
                    'transition': 'margin-left ' + options.speed + 'ms ' + options.easingFunc
                })
                .end().css({
                    'display': 'inline-block'
                });
            },
            slide: {
                currentOffet: 0,
                func: function(direction){
                    if(direction === 'n') {
                        if(obj.slide.currentOffet === obj.children.totalWidth()-obj.children.singleWidth()) {
                            obj.slide.currentOffet = 0;
                            $('.slideContainer').css({
                                'margin-left': -obj.slide.currentOffet
                            });
                        }
                        else {
                            obj.slide.currentOffet += obj.children.singleWidth();
                            $('.slideContainer').css({
                                'margin-left': -obj.slide.currentOffet
                            });
                        }
                    }
                    else {
                        if(obj.slide.currentOffet !== 0) {
                            obj.slide.currentOffet -= obj.children.singleWidth();
                            $('.slideContainer').css({
                                'margin-left': -obj.slide.currentOffet
                            });
                        }
                    }
                }
            },
            controls: function(){
                $('<div style="width: 100%; height: 100%; margin-top: -' + sliderObject.height() + 'px; position: relative;"><div class="prev slideButton">' + options.controls.prevLabelText + '</div><div class="next slideButton">' + options.controls.nextLabelText + '</div></div>').prependTo(sliderObject);

                $('.slideButton').css({
                    'position': 'absolute',
                    'top': '150%',
                    'font-weight': 'bold',
                    'text-shadow': 'rgba(255, 255, 255, 0.199219) 0px 1px 0px, 0 0 2px rgba(255,255,255,0.5)',
                    'cursor': 'pointer',
                    'z-index': '1'
                });

                $('.prev.slideButton').css({
                    'left': '0',
                    'margin-left': '20px',
                    'margin-top': -$('.prev.slideButton').height()
                }).click(function(){
                    obj.slide.func('p');
                });

                $('.next.slideButton').css({
                    'right': '0',
                    'margin-right': '20px',
                    'margin-top': - $('.next.slideButton').height()
                }).click(function(){
                    obj.slide.func('n');
                });
            }
        };

        obj.execute = (function(){
            obj.structure();
            if(options.controls.visible) {
                obj.controls();
            }
        }());
        
        console.log(obj);

        return sliderObject;

    };

})(jQuery);