var Effect;
(function (Effect) {
    Effect["START_PREVIEW"] = "effect_preview";
    Effect["STOP_PREVIEW"] = "effect_remove_preview";
    Effect["EXECUTE"] = "effect_execute";
    Effect["START_LIMBO"] = "effect_start_limbo";
    Effect["CONFIRM_LIMBO_ACTION"] = "effect_confirm_limbo";
    Effect["ACKNOWLEDGE"] = "effect_acknowledge";
})(Effect || (Effect = {}));
var Action;
(function (Action) {
    Action["NONE"] = "a_none";
    Action["CLICKED"] = "a_click";
    Action["SELECTED"] = "a_select";
    Action["DESELECTED"] = "a_deselect";
    Action["VALUE_CHANGED"] = "a_valueChange";
    Action["SCROLLED"] = "a_scroll";
})(Action || (Action = {}));
var GUIEvent = /** @class */ (function () {
    /**
     * Create a new GUIEvent
     * @param identifier the identifier of the widget
     * @param action the action that has been performed on the widget
     * @param effect the desired effect after handling the action
     * @param handlerRequired should we throw an error when there is no eventhandler?
     */
    function GUIEvent(identifier, action, effect, handlerRequired) {
        if (handlerRequired === void 0) { handlerRequired = false; }
        this.identifier = identifier;
        this.action = action;
        this.effect = effect;
        this.handlerRequired = handlerRequired;
    }
    GUIEvent.prototype.toString = function () {
        return this.action.replace("a_", "") + " " + this.identifier;
    };
    return GUIEvent;
}());
//# sourceMappingURL=gui_event.js.map