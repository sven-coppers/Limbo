function StackedButton(oldElement, controller) {
    this.identifier = oldElement.attr("id");
    this.controller = controller;
    this.initHTML(oldElement);
    this.initBehavior();
}
StackedButton;
Button();
StackedButton.prototype.extendPrototype({
    initHTML: function (oldElement) {
        var label = oldElement.text();
        var newHTML = '';
        newHTML += '<div class="button" id="' + this.identifier + '_stacked">';
        newHTML += '    <div class="label">' + label + '</div>';
        newHTML += '    <div class="layer layer1">&nbsp;</div>';
        newHTML += '    <div class="layer layer2 disabled hidden">&nbsp;</div>';
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
        console.log("TODO: implement setVisible() in stacked buttons");
    },
    previewVisible: function (visible) {
    },
    removeNextStatePreview: function () {
        this.container.find(".layer2").addClass("hidden");
    }
});
//# sourceMappingURL=stacked_button.js.map