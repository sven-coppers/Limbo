function ReplicaFeedforwardCheckboxGroup(checkboxGroup, oldElements, labels, controller) {
    this.groupName = checkboxGroup;
    this.checkboxes = {};
    this.controller = controller;
    this.initHTML(oldElements, labels, controller);
}
ReplicaFeedforwardCheckboxGroup;
CheckboxGroup();
ReplicaFeedforwardCheckboxGroup.prototype.extendPrototype({
    initHTML: function (oldElements, labels, controller) {
        for (var i = 0; i < oldElements.length; i++) {
            var newCheckbox = new ReplicaFeedforwardCheckbox(oldElements[i], labels[i], this);
            this.checkboxes[newCheckbox.identifier] = newCheckbox;
        }
    }
});
//# sourceMappingURL=replica_feedforward_checkbox_group.js.map