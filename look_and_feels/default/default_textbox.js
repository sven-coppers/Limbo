function DefaultTextbox(oldElement, controller) {
    this.identifier = oldElement.attr("id");
    this.controller = controller;
    this.initHTML(oldElement);
    this.initBehavior();
}
DefaultTextbox;
Textbox();
DefaultTextbox.prototype.extendPrototype({
    initHTML: function (oldElement) {
        oldElement.attr("id", this.identifier + "_default");
        this.container = oldElement;
    },
    initBehavior: function () {
        var oThis = this;
        this.container.on("keyup", function (e) {
            oThis.keyUp(e);
        });
    },
    setEnabled: function (enabled) {
        this.container.attr("disabled", !enabled);
    },
    isEnabled: function () {
        return !this.container.attr("disabled");
    },
    previewNextEnabled: function (enabled) {
        // No feedforward
    },
    removeNextEnabledPreview: function () {
        // No feedforward
    },
    previewPreviousEnabled: function (enabled) {
        // No feedforward
    },
    removePreviousEnabledPreview: function () {
        // No feedforward
    },
    setVisible: function (enabled) {
        console.log("TODO: implement setVisible() in BlueTextbox");
    },
    isVisible: function () {
        console.log("TODO: implement isVisible()");
    },
    previewNextVisible: function (visible) {
        // No feedforward
    },
    removeNextVisiblePreview: function () {
        // No feedforward
    },
    previewPreviousVisible: function (visible) {
        // No feedforward
    },
    removePreviousVisiblePreview: function () {
        // No feedforward
    },
    setValue: function (value) {
        this.container.val(value);
    },
    getValue: function () {
        this.container.val(value);
    },
    previewNextValue: function (value, timeRatioLeft) {
        // No feedforward
    },
    removeNextValuePreview: function () {
        // No feedforward
    },
    previewPreviousValue: function (value, timeRatioLeft) {
        // No feedforward
    },
    removePreviousValuePreview: function () {
        // No feedforward
    }
});
//# sourceMappingURL=default_textbox.js.map