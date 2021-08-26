function StackedCheckboxGroup(checkboxGroup, oldElements, labels, controller) {
    this.groupName = checkboxGroup;
    this.checkboxes = {};
    this.controller = controller;
    this.initHTML(oldElements, labels, controller);
}
StackedCheckboxGroup;
CheckboxGroup();
StackedCheckboxGroup.prototype.extendPrototype({
    initHTML: function (oldElements, labels, controller) {
        for (var i = 0; i < oldElements.length; i++) {
            var newCheckbox = new StackedCheckbox(oldElements[i], labels[i], this);
            this.checkboxes[newCheckbox.identifier] = newCheckbox;
        }
    }
});
//# sourceMappingURL=stacked_checkbox_group.js.map