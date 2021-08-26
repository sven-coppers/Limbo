var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BlackTab = /** @class */ (function (_super) {
    __extends(BlackTab, _super);
    function BlackTab(identifier, contents, container, controller, widgetFactory, tabGroup, mode) {
        return _super.call(this, identifier, contents, container, controller, widgetFactory, tabGroup, mode) || this;
    }
    BlackTab.prototype.initHTML = function (container) {
        this.identifier = container.attr("id");
        var name = container.find(".tab_header").html();
        var content = container.find(".tab_content").html();
        var tabHeader = '<div class="tab_header" id="' + this.identifier + '_header_black">' + name + ' <div class="tab_changes hidden" id="' + this.identifier + '_changes">10</div><div class="tab_changes acknowledgements hidden" id="' + this.identifier + '_acknowledgements">10</div></div>';
        var tabContent = "";
        tabContent += '<div class="tab_changes_above hidden" id="' + this.identifier + '_changes_above">10</div>';
        tabContent += '<div class="tab_content" id="' + this.identifier + '_content_black">';
        tabContent += content;
        tabContent += '     <div style="clear: both;"></div>';
        tabContent += '</div>';
        tabContent += '<div class="tab_changes_below hidden" id="' + this.identifier + '_changes_below">&nbsp;</div>';
        tabContent += '<div class="tab_changes_locations hidden" id="' + this.identifier + '_changes_locations"></div>';
        this.tabGroup.getTabHeaderContainer().append(tabHeader);
        this.tabGroup.getTabContentContainer().append(tabContent);
        container.remove();
        this.headerContainer = $('#' + this.identifier + '_header_black');
        this.contentContainer = $('#' + this.identifier + '_content_black');
    };
    BlackTab.prototype.initMinimap = function () {
        for (var childIdentifier in this.children) {
            var minimap = $('#' + this.identifier + '_changes_locations');
            this.children[childIdentifier].addLocationToMiniMap(minimap, this.contentContainer);
        }
    };
    /**
     * To be called after replacing the HTML and setting this.container
     * Overridden since only the header container is relevant
     */
    BlackTab.prototype.initBehavior = function () {
        var oThis = this;
        this.headerContainer.click(function () {
            if (oThis.isEnabled()) {
                oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.SELECTED, Effect.EXECUTE));
                //oThis.headerContainer.trigger('mouseenter'); // Update feedforward
            }
        });
        this.headerContainer.hover(function () {
            if (oThis.isEnabled()) {
                oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.SELECTED, Effect.START_PREVIEW));
            }
        }, function () {
            if (oThis.isEnabled()) {
                oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.SELECTED, Effect.STOP_PREVIEW));
            }
        });
        this.contentContainer.scroll(function () {
            if (oThis.isEnabled()) {
                oThis.controller.processEvent(new GUIEvent(oThis.identifier, Action.SCROLLED, Effect.EXECUTE));
            }
        });
    };
    BlackTab.prototype.setVisible = function (visible) {
        console.log("TODO: implement setVisible() in all buttons");
    };
    BlackTab.prototype.previewVisible = function (visible) {
        console.log("TODO: implement previewVisible() in all buttons");
    };
    BlackTab.prototype.setSelected = function (selected) {
        this.headerContainer.toggleClass("selected", selected);
        this.contentContainer.toggle(selected);
    };
    BlackTab.prototype.isSelected = function () {
        return this.headerContainer.hasClass("selected");
    };
    BlackTab.prototype.previewSelected = function (selected) {
        if (this.headerContainer.hasClass("selected") && !selected) {
            this.headerContainer.addClass("feedforward_deselected");
        }
        else if (!(this.headerContainer.hasClass("selected")) && selected) {
            this.headerContainer.addClass("feedforward_selected");
        }
    };
    BlackTab.prototype.removePreviewSelected = function () {
        this.headerContainer.removeClass("feedforward_enabled feedforward_disabled");
        this.headerContainer.removeClass("feedforward_selected feedforward_deselected");
    };
    BlackTab.prototype.previewChildrenStates = function (newTabState, timeRatioLeft) {
        _super.prototype.previewChildrenStates.call(this, newTabState, timeRatioLeft);
        var numChanges = this.getNumChanges(newTabState);
        if (numChanges > 0) {
            $('#' + this.identifier + '_changes').removeClass("hidden").text(numChanges);
        }
        if (this.isSelected()) {
            $('#' + this.identifier + '_changes_locations').removeClass("hidden");
            var countChildrenBelowViewPort = this.getNumChangesBelowViewPort(this.contentContainer, newTabState);
            var countChildrenAboveViewPort = this.getNumChangesAboveViewPort(this.contentContainer, newTabState);
            if (countChildrenAboveViewPort > 0)
                $('#' + this.identifier + '_changes_above').removeClass("hidden").text('+' + countChildrenAboveViewPort + ' changes above');
            if (countChildrenBelowViewPort > 0)
                $('#' + this.identifier + '_changes_below').removeClass("hidden").text('+' + countChildrenBelowViewPort + ' changes below');
            for (var childIdentifier in this.children) {
                this.children[childIdentifier].updateMiniMap(newTabState.getChildState(childIdentifier));
            }
        }
    };
    BlackTab.prototype.removePreviewChildrenStates = function () {
        _super.prototype.removePreviewChildrenStates.call(this);
        $('#' + this.identifier + '_changes').addClass("hidden");
        $('#' + this.identifier + '_changes_above').addClass("hidden");
        $('#' + this.identifier + '_changes_below').addClass("hidden");
        $('#' + this.identifier + '_changes_locations').addClass("hidden");
    };
    BlackTab.prototype.removeAcknowledgementsRequired = function () {
        $('#' + this.identifier + '_acknowledgements').addClass("hidden");
    };
    BlackTab.prototype.setNumAcknowledgementsRequired = function (numAcknowledgementsRequired) {
        $('#' + this.identifier + '_acknowledgements').removeClass("hidden").text(numAcknowledgementsRequired);
    };
    return BlackTab;
}(Tab));
//# sourceMappingURL=black_tab.js.map