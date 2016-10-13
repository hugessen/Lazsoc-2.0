/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './event-page';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/navigation/nav-params';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from 'ionic-angular/components/toolbar/toolbar';
import * as import13 from 'ionic-angular/components/navbar/navbar';
import * as import14 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import15 from 'ionic-angular/components/content/content';
import * as import16 from 'ionic-angular/components/card/card';
import * as import17 from 'ionic-angular/components/list/list';
import * as import18 from 'ionic-angular/components/item/item';
import * as import19 from '@angular/core/src/linker/query_list';
import * as import20 from 'ionic-angular/components/icon/icon';
import * as import21 from 'ionic-angular/components/fab/fab';
import * as import22 from 'ionic-angular/config/config';
import * as import23 from '@angular/core/src/linker/element_ref';
import * as import24 from 'ionic-angular/navigation/view-controller';
import * as import25 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import26 from 'ionic-angular/components/app/app';
import * as import27 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import28 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import29 from 'ionic-angular/util/keyboard';
import * as import30 from '@angular/core/src/zone/ng_zone';
import * as import31 from 'ionic-angular/components/tabs/tabs';
import * as import32 from 'ionic-angular/gestures/gesture-controller';
import * as import33 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import34 from 'ionic-angular/util/form';
import * as import35 from '../../node_modules/ionic-angular/components/fab/fab.ngfactory';
import * as import36 from '@angular/core/src/security';
var renderType_EventPage_Host = null;
var _View_EventPage_Host0 = (function (_super) {
    __extends(_View_EventPage_Host0, _super);
    function _View_EventPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_EventPage_Host0, renderType_EventPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_EventPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_EventPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._EventPage_0_4 = new import3.EventPage(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.NavParams));
        this._appEl_0.initComponent(this._EventPage_0_4, [], compView_0);
        compView_0.create(this._EventPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_EventPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.EventPage) && (0 === requestNodeIndex))) {
            return this._EventPage_0_4;
        }
        return notFoundResult;
    };
    return _View_EventPage_Host0;
}(import1.AppView));
function viewFactory_EventPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_EventPage_Host === null)) {
        (renderType_EventPage_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_EventPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var EventPageNgFactory = new import11.ComponentFactory('ng-component', viewFactory_EventPage_Host0, import3.EventPage);
var styles_EventPage = [];
var renderType_EventPage = null;
var _View_EventPage0 = (function (_super) {
    __extends(_View_EventPage0, _super);
    function _View_EventPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_EventPage0, renderType_EventPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_EventPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import12.Header(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import24.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_2, 'color', 'laz-purple');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import25.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import13.Navbar(this.parentInjector.get(import26.App), this.parentInjector.get(import24.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import27.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import14.ToolbarTitle(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import12.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, '', null);
        compView_4.create(this._ToolbarTitle_4_4, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4, [
            [],
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6
            ])
        ], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import28.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import15.Content(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import26.App), this.parentInjector.get(import29.Keyboard), this.parentInjector.get(import30.NgZone), this.parentInjector.get(import24.ViewController, null), this.parentInjector.get(import31.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n    ', null);
        this._el_11 = this.renderer.createElement(null, 'img', null);
        this._text_12 = this.renderer.createText(null, '\n    ', null);
        this._el_13 = this.renderer.createElement(null, 'ion-card', null);
        this._Card_13_3 = new import16.Card(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_13), this.renderer);
        this._text_14 = this.renderer.createText(this._el_13, '\n        ', null);
        this._el_15 = this.renderer.createElement(this._el_13, 'ion-list', null);
        this._List_15_3 = new import17.List(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_15), this.renderer, this.parentInjector.get(import32.GestureController));
        this._text_16 = this.renderer.createText(this._el_15, '\n            ', null);
        this._el_17 = this.renderer.createElement(this._el_15, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_17, 'class', 'item item-block');
        this._appEl_17 = new import2.AppElement(17, 15, this, this._el_17);
        var compView_17 = import33.viewFactory_Item0(this.viewUtils, this.injector(17), this._appEl_17);
        this._Item_17_4 = new import18.Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_17), this.renderer);
        this._ItemContent_17_5 = new import18.ItemContent();
        this._query_Label_17_0 = new import19.QueryList();
        this._query_Button_17_1 = new import19.QueryList();
        this._query_Icon_17_2 = new import19.QueryList();
        this._appEl_17.initComponent(this._Item_17_4, [], compView_17);
        this._text_18 = this.renderer.createText(null, '\n                ', null);
        this._el_19 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_19, 'name', 'md-time');
        this.renderer.setElementAttribute(this._el_19, 'role', 'img');
        this._Icon_19_3 = new import20.Icon(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_19), this.renderer);
        this._text_20 = this.renderer.createText(null, '', null);
        this._query_Label_17_0.reset([]);
        this._Item_17_4.contentLabel = this._query_Label_17_0.first;
        compView_17.create(this._Item_17_4, [
            [],
            [],
            [].concat([
                this._text_18,
                this._el_19,
                this._text_20
            ]),
            [],
            []
        ], null);
        this._text_21 = this.renderer.createText(this._el_15, '\n            ', null);
        this._el_22 = this.renderer.createElement(this._el_15, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_22, 'class', 'item item-block');
        this._appEl_22 = new import2.AppElement(22, 15, this, this._el_22);
        var compView_22 = import33.viewFactory_Item0(this.viewUtils, this.injector(22), this._appEl_22);
        this._Item_22_4 = new import18.Item(this.parentInjector.get(import34.Form), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_22), this.renderer);
        this._ItemContent_22_5 = new import18.ItemContent();
        this._query_Label_22_0 = new import19.QueryList();
        this._query_Button_22_1 = new import19.QueryList();
        this._query_Icon_22_2 = new import19.QueryList();
        this._appEl_22.initComponent(this._Item_22_4, [], compView_22);
        this._text_23 = this.renderer.createText(null, '\n                ', null);
        this._el_24 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_24, 'name', 'md-pin');
        this.renderer.setElementAttribute(this._el_24, 'role', 'img');
        this._Icon_24_3 = new import20.Icon(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_24), this.renderer);
        this._text_25 = this.renderer.createText(null, '', null);
        this._query_Label_22_0.reset([]);
        this._Item_22_4.contentLabel = this._query_Label_22_0.first;
        compView_22.create(this._Item_22_4, [
            [],
            [],
            [].concat([
                this._text_23,
                this._el_24,
                this._text_25
            ]),
            [],
            []
        ], null);
        this._text_26 = this.renderer.createText(this._el_15, '\n        ', null);
        this._text_27 = this.renderer.createText(this._el_13, '\n    ', null);
        this._text_28 = this.renderer.createText(null, '\n    ', null);
        this._el_29 = this.renderer.createElement(null, 'ion-card', null);
        this._Card_29_3 = new import16.Card(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_29), this.renderer);
        this._text_30 = this.renderer.createText(this._el_29, '\n        ', null);
        this._el_31 = this.renderer.createElement(this._el_29, 'ion-card-header', null);
        this._CardHeader_31_3 = new import16.CardHeader();
        this._el_32 = this.renderer.createElement(this._el_31, 'b', null);
        this._text_33 = this.renderer.createText(this._el_32, '', null);
        this._text_34 = this.renderer.createText(this._el_29, '\n        ', null);
        this._el_35 = this.renderer.createElement(this._el_29, 'ion-card-content', null);
        this._CardContent_35_3 = new import16.CardContent();
        this._text_36 = this.renderer.createText(this._el_35, '', null);
        this._text_37 = this.renderer.createText(this._el_29, '\n    ', null);
        this._text_38 = this.renderer.createText(null, '\n    ', null);
        this._el_39 = this.renderer.createElement(null, 'ion-fab', null);
        this.renderer.setElementAttribute(this._el_39, 'bottom', '');
        this.renderer.setElementAttribute(this._el_39, 'right', '');
        this._appEl_39 = new import2.AppElement(39, 9, this, this._el_39);
        var compView_39 = import35.viewFactory_FabContainer0(this.viewUtils, this.injector(39), this._appEl_39);
        this._FabContainer_39_4 = new import21.FabContainer(new import23.ElementRef(this._el_39));
        this._query_FabButton_39_0 = new import19.QueryList();
        this._query_FabList_39_1 = new import19.QueryList();
        this._appEl_39.initComponent(this._FabContainer_39_4, [], compView_39);
        this._text_40 = this.renderer.createText(null, '\n        ', null);
        this._el_41 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_41, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_41, 'ion-fab', '');
        this._appEl_41 = new import2.AppElement(41, 39, this, this._el_41);
        var compView_41 = import35.viewFactory_FabButton0(this.viewUtils, this.injector(41), this._appEl_41);
        this._FabButton_41_4 = new import21.FabButton(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_41), this.renderer);
        this._appEl_41.initComponent(this._FabButton_41_4, [], compView_41);
        this._el_42 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_42, 'name', 'md-calendar');
        this.renderer.setElementAttribute(this._el_42, 'role', 'img');
        this._Icon_42_3 = new import20.Icon(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_42), this.renderer);
        compView_41.create(this._FabButton_41_4, [[].concat([this._el_42])], null);
        this._text_43 = this.renderer.createText(null, '\n    ', null);
        this._query_FabButton_39_0.reset([this._FabButton_41_4]);
        this._FabContainer_39_4._mainButton = this._query_FabButton_39_0.first;
        compView_39.create(this._FabContainer_39_4, [[].concat([
                this._text_40,
                this._el_41,
                this._text_43
            ])], null);
        this._text_44 = this.renderer.createText(null, '\n', null);
        compView_9.create(this._Content_9_4, [
            [].concat([this._el_39]),
            [].concat([
                this._text_10,
                this._el_11,
                this._text_12,
                this._el_13,
                this._text_28,
                this._el_29,
                this._text_38,
                this._text_44
            ]),
            []
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_41, 'click', this.eventHandler(this._handle_click_41_0.bind(this)));
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._el_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._text_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._el_41,
            this._el_42,
            this._text_43,
            this._text_44
        ], [disposable_0], []);
        return null;
    };
    _View_EventPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import13.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4;
        }
        if (((token === import12.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3;
        }
        if (((token === import20.Icon) && (19 === requestNodeIndex))) {
            return this._Icon_19_3;
        }
        if (((token === import18.Item) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._Item_17_4;
        }
        if (((token === import18.ItemContent) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._ItemContent_17_5;
        }
        if (((token === import20.Icon) && (24 === requestNodeIndex))) {
            return this._Icon_24_3;
        }
        if (((token === import18.Item) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._Item_22_4;
        }
        if (((token === import18.ItemContent) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._ItemContent_22_5;
        }
        if (((token === import17.List) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._List_15_3;
        }
        if (((token === import16.Card) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Card_13_3;
        }
        if (((token === import16.CardHeader) && ((31 <= requestNodeIndex) && (requestNodeIndex <= 33)))) {
            return this._CardHeader_31_3;
        }
        if (((token === import16.CardContent) && ((35 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._CardContent_35_3;
        }
        if (((token === import16.Card) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 37)))) {
            return this._Card_29_3;
        }
        if (((token === import20.Icon) && (42 === requestNodeIndex))) {
            return this._Icon_42_3;
        }
        if (((token === import21.FabButton) && ((41 <= requestNodeIndex) && (requestNodeIndex <= 42)))) {
            return this._FabButton_41_4;
        }
        if (((token === import21.FabContainer) && ((39 <= requestNodeIndex) && (requestNodeIndex <= 43)))) {
            return this._FabContainer_39_4;
        }
        if (((token === import15.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 44)))) {
            return this._Content_9_4;
        }
        return notFoundResult;
    };
    _View_EventPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changed = true;
        var currVal_0 = 'laz-purple';
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Navbar_2_4.color = currVal_0;
            this._expr_0 = currVal_0;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_9_4.ngOnInit();
        }
        var currVal_6 = 'md-time';
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this._Icon_19_3.name = currVal_6;
            this._expr_6 = currVal_6;
        }
        var currVal_9 = 'md-pin';
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this._Icon_24_3.name = currVal_9;
            this._expr_9 = currVal_9;
        }
        changed = false;
        var currVal_15 = 'secondary';
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this._FabButton_41_4.color = currVal_15;
            changed = true;
            this._expr_15 = currVal_15;
        }
        if (changed) {
            this._appEl_41.componentView.markAsCheckOnce();
        }
        var currVal_16 = 'md-calendar';
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this._Icon_42_3.name = currVal_16;
            this._expr_16 = currVal_16;
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_17_1.dirty) {
                this._query_Button_17_1.reset([]);
                this._Item_17_4._buttons = this._query_Button_17_1;
                this._query_Button_17_1.notifyOnChanges();
            }
            if (this._query_Icon_17_2.dirty) {
                this._query_Icon_17_2.reset([this._Icon_19_3]);
                this._Item_17_4._icons = this._query_Icon_17_2;
                this._query_Icon_17_2.notifyOnChanges();
            }
            if (this._query_Button_22_1.dirty) {
                this._query_Button_22_1.reset([]);
                this._Item_22_4._buttons = this._query_Button_22_1;
                this._query_Button_22_1.notifyOnChanges();
            }
            if (this._query_Icon_22_2.dirty) {
                this._query_Icon_22_2.reset([this._Icon_24_3]);
                this._Item_22_4._icons = this._query_Icon_22_2;
                this._query_Icon_22_2.notifyOnChanges();
            }
            if (this._query_FabList_39_1.dirty) {
                this._query_FabList_39_1.reset([]);
                this._FabContainer_39_4._fabLists = this._query_FabList_39_1;
                this._query_FabList_39_1.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_17_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_22_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._FabContainer_39_4.ngAfterContentInit();
            }
        }
        var currVal_1 = this._Navbar_2_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Navbar_2_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = import4.interpolate(1, '', this.context.event.title, '');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_5, currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this._Content_9_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = import4.interpolate(1, '', this.context.event.banner, '');
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementProperty(this._el_11, 'src', this.viewUtils.sanitizer.sanitize(import36.SecurityContext.URL, currVal_5));
            this._expr_5 = currVal_5;
        }
        var currVal_7 = this._Icon_19_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_19, 'hide', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = import4.interpolate(2, '\n                ', this.context.event.startTime, ' - ', this.context.event.endTime, '\n            ');
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setText(this._text_20, currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_10 = this._Icon_24_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_24, 'hide', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_11 = import4.interpolate(1, '\n                ', this.context.event.location, '\n            ');
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setText(this._text_25, currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_12 = import4.interpolate(1, '', this.context.event.title, '');
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setText(this._text_33, currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_13 = import4.interpolate(1, '', this.context.event.desc, '');
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setText(this._text_36, currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_17 = this._Icon_42_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setElementClass(this._el_42, 'hide', currVal_17);
            this._expr_17 = currVal_17;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
        }
    };
    _View_EventPage0.prototype.destroyInternal = function () {
        this._Icon_19_3.ngOnDestroy();
        this._Icon_24_3.ngOnDestroy();
        this._Icon_42_3.ngOnDestroy();
        this._FabContainer_39_4.ngOnDestroy();
        this._Content_9_4.ngOnDestroy();
    };
    _View_EventPage0.prototype._handle_click_41_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.addToCalendar() !== false);
        return (true && pd_0);
    };
    return _View_EventPage0;
}(import1.AppView));
export function viewFactory_EventPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_EventPage === null)) {
        (renderType_EventPage = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, styles_EventPage, {}));
    }
    return new _View_EventPage0(viewUtils, parentInjector, declarationEl);
}
