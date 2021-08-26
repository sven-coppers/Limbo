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
var ListboxState = /** @class */ (function (_super) {
    __extends(ListboxState, _super);
    function ListboxState() {
        var _this = _super.call(this) || this;
        _this.startElementIndex = null;
        _this.options = [];
        return _this;
    }
    /**
     * check if two instances of widgetState are equal
     * @param otherWidgetState
     */
    ListboxState.prototype.equals = function (otherWidgetState) {
        if (this.enabled != null && otherWidgetState.enabled != null) {
            if (this.enabled != otherWidgetState.enabled)
                return false;
        }
        if (this.options.length != otherWidgetState.options.length)
            return false;
        for (var i = 0; i < this.options.length; ++i) {
            if (!this.options[i].equals(otherWidgetState.options[i]))
                return false;
        }
        return true;
    };
    /**
      * Create a copy of this state
      */
    ListboxState.prototype.getCopy = function () {
        var result = new ListboxState();
        result.enabled = this.enabled;
        result.options = JSON.parse(JSON.stringify(this.options));
        result.startElementIndex = this.startElementIndex;
        //TODO: Might need a deep copy as well
        result.copyChildrenStates(this);
        return result;
    };
    return ListboxState;
}(WidgetState));
//# sourceMappingURL=listbox_state.js.map