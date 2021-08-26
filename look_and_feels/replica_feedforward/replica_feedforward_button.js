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
var ReplicaFeedforwardButton = /** @class */ (function (_super) {
    __extends(ReplicaFeedforwardButton, _super);
    function ReplicaFeedforwardButton(oldContainer, controller) {
        return _super.call(this, oldContainer.attr("id"), controller, oldContainer) || this;
    }
    ReplicaFeedforwardButton.prototype.initHTML = function (oldElement) {
        var label = oldElement.text();
        var newHTML = '<div class="button" id="' + this.identifier + '_replica_feedforward">' + label + '</div>';
        this.container = $(newHTML);
        oldElement.replaceWith(this.container);
    };
    ReplicaFeedforwardButton.prototype.setEnabled = function (enabled) {
        this.container.toggleClass("disabled", !enabled);
    };
    ReplicaFeedforwardButton.prototype.isEnabled = function () {
        return !this.container.hasClass("disabled");
    };
    ReplicaFeedforwardButton.prototype.previewEnabled = function (enabled) {
        if (enabled && this.container.hasClass("disabled")) {
            this.container.addClass("feedforward_enabled");
        }
        else if (!enabled && !this.container.hasClass("disabled")) {
            this.container.addClass("feedforward_disabled");
        }
    };
    ReplicaFeedforwardButton.prototype.setVisible = function (visible) {
        console.log("TODO: implement setVisible() in replica buttons");
    };
    ReplicaFeedforwardButton.prototype.previewVisible = function (visible) {
        // Default UI has no feedforward
    };
    ReplicaFeedforwardButton.prototype.removeNextStatePreview = function () {
        this.container.removeClass("feedforward_enabled feedforward_disabled");
    };
    return ReplicaFeedforwardButton;
}(Button));
//# sourceMappingURL=replica_feedforward_button.js.map