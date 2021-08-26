function ReplicaFeedforwardRadioButton(oldElement, label, radioGroup) {
    this.identifier = oldElement.attr("id");
    this.radioGroup = radioGroup;
    this.initHTML(oldElement, label);
    this.initBehavior();
}
ReplicaFeedforwardRadioButton;
RadioButton();
ReplicaFeedforwardRadioButton.prototype.extendPrototype({
    initHTML: function (oldElement, label) {
        var newHTML = '';
        newHTML += '<div class="radio_option">';
        newHTML += '    <div class="radio_option_circle">';
        newHTML += '        <div class="radio_option_inner_circle">&nbsp;</div>';
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
//# sourceMappingURL=replica_feedforward_radio_button.js.map