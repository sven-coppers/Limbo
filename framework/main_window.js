/**
 * One instance for every [use case + lookAndFeel] combination
 * @constructor
 */
var MainWindow = /** @class */ (function () {
    function MainWindow() {
    }
    /**
     * Replace all UI elements
     * @param container
     * @param controller
     */
    MainWindow.prototype.init = function (container, controller, widgetFactory) {
        this.container = container;
        this.controller = controller;
        this.widgets = widgetFactory.initialiseWidgets(container, this.controller);
    };
    /**
     * Redirect event down to the responsible widget
     * @param event
     * @param windowState
     * @post the windowState will be updated
     */
    MainWindow.prototype.handleEvent = function (event, windowState) {
        for (var widgetName in this.widgets) {
            this.widgets[widgetName].handleEvent(event, windowState);
        }
    };
    MainWindow.prototype.getWidgets = function () {
        return this.widgets;
    };
    MainWindow.prototype.setWindowState = function (windowState) {
        var widgetStates = windowState.getWidgetStates();
        for (var widgetName in widgetStates) {
            this.widgets[widgetName].setState(widgetStates[widgetName]);
        }
    };
    MainWindow.prototype.getWindowState = function () {
        var newWindowState = new MainWindowState();
        for (var widgetName in this.widgets) {
            newWindowState.setWidgetState(widgetName, this.widgets[widgetName].getState());
        }
        return newWindowState;
    };
    MainWindow.prototype.previewWindowState = function (windowState, timeRatioLeft) {
        var widgetStates = windowState.getWidgetStates();
        for (var widgetName in widgetStates) {
            this.widgets[widgetName].previewStateIfNeeded(widgetStates[widgetName], timeRatioLeft);
        }
    };
    MainWindow.prototype.removeWindowStatePreview = function () {
        for (var widget in this.widgets) {
            this.widgets[widget].removePreviewState();
        }
    };
    return MainWindow;
}());
//# sourceMappingURL=main_window.js.map