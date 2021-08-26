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
var ReplicaRadioButton = /** @class */ (function (_super) {
    __extends(ReplicaRadioButton, _super);
    function ReplicaRadioButton(label, controller, oldContainer, radioGroup) {
        return _super.call(this, oldContainer.attr("value"), label, controller, oldContainer, radioGroup) || this;
    }
    ReplicaRadioButton.prototype.initHTML = function (oldElement, label) {
        var newHTML = '';
        newHTML += '<div class="radio_option">';
        newHTML += '    <div class="radio_option_circle">';
        newHTML += '        <div class="radio_option_inner_circle">&nbsp;</div>';
        newHTML += '    </div>';
        newHTML += '    <div class="radio_option_label">' + label + '</div>';
        newHTML += '</div>';
        this.container = $(newHTML);
        oldElement.replaceWith(this.container);
    };
    ReplicaRadioButton.prototype.setEnabled = function (enabled) {
        console.log("TODO: implement setEnabled() in all radioButtons");
    };
    ReplicaRadioButton.prototype.previewEnabled = function (enabled) {
        // Default UI has no feedforward
    };
    ReplicaRadioButton.prototype.setVisible = function (visible) {
        console.log("TODO: implement setVisible() in all radioButtons");
    };
    ReplicaRadioButton.prototype.previewVisible = function (visible) {
        // Default UI has no feedforward
    };
    ReplicaRadioButton.prototype.setSelected = function (selected) {
        this.container.toggleClass("selected", selected);
    };
    ReplicaRadioButton.prototype.previewSelected = function (selected) {
        // Default UI has no feedforward
    };
    ReplicaRadioButton.prototype.removeNextStatePreview = function () {
        // Default UI has no feedforward
    };
    return ReplicaRadioButton;
}(RadioButton));
//# sourceMappingURL=replica_radio_button.js.map