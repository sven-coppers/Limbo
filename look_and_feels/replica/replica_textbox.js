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
var ReplicaTextbox = /** @class */ (function (_super) {
    __extends(ReplicaTextbox, _super);
    function ReplicaTextbox(identifier, container, controller) {
        return _super.call(this, identifier, container, controller) || this;
    }
    ReplicaTextbox.prototype.initHTML = function (oldElement) {
        var value = oldElement.val();
        var newHTML = '';
        newHTML += '<div class="textbox">';
        newHTML += '    <input type="text" value="' + value + '" id="' + this.identifier + '_replica">';
        newHTML += '</div>';
        this.container = $(newHTML);
        oldElement.replaceWith(this.container);
    };
    ReplicaTextbox.prototype.setEnabled = function (enabled) {
        this.container.toggleClass("disabled", !enabled);
        if (enabled) {
            this.container.find("input").removeAttr("disabled");
        }
        else {
            this.container.find("input").attr("disabled", "disabled");
        }
    };
    ReplicaTextbox.prototype.isEnabled = function () {
        return !this.container.hasClass("disabled");
    };
    ReplicaTextbox.prototype.previewNextEnabled = function (enabled) {
        // No feedforward
    };
    ReplicaTextbox.prototype.removeNextEnabledPreview = function () {
        // No feedforward
    };
    ReplicaTextbox.prototype.previewPreviousEnabled = function (enabled) {
        // No feedforward
    };
    ReplicaTextbox.prototype.removePreviousEnabledPreview = function () {
        // No feedforward
    };
    ReplicaTextbox.prototype.setVisible = function (visible) {
        console.log("TODO: implement setVisible() in ReplicaTextbox");
    };
    ReplicaTextbox.prototype.isVisible = function () {
    };
    ReplicaTextbox.prototype.previewNextVisible = function (visible) {
        // No feedforward
    };
    ReplicaTextbox.prototype.removeNextVisiblePreview = function () {
        // No feedforward
    };
    ReplicaTextbox.prototype.previewPreviousVisible = function (visible) {
        // No feedforward
    };
    ReplicaTextbox.prototype.removePreviousVisiblePreview = function () {
        // No feedforward
    };
    ReplicaTextbox.prototype.setValue = function (value) {
        this.container.find("input[type=text]").val(value);
    };
    ReplicaTextbox.prototype.getValue = function () {
        return this.container.find("input[type=text]").val();
    };
    ReplicaTextbox.prototype.previewValue = function (value, timeRatioLeft) {
        // No feedforward
    };
    ReplicaTextbox.prototype.removePreviewValue = function () {
        // No feedforward
    };
    return ReplicaTextbox;
}(TextBox));
//# sourceMappingURL=replica_textbox.js.map