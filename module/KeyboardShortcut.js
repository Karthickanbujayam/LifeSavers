/**
 * Created by emoimas on 9/15/2015.
 */

angular.module('KeyboardShortcut', []).constant(
    ).directive('shortcut', function() {
        return {
            restrict: 'A',
            link: function(scope) {
                var currentKey = -1 , lastKey  = -1;
                var catchShortcut = false, fireAction = false;
                jQuery(document).on('keyup', function(e) {
                    if(fireAction){
                        console.log("Fire Action");
                        scope.$apply(scope.onShortcutKeyStroke(currentKey));
                        fireAction = false;
                        e.stopImmediatePropagation();
                    }
                });
                jQuery(document).on('keydown', function(e) {
                    lastKey = (currentKey !== lastKey) ? currentKey : lastKey;
                    currentKey = e.which;
                    if(catchShortcut && (currentKey !== 18 || currentKey !== 17)){
                        fireAction = true;
                    }
                    catchShortcut = (lastKey === 17 || lastKey === 18 ) && (currentKey === 17 || currentKey === 18 )  && (lastKey !== currentKey) ? true : false;
                    e.stopImmediatePropagation();
                });
            }
        };
    });