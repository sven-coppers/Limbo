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
var TextBoxEvent = /** @class */ (function (_super) {
    __extends(TextBoxEvent, _super);
    function TextBoxEvent(identifier, action, effect, newValue, handlerRequired) {
        if (handlerRequired === void 0) { handlerRequired = false; }
        var _this = _super.call(this, identifier, action, effect, handlerRequired) || this;
        _this.newValue = newValue;
        return _this;
    }
    TextBoxEvent.prototype.toString = function () {
        return "Change " + this.identifier + " to '" + this.newValue + "'";
    };
    return TextBoxEvent;
}(GUIEvent));
//# sourceMappingURL=textbox_event.js.map