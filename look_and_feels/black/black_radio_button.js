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
var BlackRadioButton = /** @class */ (function (_super) {
    __extends(BlackRadioButton, _super);
    function BlackRadioButton(label, controller, oldContainer, radioGroup, mode) {
        return _super.call(this, oldContainer.attr("value"), label, controller, oldContainer, radioGroup, mode) || this;
    }
    BlackRadioButton.prototype.initHTML = function (oldElement, label) {
        var newHTML = '';
        newHTML += '<div class="radio_option widget">';
        newHTML += '    <div class="radio_option_circle">&nbsp;</div>';
        newHTML += '    <div class="radio_option_label">' + label + '</div>';
        newHTML += '</div>';
        this.container = $(newHTML);
        oldElement.replaceWith(this.container);
    };
    return BlackRadioButton;
}(RadioButton));
//# sourceMappingURL=black_radio_button.js.map