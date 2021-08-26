function ReplicaFeedforwardTextbox(oldElement, controller) {
    this.identifier = oldElement.attr("id");
    this.controller = controller;
    this.initHTML(oldElement);
    this.initBehavior();
    this.timerDuration = 1; // seconds
    this.timer = new Timer();
    var oThis = this;
    this.timer.addEventListener("secondTenthsUpdated", function (e) { oThis.updateTimeLeft(timerToTime(oThis.timer)); });
    this.timer.addEventListener("targetAchieved", function (e) { oThis.timeout(); });
}
ReplicaFeedforwardTextbox;
Textbox();
ReplicaFeedforwardTextbox.prototype.extendPrototype({
    initHTML: function (oldElement) {
        var value = oldElement.val();
        var newHTML = '';
        newHTML += '<div class="textbox">';
        newHTML += '    <input type="text" value="' + value + '" id="' + this.identifier + '_replica_feedforward">';
        newHTML += '    <div class="feedforward hidden">';
        newHTML += '        <div class="feedforward_item hidden">';
        newHTML += '            <div class="feedforward_icon shortcut">ENTER</div>';
        newHTML += '            <div class="feedforward_value new_value">Fortunettes</div>';
        newHTML += '        </div>';
        newHTML += '        <div class="feedforward_item hidden">';
        newHTML += '            <div class="feedforward_icon"><canvas width="16" height="16"></canvas></div>';
        newHTML += '            <div class="feedforward_value old_value">hidden</div>';
        newHTML += '        </div>';
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
    setVisible: function (visible) {
        console.log("TODO: implement setVisible() in ReplicaTextbox");
    },
    isVisible: function () {
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
        this.container.find("input[type=text]").val(value);
    },
    getValue: function () {
        return this.container.find("input[type=text]").val();
    },
    previewNextValue: function (value, timeRatioLeft) {
        this.container.find(".feedforward").removeClass("hidden");
        this.container.find(".new_value").text(value);
        this.container.find(".new_value").closest(".feedforward_item").removeClass("hidden");
    },
    removeNextValuePreview: function () {
        this.container.find(".feedforward").addClass("hidden");
        this.container.find(".new_value").closest(".feedforward_item").addClass("hidden");
    },
    previewPreviousValue: function (value, timeRatioLeft) {
        this.container.find(".feedforward").removeClass("hidden");
        this.container.find(".old_value").text(value);
        this.container.find(".old_value").closest(".feedforward_item").removeClass("hidden");
        this.updateTimeLeft(timeRatioLeft);
    },
    removePreviousValuePreview: function () {
        this.container.find(".feedforward").addClass("hidden");
        this.container.find(".old_value").closest(".feedforward_item").addClass("hidden");
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
//# sourceMappingURL=replica_feedforward_textbox.js.map