function StackedLookAndFeel() {
    this.widgets = {};
}
StackedLookAndFeel;
LookAndFeel();
StackedLookAndFeel.prototype.extendPrototype({
    createButton: function (element, controller) {
        return new StackedButton(element, controller);
    },
    createRadioGroup: function (radioGroup, oldElements, labels, controller) {
        return new StackedRadioGroup(radioGroup, oldElements, labels, controller);
    },
    createCheckboxGroup: function (checkGroup, oldElements, labels, controller) {
        return new StackedCheckboxGroup(checkGroup, oldElements, labels, controller);
    },
    createTextbox: function (element, controller) {
        return new StackedTextbox(element, controller);
    },
    createSelectionHybrid: function (element, controller, label) {
        return new StackedSelectionHybrid(element, controller, label);
    },
    createListbox: function (element, controller) {
        return new StackedListbox(element, controller);
    }
});
//# sourceMappingURL=stacked_look_and_feel.js.map