function DefaultCheckboxGroup(checkboxGroup, oldElements, labels, controller) {
    this.groupName = checkboxGroup;
    this.checkboxes = {};
    this.controller = controller;
    this.initHTML(oldElements, labels, controller);
}
DefaultCheckboxGroup;
CheckboxGroup();
DefaultCheckboxGroup.prototype.extendPrototype({
    initHTML: function (oldElements, labels, controller) {
        for (var i = 0; i < oldElements.length; i++) {
            var newCheckbox = new DefaultCheckbox(oldElements[i], labels[i], this);
            this.checkboxes[newCheckbox.identifier] = newCheckbox;
        }
    }
});
//# sourceMappingURL=default_checkbox_group.js.map