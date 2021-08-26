var StateMachineState = /** @class */ (function () {
    function StateMachineState(applicationStateName) {
        this.name = applicationStateName;
        this.windowState = new MainWindowState();
    }
    StateMachineState.prototype.getWindowState = function () {
        return this.windowState;
    };
    return StateMachineState;
}());
//# sourceMappingURL=state_machine_state.js.map