var Controller = /** @class */ (function () {
    function Controller(container) {
        this.checkpointState = null; // The state in which the interface was before starting Limbo
        this.currentState = null; // The latest state, is always affected by final events (even in Limbo)
        this.container = container;
        this.windows = [];
        this.checkpointState = null;
        this.lastPreviewEvent = null;
        this.currentState = null;
        this.container = container;
        this.historyStack = new HistoryStack();
        this.limboController = new LimboController(this);
        this.init(container);
    }
    /**
     * Copy the template for all enabled look and feels
     *
     * lookAndFeels and lookAndFeelModes are Global variables defined using PHP
     */
    Controller.prototype.init = function (container) {
        var template = container.html();
        container.empty();
        var counter = 0;
        // Create a panel for every look and feel
        for (var lookAndFeelIndex in lookAndFeels) {
            container.append(template);
            var newMainWindow = new MainWindow();
            var lookAndFeelName = lookAndFeels[lookAndFeelIndex];
            var mode = lookAndFeelModes[lookAndFeelIndex];
            var widgetFactory = new WidgetFactory(this.getLookAndFeel(lookAndFeelName, mode));
            var windowContainer = container.find(".look_and_feel:eq(" + counter + ")").addClass(lookAndFeelName);
            newMainWindow.init(windowContainer, this, widgetFactory);
            this.windows.push(newMainWindow);
            counter++;
        }
        this.currentState = new ApplicationState(this.windows[0].getWindowState());
        this.initState(this.currentState);
        this.setApplicationState(this.currentState);
        this.limboController.initWhatIf();
        logger.log("STATE INITIALISED");
    };
    /**
     * Get an instance of the look and feel with the lookAndFeelName
     * @param lookAndFeelName
     * @param mode
     * @returns {*}
     */
    Controller.prototype.getLookAndFeel = function (lookAndFeelName, mode) {
        //if(lookAndFeelName === "default")               return new DefaultLookAndFeel(mode);
        // if(lookAndFeelName === "replica")               return new ReplicaLookAndFeel(mode);
        // if(lookAndFeelName === "replica_feedforward")   return new ReplicaFeedforwardLookAndFeel(mode);
        if (lookAndFeelName === "blue")
            return new BlueLookAndFeel(mode);
        if (lookAndFeelName === "black")
            return new BlackLookAndFeel(mode);
        // if(lookAndFeelName === "stacked")               return new StackedLookAndFeel(mode);
        if (lookAndFeelName === "mixed")
            return new MixedLookAndFeel(mode);
        return null;
    };
    /**
     * Receive events from the window and decide what to do with them
     * @param event
     */
    Controller.prototype.processEvent = function (event) {
        var applicationState = this.currentState;
        switch (event.effect) {
            case Effect.EXECUTE:
                this.executeEvent(event, applicationState);
                break;
            case Effect.START_PREVIEW:
                this.previewEvent(event, applicationState);
                this.lastPreviewEvent = event;
                break;
            case Effect.STOP_PREVIEW:
                this.removePreviewEvent();
                break;
            case Effect.START_LIMBO:
                this.startLimbo(event, applicationState);
                break;
            case Effect.CONFIRM_LIMBO_ACTION:
                this.confirmLimboAction(event, applicationState);
                break;
            case Effect.ACKNOWLEDGE:
                this.acknowledge(event, applicationState);
                break;
            default: console.log("Unknown effect in controller " + event.effect);
        }
    };
    /**
     * Will execute the given event on the given windowState, and apply it as the next state
     * (CAN BE CALLED DURING LIMBO AS WELL)
     * @param event: execute the event
     * @param applicationState
     */
    Controller.prototype.executeEvent = function (event, applicationState) {
        this.pauseLimbo();
        this.getNextState(event, applicationState);
        this.removeWindowStatePreview();
        this.confirmWindowState(applicationState);
        //this.currentState = applicationState.getCopy();
        this.resumeLimbo(this.currentState.getCopy());
    };
    /**
     * Will execute the application logic and preview the resulting windowState
     * (CAN BE CALLED DURING LIMBO AS WELL)
     * @param event
     * @param applicationState
     */
    Controller.prototype.previewEvent = function (event, applicationState) {
        this.pauseLimbo();
        var newState = this.getNextState(event, applicationState.getCopy());
        this.removeWindowStatePreview();
        this.previewNextWindowState(newState);
        this.resumeLimbo(newState);
    };
    Controller.prototype.removePreviewEvent = function () {
        this.removeWindowStatePreview();
        this.resumeLimbo(this.currentState.getCopy());
    };
    /**
     * Start the limbo
     * The event that should be shown in Limbo
     */
    Controller.prototype.startLimbo = function (event, applicationState) {
        //logger.log("Limbo STARTED");
        this.checkpointState = applicationState.getCopy();
        this.limboController.addToSimulation(event);
        var newState = this.limboController.simulateLimbo(this.checkpointState.getCopy());
        this.previewNextWindowState(newState);
    };
    /** CANNOT BE CALLED BY THE VIEW
     * Stop previewing the results of the limboEvent
     */
    Controller.prototype.pauseLimbo = function () {
        if (!this.limboController.isInLimbo())
            return;
        logger.log("Limbo PAUSED");
        this.removeWindowStatePreview();
    };
    /** CANNOT BE CALLED BY THE VIEW
     * Start previewing the results of the limboEvent
     * @pre assumes this.limboEvent is still set
     */
    Controller.prototype.resumeLimbo = function (fromState) {
        if (!this.limboController.isInLimbo())
            return;
        logger.log("Limbo RESUMED");
        this.limboController.simulateLimbo(fromState);
        this.removeWindowStatePreview();
        this.previewNextWindowState(fromState);
    };
    Controller.prototype.confirmLimboAction = function (event, applicationState) {
        this.limboController.confirmLimboAction(event.identifier);
        this.resumeLimbo(this.currentState.getCopy());
    };
    Controller.prototype.previewCancelLimbo = function () {
        this.pauseLimbo();
    };
    Controller.prototype.removeCancelLimboPreview = function () {
        this.resumeLimbo(this.currentState.getCopy());
    };
    /**
     * @post Will reset the limboEvent to NULL
     */
    Controller.prototype.cancelLimbo = function () {
        logger.log("Limbo CANCELLED");
        this.limboController.clearLimbo();
        this.removeWindowStatePreview();
        this.setApplicationState(this.currentState);
    };
    Controller.prototype.previewRevertLimbo = function () {
        this.removeWindowStatePreview();
        this.setApplicationState(this.checkpointState);
    };
    Controller.prototype.removeRevertLimboPreview = function () {
        this.setApplicationState(this.currentState);
        this.resumeLimbo(this.currentState.getCopy());
    };
    /*  previewAcceptLimbo(previewState: ApplicationState) {
          let previewState = this.currentState.getCopy();
  
          this.limboController.simulateLimbo(previewState);
          this.removeWindowStatePreview();
          this.setApplicationState(previewState);
      } */
    Controller.prototype.removeAcceptLimboPreview = function () {
        this.setApplicationState(this.currentState);
        this.resumeLimbo(this.currentState.getCopy());
    };
    /**
     * @post Will reset the limboEvent to NULL
     */
    Controller.prototype.acceptLimbo = function () {
        logger.log("Limbo ACCEPTED");
        this.removeWindowStatePreview();
        this.limboController.simulateLimbo(this.currentState);
        this.setApplicationState(this.currentState);
        this.limboController.clearLimbo();
    };
    /**
     * Acknowledge the change of a widget
     * @param event
     * @param applicationState
     */
    Controller.prototype.acknowledge = function (event, applicationState) {
        //  windowState.getWidgetState(event.identifier).setAcknowledged(true);
        // this.setApplicationState(windowState);
        //  this.currentState = windowState.getCopy();
    };
    /**
     * Execute all logic based on an event (both UI and application logic)
     * @param event the event that occurred
     * @param currentState
     */
    Controller.prototype.getNextState = function (event, currentState) {
        // Widget logic (radio buttons, listBoxes)...
        this.windows[0].handleEvent(event, currentState.getMainWindowState());
        // Application logic
        var action = event.action.replace("a_", "");
        var executionHandlerName = underscoresToCamelCase(event.identifier + "_" + action);
        var previewHandlerName = "preview" + capitalizeFirstLetter(executionHandlerName);
        if (event.effect === Effect.START_PREVIEW || event.effect === Effect.START_LIMBO) {
            if (typeof this[previewHandlerName] !== "undefined") {
                this[previewHandlerName](event, currentState);
            }
            else {
                if (typeof this[executionHandlerName] !== "undefined") {
                    this[executionHandlerName](event, currentState);
                }
                else if (event.handlerRequired) {
                    console.warn("Preview handler '" + previewHandlerName + "' AND Execution handler '" + executionHandlerName + "' undefined");
                }
            }
        }
        else if (event.effect === Effect.EXECUTE) {
            if (typeof this[executionHandlerName] !== "undefined") {
                this[executionHandlerName](event, currentState);
            }
            else if (event.handlerRequired) {
                console.warn("Execution handler '" + executionHandlerName + "' undefined");
            }
        }
        return currentState;
    };
    /**
     * Ask the controller how this event will be possible on widgetIdentifier
     * @param widgetIdentifier
     * @param event
     * @returns {Array}
     */
    // abstract howTo (widgetIdentifier, event);
    Controller.prototype.confirmWindowState = function (newApplicationState) {
        // TODO: Elements that are currently visible should not require acknowledgement
        //  newWindowState.findUnacknowledgedChanges(this.currentState);
        this.setApplicationState(newApplicationState);
    };
    Controller.prototype.setApplicationState = function (newApplicationState) {
        for (var window_1 in this.windows) {
            this.windows[window_1].setWindowState(newApplicationState.getMainWindowState());
        }
    };
    Controller.prototype.previewNextWindowState = function (newApplicationState, timeRatioLeft) {
        //logger.log("preview_next_state;" + JSON.stringify(windowState));
        if (timeRatioLeft === void 0) { timeRatioLeft = -1; }
        for (var window_2 in this.windows) {
            this.windows[window_2].previewWindowState(newApplicationState.getMainWindowState(), timeRatioLeft);
        }
    };
    Controller.prototype.removeWindowStatePreview = function () {
        //logger.log("preview_next_removed");
        for (var window_3 in this.windows) {
            this.windows[window_3].removeWindowStatePreview();
        }
    };
    return Controller;
}());
//# sourceMappingURL=controller.js.map