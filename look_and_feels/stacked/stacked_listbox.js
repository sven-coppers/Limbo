function StackedListbox(oldElement, controller) {
    this.allowMultiple = false;
    this.identifier = oldElement.attr("id");
    this.controller = controller;
    this.initHTML(oldElement);
    this.initBehavior();
}
StackedListbox;
Listbox();
StackedListbox.prototype.extendPrototype({
    initHTML: function (oldElement) {
        this.allowMultiple = oldElement.attr("multiple");
        var oThis = this;
        var counter = 0;
        var newHTML = '';
        newHTML += '<div class="listbox" id="' + this.identifier + '_mixed">';
        //     newHTML += '    <div class="layer layer-1">';
        //    newHTML += '    </div>';
        newHTML += '    <div class="layer layer0">';
        newHTML += '    </div>';
        newHTML += '    <div class="layer layer1 hidden"></div>';
        newHTML += '</div>';
        this.container = $(newHTML);
        oldElement.find("option").each(function () {
            oThis.container.find(".layer1").append('<div class="item">&nbsp;</div>');
            counter++;
        });
        oldElement.replaceWith(this.container);
        this.container.find(".layer0").append(oldElement[0].outerHTML);
        this.container.find(".item").css("height", (100.0 / counter) + "%");
    },
    previewPreviousState: function (textboxState, timeRatioLeft) {
        if (textboxState.enabled != null) {
            this.previewPreviousEnabled(textboxState.enabled);
        }
        if (textboxState.visible != null) {
            this.previewPreviousVisible(textboxState.visible);
        }
        if (textboxState.selection != null) {
            this.previewPreviousSelection(textboxState.selection, timeRatioLeft);
        }
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
    setSelection: function (selection) {
        console.log("TODO: implement setSelection()");
    },
    getSelection: function () {
        console.log("TODO: implement getSelection()");
    },
    previewNextSelection: function (selection, timeRatioLeft) {
        this.container.find(".layer1").removeClass("hidden");
        for (var i = 0; i < selection.length; i++) {
            this.container.find(".item:eq(" + i + ")").toggleClass("feedforward_selected", selection[i]);
        }
    },
    removeNextSelectionPreview: function () {
        this.container.find(".item").removeClass("feedforward_selected");
        this.container.find(".layer1").addClass("hidden");
    },
    previewPreviousSelection: function (selection, timeRatioLeft) {
        console.log("TODO: implement previewPreviousSelection()");
    },
    removePreviousSelectionPreview: function () {
        console.log("TODO: implement removePreviewPreviousSelection()");
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
        console.log("TODO: Implement showStep(stepNumber, event) in stacked_buttons");
    }
    /**
      * This function is called for the guidance feature
      */
    ,
    /**
      * This function is called for the guidance feature
      */
    hideSteps: function () {
        console.log("TODO: Implement hideSteps() in stacked_buttons");
    }
});
//# sourceMappingURL=stacked_listbox.js.map