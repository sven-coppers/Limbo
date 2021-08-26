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
var TextBoxState = /** @class */ (function (_super) {
    __extends(TextBoxState, _super);
    function TextBoxState() {
        var _this = _super.call(this) || this;
        _this.value = null;
        return _this;
    }
    /**
     * check if two instances of widgetState are equal
     * @param otherWidgetState
     */
    TextBoxState.prototype.equals = function (otherWidgetState) {
        if (this.enabled != null && otherWidgetState.enabled != null) {
            if (this.enabled != otherWidgetState.enabled)
                return false;
        }
        if (this.value != null && otherWidgetState.value != null) {
            if (("" + this.value).length != ("" + otherWidgetState.value).length)
                return false;
            var currentInt = parseInt(this.value);
            var newInt = parseInt(otherWidgetState.value);
            // Should come after the strlen test, because 0 === "" is true!
            if (!isNaN(currentInt) && !isNaN(newInt)) {
                return currentInt == newInt;
            }
            if (!(this.value == otherWidgetState.value || ("" + this.value) === ("" + otherWidgetState.value)))
                return false;
            if (this.value !== otherWidgetState.value)
                return false;
        }
        return true;
    };
    /**
      * Create a copy of this state
      */
    TextBoxState.prototype.getCopy = function () {
        var result = new TextBoxState();
        result.enabled = this.enabled;
        result.value = this.value;
        result.copyChildrenStates(this);
        return result;
    };
    return TextBoxState;
}(WidgetState));
//# sourceMappingURL=textbox_state.js.map