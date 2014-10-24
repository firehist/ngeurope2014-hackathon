angular.module('starter.directives', [])

    .directive('textFromHtml', function() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                scope.$watch(attrs.textFromHtml, function (value) {
                    element.html(value || '');
                    var text = element.text();
                    if (text.length > 180) {
                        text = text.substring(0, 170) + ' [...]';
                    }
                    element.text(text);
                });

            }
        };
    })