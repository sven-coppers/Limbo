function DefaultRadioGroup(radioGroup, oldElements, labels, controller) {
    this.groupName = radioGroup;
    this.radioButtons = [];
    this.controller = controller;
    this.initHTML(oldElements, labels, controller);
}
DefaultRadioGroup;
RadioGroup();
DefaultRadioGroup.prototype.extendPrototype({
    initHTML: function (oldElements, labels, controller) {
        for (var i = 0; i < oldElements.length; i++) {
            var newRadioButton = new DefaultRadioButton(oldElements[i], labels[i], this);
            this.radioButtons[newRadioButton.identifier] = newRadioButton;
        }
    }
});
//# sourceMappingURL=default_radio_group.js.map