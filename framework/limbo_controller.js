var LimboController = /** @class */ (function () {
    function LimboController(controller) {
        this.controller = controller;
        this.simulationQueue = [];
    }
    LimboController.prototype.addToSimulation = function (guiEvent) {
        if (guiEvent instanceof TextBoxEvent && this.simulationQueue[this.simulationQueue.length - 1] instanceof TextBoxEvent) {
            // Override
            this.simulationQueue[this.simulationQueue.length - 1] = guiEvent;
        }
        else {
            this.simulationQueue.push(guiEvent);
        }
        this.updateLimboView();
    };
    LimboController.prototype.clearLimbo = function () {
        this.simulationQueue = [];
        this.updateLimboView();
    };
    LimboController.prototype.initWhatIf = function () {
        $(".use_cases").append('<div class="limbo_buttons"></div>');
    };
    LimboController.prototype.isInLimbo = function () {
        return this.simulationQueue.length > 0;
    };
    LimboController.prototype.simulateLimbo = function (fromState, startIndex, endIndex) {
        if (startIndex === void 0) { startIndex = 0; }
        if (endIndex === void 0) { endIndex = this.simulationQueue.length - 1; }
        var newState = fromState;
        for (var index = startIndex; index <= endIndex; ++index) {
            newState = this.controller.getNextState(this.simulationQueue[index], newState);
        }
        return newState;
    };
    LimboController.prototype.updateLimboView = function () {
        $(".limbo_buttons").empty();
        $(".limbo_buttons").append('<div class="limbo_events"> ');
        for (var i = 0; i < this.simulationQueue.length; ++i) {
            if (i > 0) {
                $(".limbo_events").append(' &#8250; ');
            }
            $(".limbo_events").append(' <div class="limbo_button event">' +
                '<div class="limbo_button event_reject" title="Cancel event" id="cancel_' + i + '">&#10008;</div>' +
                ' ' + this.simulationQueue[i].toString() + ' ' +
                '<div class="limbo_button event_accept" title="Confirm event" id="accept_' + i + '">&#10004;</div>' +
                '</div>');
        }
        this.initWhatIfBehaviour();
    };
    /**
     * Confirm the most recent limbo action for a particular widget
     * @param identifier
     */
    LimboController.prototype.confirmLimboAction = function (identifier) {
        var index = -1;
        for (var i = 0; i < this.simulationQueue.length; ++i) {
            if (this.simulationQueue[i].identifier == identifier) {
                index = i;
            }
        }
        if (index >= 0) {
            this.acceptUntil(index);
        }
    };
    LimboController.prototype.simulateRejectFrom = function (index) {
        for (var i = index; i < this.simulationQueue.length; i++) {
            $("#cancel_" + i).addClass("feedforward");
        }
        var simulatedState = this.simulateLimbo(this.controller.currentState.getCopy(), 0, index - 1);
        this.controller.removeWindowStatePreview();
        this.controller.previewNextWindowState(simulatedState);
    };
    LimboController.prototype.simulateAcceptUntil = function (index) {
        for (var i = 0; i <= index; i++) {
            $("#accept_" + i).addClass("feedforward");
        }
        var executedState = this.simulateLimbo(this.controller.currentState.getCopy(), 0, index);
        this.controller.removeWindowStatePreview();
        this.controller.setApplicationState(executedState);
        var remainderSimulation = this.simulateLimbo(executedState.getCopy(), index + 1);
        this.controller.previewNextWindowState(remainderSimulation);
    };
    LimboController.prototype.acceptUntil = function (index) {
        // Execute the events and remove them from the queue
        console.log("accept " + index);
        for (var i = 0; i <= index; i++) {
            this.simulationQueue[i].effect = Effect.EXECUTE;
            this.controller.processEvent(this.simulationQueue[i]);
        }
        this.simulationQueue.splice(0, index + 1); // remove all elements until here, including ourselves
        this.controller.removePreviewEvent();
        this.updateLimboView();
    };
    LimboController.prototype.rejectFrom = function (index) {
        console.log("reject " + index);
        this.simulationQueue.splice(index); // remove all elements starting from here
        this.controller.removePreviewEvent(); // Update application state
        this.updateLimboView();
    };
    LimboController.prototype.initWhatIfBehaviour = function () {
        var oThis = this;
        $(".event_reject").click(function () {
            var index = parseInt(this.getAttribute("id").replace("cancel_", ""));
            oThis.rejectFrom(index);
        });
        $(".event_accept").click(function () {
            var index = parseInt(this.getAttribute("id").replace("accept_", ""));
            oThis.acceptUntil(index);
        });
        $(".event_reject").hover(function () {
            var index = parseInt(this.getAttribute("id").replace("cancel_", ""));
            oThis.simulateRejectFrom(index);
        }, function () {
            oThis.cancelBreadCrumbFeedforward();
        });
        $(".event_accept").hover(function () {
            var index = parseInt(this.getAttribute("id").replace("accept_", ""));
            oThis.simulateAcceptUntil(index);
        }, function () {
            oThis.cancelBreadCrumbFeedforward();
        });
    };
    LimboController.prototype.cancelBreadCrumbFeedforward = function () {
        $(".event_reject").removeClass("feedforward");
        $(".event_accept").removeClass("feedforward");
        this.controller.removePreviewEvent();
        this.controller.setApplicationState(this.controller.currentState);
        this.controller.resumeLimbo(this.controller.currentState.getCopy());
    };
    return LimboController;
}());
//# sourceMappingURL=limbo_controller.js.map