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
var BlackPanel = /** @class */ (function (_super) {
    __extends(BlackPanel, _super);
    function BlackPanel(identifier, contents, container, controller, mode) {
        var _this = _super.call(this, identifier, contents, container, controller, mode) || this;
        _this.controller = controller;
        return _this;
    }
    BlackPanel.prototype.initHTML = function (container, label) {
        var newHTML = '<div class="panel" id="' + this.identifier + '_black">' + label + '</div>';
        this.container = $(newHTML);
        container.replaceWith(this.container);
    };
    BlackPanel.prototype.setVisible = function (visible) {
        this.container.toggleClass("hidden", !visible);
    };
    BlackPanel.prototype.previewVisible = function (visible) {
        console.log("TODO: implement previewVisible() in all buttons");
    };
    BlackPanel.prototype.isVisible = function () {
        return !this.container.hasClass("hidden");
    };
    BlackPanel.prototype.setSelected = function (selected) {
        this.container.toggleClass("selected", selected);
    };
    BlackPanel.prototype.previewSelected = function (selected) {
        if (this.container.hasClass("selected") && !selected) {
            this.container.addClass("feedforward_deselected");
        }
        else if (!(this.container.hasClass("selected")) && selected) {
            this.container.addClass("feedforward_selected");
        }
    };
    BlackPanel.prototype.isSelected = function () {
        return this.container.hasClass("selected");
    };
    BlackPanel.prototype.removeNextStatePreview = function () {
        this.container.removeClass("feedforward_enabled feedforward_disabled");
        this.container.removeClass("feedforward_selected feedforward_deselected");
    };
    return BlackPanel;
}(Panel));
//# sourceMappingURL=black_panel.js.map