function StackedTextbox(oldElement, controller) {
    this.identifier = oldElement.attr("id");
    this.controller = controller;
    this.initHTML(oldElement);
    this.initBehavior();
}
StackedTextbox;
Textbox();
StackedTextbox.prototype.extendPrototype({
    initHTML: function (oldElement) {
        var value = oldElement.val();
        var newHTML = '';
        newHTML += '<div class="textbox">';
        newHTML += '    <div class="layer layer-1 hidden">';
        newHTML += '        <div class="feedforward_icon timer"><canvas width="16" height="16"></canvas></div>';
        newHTML += '        <div class="feedforward_value old_value">' + value + '</div>';
        newHTML += '    </div>';
        newHTML += '    <div class="layer layer0">';
        newHTML += '        <input type="text" value="' + value + '" id="' + this.identifier + '_stacked">';
        newHTML += '    </div>';
        newHTML += '    <div class="layer layer1 hidden">';
        newHTML += '        <div class="feedforward_icon shortcut">ENTER</div>';
        newHTML += '        <div class="feedforward_value new_value">' + value + '</div>';
        newHTML += '    </div>';
        newHTML += '</div>';
        this.container = $(newHTML);
        oldElement.replaceWith(this.container);
    },
    setEnabled: function (enabled) {
        this.container.toggleClass("disabled", !enabled);
        this.container.find("input").attr("disabled", !enabled);
    },
    isEnabled: function () {
        return !this.container.hasClass("disabled");
    },
    previewNextEnabled: function (enabled) {
        this.container.find(".layer1").toggleClass("disabled", !enabled);
        this.container.find(".layer1").removeClass("hidden");
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
        this.container.find("input[type=text]").val(value);
    },
    getValue: function () {
        return this.container.find("input[type=text]").val();
    },
    previewNextValue: function (value, timeRatioLeft) {
        this.container.find(".layer1").removeClass("hidden");
        this.container.find(".new_value").text(value);
    },
    removeNextValuePreview: function () {
        this.container.find(".layer1").addClass("hidden");
    },
    previewPreviousValue: function (value, timeRatioLeft) {
        this.container.find(".layer-1").removeClass("hidden");
        this.container.find(".old_value").text(value);
        this.updateTimeLeft(timeRatioLeft);
    },
    removePreviousValuePreview: function () {
        this.container.find(".layer-1").addClass("hidden");
    },
    updateTimeLeft: function (timeRatioLeft) {
        var canvas = this.container.find("canvas")[0]; // Get the htmlelement
        var context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(8, 8, 5, 1.5 * Math.PI, 2.0 * Math.PI * timeRatioLeft - 0.5 * Math.PI);
        context.stroke();
    }
});
//# sourceMappingURL=stacked_textbox.js.map