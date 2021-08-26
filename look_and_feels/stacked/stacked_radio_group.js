function StackedRadioGroup(radioGroup, oldElements, labels, controller) {
    this.groupName = radioGroup;
    this.radioButtons = {};
    this.controller = controller;
    this.initHTML(oldElements, labels, controller);
}
StackedRadioGroup;
RadioGroup();
StackedRadioGroup.prototype.extendPrototype({
    initHTML: function (oldElements, labels, controller) {
        for (var i = 0; i < oldElements.length; i++) {
            var newRadioButton = new StackedRadioButton(oldElements[i], labels[i], this);
            this.radioButtons[newRadioButton.identifier] = newRadioButton;
        }
    }
});
//# sourceMappingURL=stacked_radio_group.js.map