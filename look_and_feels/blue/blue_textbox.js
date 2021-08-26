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
var BlueTextbox = /** @class */ (function (_super) {
    __extends(BlueTextbox, _super);
    function BlueTextbox(identifier, container, controller, mode) {
        var _this = _super.call(this, identifier, container, controller, mode) || this;
        _this.lastValue = "";
        return _this;
    }
    BlueTextbox.prototype.initBehavior = function () {
        var oThis = this;
        this.container.find("input[type=text]").on("keyup", function (event) {
            var actualContent = $("#" + oThis.identifier + "_blue").val();
            if (event.which == 13) { // Enter
                oThis.controller.processEvent(new TextBoxEvent(oThis.identifier, Action.VALUE_CHANGED, Effect.CONFIRM_LIMBO_ACTION, actualContent, true));
                oThis.container.trigger('mouseenter'); // Update feedforward
            }
            else {
                //oThis.controller.processEvent(new Event(oThis.identifier, this.defaultEvent, Effect.START_PREVIEW));
                oThis.controller.processEvent(new TextBoxEvent(oThis.identifier, Action.VALUE_CHANGED, Effect.START_LIMBO, actualContent, true));
                return false;
            }
        });
        this.container.focusout(function () {
            var actualContent = $("#" + oThis.identifier + "_blue").val();
            if (!oThis.controller.limboController.isInLimbo()) {
                oThis.controller.processEvent(new TextBoxEvent(oThis.identifier, Action.VALUE_CHANGED, Effect.EXECUTE, actualContent, true));
            }
        });
    };
    BlueTextbox.prototype.initHTML = function (container) {
        var newHTML = '';
        newHTML += '<div class="textbox">';
        newHTML += '    <input type="text" class="current_value" value="" id="' + this.identifier + '_blue">';
        //  newHTML += '    <input type="text" class="next_value" value="" id="' + this.identifier + '_blue_feedforward">';
        newHTML += '    <div class="changed">&nbsp;</div>';
        newHTML += '</div>';
        this.container = $(newHTML);
        container.replaceWith(this.container);
    };
    /**
     * Redirect event down to the responsible widget
     * @param event
     * @param windowState
     * @post the windowState will be updated
     */
    BlueTextbox.prototype.handleEvent = function (event, windowState) {
        if (event.identifier === this.identifier && event.action === Action.VALUE_CHANGED) {
            var textBoxEvent = event;
            windowState.getWidgetState(this.identifier).value = textBoxEvent.newValue;
        }
    };
    BlueTextbox.prototype.setEnabled = function (enabled) {
        _super.prototype.setEnabled.call(this, enabled);
        if (enabled) {
            this.container.find("input").removeAttr("disabled");
        }
        else {
            this.container.find("input").attr("disabled", "disabled");
        }
    };
    BlueTextbox.prototype.setValue = function (value) {
        $("#" + this.identifier + "_blue").val(value);
        this.lastValue = value;
    };
    BlueTextbox.prototype.getValue = function () {
        return this.lastValue;
    };
    BlueTextbox.prototype.previewPreviousValue = function (value, timeRatioLeft) {
        this.container.find(".feedforward").removeClass("hidden");
        this.container.find(".old_value").removeClass("hidden").text(value);
        this.updateTimeLeft(timeRatioLeft);
    };
    BlueTextbox.prototype.removePreviousValuePreview = function () {
        this.container.find(".old_value").addClass("hidden");
        this.container.find(".feedforward").addClass("hidden");
        this.container.find(".progress").addClass("hidden");
    };
    BlueTextbox.prototype.updateTimeLeft = function (timeRatioLeft) {
        var percentage = timeRatioLeft * 100.0;
        if (percentage > 0) {
            this.container.find(".feedforward").removeClass("hidden");
            this.container.find(".progress").removeClass("hidden");
            this.container.find(".progress").css({ "width": percentage + "%" });
        }
        else {
            this.container.find(".progress").addClass("hidden");
        }
    };
    BlueTextbox.prototype.previewValue = function (value, timeRatioLeft) {
        $("#" + this.identifier + "_blue").val(value);
        // $("#" + this.identifier + "_blue_feedforward").val(value);
        this.container.addClass("feedforward_value");
    };
    BlueTextbox.prototype.removePreviewValue = function () {
        this.container.removeClass("feedforward_value");
        this.setValue(this.lastValue);
    };
    return BlueTextbox;
}(TextBox));
//# sourceMappingURL=blue_textbox.js.map