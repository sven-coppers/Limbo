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
var ReplicaButton = /** @class */ (function (_super) {
    __extends(ReplicaButton, _super);
    function ReplicaButton(oldContainer, controller) {
        return _super.call(this, oldContainer.attr("id"), controller, oldContainer) || this;
    }
    ReplicaButton.prototype.initHTML = function (oldElement) {
        var label = oldElement.text();
        var newHTML = '<div class="button" id="' + this.identifier + '_replica">' + label + '</div>';
        this.container = $(newHTML);
        oldElement.replaceWith(this.container);
    };
    ReplicaButton.prototype.setEnabled = function (enabled) {
        this.container.toggleClass("disabled", !enabled);
    };
    ReplicaButton.prototype.isEnabled = function () {
        return !this.container.hasClass("disabled");
    };
    ReplicaButton.prototype.previewEnabled = function (enabled) {
        // Default UI has no feedforward
    };
    ReplicaButton.prototype.setVisible = function (visible) {
        console.log("TODO: implement setVisible() in replica buttons");
    };
    ReplicaButton.prototype.previewVisible = function (visible) {
        // Default UI has no feedforward
    };
    ReplicaButton.prototype.removeNextStatePreview = function () {
        // Default UI has no feedforward
    };
    return ReplicaButton;
}(Button));
//# sourceMappingURL=replica_button.js.map