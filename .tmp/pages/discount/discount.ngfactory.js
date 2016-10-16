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
import * as import3 from './discount';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '../../providers/LocalData';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from 'ionic-angular/components/toolbar/toolbar';
import * as import13 from 'ionic-angular/components/navbar/navbar';
import * as import14 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import15 from 'ionic-angular/components/content/content';
import * as import16 from 'ionic-angular/components/list/list';
import * as import17 from 'ionic-angular/components/item/item';
import * as import18 from '@angular/core/src/linker/query_list';
import * as import19 from '@angular/common/src/directives/ng_for';
import * as import20 from 'ionic-angular/config/config';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from 'ionic-angular/navigation/view-controller';
import * as import23 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import24 from 'ionic-angular/components/app/app';
import * as import25 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import26 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import27 from 'ionic-angular/util/keyboard';
import * as import28 from '@angular/core/src/zone/ng_zone';
import * as import29 from 'ionic-angular/components/tabs/tabs';
import * as import30 from 'ionic-angular/gestures/gesture-controller';
import * as import31 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import32 from 'ionic-angular/util/form';
import * as import33 from '@angular/core/src/linker/template_ref';
import * as import34 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import35 from 'ionic-angular/components/grid/grid';
import * as import36 from '@angular/core/src/security';
var renderType_DiscountPage_Host = null;
var _View_DiscountPage_Host0 = (function (_super) {
    __extends(_View_DiscountPage_Host0, _super);
    function _View_DiscountPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_DiscountPage_Host0, renderType_DiscountPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_DiscountPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_DiscountPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._DiscountPage_0_4 = new import3.DiscountPage(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.LocalData));
        this._appEl_0.initComponent(this._DiscountPage_0_4, [], compView_0);
        compView_0.create(this._DiscountPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_DiscountPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.DiscountPage) && (0 === requestNodeIndex))) {
            return this._DiscountPage_0_4;
        }
        return notFoundResult;
    };
    return _View_DiscountPage_Host0;
}(import1.AppView));
function viewFactory_DiscountPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_DiscountPage_Host === null)) {
        (renderType_DiscountPage_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_DiscountPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var DiscountPageNgFactory = new import11.ComponentFactory('ng-component', viewFactory_DiscountPage_Host0, import3.DiscountPage);
var styles_DiscountPage = [];
var renderType_DiscountPage = null;
var _View_DiscountPage0 = (function (_super) {
    __extends(_View_DiscountPage0, _super);
    function _View_DiscountPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_DiscountPage0, renderType_DiscountPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_DiscountPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import12.Header(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import22.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_2, 'color', 'laz-purple');
        this.renderer.setElementAttribute(this._el_2, 'style', 'border-bottom:2px solid #F2A900');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import23.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import13.Navbar(this.parentInjector.get(import24.App), this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import25.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import14.ToolbarTitle(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import12.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Discount Program', null);
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
        var compView_9 = import26.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import15.Content(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import24.App), this.parentInjector.get(import27.Keyboard), this.parentInjector.get(import28.NgZone), this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import29.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n    ', null);
        this._el_11 = this.renderer.createElement(null, 'div', null);
        this._text_12 = this.renderer.createText(this._el_11, '\n        ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'img', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'lazsoc_banner');
        this.renderer.setElementAttribute(this._el_13, 'src', 'assets/img/banners/DiscountCard.png');
        this._text_14 = this.renderer.createText(this._el_11, '\n    ', null);
        this._text_15 = this.renderer.createText(null, '\n    ', null);
        this._el_16 = this.renderer.createElement(null, 'ion-list', null);
        this._List_16_3 = new import16.List(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_16), this.renderer, this.parentInjector.get(import30.GestureController));
        this._text_17 = this.renderer.createText(this._el_16, '\n        \n        ', null);
        this._el_18 = this.renderer.createElement(this._el_16, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_18, 'class', 'item item-block');
        this._appEl_18 = new import2.AppElement(18, 16, this, this._el_18);
        var compView_18 = import31.viewFactory_Item0(this.viewUtils, this.injector(18), this._appEl_18);
        this._Item_18_4 = new import17.Item(this.parentInjector.get(import32.Form), this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_18), this.renderer);
        this._ItemContent_18_5 = new import17.ItemContent();
        this._query_Label_18_0 = new import18.QueryList();
        this._query_Button_18_1 = new import18.QueryList();
        this._query_Icon_18_2 = new import18.QueryList();
        this._appEl_18.initComponent(this._Item_18_4, [], compView_18);
        this._el_19 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_19, 'class', 'word-wrap');
        this._text_20 = this.renderer.createText(this._el_19, '\n            The Lazaridis Students\' Society is proud to introduce and present the LazSoc Discount Program presented in partnership with Quick Sandwiches. All students with the official Discount Program sticker attached to the back of their Laurier OneCard are eligible to receive discounts from the partners listed below. For more information please contact the LazSoc VP of Corporate Relations at vpcorporate@lazsoc.ca or ', null);
        this._el_21 = this.renderer.createElement(this._el_19, 'a', null);
        this.renderer.setElementAttribute(this._el_21, 'onclick', 'window.open(\'https://lazsoc.ca/contact-us/\', \'_system\');');
        this.renderer.setElementAttribute(this._el_21, 'style', 'color: #0000EE; text-decoration: underline;');
        this._text_22 = this.renderer.createText(this._el_21, 'click here', null);
        this._text_23 = this.renderer.createText(this._el_19, '.\n        ', null);
        this._query_Label_18_0.reset([]);
        this._Item_18_4.contentLabel = this._query_Label_18_0.first;
        compView_18.create(this._Item_18_4, [
            [],
            [],
            [].concat([this._el_19]),
            [],
            []
        ], null);
        this._text_24 = this.renderer.createText(this._el_16, '\n\n       ', null);
        this._anchor_25 = this.renderer.createTemplateAnchor(this._el_16, null);
        this._appEl_25 = new import2.AppElement(25, 16, this, this._anchor_25);
        this._TemplateRef_25_5 = new import33.TemplateRef_(this._appEl_25, viewFactory_DiscountPage1);
        this._NgFor_25_6 = new import19.NgFor(this._appEl_25.vcRef, this._TemplateRef_25_5, this.parentInjector.get(import34.IterableDiffers), this.ref);
        this._text_26 = this.renderer.createText(this._el_16, '\n    ', null);
        this._text_27 = this.renderer.createText(null, '\n', null);
        compView_9.create(this._Content_9_4, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_15,
                this._el_16,
                this._text_27
            ]),
            []
        ], null);
        this._text_28 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
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
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._text_24,
            this._anchor_25,
            this._text_26,
            this._text_27,
            this._text_28
        ], [], []);
        return null;
    };
    _View_DiscountPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import13.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4;
        }
        if (((token === import12.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3;
        }
        if (((token === import17.Item) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 23)))) {
            return this._Item_18_4;
        }
        if (((token === import17.ItemContent) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 23)))) {
            return this._ItemContent_18_5;
        }
        if (((token === import33.TemplateRef) && (25 === requestNodeIndex))) {
            return this._TemplateRef_25_5;
        }
        if (((token === import19.NgFor) && (25 === requestNodeIndex))) {
            return this._NgFor_25_6;
        }
        if (((token === import16.List) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._List_16_3;
        }
        if (((token === import15.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Content_9_4;
        }
        return notFoundResult;
    };
    _View_DiscountPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        var currVal_0 = 'laz-purple';
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Navbar_2_4.color = currVal_0;
            this._expr_0 = currVal_0;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_9_4.ngOnInit();
        }
        changes = null;
        var currVal_4 = this.context.sponsorsRows;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._NgFor_25_6.ngForOf = currVal_4;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_4, currVal_4);
            this._expr_4 = currVal_4;
        }
        if ((changes !== null)) {
            this._NgFor_25_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_25_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_18_1.dirty) {
                this._query_Button_18_1.reset([]);
                this._Item_18_4._buttons = this._query_Button_18_1;
                this._query_Button_18_1.notifyOnChanges();
            }
            if (this._query_Icon_18_2.dirty) {
                this._query_Icon_18_2.reset([]);
                this._Item_18_4._icons = this._query_Icon_18_2;
                this._query_Icon_18_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_18_4.ngAfterContentInit();
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
        var currVal_3 = this._Content_9_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
        }
    };
    _View_DiscountPage0.prototype.destroyInternal = function () {
        this._Content_9_4.ngOnDestroy();
    };
    return _View_DiscountPage0;
}(import1.AppView));
export function viewFactory_DiscountPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_DiscountPage === null)) {
        (renderType_DiscountPage = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, styles_DiscountPage, {}));
    }
    return new _View_DiscountPage0(viewUtils, parentInjector, declarationEl);
}
var _View_DiscountPage1 = (function (_super) {
    __extends(_View_DiscountPage1, _super);
    function _View_DiscountPage1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_DiscountPage1, renderType_DiscountPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_DiscountPage1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._text_2 = this.renderer.createText(this._el_0, '\n            \n            ', null);
        this._el_3 = this.renderer.createElement(this._el_0, 'ion-row', null);
        this._Row_3_3 = new import35.Row();
        this._text_4 = this.renderer.createText(this._el_3, '\n                ', null);
        this._anchor_5 = this.renderer.createTemplateAnchor(this._el_3, null);
        this._appEl_5 = new import2.AppElement(5, 3, this, this._anchor_5);
        this._TemplateRef_5_5 = new import33.TemplateRef_(this._appEl_5, viewFactory_DiscountPage2);
        this._NgFor_5_6 = new import19.NgFor(this._appEl_5.vcRef, this._TemplateRef_5_5, this.parent.parentInjector.get(import34.IterableDiffers), this.parent.ref);
        this._text_6 = this.renderer.createText(this._el_3, '\n            ', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_8 = this.renderer.createElement(this._el_0, 'ion-row', null);
        this._Row_8_3 = new import35.Row();
        this._text_9 = this.renderer.createText(this._el_8, '\n                ', null);
        this._anchor_10 = this.renderer.createTemplateAnchor(this._el_8, null);
        this._appEl_10 = new import2.AppElement(10, 8, this, this._anchor_10);
        this._TemplateRef_10_5 = new import33.TemplateRef_(this._appEl_10, viewFactory_DiscountPage3);
        this._NgFor_10_6 = new import19.NgFor(this._appEl_10.vcRef, this._TemplateRef_10_5, this.parent.parentInjector.get(import34.IterableDiffers), this.parent.ref);
        this._text_11 = this.renderer.createText(this._el_8, '\n            ', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n            \n        ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._anchor_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._anchor_10,
            this._text_11,
            this._text_12
        ], [], []);
        return null;
    };
    _View_DiscountPage1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import33.TemplateRef) && (5 === requestNodeIndex))) {
            return this._TemplateRef_5_5;
        }
        if (((token === import19.NgFor) && (5 === requestNodeIndex))) {
            return this._NgFor_5_6;
        }
        if (((token === import35.Row) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Row_3_3;
        }
        if (((token === import33.TemplateRef) && (10 === requestNodeIndex))) {
            return this._TemplateRef_10_5;
        }
        if (((token === import19.NgFor) && (10 === requestNodeIndex))) {
            return this._NgFor_10_6;
        }
        if (((token === import35.Row) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._Row_8_3;
        }
        return notFoundResult;
    };
    _View_DiscountPage1.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_0 = this.context.$implicit;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgFor_5_6.ngForOf = currVal_0;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_0, currVal_0);
            this._expr_0 = currVal_0;
        }
        if ((changes !== null)) {
            this._NgFor_5_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_5_6.ngDoCheck();
        }
        changes = null;
        var currVal_1 = this.context.$implicit;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgFor_10_6.ngForOf = currVal_1;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_1, currVal_1);
            this._expr_1 = currVal_1;
        }
        if ((changes !== null)) {
            this._NgFor_10_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_10_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_DiscountPage1;
}(import1.AppView));
function viewFactory_DiscountPage1(viewUtils, parentInjector, declarationEl) {
    return new _View_DiscountPage1(viewUtils, parentInjector, declarationEl);
}
var _View_DiscountPage2 = (function (_super) {
    __extends(_View_DiscountPage2, _super);
    function _View_DiscountPage2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_DiscountPage2, renderType_DiscountPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_DiscountPage2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-col', null);
        this._Col_0_3 = new import35.Col();
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'img', null);
        this._text_3 = this.renderer.createText(this._el_0, '\n                ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ], [], []);
        return null;
    };
    _View_DiscountPage2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import35.Col) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._Col_0_3;
        }
        return notFoundResult;
    };
    _View_DiscountPage2.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '', this.context.$implicit.logo, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'src', this.viewUtils.sanitizer.sanitize(import36.SecurityContext.URL, currVal_0));
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_DiscountPage2;
}(import1.AppView));
function viewFactory_DiscountPage2(viewUtils, parentInjector, declarationEl) {
    return new _View_DiscountPage2(viewUtils, parentInjector, declarationEl);
}
var _View_DiscountPage3 = (function (_super) {
    __extends(_View_DiscountPage3, _super);
    function _View_DiscountPage3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_DiscountPage3, renderType_DiscountPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_DiscountPage3.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-col', null);
        this._Col_0_3 = new import35.Col();
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_DiscountPage3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import35.Col) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._Col_0_3;
        }
        return notFoundResult;
    };
    _View_DiscountPage3.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '\n                    ', this.context.$implicit.discount, '\n                ');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_1, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_DiscountPage3;
}(import1.AppView));
function viewFactory_DiscountPage3(viewUtils, parentInjector, declarationEl) {
    return new _View_DiscountPage3(viewUtils, parentInjector, declarationEl);
}
