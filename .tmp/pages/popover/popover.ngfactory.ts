/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './popover';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/view-controller';
import * as import9 from 'ionic-angular/navigation/nav-params';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from 'ionic-angular/components/list/list';
import * as import13 from 'ionic-angular/components/item/item';
import * as import14 from 'ionic-angular/components/list/list-header';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from 'ionic-angular/components/toolbar/toolbar';
import * as import17 from '@angular/forms/src/directives/ng_model';
import * as import18 from '@angular/forms/src/directives/ng_control_status';
import * as import19 from 'ionic-angular/components/segment/segment';
import * as import20 from 'ionic-angular/components/button/button';
import * as import21 from 'ionic-angular/config/config';
import * as import22 from '@angular/core/src/linker/element_ref';
import * as import23 from 'ionic-angular/gestures/gesture-controller';
import * as import24 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import25 from 'ionic-angular/util/form';
import * as import26 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import27 from '../../node_modules/ionic-angular/components/segment/segment.ngfactory';
import * as import28 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import29 from '@angular/forms/src/directives/ng_control';
var renderType_PopoverPage_Host:import0.RenderComponentType = (null as any);
class _View_PopoverPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _PopoverPage_0_4:import3.PopoverPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PopoverPage_Host0,renderType_PopoverPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_PopoverPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._PopoverPage_0_4 = new import3.PopoverPage(this.parentInjector.get(import8.ViewController),this.parentInjector.get(import9.NavParams));
    this._appEl_0.initComponent(this._PopoverPage_0_4,[],compView_0);
    compView_0.create(this._PopoverPage_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.PopoverPage) && (0 === requestNodeIndex))) { return this._PopoverPage_0_4; }
    return notFoundResult;
  }
}
function viewFactory_PopoverPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_PopoverPage_Host === (null as any))) { (renderType_PopoverPage_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,[],{})); }
  return new _View_PopoverPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const PopoverPageNgFactory:import11.ComponentFactory<import3.PopoverPage> = new import11.ComponentFactory<import3.PopoverPage>('ng-component',viewFactory_PopoverPage_Host0,import3.PopoverPage);
