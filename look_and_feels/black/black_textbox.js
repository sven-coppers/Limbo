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
var BlackTextbox = /** @class */ (function (_super) {
    __extends(BlackTextbox, _super);
    function BlackTextbox(identifier, container, controller, mode) {
        return _super.call(this, identifier, container, controller, mode) || this;
    }
    BlackTextbox.prototype.initHTML = function (container) {
        var newHTML = '';
        newHTML += '<div class="widget textbox">';
        newHTML += '    <input type="text" class="current_value" value="" id="' + this.identifier + '_black">';
        newHTML += '    <input type="text" class="next_value" value="" id="' + this.identifier + '_black_feedforward">';
        newHTML += '</div>';
        this.container = $(newHTML);
        container.replaceWith(this.container);
    };
    /* OVERIDE REQUIRED */
    BlackTextbox.prototype.setEnabled = function (enabled) {
        _super.prototype.setEnabled.call(this, enabled);
        if (enabled) {
            this.container.find("input").removeAttr("disabled");
        }
        else {
            this.container.find("input").attr("disabled", "disabled");
        }
    };
    BlackTextbox.prototype.setValue = function (value) {
        $("#" + this.identifier + "_black").val(value);
    };
    BlackTextbox.prototype.getValue = function () {
        return $("#" + this.identifier + "_black").val();
    };
    BlackTextbox.prototype.previewValue = function (value, timeRatioLeft) {
        $("#" + this.identifier + "_black_feedforward").val(value);
        this.container.addClass("feedforward_value");
    };
    BlackTextbox.prototype.removePreviewEnabled = function () {
    };
    BlackTextbox.prototype.removePreviewValue = function () {
        this.container.removeClass("feedforward_value");
    };
    return BlackTextbox;
}(TextBox));
//# sourceMappingURL=black_textbox.js.map