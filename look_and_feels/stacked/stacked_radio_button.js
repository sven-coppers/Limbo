function StackedRadioButton(oldElement, label, radioGroup) {
    this.identifier = oldElement.attr("id");
    this.radioGroup = radioGroup;
    this.initHTML(oldElement, label);
    this.initBehavior();
}
StackedRadioButton;
RadioButton();
StackedRadioButton.prototype.extendPrototype({
    initHTML: function (oldElement, label) {
        var newHTML = '';
        newHTML += '<div class="radio_option">';
        newHTML += '    <div class="layers">';
        newHTML += '        <div class="radio_option_circle layer1"></div>';
        newHTML += '        <div class="radio_option_circle layer2 hidden"></div>';
        newHTML += '    </div>';
        newHTML += '    <div class="radio_option_label">' + label + '</div>';
        newHTML += '</div>';
        this.container = $(newHTML);
        oldElement.replaceWith(this.container);
    },
    setEnabled: function (enabled) {
        console.log("TODO: implement setEnabled() in all radioButtons");
    },
    previewEnabled: function (enabled) {
        console.log("TODO: implement previewEnabled() in all radioButtons");
    },
    setVisible: function (visible) {
        console.log("TODO: implement setVisible() in all radioButtons");
    },
    previewVisible: function (visible) {
        console.log("TODO: implement previewVisible() in all radioButtons");
    },
    setSelected: function (selected) {
        this.container.toggleClass("selected", selected);
    },
    previewSelected: function (selected) {
        this.container.removeClass("feedforward_deselected feedforward_selected");
        if (selected) {
            this.container.addClass("feedforward_selected");
        }
        else {
            this.container.addClass("feedforward_deselected");
        }
    },
    removeNextStatePreview: function () {
        this.container.removeClass("feedforward_selected feedforward_deselected");
    }
});
//# sourceMappingURL=stacked_radio_button.js.map