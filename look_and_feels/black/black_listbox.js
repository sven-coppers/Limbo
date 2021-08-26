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
var BlackListbox = /** @class */ (function (_super) {
    __extends(BlackListbox, _super);
    function BlackListbox(identifier, container, controller, mode) {
        var _this = _super.call(this, identifier, controller, container, mode) || this;
        _this.allowMultiple = false;
        return _this;
    }
    BlackListbox.prototype.getSelection = function () {
        return [];
    };
    BlackListbox.prototype.initHTML = function (oldContainer) {
    };
    BlackListbox.prototype.previewOptions = function (selection, timeRatioLeft) {
    };
    BlackListbox.prototype.removePreviewSelection = function () {
    };
    BlackListbox.prototype.setSelection = function (selection) {
    };
    return BlackListbox;
}(ListBox));
//# sourceMappingURL=black_listbox.js.map