/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './tabs';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from 'ionic-angular/components/tabs/tabs';
import * as import11 from 'ionic-angular/components/tabs/tab';
import * as import12 from '../../node_modules/ionic-angular/components/tabs/tabs.ngfactory';
import * as import13 from 'ionic-angular/navigation/nav-controller';
import * as import14 from 'ionic-angular/navigation/view-controller';
import * as import15 from 'ionic-angular/components/app/app';
import * as import16 from 'ionic-angular/config/config';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from 'ionic-angular/platform/platform';
import * as import19 from 'ionic-angular/navigation/deep-linker';
import * as import20 from '../../node_modules/ionic-angular/components/tabs/tab.ngfactory';
import * as import21 from 'ionic-angular/util/keyboard';
import * as import22 from '@angular/core/src/zone/ng_zone';
import * as import23 from '@angular/core/src/linker/component_factory_resolver';
import * as import24 from 'ionic-angular/gestures/gesture-controller';
import * as import25 from 'ionic-angular/transitions/transition-controller';
var renderType_TabsPage_Host:import0.RenderComponentType = (null as any);
class _View_TabsPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _TabsPage_0_4:import3.TabsPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_TabsPage_Host0,renderType_TabsPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_TabsPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._TabsPage_0_4 = new import3.TabsPage();
    this._appEl_0.initComponent(this._TabsPage_0_4,[],compView_0);
    compView_0.create(this._TabsPage_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.TabsPage) && (0 === requestNodeIndex))) { return this._TabsPage_0_4; }
    return notFoundResult;
  }
}
function viewFactory_TabsPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_TabsPage_Host === (null as any))) { (renderType_TabsPage_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_TabsPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const TabsPageNgFactory:import9.ComponentFactory<import3.TabsPage> = new import9.ComponentFactory<import3.TabsPage>('ng-component',viewFactory_TabsPage_Host0,import3.TabsPage);
const styles_TabsPage:any[] = [];
var renderType_TabsPage:import0.RenderComponentType = (null as any);
class _View_TabsPage0 extends import1.AppView<import3.TabsPage> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Tabs_0_4:import10.Tabs;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _Tab_2_4:import11.Tab;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _Tab_4_4:import11.Tab;
  _text_5:any;
  _el_6:any;
  /*private*/ _appEl_6:import2.AppElement;
  _Tab_6_4:import11.Tab;
  _text_7:any;
  _el_8:any;
  /*private*/ _appEl_8:import2.AppElement;
  _Tab_8_4:import11.Tab;
  _text_9:any;
  _text_10:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_TabsPage0,renderType_TabsPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-tabs',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','lazsoc_tabs');
    this.renderer.setElementAttribute(this._el_0,'color','laz-purple');
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import12.viewFactory_Tabs0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Tabs_0_4 = new import10.Tabs(this.parentInjector.get(import13.NavController,(null as any)),this.parentInjector.get(import14.ViewController,(null as any)),this.parentInjector.get(import15.App),this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_0),this.parentInjector.get(import18.Platform),this.renderer,this.parentInjector.get(import19.DeepLinker));
    this._appEl_0.initComponent(this._Tabs_0_4,[],compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_2 = this.renderer.createElement((null as any),'ion-tab',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','lazsoc_tab');
    this.renderer.setElementAttribute(this._el_2,'role','tabpanel');
    this.renderer.setElementAttribute(this._el_2,'tabIcon','home');
    this.renderer.setElementAttribute(this._el_2,'tabTitle','Newsfeed');
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import20.viewFactory_Tab0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Tab_2_4 = new import11.Tab(this._Tabs_0_4,this.parentInjector.get(import15.App),this.parentInjector.get(import16.Config),this.parentInjector.get(import21.Keyboard),new import17.ElementRef(this._el_2),this.parentInjector.get(import22.NgZone),this.renderer,this.parentInjector.get(import23.ComponentFactoryResolver),compView_2.ref,this.parentInjector.get(import24.GestureController),this.parentInjector.get(import25.TransitionController),this.parentInjector.get(import19.DeepLinker,(null as any)));
    this._appEl_2.initComponent(this._Tab_2_4,[],compView_2);
    compView_2.create(this._Tab_2_4,[],(null as any));
    this._text_3 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-tab',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','lazsoc_tab');
    this.renderer.setElementAttribute(this._el_4,'role','tabpanel');
    this.renderer.setElementAttribute(this._el_4,'tabIcon','ios-keypad');
    this.renderer.setElementAttribute(this._el_4,'tabTitle','Preferences');
    this._appEl_4 = new import2.AppElement(4,0,this,this._el_4);
    var compView_4:any = import20.viewFactory_Tab0(this.viewUtils,this.injector(4),this._appEl_4);
    this._Tab_4_4 = new import11.Tab(this._Tabs_0_4,this.parentInjector.get(import15.App),this.parentInjector.get(import16.Config),this.parentInjector.get(import21.Keyboard),new import17.ElementRef(this._el_4),this.parentInjector.get(import22.NgZone),this.renderer,this.parentInjector.get(import23.ComponentFactoryResolver),compView_4.ref,this.parentInjector.get(import24.GestureController),this.parentInjector.get(import25.TransitionController),this.parentInjector.get(import19.DeepLinker,(null as any)));
    this._appEl_4.initComponent(this._Tab_4_4,[],compView_4);
    compView_4.create(this._Tab_4_4,[],(null as any));
    this._text_5 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_6 = this.renderer.createElement((null as any),'ion-tab',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','lazsoc_tab');
    this.renderer.setElementAttribute(this._el_6,'role','tabpanel');
    this.renderer.setElementAttribute(this._el_6,'tabIcon','md-person');
    this.renderer.setElementAttribute(this._el_6,'tabTitle','Personal Info');
    this._appEl_6 = new import2.AppElement(6,0,this,this._el_6);
    var compView_6:any = import20.viewFactory_Tab0(this.viewUtils,this.injector(6),this._appEl_6);
    this._Tab_6_4 = new import11.Tab(this._Tabs_0_4,this.parentInjector.get(import15.App),this.parentInjector.get(import16.Config),this.parentInjector.get(import21.Keyboard),new import17.ElementRef(this._el_6),this.parentInjector.get(import22.NgZone),this.renderer,this.parentInjector.get(import23.ComponentFactoryResolver),compView_6.ref,this.parentInjector.get(import24.GestureController),this.parentInjector.get(import25.TransitionController),this.parentInjector.get(import19.DeepLinker,(null as any)));
    this._appEl_6.initComponent(this._Tab_6_4,[],compView_6);
    compView_6.create(this._Tab_6_4,[],(null as any));
    this._text_7 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_8 = this.renderer.createElement((null as any),'ion-tab',(null as any));
    this.renderer.setElementAttribute(this._el_8,'class','lazsoc-tab');
    this.renderer.setElementAttribute(this._el_8,'role','tabpanel');
    this.renderer.setElementAttribute(this._el_8,'tabIcon','md-cash');
    this.renderer.setElementAttribute(this._el_8,'tabTitle','Discount Card');
    this._appEl_8 = new import2.AppElement(8,0,this,this._el_8);
    var compView_8:any = import20.viewFactory_Tab0(this.viewUtils,this.injector(8),this._appEl_8);
    this._Tab_8_4 = new import11.Tab(this._Tabs_0_4,this.parentInjector.get(import15.App),this.parentInjector.get(import16.Config),this.parentInjector.get(import21.Keyboard),new import17.ElementRef(this._el_8),this.parentInjector.get(import22.NgZone),this.renderer,this.parentInjector.get(import23.ComponentFactoryResolver),compView_8.ref,this.parentInjector.get(import24.GestureController),this.parentInjector.get(import25.TransitionController),this.parentInjector.get(import19.DeepLinker,(null as any)));
    this._appEl_8.initComponent(this._Tab_8_4,[],compView_8);
    compView_8.create(this._Tab_8_4,[],(null as any));
    this._text_9 = this.renderer.createText((null as any),'\n',(null as any));
      compView_0.create(this._Tabs_0_4,[[].concat([
        this._text_1,
        this._el_2,
        this._text_3,
        this._el_4,
        this._text_5,
        this._el_6,
        this._text_7,
        this._el_8,
        this._text_9
      ]
    )],(null as any));
    this._text_10 = this.renderer.createText(parentRenderNode,'\n',(null as any));
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
    this._expr_14 = import7.UNINITIALIZED;
    this._expr_15 = import7.UNINITIALIZED;
    this._expr_16 = import7.UNINITIALIZED;
    this._expr_17 = import7.UNINITIALIZED;
    this._expr_18 = import7.UNINITIALIZED;
    this._expr_19 = import7.UNINITIALIZED;
    this._expr_20 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.Tab) && (2 === requestNodeIndex))) { return this._Tab_2_4; }
    if (((token === import11.Tab) && (4 === requestNodeIndex))) { return this._Tab_4_4; }
    if (((token === import11.Tab) && (6 === requestNodeIndex))) { return this._Tab_6_4; }
    if (((token === import11.Tab) && (8 === requestNodeIndex))) { return this._Tab_8_4; }
    if (((token === import10.Tabs) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._Tabs_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = 'laz-purple';
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._Tabs_0_4.color = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this.context.newsfeed;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._Tab_2_4.root = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = 'Newsfeed';
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._Tab_2_4.tabTitle = currVal_2;
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = 'home';
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._Tab_2_4.tabIcon = currVal_3;
      this._expr_3 = currVal_3;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Tab_2_4.ngOnInit(); }
    const currVal_6:any = this.context.clubs;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._Tab_4_4.root = currVal_6;
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = 'Preferences';
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this._Tab_4_4.tabTitle = currVal_7;
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = 'ios-keypad';
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this._Tab_4_4.tabIcon = currVal_8;
      this._expr_8 = currVal_8;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Tab_4_4.ngOnInit(); }
    const currVal_11:any = this.context.login;
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this._Tab_6_4.root = currVal_11;
      this._expr_11 = currVal_11;
    }
    const currVal_12:any = 'Personal Info';
    if (import4.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this._Tab_6_4.tabTitle = currVal_12;
      this._expr_12 = currVal_12;
    }
    const currVal_13:any = 'md-person';
    if (import4.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this._Tab_6_4.tabIcon = currVal_13;
      this._expr_13 = currVal_13;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Tab_6_4.ngOnInit(); }
    const currVal_16:any = this.context.discount;
    if (import4.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this._Tab_8_4.root = currVal_16;
      this._expr_16 = currVal_16;
    }
    const currVal_17:any = 'Discount Card';
    if (import4.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this._Tab_8_4.tabTitle = currVal_17;
      this._expr_17 = currVal_17;
    }
    const currVal_18:any = 'md-cash';
    if (import4.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this._Tab_8_4.tabIcon = currVal_18;
      this._expr_18 = currVal_18;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Tab_8_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_4:any = this._Tab_2_4._tabId;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementAttribute(this._el_2,'id',((currVal_4 == (null as any))? (null as any): currVal_4.toString()));
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this._Tab_2_4._btnId;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementAttribute(this._el_2,'aria-labelledby',((currVal_5 == (null as any))? (null as any): currVal_5.toString()));
      this._expr_5 = currVal_5;
    }
    const currVal_9:any = this._Tab_4_4._tabId;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementAttribute(this._el_4,'id',((currVal_9 == (null as any))? (null as any): currVal_9.toString()));
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = this._Tab_4_4._btnId;
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementAttribute(this._el_4,'aria-labelledby',((currVal_10 == (null as any))? (null as any): currVal_10.toString()));
      this._expr_10 = currVal_10;
    }
    const currVal_14:any = this._Tab_6_4._tabId;
    if (import4.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementAttribute(this._el_6,'id',((currVal_14 == (null as any))? (null as any): currVal_14.toString()));
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = this._Tab_6_4._btnId;
    if (import4.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setElementAttribute(this._el_6,'aria-labelledby',((currVal_15 == (null as any))? (null as any): currVal_15.toString()));
      this._expr_15 = currVal_15;
    }
    const currVal_19:any = this._Tab_8_4._tabId;
    if (import4.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this.renderer.setElementAttribute(this._el_8,'id',((currVal_19 == (null as any))? (null as any): currVal_19.toString()));
      this._expr_19 = currVal_19;
    }
    const currVal_20:any = this._Tab_8_4._btnId;
    if (import4.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setElementAttribute(this._el_8,'aria-labelledby',((currVal_20 == (null as any))? (null as any): currVal_20.toString()));
      this._expr_20 = currVal_20;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Tabs_0_4.ngAfterViewInit(); } }
  }
}
export function viewFactory_TabsPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.TabsPage> {
  if ((renderType_TabsPage === (null as any))) { (renderType_TabsPage = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_TabsPage,{})); }
  return new _View_TabsPage0(viewUtils,parentInjector,declarationEl);
}