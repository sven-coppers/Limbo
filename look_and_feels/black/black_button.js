var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BlackButton = /** @class */ (function (_super) {
    __extends(BlackButton, _super);
    function BlackButton(oldContainer, controller, mode) {
        return _super.call(this, oldContainer.attr("id"), controller, oldContainer, mode) || this;
    }
    BlackButton.prototype.initHTML = function (oldContainer) {
        var label = oldContainer.html();
        var classes = oldContainer.attr("class");
        var newHTML = '<div class="widget button ' + classes + '" id="' + this.identifier + '_black">' + label + '</div>';
        this.container = $(newHTML);
        oldContainer.replaceWith(this.container);
    };
    return BlackButton;
}(Button));
//# sourceMappingURL=black_button.js.map