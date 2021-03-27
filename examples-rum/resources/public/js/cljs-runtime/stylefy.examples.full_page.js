goog.provide('stylefy.examples.full_page');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_time.core');
goog.require('cljs.core.async');
goog.require('stylefy.core');
stylefy.examples.full_page.phone_width = "514px";
stylefy.examples.full_page.tablet = "770px";
stylefy.examples.full_page.header = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438)],["uppercase","white",new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"infinity","infinity",-105926847),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"150px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"-0.4em",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-0.4em",new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),stylefy.examples.full_page.phone_width], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"75px"], null)])], null),new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"80px",new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),stylefy.examples.full_page.phone_width], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"40px"], null)])], null),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"40px",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"0.5em",new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),stylefy.examples.full_page.phone_width], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px"], null)])], null)], null),"rgb(3, 84, 114)","url(images/background.jpg)","15px",new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"center","center",-748944368),"100%",new cljs.core.Keyword(null,"column","column",2078222095)]);
stylefy.examples.full_page.bs_row_overrides = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(0),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0)], null);
stylefy.examples.full_page.main = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"5px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"15px"], null);
stylefy.examples.full_page.main_content = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),"1px solid black",new cljs.core.Keyword(null,"padding","padding",1660304693),"15px",new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),stylefy.examples.full_page.tablet], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),"none"], null)])], null);
stylefy.examples.full_page.clearfix = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"clear","clear",1877104959),"both",new cljs.core.Keyword(null,"content","content",15833224),".",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"height","height",1025178622),(0),new cljs.core.Keyword(null,"line-height","line-height",1870784992),(0),new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null)], null)], null);
stylefy.examples.full_page.footer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#BBBBBB",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null);
stylefy.examples.full_page.meme = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1em",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1em"], null);
stylefy.examples.full_page.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
stylefy.examples.full_page.clock_body = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"border","border",1444987323),"4px solid rgb(3, 84, 114)",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#EEEEEE",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"height","height",1025178622),"200px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"auto",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"auto"], null);
stylefy.examples.full_page.clock_hand = (function stylefy$examples$full_page$clock_hand(type,time_value){
var second_to_deg = (function (p1__28155_SHARP_){
return ["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((p1__28155_SHARP_ / (60)) * (360)) - (90))),"deg)"].join('');
});
var minute_to_deg = second_to_deg;
var hour_to_deg = (function (p1__28156_SHARP_){
return ["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((p1__28156_SHARP_ / (24)) * (360)) - (90))),"deg)"].join('');
});
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"top","top",-1856271961),"50%",new cljs.core.Keyword(null,"left","left",-399115937),"50%",new cljs.core.Keyword(null,"width","width",-384071477),(function (){var G__28157 = type;
var G__28157__$1 = (((G__28157 instanceof cljs.core.Keyword))?G__28157.fqn:null);
switch (G__28157__$1) {
case "second":
return "90px";

break;
case "minute":
return "90px";

break;
case "hour":
return "40px";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28157__$1)].join('')));

}
})(),new cljs.core.Keyword(null,"height","height",1025178622),(function (){var G__28158 = type;
var G__28158__$1 = (((G__28158 instanceof cljs.core.Keyword))?G__28158.fqn:null);
switch (G__28158__$1) {
case "second":
return "2px";

break;
case "minute":
return "4px";

break;
case "hour":
return "6px";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28158__$1)].join('')));

}
})(),new cljs.core.Keyword(null,"background-color","background-color",570434026),(function (){var G__28159 = type;
var G__28159__$1 = (((G__28159 instanceof cljs.core.Keyword))?G__28159.fqn:null);
switch (G__28159__$1) {
case "second":
return "red";

break;
case "minute":
return "black";

break;
case "hour":
return "black";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28159__$1)].join('')));

}
})(),new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),"top left",new cljs.core.Keyword(null,"transform","transform",1381301764),(function (){var G__28160 = type;
var G__28160__$1 = (((G__28160 instanceof cljs.core.Keyword))?G__28160.fqn:null);
switch (G__28160__$1) {
case "second":
return second_to_deg(time_value);

break;
case "minute":
return minute_to_deg(time_value);

break;
case "hour":
return hour_to_deg(time_value);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28160__$1)].join('')));

}
})()], null);
});
stylefy.examples.full_page.clock = (function stylefy$examples$full_page$clock(){
var time = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs_time.core.now());
var updating_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
var c__26891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26892__auto__ = (function (){var switch__26274__auto__ = (function (state_28176){
var state_val_28177 = (state_28176[(1)]);
if((state_val_28177 === (1))){
var state_28176__$1 = state_28176;
var statearr_28178_28195 = state_28176__$1;
(statearr_28178_28195[(2)] = null);

(statearr_28178_28195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (2))){
var inst_28162 = cljs.core.async.timeout((1000));
var state_28176__$1 = state_28176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28176__$1,(4),inst_28162);
} else {
if((state_val_28177 === (3))){
var inst_28174 = (state_28176[(2)]);
var state_28176__$1 = state_28176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28176__$1,inst_28174);
} else {
if((state_val_28177 === (4))){
var inst_28164 = (state_28176[(2)]);
var inst_28165 = cljs.core.deref(updating_QMARK_);
var state_28176__$1 = (function (){var statearr_28179 = state_28176;
(statearr_28179[(7)] = inst_28164);

return statearr_28179;
})();
if(cljs.core.truth_(inst_28165)){
var statearr_28180_28196 = state_28176__$1;
(statearr_28180_28196[(1)] = (5));

} else {
var statearr_28181_28197 = state_28176__$1;
(statearr_28181_28197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (5))){
var inst_28167 = cljs_time.core.now();
var inst_28168 = cljs.core.reset_BANG_(time,inst_28167);
var state_28176__$1 = (function (){var statearr_28182 = state_28176;
(statearr_28182[(8)] = inst_28168);

return statearr_28182;
})();
var statearr_28183_28198 = state_28176__$1;
(statearr_28183_28198[(2)] = null);

(statearr_28183_28198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (6))){
var state_28176__$1 = state_28176;
var statearr_28184_28199 = state_28176__$1;
(statearr_28184_28199[(2)] = null);

(statearr_28184_28199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (7))){
var inst_28172 = (state_28176[(2)]);
var state_28176__$1 = state_28176;
var statearr_28185_28200 = state_28176__$1;
(statearr_28185_28200[(2)] = inst_28172);

(statearr_28185_28200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var stylefy$examples$full_page$clock_$_state_machine__26275__auto__ = null;
var stylefy$examples$full_page$clock_$_state_machine__26275__auto____0 = (function (){
var statearr_28186 = [null,null,null,null,null,null,null,null,null];
(statearr_28186[(0)] = stylefy$examples$full_page$clock_$_state_machine__26275__auto__);

(statearr_28186[(1)] = (1));

return statearr_28186;
});
var stylefy$examples$full_page$clock_$_state_machine__26275__auto____1 = (function (state_28176){
while(true){
var ret_value__26276__auto__ = (function (){try{while(true){
var result__26277__auto__ = switch__26274__auto__(state_28176);
if(cljs.core.keyword_identical_QMARK_(result__26277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26277__auto__;
}
break;
}
}catch (e28187){var ex__26278__auto__ = e28187;
var statearr_28188_28202 = state_28176;
(statearr_28188_28202[(2)] = ex__26278__auto__);


if(cljs.core.seq((state_28176[(4)]))){
var statearr_28189_28203 = state_28176;
(statearr_28189_28203[(1)] = cljs.core.first((state_28176[(4)])));

} else {
throw ex__26278__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28204 = state_28176;
state_28176 = G__28204;
continue;
} else {
return ret_value__26276__auto__;
}
break;
}
});
stylefy$examples$full_page$clock_$_state_machine__26275__auto__ = function(state_28176){
switch(arguments.length){
case 0:
return stylefy$examples$full_page$clock_$_state_machine__26275__auto____0.call(this);
case 1:
return stylefy$examples$full_page$clock_$_state_machine__26275__auto____1.call(this,state_28176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stylefy$examples$full_page$clock_$_state_machine__26275__auto__.cljs$core$IFn$_invoke$arity$0 = stylefy$examples$full_page$clock_$_state_machine__26275__auto____0;
stylefy$examples$full_page$clock_$_state_machine__26275__auto__.cljs$core$IFn$_invoke$arity$1 = stylefy$examples$full_page$clock_$_state_machine__26275__auto____1;
return stylefy$examples$full_page$clock_$_state_machine__26275__auto__;
})()
})();
var state__26893__auto__ = (function (){var statearr_28190 = f__26892__auto__();
(statearr_28190[(6)] = c__26891__auto__);

return statearr_28190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26893__auto__);
}));

return c__26891__auto__;
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
return cljs.core.reset_BANG_(updating_QMARK_,false);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(stylefy.examples.full_page.clock_body),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),stylefy.examples.full_page.clock_hand(new cljs.core.Keyword(null,"second","second",-444702010),cljs_time.core.second(cljs.core.deref(time)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),stylefy.examples.full_page.clock_hand(new cljs.core.Keyword(null,"minute","minute",-642875969),cljs_time.core.minute(cljs.core.deref(time)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),stylefy.examples.full_page.clock_hand(new cljs.core.Keyword(null,"hour","hour",-555989214),cljs_time.core.hour(cljs.core.deref(time)))], null)], null)], null);
})], null));
});
stylefy.examples.full_page.full_page = (function stylefy$examples$full_page$full_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(stylefy.examples.full_page.header),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(stylefy.examples.full_page.header,new cljs.core.Keyword(null,"infinity","infinity",-105926847)),"\u221E"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(stylefy.examples.full_page.header,new cljs.core.Keyword(null,"h1","h1",-1896887462)),"Full Page Style"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(stylefy.examples.full_page.header,new cljs.core.Keyword(null,"h2","h2",-372662728)),"by stylefy"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.examples.full_page.bs_row_overrides,stylefy.examples.full_page.clearfix], 0))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main.col-sm-8","div.main.col-sm-8",-360436087),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(stylefy.examples.full_page.main),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(stylefy.examples.full_page.main_content),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Lorem ipsum 1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.examples.full_page.lorem], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"CSS Clock"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stylefy.examples.full_page.clock], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Lorem ipsum 3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.examples.full_page.lorem], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5px"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-left text-uppercase"], null)),"Text left uppercase"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5px"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-uppercase text-center"], null)),"Text center uppercase"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5px"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-right","text-uppercase"], null)], null)),"Text right uppercase"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside.col-sm-4","aside.col-sm-4",1393840231),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(stylefy.examples.full_page.meme),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"images/meme.jpg"], null)], 0))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(stylefy.examples.full_page.footer),"Pretty much useless footer"], null)], null);
});

//# sourceMappingURL=stylefy.examples.full_page.js.map
