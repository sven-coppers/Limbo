var ListBoxOptionState = /** @class */ (function () {
    function ListBoxOptionState(label, selected) {
        this.label = label;
        this.selected = selected;
    }
    /**
     * check if two instances of widgetState are equal
     * @param otherWidgetState
     */
    ListBoxOptionState.prototype.equals = function (otherWidgetState) {
        if (this.label != null && otherWidgetState.label != null) {
            if (this.label != otherWidgetState.label)
                return false;
        }
        if (this.selected != null && otherWidgetState.selected != null) {
            if (this.selected != otherWidgetState.selected)
                return false;
        }
        return true;
    };
    return ListBoxOptionState;
}());
//# sourceMappingURL=listbox_option_state.js.map