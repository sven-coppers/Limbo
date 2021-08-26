function DefaultSelectionHybrid(oldElement, controller, label) {
    this.identifier = oldElement.attr("id");
    this.controller = controller;
    this.initHTML(oldElement, label);
    this.initBehavior();
}
DefaultSelectionHybrid;
SelectionHybrid();
DefaultSelectionHybrid.prototype.extendPrototype({
    initHTML: function (oldElement, label) {
        var newHTML = '';
        newHTML += '<div class="selection_hybrid" id="' + this.identifier + '_mixed">';
        newHTML += '    <div class="label">' + label + '</div>';
        newHTML += '    <div class="layer layer1">&nbsp;</div>';
        newHTML += '</div>';
        this.container = $(newHTML);
        oldElement.replaceWith(this.container);
    },
    setEnabled: function (enabled) {
        this.container.toggleClass("disabled", !enabled);
    },
    isEnabled: function (enabled) {
        return !this.container.hasClass("disabled");
    },
    previewEnabled: function (enabled) {
        this.container.find(".layer2").toggleClass("disabled", !enabled);
        this.container.find(".layer2").removeClass("hidden");
    },
    setVisible: function (visible) {
        console.log("TODO: implement setVisible() in all buttons");
    },
    previewVisible: function (visible) {
        console.log("TODO: implement previewVisible() in all buttons");
    },
    setSelected: function (selected) {
        this.container.toggleClass("selected", selected);
    },
    previewSelected: function (selected) {
        this.container.find(".layer2").toggleClass("selected", selected);
        this.container.find(".layer2").removeClass("hidden");
    },
    isSelected: function () {
        return this.container.hasClass("selected");
    },
    removeNextStatePreview: function () {
        this.container.find(".layer2").addClass("hidden");
    },
    removePreviousStatePreview: function () {
        // TODO
    }
});
//# sourceMappingURL=default_selection_hybrid.js.map