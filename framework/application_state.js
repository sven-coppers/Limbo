var ApplicationState = /** @class */ (function () {
    function ApplicationState(mainWindowState) {
        this.mainWindowState = mainWindowState;
        this.modelStates = {};
    }
    ApplicationState.prototype.setModel = function (modelName, model) {
        this.modelStates[modelName] = model;
    };
    ApplicationState.prototype.getCopy = function () {
        var result = new ApplicationState(this.mainWindowState.getCopy());
        for (var modelIdentifier in this.modelStates) {
            result.setModel(modelIdentifier, JSON.parse(JSON.stringify(this.modelStates[modelIdentifier])));
        }
        return result;
    };
    ApplicationState.prototype.getMainWindowState = function () {
        return this.mainWindowState;
    };
    ApplicationState.prototype.getModel = function (modelName) {
        return this.modelStates[modelName];
    };
    return ApplicationState;
}());
//# sourceMappingURL=application_state.js.map