const styles_PopoverPage:any[] = [];
var renderType_PopoverPage:import0.RenderComponentType = (null as any);
class _View_PopoverPage0 extends import1.AppView<import3.PopoverPage> {
  _el_0:any;
  _List_0_3:import12.List;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _Item_2_4:import13.Item;
  _ListHeader_2_5:import14.ListHeader;
  _query_Label_2_0:import15.QueryList<any>;
  _query_Button_2_1:import15.QueryList<any>;
  _query_Icon_2_2:import15.QueryList<any>;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  /*private*/ _appEl_5:import2.AppElement;
  _Toolbar_5_4:import16.Toolbar;
  _text_6:any;
  _el_7:any;
  _NgModel_7_3:import17.NgModel;
  _NgControl_7_4:any;
  _NgControlStatus_7_5:import18.NgControlStatus;
  _Segment_7_6:import19.Segment;
  _query_SegmentButton_7_0:import15.QueryList<any>;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _SegmentButton_9_4:import19.SegmentButton;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  /*private*/ _appEl_12:import2.AppElement;
  _SegmentButton_12_4:import19.SegmentButton;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  /*private*/ _appEl_17:import2.AppElement;
  _Item_17_4:import13.Item;
  _ListHeader_17_5:import14.ListHeader;
  _query_Label_17_0:import15.QueryList<any>;
  _query_Button_17_1:import15.QueryList<any>;
  _query_Icon_17_2:import15.QueryList<any>;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  /*private*/ _appEl_20:import2.AppElement;
  _Toolbar_20_4:import16.Toolbar;
  _text_21:any;
  _el_22:any;
  _NgModel_22_3:import17.NgModel;
  _NgControl_22_4:any;
  _NgControlStatus_22_5:import18.NgControlStatus;
  _Segment_22_6:import19.Segment;
  _query_SegmentButton_22_0:import15.QueryList<any>;
  _text_23:any;
  _el_24:any;
  /*private*/ _appEl_24:import2.AppElement;
  _SegmentButton_24_4:import19.SegmentButton;
  _text_25:any;
  _text_26:any;
  _el_27:any;
  /*private*/ _appEl_27:import2.AppElement;
  _SegmentButton_27_4:import19.SegmentButton;
  _text_28:any;
  _text_29:any;
  _el_30:any;
  /*private*/ _appEl_30:import2.AppElement;
  _SegmentButton_30_4:import19.SegmentButton;
  _text_31:any;
  _text_32:any;
  _text_33:any;
  _text_34:any;
  _el_35:any;
  /*private*/ _appEl_35:import2.AppElement;
  _Button_35_4:import20.Button;
  _text_36:any;
  _text_37:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  /*private*/ _expr_21:any;
  /*private*/ _expr_23:any;
  /*private*/ _expr_25:any;
  /*private*/ _expr_27:any;
  /*private*/ _expr_29:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PopoverPage0,renderType_PopoverPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-list',(null as any));
    this._List_0_3 = new import12.List(this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import23.GestureController));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-list-header',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','item');
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import24.viewFactory_Item0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Item_2_4 = new import13.Item(this.parentInjector.get(import25.Form),this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_2),this.renderer);
    this._ListHeader_2_5 = new import14.ListHeader(this.parentInjector.get(import21.Config),this.renderer,new import22.ElementRef(this._el_2),(null as any));
    this._query_Label_2_0 = new import15.QueryList<any>();
    this._query_Button_2_1 = new import15.QueryList<any>();
    this._query_Icon_2_2 = new import15.QueryList<any>();
    this._appEl_2.initComponent(this._Item_2_4,[],compView_2);
    this._text_3 = this.renderer.createText((null as any),'Filter by preferences:',(null as any));
    this._query_Label_2_0.reset([]);
    this._Item_2_4.contentLabel = this._query_Label_2_0.first;
    compView_2.create(this._Item_2_4,[
      [],
      [],
      [].concat([this._text_3]),
      [],
      []
    ]
    ,(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_0,'ion-toolbar',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','toolbar');
    this._appEl_5 = new import2.AppElement(5,0,this,this._el_5);
    var compView_5:any = import26.viewFactory_Toolbar0(this.viewUtils,this.injector(5),this._appEl_5);
    this._Toolbar_5_4 = new import16.Toolbar(this.parentInjector.get(import8.ViewController,(null as any)),this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_5),this.renderer);
    this._appEl_5.initComponent(this._Toolbar_5_4,[],compView_5);
    this._text_6 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_7 = this.renderer.createElement((null as any),'ion-segment',(null as any));
    this._NgModel_7_3 = new import17.NgModel((null as any),(null as any),(null as any),(null as any));
    this._NgControl_7_4 = this._NgModel_7_3;
    this._NgControlStatus_7_5 = new import18.NgControlStatus(this._NgControl_7_4);
    this._Segment_7_6 = new import19.Segment(this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_7),this.renderer,this._NgControl_7_4);
    this._query_SegmentButton_7_0 = new import15.QueryList<any>();
    this._text_8 = this.renderer.createText(this._el_7,'\n            ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_7,'ion-segment-button',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','segment-button');
    this.renderer.setElementAttribute(this._el_9,'role','button');
    this.renderer.setElementAttribute(this._el_9,'tappable','');
    this.renderer.setElementAttribute(this._el_9,'value','custom');
    this._appEl_9 = new import2.AppElement(9,7,this,this._el_9);
    var compView_9:any = import27.viewFactory_SegmentButton0(this.viewUtils,this.injector(9),this._appEl_9);
    this._SegmentButton_9_4 = new import19.SegmentButton(this.renderer,new import22.ElementRef(this._el_9));
    this._appEl_9.initComponent(this._SegmentButton_9_4,[],compView_9);
    this._text_10 = this.renderer.createText((null as any),'Custom',(null as any));
    compView_9.create(this._SegmentButton_9_4,[[].concat([this._text_10])],(null as any));
    this._text_11 = this.renderer.createText(this._el_7,'\n            ',(null as any));
    this._el_12 = this.renderer.createElement(this._el_7,'ion-segment-button',(null as any));
    this.renderer.setElementAttribute(this._el_12,'class','segment-button');
    this.renderer.setElementAttribute(this._el_12,'role','button');
    this.renderer.setElementAttribute(this._el_12,'tappable','');
    this.renderer.setElementAttribute(this._el_12,'value','all');
    this._appEl_12 = new import2.AppElement(12,7,this,this._el_12);
    var compView_12:any = import27.viewFactory_SegmentButton0(this.viewUtils,this.injector(12),this._appEl_12);
    this._SegmentButton_12_4 = new import19.SegmentButton(this.renderer,new import22.ElementRef(this._el_12));
    this._appEl_12.initComponent(this._SegmentButton_12_4,[],compView_12);
    this._text_13 = this.renderer.createText((null as any),'All',(null as any));
    compView_12.create(this._SegmentButton_12_4,[[].concat([this._text_13])],(null as any));
    this._text_14 = this.renderer.createText(this._el_7,'\n        ',(null as any));
    this._text_15 = this.renderer.createText((null as any),'\n    ',(null as any));
    compView_5.create(this._Toolbar_5_4,[
      [],
      [],
      [],
      [].concat([
        this._text_6,
        this._el_7,
        this._text_15
      ]
      )
    ]
    ,(null as any));
    this._text_16 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_17 = this.renderer.createElement(this._el_0,'ion-list-header',(null as any));
    this.renderer.setElementAttribute(this._el_17,'class','item');
    this._appEl_17 = new import2.AppElement(17,0,this,this._el_17);
    var compView_17:any = import24.viewFactory_Item0(this.viewUtils,this.injector(17),this._appEl_17);
    this._Item_17_4 = new import13.Item(this.parentInjector.get(import25.Form),this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_17),this.renderer);
    this._ListHeader_17_5 = new import14.ListHeader(this.parentInjector.get(import21.Config),this.renderer,new import22.ElementRef(this._el_17),(null as any));
    this._query_Label_17_0 = new import15.QueryList<any>();
    this._query_Button_17_1 = new import15.QueryList<any>();
    this._query_Icon_17_2 = new import15.QueryList<any>();
    this._appEl_17.initComponent(this._Item_17_4,[],compView_17);
    this._text_18 = this.renderer.createText((null as any),'Choose timeframe',(null as any));
    this._query_Label_17_0.reset([]);
    this._Item_17_4.contentLabel = this._query_Label_17_0.first;
    compView_17.create(this._Item_17_4,[
      [],
      [],
      [].concat([this._text_18]),
      [],
      []
    ]
    ,(null as any));
    this._text_19 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_20 = this.renderer.createElement(this._el_0,'ion-toolbar',(null as any));
    this.renderer.setElementAttribute(this._el_20,'class','toolbar');
    this._appEl_20 = new import2.AppElement(20,0,this,this._el_20);
    var compView_20:any = import26.viewFactory_Toolbar0(this.viewUtils,this.injector(20),this._appEl_20);
    this._Toolbar_20_4 = new import16.Toolbar(this.parentInjector.get(import8.ViewController,(null as any)),this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_20),this.renderer);
    this._appEl_20.initComponent(this._Toolbar_20_4,[],compView_20);
    this._text_21 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_22 = this.renderer.createElement((null as any),'ion-segment',(null as any));
    this._NgModel_22_3 = new import17.NgModel((null as any),(null as any),(null as any),(null as any));
    this._NgControl_22_4 = this._NgModel_22_3;
    this._NgControlStatus_22_5 = new import18.NgControlStatus(this._NgControl_22_4);
    this._Segment_22_6 = new import19.Segment(this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_22),this.renderer,this._NgControl_22_4);
    this._query_SegmentButton_22_0 = new import15.QueryList<any>();
    this._text_23 = this.renderer.createText(this._el_22,'\n            ',(null as any));
    this._el_24 = this.renderer.createElement(this._el_22,'ion-segment-button',(null as any));
    this.renderer.setElementAttribute(this._el_24,'class','segment-button');
    this.renderer.setElementAttribute(this._el_24,'role','button');
    this.renderer.setElementAttribute(this._el_24,'tappable','');
    this.renderer.setElementAttribute(this._el_24,'value','past');
    this._appEl_24 = new import2.AppElement(24,22,this,this._el_24);
    var compView_24:any = import27.viewFactory_SegmentButton0(this.viewUtils,this.injector(24),this._appEl_24);
    this._SegmentButton_24_4 = new import19.SegmentButton(this.renderer,new import22.ElementRef(this._el_24));
    this._appEl_24.initComponent(this._SegmentButton_24_4,[],compView_24);
    this._text_25 = this.renderer.createText((null as any),'Past',(null as any));
    compView_24.create(this._SegmentButton_24_4,[[].concat([this._text_25])],(null as any));
    this._text_26 = this.renderer.createText(this._el_22,'\n            ',(null as any));
    this._el_27 = this.renderer.createElement(this._el_22,'ion-segment-button',(null as any));
    this.renderer.setElementAttribute(this._el_27,'class','segment-button');
    this.renderer.setElementAttribute(this._el_27,'role','button');
    this.renderer.setElementAttribute(this._el_27,'tappable','');
    this.renderer.setElementAttribute(this._el_27,'value','this week');
    this._appEl_27 = new import2.AppElement(27,22,this,this._el_27);
    var compView_27:any = import27.viewFactory_SegmentButton0(this.viewUtils,this.injector(27),this._appEl_27);
    this._SegmentButton_27_4 = new import19.SegmentButton(this.renderer,new import22.ElementRef(this._el_27));
    this._appEl_27.initComponent(this._SegmentButton_27_4,[],compView_27);
    this._text_28 = this.renderer.createText((null as any),'This Week',(null as any));
    compView_27.create(this._SegmentButton_27_4,[[].concat([this._text_28])],(null as any));
    this._text_29 = this.renderer.createText(this._el_22,'\n            ',(null as any));
    this._el_30 = this.renderer.createElement(this._el_22,'ion-segment-button',(null as any));
    this.renderer.setElementAttribute(this._el_30,'class','segment-button');
    this.renderer.setElementAttribute(this._el_30,'role','button');
    this.renderer.setElementAttribute(this._el_30,'tappable','');
    this.renderer.setElementAttribute(this._el_30,'value','upcoming');
    this._appEl_30 = new import2.AppElement(30,22,this,this._el_30);
    var compView_30:any = import27.viewFactory_SegmentButton0(this.viewUtils,this.injector(30),this._appEl_30);
    this._SegmentButton_30_4 = new import19.SegmentButton(this.renderer,new import22.ElementRef(this._el_30));
    this._appEl_30.initComponent(this._SegmentButton_30_4,[],compView_30);
    this._text_31 = this.renderer.createText((null as any),'Upcoming',(null as any));
    compView_30.create(this._SegmentButton_30_4,[[].concat([this._text_31])],(null as any));
    this._text_32 = this.renderer.createText(this._el_22,'\n        ',(null as any));
    this._text_33 = this.renderer.createText((null as any),'\n    ',(null as any));
    compView_20.create(this._Toolbar_20_4,[
      [],
      [],
      [],
      [].concat([
        this._text_21,
        this._el_22,
        this._text_33
      ]
      )
    ]
    ,(null as any));
    this._text_34 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_35 = this.renderer.createElement(this._el_0,'button',(null as any));
    this.renderer.setElementAttribute(this._el_35,'block','');
    this.renderer.setElementAttribute(this._el_35,'ion-button','');
    this._appEl_35 = new import2.AppElement(35,0,this,this._el_35);
    var compView_35:any = import28.viewFactory_Button0(this.viewUtils,this.injector(35),this._appEl_35);
    this._Button_35_4 = new import20.Button((null as any),'',this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_35),this.renderer);
    this._appEl_35.initComponent(this._Button_35_4,[],compView_35);
    this._text_36 = this.renderer.createText((null as any),'Dismiss',(null as any));
    compView_35.create(this._Button_35_4,[[].concat([this._text_36])],(null as any));
    this._text_37 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_7,'ngModelChange',this.eventHandler(this._handle_ngModelChange_7_0.bind(this)));
    this._expr_2 = import7.UNINITIALIZED;
    const subscription_0:any = this._NgModel_7_3.update.subscribe(this.eventHandler(this._handle_ngModelChange_7_0.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_9,'click',this.eventHandler(this._handle_click_9_0.bind(this)));
    this._expr_10 = import7.UNINITIALIZED;
    var disposable_2:Function = this.renderer.listen(this._el_12,'click',this.eventHandler(this._handle_click_12_0.bind(this)));
    this._expr_12 = import7.UNINITIALIZED;
    this._expr_13 = import7.UNINITIALIZED;
    var disposable_3:Function = this.renderer.listen(this._el_22,'ngModelChange',this.eventHandler(this._handle_ngModelChange_22_0.bind(this)));
    this._expr_15 = import7.UNINITIALIZED;
    const subscription_1:any = this._NgModel_22_3.update.subscribe(this.eventHandler(this._handle_ngModelChange_22_0.bind(this)));
    this._expr_16 = import7.UNINITIALIZED;
    this._expr_17 = import7.UNINITIALIZED;
    this._expr_18 = import7.UNINITIALIZED;
    this._expr_19 = import7.UNINITIALIZED;
    this._expr_20 = import7.UNINITIALIZED;
    this._expr_21 = import7.UNINITIALIZED;
    var disposable_4:Function = this.renderer.listen(this._el_24,'click',this.eventHandler(this._handle_click_24_0.bind(this)));
    this._expr_23 = import7.UNINITIALIZED;
    var disposable_5:Function = this.renderer.listen(this._el_27,'click',this.eventHandler(this._handle_click_27_0.bind(this)));
    this._expr_25 = import7.UNINITIALIZED;
    var disposable_6:Function = this.renderer.listen(this._el_30,'click',this.eventHandler(this._handle_click_30_0.bind(this)));
    this._expr_27 = import7.UNINITIALIZED;
    var disposable_7:Function = this.renderer.listen(this._el_35,'click',this.eventHandler(this._handle_click_35_0.bind(this)));
    this._expr_29 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._text_26,
      this._el_27,
      this._text_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._text_32,
      this._text_33,
      this._text_34,
      this._el_35,
      this._text_36,
      this._text_37
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4,
      disposable_5,
      disposable_6,
      disposable_7
    ]
    ,[
      subscription_0,
      subscription_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.Item) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._Item_2_4; }
    if (((token === import14.ListHeader) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._ListHeader_2_5; }
    if (((token === import19.SegmentButton) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._SegmentButton_9_4; }
    if (((token === import19.SegmentButton) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._SegmentButton_12_4; }
    if (((token === import17.NgModel) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._NgModel_7_3; }
    if (((token === import29.NgControl) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._NgControl_7_4; }
    if (((token === import18.NgControlStatus) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._NgControlStatus_7_5; }
    if (((token === import19.Segment) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._Segment_7_6; }
    if (((token === import16.Toolbar) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._Toolbar_5_4; }
    if (((token === import13.Item) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 18)))) { return this._Item_17_4; }
    if (((token === import14.ListHeader) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 18)))) { return this._ListHeader_17_5; }
    if (((token === import19.SegmentButton) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 25)))) { return this._SegmentButton_24_4; }
    if (((token === import19.SegmentButton) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 28)))) { return this._SegmentButton_27_4; }
    if (((token === import19.SegmentButton) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) { return this._SegmentButton_30_4; }
    if (((token === import17.NgModel) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 32)))) { return this._NgModel_22_3; }
    if (((token === import29.NgControl) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 32)))) { return this._NgControl_22_4; }
    if (((token === import18.NgControlStatus) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 32)))) { return this._NgControlStatus_22_5; }
    if (((token === import19.Segment) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 32)))) { return this._Segment_22_6; }
    if (((token === import16.Toolbar) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 33)))) { return this._Toolbar_20_4; }
    if (((token === import20.Button) && ((35 <= requestNodeIndex) && (requestNodeIndex <= 36)))) { return this._Button_35_4; }
    if (((token === import12.List) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 37)))) { return this._List_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changed:boolean = true;
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_2:any = this.context.feedType;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgModel_7_3.model = currVal_2;
      if ((changes === (null as any))) { (changes = {}); }
      changes['model'] = new import7.SimpleChange(this._expr_2,currVal_2);
      this._expr_2 = currVal_2;
    }
    if ((changes !== (null as any))) { this._NgModel_7_3.ngOnChanges(changes); }
    const currVal_10:any = 'custom';
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this._SegmentButton_9_4.value = currVal_10;
      this._expr_10 = currVal_10;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._SegmentButton_9_4.ngOnInit(); }
    const currVal_12:any = 'all';
    if (import4.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this._SegmentButton_12_4.value = currVal_12;
      this._expr_12 = currVal_12;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._SegmentButton_12_4.ngOnInit(); }
    changes = (null as any);
    const currVal_15:any = this.context.timeframe;
    if (import4.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this._NgModel_22_3.model = currVal_15;
      if ((changes === (null as any))) { (changes = {}); }
      changes['model'] = new import7.SimpleChange(this._expr_15,currVal_15);
      this._expr_15 = currVal_15;
    }
    if ((changes !== (null as any))) { this._NgModel_22_3.ngOnChanges(changes); }
    const currVal_23:any = 'past';
    if (import4.checkBinding(throwOnChange,this._expr_23,currVal_23)) {
      this._SegmentButton_24_4.value = currVal_23;
      this._expr_23 = currVal_23;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._SegmentButton_24_4.ngOnInit(); }
    const currVal_25:any = 'this week';
    if (import4.checkBinding(throwOnChange,this._expr_25,currVal_25)) {
      this._SegmentButton_27_4.value = currVal_25;
      this._expr_25 = currVal_25;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._SegmentButton_27_4.ngOnInit(); }
    const currVal_27:any = 'upcoming';
    if (import4.checkBinding(throwOnChange,this._expr_27,currVal_27)) {
      this._SegmentButton_30_4.value = currVal_27;
      this._expr_27 = currVal_27;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._SegmentButton_30_4.ngOnInit(); }
    changed = false;
    const currVal_29:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_29,currVal_29)) {
      this._Button_35_4.block = currVal_29;
      changed = true;
      this._expr_29 = currVal_29;
    }
    if (changed) { this._appEl_35.componentView.markAsCheckOnce(); }
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
      if (this._query_SegmentButton_7_0.dirty) {
        this._query_SegmentButton_7_0.reset([
          this._SegmentButton_9_4,
          this._SegmentButton_12_4
        ]
        );
        this._Segment_7_6._buttons = this._query_SegmentButton_7_0;
        this._query_SegmentButton_7_0.notifyOnChanges();
      }
      if (this._query_Button_17_1.dirty) {
        this._query_Button_17_1.reset([]);
        this._Item_17_4._buttons = this._query_Button_17_1;
        this._query_Button_17_1.notifyOnChanges();
      }
      if (this._query_Icon_17_2.dirty) {
        this._query_Icon_17_2.reset([]);
        this._Item_17_4._icons = this._query_Icon_17_2;
        this._query_Icon_17_2.notifyOnChanges();
      }
      if (this._query_SegmentButton_22_0.dirty) {
        this._query_SegmentButton_22_0.reset([
          this._SegmentButton_24_4,
          this._SegmentButton_27_4,
          this._SegmentButton_30_4
        ]
        );
        this._Segment_22_6._buttons = this._query_SegmentButton_22_0;
        this._query_SegmentButton_22_0.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Item_2_4.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Item_17_4.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_35_4.ngAfterContentInit(); }
    }
    const currVal_0:any = this._Toolbar_5_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementClass(this._el_5,'statusbar-padding',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_3:any = this._NgControlStatus_7_5.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_7,'ng-untouched',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this._NgControlStatus_7_5.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementClass(this._el_7,'ng-touched',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this._NgControlStatus_7_5.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_7,'ng-pristine',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._NgControlStatus_7_5.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_7,'ng-dirty',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._NgControlStatus_7_5.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_7,'ng-valid',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._NgControlStatus_7_5.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_7,'ng-invalid',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_13:any = this._Toolbar_20_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementClass(this._el_20,'statusbar-padding',currVal_13);
      this._expr_13 = currVal_13;
    }
    const currVal_16:any = this._NgControlStatus_22_5.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this.renderer.setElementClass(this._el_22,'ng-untouched',currVal_16);
      this._expr_16 = currVal_16;
    }
    const currVal_17:any = this._NgControlStatus_22_5.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this.renderer.setElementClass(this._el_22,'ng-touched',currVal_17);
      this._expr_17 = currVal_17;
    }
    const currVal_18:any = this._NgControlStatus_22_5.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setElementClass(this._el_22,'ng-pristine',currVal_18);
      this._expr_18 = currVal_18;
    }
    const currVal_19:any = this._NgControlStatus_22_5.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this.renderer.setElementClass(this._el_22,'ng-dirty',currVal_19);
      this._expr_19 = currVal_19;
    }
    const currVal_20:any = this._NgControlStatus_22_5.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setElementClass(this._el_22,'ng-valid',currVal_20);
      this._expr_20 = currVal_20;
    }
    const currVal_21:any = this._NgControlStatus_22_5.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this.renderer.setElementClass(this._el_22,'ng-invalid',currVal_21);
      this._expr_21 = currVal_21;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if ((this.numberOfChecks === 0)) { this._Segment_7_6.ngAfterViewInit(); }
      if ((this.numberOfChecks === 0)) { this._Segment_22_6.ngAfterViewInit(); }
    }
  }
  destroyInternal():void {
    this._NgModel_7_3.ngOnDestroy();
    this._NgModel_22_3.ngOnDestroy();
  }
  private _handle_ngModelChange_7_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.feedType = $event)) !== false);
    return (true && pd_0);
  }
  private _handle_click_9_0($event:any):boolean {
    this._appEl_9.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._SegmentButton_9_4.onClick()) !== false);
    return (true && pd_0);
  }
  private _handle_click_12_0($event:any):boolean {
    this._appEl_12.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._SegmentButton_12_4.onClick()) !== false);
    return (true && pd_0);
  }
  private _handle_ngModelChange_22_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.timeframe = $event)) !== false);
    return (true && pd_0);
  }
  private _handle_click_24_0($event:any):boolean {
    this._appEl_24.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._SegmentButton_24_4.onClick()) !== false);
    return (true && pd_0);
  }
  private _handle_click_27_0($event:any):boolean {
    this._appEl_27.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._SegmentButton_27_4.onClick()) !== false);
    return (true && pd_0);
  }
  private _handle_click_30_0($event:any):boolean {
    this._appEl_30.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._SegmentButton_30_4.onClick()) !== false);
    return (true && pd_0);
  }
  private _handle_click_35_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.close()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_PopoverPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.PopoverPage> {
  if ((renderType_PopoverPage === (null as any))) { (renderType_PopoverPage = viewUtils.createRenderComponentType('C:/Users/Richard Hugessen/Documents/GitHub/Lazsoc-2.0/.tmp/pages/popover/popover.html',0,import10.ViewEncapsulation.None,styles_PopoverPage,{})); }
  return new _View_PopoverPage0(viewUtils,parentInjector,declarationEl);
}