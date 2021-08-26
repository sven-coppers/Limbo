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
var BlueListbox = /** @class */ (function (_super) {
    __extends(BlueListbox, _super);
    function BlueListbox(identifier, container, controller, mode) {
        return _super.call(this, identifier, controller, container, mode) || this;
    }
    BlueListbox.prototype.initHTML = function (oldContainer) {
        this.allowMultiple = oldContainer.attr("multiple") == "multiple";
        var label = oldContainer.html();
        var classes = oldContainer.attr('class');
        var newHTML = '<div class="listbox ' + classes + '" id="' + this.identifier + '_blue">' + label + '</div>';
        this.container = $(newHTML);
        oldContainer.replaceWith(this.container);
    };
    /**
     * To be called after replacing the HTML and setting this.container
     */
    BlueListbox.prototype.initBehavior = function () {
        var oThis = this;
        this.container.find(".option").hover(function (event) {
            if (oThis.isEnabled()) {
                oThis.lastPreviewIndex = $(this).index();
                oThis.controller.processEvent(new ListboxEvent(oThis.identifier, Action.SELECTED, Effect.START_PREVIEW, $(this).index(), event));
            }
        }, function () {
            oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.SELECTED, Effect.STOP_PREVIEW));
        });
        this.container.on('keyup keydown', function (event) {
            oThis.controller.processEvent(new ListboxEvent(oThis.identifier, Action.SELECTED, Effect.START_PREVIEW, oThis.lastPreviewIndex, event));
        });
        this.container.find(".option").click(function (event) {
            if (oThis.isEnabled()) {
                oThis.controller.processEvent(new ListboxEvent(oThis.identifier, Action.SELECTED, Effect.EXECUTE, $(this).index(), event));
                oThis.container.trigger('mouseenter'); // Update feedforward
            }
        });
    };
    BlueListbox.prototype.setSelection = function (selection) {
        this.container.find(".option").remove();
        for (var _i = 0, selection_1 = selection; _i < selection_1.length; _i++) {
            var listboxOption = selection_1[_i];
            this.addOption(listboxOption, "");
        }
    };
    BlueListbox.prototype.addOption = function (option, otherClasses) {
        this.container.append('<div class="option ' + (option.selected ? 'selected ' : ' ') + otherClasses + '">' + option.label + '</div>');
    };
    BlueListbox.prototype.getSelection = function () {
        var result = [];
        this.container.find(".option").each(function (index) {
            result.push(new ListBoxOptionState($(this).attr("text"), $(this).is(':selected')));
        });
        return result;
    };
    BlueListbox.prototype.previewOptions = function (newOptions, timeRatioLeft) {
        var oThis = this;
        // Remove what no longer exists
        this.container.find(".option").each(function (index) {
            var oldOption = $(this);
            var newOption = oThis.findOption(oldOption.text(), newOptions);
            if (newOption != null) {
                if (oldOption.hasClass('selected') && !newOption.selected) {
                    oldOption.addClass("feedforward_deselected");
                }
                else if (!oldOption.hasClass('selected') && newOption.selected) {
                    oldOption.addClass("feedforward_selected");
                }
            }
            else {
                $(this).addClass("feedforward_removed");
            }
        });
        var _loop_1 = function (newOption) {
            // Check if it did not exist yet
            var existingOptionsWithSameLabel = this_1.container.find(".option").filter(function (index) {
                return oThis.container.find(".option:eq(" + index + ")").text() == newOption.label;
            });
            if (existingOptionsWithSameLabel.length == 0) {
                this_1.addOption(newOption, "feedforward_added");
            }
        };
        var this_1 = this;
        // Add new options
        for (var _i = 0, newOptions_1 = newOptions; _i < newOptions_1.length; _i++) {
            var newOption = newOptions_1[_i];
            _loop_1(newOption);
        }
    };
    BlueListbox.prototype.findOption = function (value, options) {
        for (var i = 0; i < options.length; i++) {
            if (options[i].label === value)
                return options[i];
        }
        return null;
    };
    BlueListbox.prototype.removePreviewSelection = function () {
        this.container.find(".option").removeClass("feedforward_selected");
        this.container.find(".option").removeClass("feedforward_deselected");
        this.container.find(".option").removeClass("feedforward_removed");
        this.container.find(".option.feedforward_added").remove();
    };
    BlueListbox.prototype.setEnabled = function (enabled) {
        this.container.prop("disabled", !enabled);
    };
    BlueListbox.prototype.isEnabled = function () {
        return !this.container.prop("disabled");
    };
    return BlueListbox;
}(ListBox));
//# sourceMappingURL=blue_listbox.js.map