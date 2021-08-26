function DefaultButton(oldElement, controller) {
    this.identifier = oldElement.attr("id");
    this.controller = controller;
    this.initHTML(oldElement);
    this.initBehavior();
}
DefaultButton;
Button();
DefaultButton.prototype.extendPrototype({
    initHTML: function (oldElement) {
        oldElement.attr("id", this.identifier + "_default");
        this.container = oldElement;
    },
    setEnabled: function (enabled) {
        this.container.attr("disabled", !enabled);
    },
    isEnabled: function (enabled) {
        return !this.container.attr("disabled");
    },
    previewEnabled: function (enabled) {
        // Default UI has no feedforward
    },
    setVisible: function (visible) {
        console.log("TODO: implement setVisible() in default buttons");
    },
    previewVisible: function (visible) {
        // Default UI has no feedforward
    },
    removeNextStatePreview: function () {
        // Default UI has no feedforward
    },
    removePreviousStatePreview: function () {
        // Default UI has no feedforward
    }
});
//# sourceMappingURL=default_button.js.map