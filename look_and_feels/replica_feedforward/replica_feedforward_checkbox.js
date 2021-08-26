function ReplicaFeedforwardCheckbox(oldElement, label, checkboxGroup) {
    this.identifier = oldElement.attr("id");
    this.checkboxGroup = checkboxGroup;
    this.initHTML(oldElement, label);
    this.initBehavior();
}
ReplicaFeedforwardCheckbox;
Checkbox();
ReplicaFeedforwardCheckbox.prototype.extendPrototype({
    initHTML: function (oldElement, label) {
        var newHTML = '';
        newHTML += '<div class="check_option">';
        newHTML += '    <div class="check_option_circle">';
        newHTML += '    <div class="checkmark">&#10004;</div>';
        newHTML += '</div>';
        newHTML += '<div class="check_option_label">' + label + '</div>';
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
    isSelected: function () {
        return this.container.hasClass("selected");
    },
    previewSelected: function (selected) {
        if (this.container.hasClass("selected") && !selected) {
            this.container.addClass("feedforward_deselected");
        }
        else if (!(this.container.hasClass("selected")) && selected) {
            this.container.addClass("feedforward_selected");
        }
    },
    removeNextStatePreview: function () {
        this.container.removeClass("feedforward_selected feedforward_deselected");
    }
});
//# sourceMappingURL=replica_feedforward_checkbox.js.map