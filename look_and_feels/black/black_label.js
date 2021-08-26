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
var BlackLabel = /** @class */ (function (_super) {
    __extends(BlackLabel, _super);
    function BlackLabel(oldContainer, controller, mode) {
        return _super.call(this, oldContainer.attr("id"), controller, oldContainer, mode) || this;
    }
    BlackLabel.prototype.initHTML = function (container) {
        this.value = container.html();
        container.attr("id", this.identifier + '_black');
        container.addClass("widget");
        container.html('<div class="value">' + this.value + '</div>');
    };
    BlackLabel.prototype.setValue = function (value) {
        this.value = value;
        this.container.find(".value").html(value);
    };
    BlackLabel.prototype.getValue = function () {
        return this.value;
    };
    BlackLabel.prototype.previewValue = function (value, timeRatioLeft) {
        this.container.find(".value").html(value);
        this.container.addClass("feedforward");
    };
    BlackLabel.prototype.removePreviewValue = function () {
        this.container.find(".value").html(this.value);
        this.container.removeClass("feedforward");
    };
    return BlackLabel;
}(Label));
//# sourceMappingURL=black_label.js.map