function ReplicaFeedforwardRadioGroup(radioGroup, oldElements, labels, controller) {
    this.groupName = radioGroup;
    this.radioButtons = [];
    this.controller = controller;
    this.initHTML(oldElements, labels, controller);
}
ReplicaFeedforwardRadioGroup;
RadioGroup();
ReplicaFeedforwardRadioGroup.prototype.extendPrototype({
    initHTML: function (oldElements, labels, controller) {
        for (var i = 0; i < oldElements.length; i++) {
            var newRadioButton = new ReplicaFeedforwardRadioButton(oldElements[i], labels[i], this);
            this.radioButtons[newRadioButton.identifier] = newRadioButton;
        }
    }
});
//# sourceMappingURL=replica_feedforward_radio_group.js.map