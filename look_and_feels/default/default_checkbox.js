function DefaultCheckbox(oldElement, label, checkboxGroup) {
    this.identifier = oldElement.attr("id");
    this.checkboxGroup = checkboxGroup;
    this.initHTML(oldElement, label);
    this.initBehavior();
}
DefaultCheckbox;
Checkbox();
DefaultCheckbox.prototype.extendPrototype({
    initHTML: function (oldElement, label) {
        var newHTML = "";
        newHTML += '<div class="check_option">';
        newHTML += '    <input type="checkbox" name="' + this.checkboxGroup.groupName + '_default" value="' + oldElement.attr("value") + '" class="radio_option">';
        newHTML += '    <label for="">' + label + '</label></div>';
        newHTML += '</div>';
        this.container = $(newHTML);
        oldElement.replaceWith(this.container);
    }
    /**
      * Override the behaviour
      */
    ,
    /**
      * Override the behaviour
      */
    initBehavior: function () {
        var oThis = this;
        this.container.click(function () {
            oThis.setSelected(!oThis.isSelected()); // This is new
            oThis.checkboxGroup.selected(oThis);
        });
        this.container.hover(function () {
            oThis.checkboxGroup.hovered(oThis);
        }, function () {
            oThis.checkboxGroup.exited(oThis);
        });
    },
    setEnabled: function (enabled) {
        this.container.find("input[type=checkboxes]").prop('disabled', !enabled);
    },
    isEnabled: function () {
        return !this.container.find("input[type=checkboxes]").prop('disabled');
    },
    previewEnabled: function (enabled) {
        // Default UI has no previews
    },
    setVisible: function (visible) {
        console.log("TODO: implement setVisible() in all radioButtons");
    },
    previewVisible: function (visible) {
        // Default UI has no previews
    },
    setSelected: function (selected) {
        this.container.find("input[type=checkboxes]").prop('checked', selected);
    },
    isSelected: function () {
        return this.container.find("input[type=checkboxes]").prop('checked');
    },
    previewSelected: function (selected) {
        // Default UI has no previews
    },
    removeNextStatePreview: function () {
        // Default UI has no previews
    }
});
//# sourceMappingURL=default_checkbox.js.map