function DefaultSlider(oldElement, controller) {
    this.container = null;
    this.controller = controller;
    this.identifier = oldElement.attr("id");
    this.value = null;
    this.initHTML(oldElement);
    this.initBehavior();
}
DefaultSlider;
Slider();
DefaultSlider.prototype.extendPrototype({
    initHTML: function (oldElement) {
        oldElement.attr("id", this.identifier + "_default");
        this.container = oldElement;
    },
    setEnabled: function (enabled) {
        console.log("TODO: implement setEnabled()");
    },
    isEnabled: function () {
        console.log("TODO: implement isEnabled()");
    },
    previewNextEnabled: function (enabled) {
        console.log("TODO: implement previewNextEnabled()");
    },
    removeNextEnabledPreview: function () {
        console.log("TODO: implement removeNextEnabledPreview()");
    },
    previewPreviousEnabled: function (enabled) {
        console.log("TODO: implement previewPreviousEnabled()");
    },
    removePreviousEnabledPreview: function () {
        console.log("TODO: implement removePreviousEnabledPreview()");
    },
    setVisible: function (enabled) {
        console.log("TODO: implement setVisible()");
    },
    isVisible: function () {
        console.log("TODO: implement isVisible()");
    },
    previewNextVisible: function (visible) {
        console.log("TODO: implement previewNextVisible()");
    },
    removeNextVisiblePreview: function () {
        console.log("TODO: implement removeNextVisiblePreview()");
    },
    previewPreviousVisible: function (visible) {
        console.log("TODO: implement previewPreviousVisible()");
    },
    removePreviousVisiblePreview: function () {
        console.log("TODO: implement removePreviousVisiblePreview()");
    },
    setValue: function (value) {
        this.container.attr("value", value);
    },
    getValue: function () {
        return this.container.attr("value");
    },
    previewNextValue: function (value, timeRatioLeft) {
        console.log("TODO: implement previewNextValue()");
    },
    removeNextValuePreview: function () {
        console.log("TODO: implement removePreviewNextValue()");
    },
    previewPreviousValue: function (value, timeRatioLeft) {
        console.log("TODO: implement previewPreviousValue()");
    },
    removePreviousValuePreview: function () {
        console.log("TODO: implement removePreviewPreviousValue()");
    }
});
//# sourceMappingURL=default_slider.js.map