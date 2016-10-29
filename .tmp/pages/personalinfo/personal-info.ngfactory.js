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
import * as import3 from './personal-info';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/navigation/nav-params';
import * as import10 from 'ionic-angular/components/modal/modal';
import * as import11 from '../../providers/LocalData';
import * as import12 from '../../providers/LocalStorage';
import * as import13 from '@angular/core/src/metadata/view';
import * as import14 from '@angular/core/src/linker/component_factory';
import * as import15 from '@angular/common/src/directives/ng_if';
import * as import16 from 'ionic-angular/components/button/button';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import19 from 'ionic-angular/config/config';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from 'ionic-angular/components/item/item';
import * as import22 from '@angular/core/src/linker/query_list';
import * as import23 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import24 from 'ionic-angular/util/form';
import * as import25 from 'ionic-angular/components/list/list';
import * as import26 from 'ionic-angular/components/icon/icon';
import * as import27 from 'ionic-angular/gestures/gesture-controller';
var renderType_PersonalInfo_Host = null;
var _View_PersonalInfo_Host0 = (function (_super) {
    __extends(_View_PersonalInfo_Host0, _super);
    function _View_PersonalInfo_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PersonalInfo_Host0, renderType_PersonalInfo_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_PersonalInfo_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('personal-info', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_PersonalInfo0(this.viewUtils, this.injector(0), this._appEl_0);
        this._PersonalInfo_0_4 = new import3.PersonalInfo(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.NavParams), this.parentInjector.get(import10.ModalController), this.parentInjector.get(import11.LocalData), this.parentInjector.get(import12.LocalStorage));
        this._appEl_0.initComponent(this._PersonalInfo_0_4, [], compView_0);
        compView_0.create(this._PersonalInfo_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_PersonalInfo_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.PersonalInfo) && (0 === requestNodeIndex))) {
            return this._PersonalInfo_0_4;
        }
        return notFoundResult;
    };
    return _View_PersonalInfo_Host0;
}(import1.AppView));
function viewFactory_PersonalInfo_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_PersonalInfo_Host === null)) {
        (renderType_PersonalInfo_Host = viewUtils.createRenderComponentType('', 0, import13.ViewEncapsulation.None, [], {}));
    }
    return new _View_PersonalInfo_Host0(viewUtils, parentInjector, declarationEl);
}
export var PersonalInfoNgFactory = new import14.ComponentFactory('personal-info', viewFactory_PersonalInfo_Host0, import3.PersonalInfo);
var styles_PersonalInfo = [];
var renderType_PersonalInfo = null;
var _View_PersonalInfo0 = (function (_super) {
    __extends(_View_PersonalInfo0, _super);
    function _View_PersonalInfo0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PersonalInfo0, renderType_PersonalInfo, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_PersonalInfo0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'img', null);
        this.renderer.setElementAttribute(this._el_0, 'src', 'assets/img/LazSoc.png');
        this.renderer.setElementAttribute(this._el_0, 'style', 'width: 40%; margin-left: auto; margin-right: auto; display: block;');
        this._text_1 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_2 = new import2.AppElement(2, null, this, this._anchor_2);
        this._TemplateRef_2_5 = new import17.TemplateRef_(this._appEl_2, viewFactory_PersonalInfo1);
        this._NgIf_2_6 = new import15.NgIf(this._appEl_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._appEl_4 = new import2.AppElement(4, null, this, this._anchor_4);
        this._TemplateRef_4_5 = new import17.TemplateRef_(this._appEl_4, viewFactory_PersonalInfo2);
        this._NgIf_4_6 = new import15.NgIf(this._appEl_4.vcRef, this._TemplateRef_4_5);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_6 = this.renderer.createElement(parentRenderNode, 'button', null);
        this.renderer.setElementAttribute(this._el_6, 'block', '');
        this.renderer.setElementAttribute(this._el_6, 'ion-button', '');
        this._appEl_6 = new import2.AppElement(6, null, this, this._el_6);
        var compView_6 = import18.viewFactory_Button0(this.viewUtils, this.injector(6), this._appEl_6);
        this._Button_6_4 = new import16.Button(null, '', this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_6), this.renderer);
        this._appEl_6.initComponent(this._Button_6_4, [], compView_6);
        this._text_7 = this.renderer.createText(null, 'Edit Personal Information', null);
        compView_6.create(this._Button_6_4, [[].concat([this._text_7])], null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_6, 'click', this.eventHandler(this._handle_click_6_0.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8
        ], [disposable_0], []);
        return null;
    };
    _View_PersonalInfo0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import15.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6;
        }
        if (((token === import17.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import15.NgIf) && (4 === requestNodeIndex))) {
            return this._NgIf_4_6;
        }
        if (((token === import16.Button) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Button_6_4;
        }
        return notFoundResult;
    };
    _View_PersonalInfo0.prototype.detectChangesInternal = function (throwOnChange) {
        var changed = true;
        var currVal_0 = !this.context.hasInfo;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgIf_2_6.ngIf = currVal_0;
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this.context.hasInfo;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgIf_4_6.ngIf = currVal_1;
            this._expr_1 = currVal_1;
        }
        changed = false;
        var currVal_3 = '';
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._Button_6_4.block = currVal_3;
            changed = true;
            this._expr_3 = currVal_3;
        }
        if (changed) {
            this._appEl_6.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Button_6_4.ngAfterContentInit();
            }
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_PersonalInfo0.prototype._handle_click_6_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.openLogin() !== false);
        return (true && pd_0);
    };
    return _View_PersonalInfo0;
}(import1.AppView));
export function viewFactory_PersonalInfo0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_PersonalInfo === null)) {
        (renderType_PersonalInfo = viewUtils.createRenderComponentType('', 0, import13.ViewEncapsulation.None, styles_PersonalInfo, {}));
    }
    return new _View_PersonalInfo0(viewUtils, parentInjector, declarationEl);
}
var _View_PersonalInfo1 = (function (_super) {
    __extends(_View_PersonalInfo1, _super);
    function _View_PersonalInfo1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PersonalInfo1, renderType_PersonalInfo, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_PersonalInfo1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-item-divider', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'item');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import23.viewFactory_Item0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Item_2_4 = new import21.Item(this.parentInjector.get(import24.Form), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_2), this.renderer);
        this._query_Label_2_0 = new import22.QueryList();
        this._query_Button_2_1 = new import22.QueryList();
        this._query_Icon_2_2 = new import22.QueryList();
        this._appEl_2.initComponent(this._Item_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, 'Looks like we don\'t have your info yet. Press below to fix that :)', null);
        this._query_Label_2_0.reset([]);
        this._Item_2_4.contentLabel = this._query_Label_2_0.first;
        compView_2.create(this._Item_2_4, [
            [],
            [],
            [].concat([this._text_3]),
            [],
            []
        ], null);
        this._text_4 = this.renderer.createText(this._el_0, '\n', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ], [], []);
        return null;
    };
    _View_PersonalInfo1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import21.Item) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._Item_2_4;
        }
        return notFoundResult;
    };
    _View_PersonalInfo1.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_2_1.dirty) {
                this._query_Button_2_1.reset([]);
                this._Item_2_4._buttons = this._query_Button_2_1;
                this._query_Button_2_1.notifyOnChanges();
            }
            if (this._query_Icon_2_2.dirty) {
                this._query_Icon_2_2.reset([]);
                this._Item_2_4._icons = this._query_Icon_2_2;
                this._query_Icon_2_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_2_4.ngAfterContentInit();
            }
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_PersonalInfo1;
}(import1.AppView));
function viewFactory_PersonalInfo1(viewUtils, parentInjector, declarationEl) {
    return new _View_PersonalInfo1(viewUtils, parentInjector, declarationEl);
}
var _View_PersonalInfo2 = (function (_super) {
    __extends(_View_PersonalInfo2, _super);
    function _View_PersonalInfo2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_PersonalInfo2, renderType_PersonalInfo, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_PersonalInfo2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-list', null);
        this._List_2_3 = new import25.List(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_2), this.renderer, this.parentInjector.get(import27.GestureController));
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'item item-block');
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import23.viewFactory_Item0(this.viewUtils, this.injector(4), this._appEl_4);
        this._Item_4_4 = new import21.Item(this.parentInjector.get(import24.Form), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_4), this.renderer);
        this._ItemContent_4_5 = new import21.ItemContent();
        this._query_Label_4_0 = new import22.QueryList();
        this._query_Button_4_1 = new import22.QueryList();
        this._query_Icon_4_2 = new import22.QueryList();
        this._appEl_4.initComponent(this._Item_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n            ', null);
        this._el_6 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_6, 'item-left', '');
        this.renderer.setElementAttribute(this._el_6, 'name', 'contact');
        this.renderer.setElementAttribute(this._el_6, 'role', 'img');
        this._Icon_6_3 = new import26.Icon(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_6), this.renderer);
        this._text_7 = this.renderer.createText(null, '', null);
        this._query_Label_4_0.reset([]);
        this._Item_4_4.contentLabel = this._query_Label_4_0.first;
        compView_4.create(this._Item_4_4, [
            [].concat([this._el_6]),
            [],
            [].concat([
                this._text_5,
                this._text_7
            ]),
            [],
            []
        ], null);
        this._text_8 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_9 = this.renderer.createElement(this._el_2, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_9, 'class', 'item item-block');
        this._appEl_9 = new import2.AppElement(9, 2, this, this._el_9);
        var compView_9 = import23.viewFactory_Item0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Item_9_4 = new import21.Item(this.parentInjector.get(import24.Form), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_9), this.renderer);
        this._ItemContent_9_5 = new import21.ItemContent();
        this._query_Label_9_0 = new import22.QueryList();
        this._query_Button_9_1 = new import22.QueryList();
        this._query_Icon_9_2 = new import22.QueryList();
        this._appEl_9.initComponent(this._Item_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n            ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_11, 'item-left', '');
        this.renderer.setElementAttribute(this._el_11, 'name', 'ios-mail');
        this.renderer.setElementAttribute(this._el_11, 'role', 'img');
        this._Icon_11_3 = new import26.Icon(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_11), this.renderer);
        this._text_12 = this.renderer.createText(null, '', null);
        this._query_Label_9_0.reset([]);
        this._Item_9_4.contentLabel = this._query_Label_9_0.first;
        compView_9.create(this._Item_9_4, [
            [].concat([this._el_11]),
            [],
            [].concat([
                this._text_10,
                this._text_12
            ]),
            [],
            []
        ], null);
        this._text_13 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_14 = this.renderer.createElement(this._el_2, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_14, 'class', 'item item-block');
        this._appEl_14 = new import2.AppElement(14, 2, this, this._el_14);
        var compView_14 = import23.viewFactory_Item0(this.viewUtils, this.injector(14), this._appEl_14);
        this._Item_14_4 = new import21.Item(this.parentInjector.get(import24.Form), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_14), this.renderer);
        this._ItemContent_14_5 = new import21.ItemContent();
        this._query_Label_14_0 = new import22.QueryList();
        this._query_Button_14_1 = new import22.QueryList();
        this._query_Icon_14_2 = new import22.QueryList();
        this._appEl_14.initComponent(this._Item_14_4, [], compView_14);
        this._text_15 = this.renderer.createText(null, '\n            ', null);
        this._el_16 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_16, 'item-left', '');
        this.renderer.setElementAttribute(this._el_16, 'name', 'md-school');
        this.renderer.setElementAttribute(this._el_16, 'role', 'img');
        this._Icon_16_3 = new import26.Icon(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_16), this.renderer);
        this._text_17 = this.renderer.createText(null, '', null);
        this._query_Label_14_0.reset([]);
        this._Item_14_4.contentLabel = this._query_Label_14_0.first;
        compView_14.create(this._Item_14_4, [
            [].concat([this._el_16]),
            [],
            [].concat([
                this._text_15,
                this._text_17
            ]),
            [],
            []
        ], null);
        this._text_18 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_19 = this.renderer.createText(this._el_0, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._text_19
        ], [], []);
        return null;
    };
    _View_PersonalInfo2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import26.Icon) && (6 === requestNodeIndex))) {
            return this._Icon_6_3;
        }
        if (((token === import21.Item) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Item_4_4;
        }
        if (((token === import21.ItemContent) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._ItemContent_4_5;
        }
        if (((token === import26.Icon) && (11 === requestNodeIndex))) {
            return this._Icon_11_3;
        }
        if (((token === import21.Item) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Item_9_4;
        }
        if (((token === import21.ItemContent) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._ItemContent_9_5;
        }
        if (((token === import26.Icon) && (16 === requestNodeIndex))) {
            return this._Icon_16_3;
        }
        if (((token === import21.Item) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._Item_14_4;
        }
        if (((token === import21.ItemContent) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._ItemContent_14_5;
        }
        if (((token === import25.List) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._List_2_3;
        }
        return notFoundResult;
    };
    _View_PersonalInfo2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = 'contact';
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Icon_6_3.name = currVal_0;
            this._expr_0 = currVal_0;
        }
        var currVal_3 = 'ios-mail';
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._Icon_11_3.name = currVal_3;
            this._expr_3 = currVal_3;
        }
        var currVal_6 = 'md-school';
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this._Icon_16_3.name = currVal_6;
            this._expr_6 = currVal_6;
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_4_1.dirty) {
                this._query_Button_4_1.reset([]);
                this._Item_4_4._buttons = this._query_Button_4_1;
                this._query_Button_4_1.notifyOnChanges();
            }
            if (this._query_Icon_4_2.dirty) {
                this._query_Icon_4_2.reset([this._Icon_6_3]);
                this._Item_4_4._icons = this._query_Icon_4_2;
                this._query_Icon_4_2.notifyOnChanges();
            }
            if (this._query_Button_9_1.dirty) {
                this._query_Button_9_1.reset([]);
                this._Item_9_4._buttons = this._query_Button_9_1;
                this._query_Button_9_1.notifyOnChanges();
            }
            if (this._query_Icon_9_2.dirty) {
                this._query_Icon_9_2.reset([this._Icon_11_3]);
                this._Item_9_4._icons = this._query_Icon_9_2;
                this._query_Icon_9_2.notifyOnChanges();
            }
            if (this._query_Button_14_1.dirty) {
                this._query_Button_14_1.reset([]);
                this._Item_14_4._buttons = this._query_Button_14_1;
                this._query_Button_14_1.notifyOnChanges();
            }
            if (this._query_Icon_14_2.dirty) {
                this._query_Icon_14_2.reset([this._Icon_16_3]);
                this._Item_14_4._icons = this._query_Icon_14_2;
                this._query_Icon_14_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_4_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_9_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_14_4.ngAfterContentInit();
            }
        }
        var currVal_1 = this._Icon_6_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_6, 'hide', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = import4.interpolate(2, '', this.parent.context.userData.personalInfo.firstname, ' ', this.parent.context.userData.personalInfo.lastname, '\n        ');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_7, currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_4 = this._Icon_11_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_11, 'hide', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = import4.interpolate(1, ' ', this.parent.context.userData.personalInfo.email, '\n        ');
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setText(this._text_12, currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_7 = this._Icon_16_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_16, 'hide', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = import4.interpolate(2, '', this.parent.context.userData.personalInfo.program, ', year ', this.parent.context.userData.personalInfo.studyYear, '\n        ');
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setText(this._text_17, currVal_8);
            this._expr_8 = currVal_8;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_PersonalInfo2.prototype.destroyInternal = function () {
        this._Icon_6_3.ngOnDestroy();
        this._Icon_11_3.ngOnDestroy();
        this._Icon_16_3.ngOnDestroy();
    };
    return _View_PersonalInfo2;
}(import1.AppView));
function viewFactory_PersonalInfo2(viewUtils, parentInjector, declarationEl) {
    return new _View_PersonalInfo2(viewUtils, parentInjector, declarationEl);
}
