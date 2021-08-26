function DefaultLookAndFeel() {
    this.widgets = {};
}
DefaultLookAndFeel;
LookAndFeel();
DefaultLookAndFeel.prototype.extendPrototype({
    createButton: function (element, controller) {
        return new DefaultButton(element, controller);
    },
    createRadioGroup: function (radioGroup, oldElements, labels, controller) {
        return new DefaultRadioGroup(radioGroup, oldElements, labels, controller);
    },
    createCheckboxGroup: function (checkGroup, oldElements, labels, controller) {
        return new DefaultCheckboxGroup(checkGroup, oldElements, labels, controller);
    },
    createTextbox: function (element, controller) {
        return new DefaultTextbox(element, controller);
    },
    createListbox: function (element, controller) {
        return new DefaultListbox(element, controller);
    },
    createSlider: function (element, controller) {
        return new DefaultSlider(element, controller);
    },
    createSelectionHybrid: function (element, controller, label) {
        return new DefaultSelectionHybrid(element, controller, label);
    }
});
//# sourceMappingURL=default_look_and_feel.js.map