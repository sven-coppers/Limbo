function DefaultRadioButton(oldElement, label, radioGroup) {
    this.identifier = oldElement.attr("id");
    this.radioGroup = radioGroup;
    this.initHTML(oldElement, label);
    this.initBehavior();
}
DefaultRadioButton;
RadioButton();
DefaultRadioButton.prototype.extendPrototype({
    initHTML: function (oldElement, label) {
        var newHTML = "";
        newHTML += '<div class="radio_option">';
        newHTML += '    <input type="radio" name="' + this.radioGroup.groupName + '_default" value="' + oldElement.attr("value") + '">';
        newHTML += '    <label for="">' + label + '</label></div>';
        newHTML += '</div>';
        this.container = $(newHTML);
        oldElement.replaceWith(this.container);
    },
    setEnabled: function (enabled) {
        console.log("TODO: implement setEnabled() in all radioButtons");
    },
    previewEnabled: function (enabled) {
        // Default UI has no feedforward
    },
    setVisible: function (visible) {
        console.log("TODO: implement setVisible() in all radioButtons");
    },
    previewVisible: function (visible) {
        // Default UI has no feedforward
    },
    setSelected: function (selected) {
        this.container.find("input[type=radio]").prop('checked', selected);
    },
    previewSelected: function (selected) {
        // Default UI has no feedforward
    },
    removeNextStatePreview: function () {
        // Default UI has no feedforward
    }
});
//# sourceMappingURL=default_radio_button.js.map