function DefaultListbox(oldElement, controller) {
    this.allowMultiple = false;
    this.identifier = oldElement.attr("id");
    this.controller = controller;
    this.initHTML(oldElement);
    this.initBehavior();
}
DefaultListbox;
Listbox();
DefaultListbox.prototype.extendPrototype({
    initHTML: function (oldElement) {
        this.allowMultiple = oldElement.attr("multiple");
        this.container = oldElement;
    },
    previewPreviousState: function (textboxState, timeRatioLeft) {
        // No feedforward
    },
    setEnabled: function (enabled) {
        console.log("TODO: implement setEnabled()");
    },
    isEnabled: function () {
        console.log("TODO: implement isEnabled()");
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
        console.log("TODO: implement setVisible()");
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
    setSelection: function (selection) {
        console.log("TODO: implement setSelection()");
    },
    getSelection: function () {
        console.log("TODO: implement getSelection()");
    },
    previewNextSelection: function (selection, timeRatioLeft) {
        // No feedforward
    },
    removeNextSelectionPreview: function () {
        // No feedforward
    },
    previewPreviousSelection: function (selection, timeRatioLeft) {
        // No feedforward
    },
    removePreviousSelectionPreview: function () {
        // No feedforward
    }
    /**
      * This function is called for the guidance feature, should be stackable (called multiple times in a row)
      * @param stepNumber the order of the step
      * @param event the event that must be completed
      */
    ,
    /**
      * This function is called for the guidance feature, should be stackable (called multiple times in a row)
      * @param stepNumber the order of the step
      * @param event the event that must be completed
      */
    showStep: function (stepNumber, event) {
        // No feedforward
    }
    /**
      * This function is called for the guidance feature
      */
    ,
    /**
      * This function is called for the guidance feature
      */
    hideSteps: function () {
        // No feedforward
    }
});
//# sourceMappingURL=default_listbox.js.map