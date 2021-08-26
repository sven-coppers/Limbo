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
var ReplicaCheckbox = /** @class */ (function (_super) {
    __extends(ReplicaCheckbox, _super);
    /*constructor(oldElement, label, checkboxGroup) {
        this.identifier = oldElement.attr("id");
        this.checkboxGroup = checkboxGroup;
        this.initHTML(oldElement, label);
        this.initBehavior();
    } */
    function ReplicaCheckbox(label, controller, oldContainer, checkboxGroup) {
        return _super.call(this, oldContainer.attr("value"), label, controller, oldContainer, checkboxGroup) || this;
    }
    ReplicaCheckbox.prototype.initHTML = function (oldElement, label) {
        var newHTML = '';
        newHTML += '<div class="check_option">';
        newHTML += '    <div class="check_option_circle">';
        newHTML += '    <div class="checkmark">&#10004;</div>';
        newHTML += '</div>';
        newHTML += '<div class="check_option_label">' + label + '</div>';
        newHTML += '</div>';
        this.container = $(newHTML);
        oldElement.replaceWith(this.container);
    };
    ReplicaCheckbox.prototype.setEnabled = function (enabled) {
        console.log("TODO: implement setEnabled() in all radioButtons");
    };
    ReplicaCheckbox.prototype.previewEnabled = function (enabled) {
        // Default UI has no feedforward
    };
    ReplicaCheckbox.prototype.setVisible = function (visible) {
        console.log("TODO: implement setVisible() in all radioButtons");
    };
    ReplicaCheckbox.prototype.previewVisible = function (visible) {
        // Default UI has no feedforward
    };
    ReplicaCheckbox.prototype.setSelected = function (selected) {
        this.container.toggleClass("selected", selected);
    };
    ReplicaCheckbox.prototype.isSelected = function () {
        return this.container.hasClass("selected");
    };
    ReplicaCheckbox.prototype.previewSelected = function (selected) {
        // Default UI has no feedforward
    };
    ReplicaCheckbox.prototype.removeNextStatePreview = function () {
        // Default UI has no feedforward
    };
    return ReplicaCheckbox;
}(Checkbox));
//# sourceMappingURL=replica_checkbox.js.map