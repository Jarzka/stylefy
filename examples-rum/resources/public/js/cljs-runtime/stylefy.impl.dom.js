goog.provide('stylefy.impl.dom');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('garden.core');
goog.require('cljs.core.async');
goog.require('stylefy.impl.cache');
goog.require('stylefy.impl.log');
goog.require('stylefy.impl.state');
stylefy.impl.dom.dom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
stylefy.impl.dom.stylefy_node_id = "#_stylefy-styles_";
stylefy.impl.dom.stylefy_constant_node_id = "#_stylefy-constant-styles_";
stylefy.impl.dom.stylefy_base_node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
stylefy.impl.dom.stylefy_instance_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);

/**
 * @interface
 */
stylefy.impl.dom.Dom = function(){};

var stylefy$impl$dom$Dom$init_cache$dyn_29913 = (function (this$,options){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (stylefy.impl.dom.init_cache[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(this$,options) : m__4423__auto__.call(null,this$,options));
} else {
var m__4420__auto__ = (stylefy.impl.dom.init_cache["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(this$,options) : m__4420__auto__.call(null,this$,options));
} else {
throw cljs.core.missing_protocol("Dom.init-cache",this$);
}
}
});
stylefy.impl.dom.init_cache = (function stylefy$impl$dom$init_cache(this$,options){
if((((!((this$ == null)))) && ((!((this$.stylefy$impl$dom$Dom$init_cache$arity$2 == null)))))){
return this$.stylefy$impl$dom$Dom$init_cache$arity$2(this$,options);
} else {
return stylefy$impl$dom$Dom$init_cache$dyn_29913(this$,options);
}
});

var stylefy$impl$dom$Dom$init_multi_instance$dyn_29914 = (function (this$,options){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (stylefy.impl.dom.init_multi_instance[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(this$,options) : m__4423__auto__.call(null,this$,options));
} else {
var m__4420__auto__ = (stylefy.impl.dom.init_multi_instance["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(this$,options) : m__4420__auto__.call(null,this$,options));
} else {
throw cljs.core.missing_protocol("Dom.init-multi-instance",this$);
}
}
});
stylefy.impl.dom.init_multi_instance = (function stylefy$impl$dom$init_multi_instance(this$,options){
if((((!((this$ == null)))) && ((!((this$.stylefy$impl$dom$Dom$init_multi_instance$arity$2 == null)))))){
return this$.stylefy$impl$dom$Dom$init_multi_instance$arity$2(this$,options);
} else {
return stylefy$impl$dom$Dom$init_multi_instance$dyn_29914(this$,options);
}
});

var stylefy$impl$dom$Dom$save_style$dyn_29915 = (function (this$,style){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (stylefy.impl.dom.save_style[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(this$,style) : m__4423__auto__.call(null,this$,style));
} else {
var m__4420__auto__ = (stylefy.impl.dom.save_style["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(this$,style) : m__4420__auto__.call(null,this$,style));
} else {
throw cljs.core.missing_protocol("Dom.save-style",this$);
}
}
});
stylefy.impl.dom.save_style = (function stylefy$impl$dom$save_style(this$,style){
if((((!((this$ == null)))) && ((!((this$.stylefy$impl$dom$Dom$save_style$arity$2 == null)))))){
return this$.stylefy$impl$dom$Dom$save_style$arity$2(this$,style);
} else {
return stylefy$impl$dom$Dom$save_style$dyn_29915(this$,style);
}
});

var stylefy$impl$dom$Dom$add_class$dyn_29916 = (function (this$,class_as_css){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (stylefy.impl.dom.add_class[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(this$,class_as_css) : m__4423__auto__.call(null,this$,class_as_css));
} else {
var m__4420__auto__ = (stylefy.impl.dom.add_class["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(this$,class_as_css) : m__4420__auto__.call(null,this$,class_as_css));
} else {
throw cljs.core.missing_protocol("Dom.add-class",this$);
}
}
});
stylefy.impl.dom.add_class = (function stylefy$impl$dom$add_class(this$,class_as_css){
if((((!((this$ == null)))) && ((!((this$.stylefy$impl$dom$Dom$add_class$arity$2 == null)))))){
return this$.stylefy$impl$dom$Dom$add_class$arity$2(this$,class_as_css);
} else {
return stylefy$impl$dom$Dom$add_class$dyn_29916(this$,class_as_css);
}
});

var stylefy$impl$dom$Dom$add_tag$dyn_29917 = (function (this$,tag_as_css){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (stylefy.impl.dom.add_tag[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(this$,tag_as_css) : m__4423__auto__.call(null,this$,tag_as_css));
} else {
var m__4420__auto__ = (stylefy.impl.dom.add_tag["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(this$,tag_as_css) : m__4420__auto__.call(null,this$,tag_as_css));
} else {
throw cljs.core.missing_protocol("Dom.add-tag",this$);
}
}
});
stylefy.impl.dom.add_tag = (function stylefy$impl$dom$add_tag(this$,tag_as_css){
if((((!((this$ == null)))) && ((!((this$.stylefy$impl$dom$Dom$add_tag$arity$2 == null)))))){
return this$.stylefy$impl$dom$Dom$add_tag$arity$2(this$,tag_as_css);
} else {
return stylefy$impl$dom$Dom$add_tag$dyn_29917(this$,tag_as_css);
}
});

var stylefy$impl$dom$Dom$add_font_face$dyn_29918 = (function (this$,font_face_as_css){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (stylefy.impl.dom.add_font_face[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(this$,font_face_as_css) : m__4423__auto__.call(null,this$,font_face_as_css));
} else {
var m__4420__auto__ = (stylefy.impl.dom.add_font_face["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(this$,font_face_as_css) : m__4420__auto__.call(null,this$,font_face_as_css));
} else {
throw cljs.core.missing_protocol("Dom.add-font-face",this$);
}
}
});
stylefy.impl.dom.add_font_face = (function stylefy$impl$dom$add_font_face(this$,font_face_as_css){
if((((!((this$ == null)))) && ((!((this$.stylefy$impl$dom$Dom$add_font_face$arity$2 == null)))))){
return this$.stylefy$impl$dom$Dom$add_font_face$arity$2(this$,font_face_as_css);
} else {
return stylefy$impl$dom$Dom$add_font_face$dyn_29918(this$,font_face_as_css);
}
});

var stylefy$impl$dom$Dom$add_keyframes$dyn_29919 = (function (this$,identifier,keyframes_as_css){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (stylefy.impl.dom.add_keyframes[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(this$,identifier,keyframes_as_css) : m__4423__auto__.call(null,this$,identifier,keyframes_as_css));
} else {
var m__4420__auto__ = (stylefy.impl.dom.add_keyframes["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(this$,identifier,keyframes_as_css) : m__4420__auto__.call(null,this$,identifier,keyframes_as_css));
} else {
throw cljs.core.missing_protocol("Dom.add-keyframes",this$);
}
}
});
stylefy.impl.dom.add_keyframes = (function stylefy$impl$dom$add_keyframes(this$,identifier,keyframes_as_css){
if((((!((this$ == null)))) && ((!((this$.stylefy$impl$dom$Dom$add_keyframes$arity$3 == null)))))){
return this$.stylefy$impl$dom$Dom$add_keyframes$arity$3(this$,identifier,keyframes_as_css);
} else {
return stylefy$impl$dom$Dom$add_keyframes$dyn_29919(this$,identifier,keyframes_as_css);
}
});

var stylefy$impl$dom$Dom$update_dom$dyn_29920 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (stylefy.impl.dom.update_dom[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (stylefy.impl.dom.update_dom["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Dom.update-dom",this$);
}
}
});
stylefy.impl.dom.update_dom = (function stylefy$impl$dom$update_dom(this$){
if((((!((this$ == null)))) && ((!((this$.stylefy$impl$dom$Dom$update_dom$arity$1 == null)))))){
return this$.stylefy$impl$dom$Dom$update_dom$arity$1(this$);
} else {
return stylefy$impl$dom$Dom$update_dom$dyn_29920(this$);
}
});

var stylefy$impl$dom$Dom$update_dom_if_needed$dyn_29921 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (stylefy.impl.dom.update_dom_if_needed[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (stylefy.impl.dom.update_dom_if_needed["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Dom.update-dom-if-needed",this$);
}
}
});
stylefy.impl.dom.update_dom_if_needed = (function stylefy$impl$dom$update_dom_if_needed(this$){
if((((!((this$ == null)))) && ((!((this$.stylefy$impl$dom$Dom$update_dom_if_needed$arity$1 == null)))))){
return this$.stylefy$impl$dom$Dom$update_dom_if_needed$arity$1(this$);
} else {
return stylefy$impl$dom$Dom$update_dom_if_needed$dyn_29921(this$);
}
});

var stylefy$impl$dom$Dom$style_in_dom_QMARK_$dyn_29922 = (function (this$,style_hash){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (stylefy.impl.dom.style_in_dom_QMARK_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(this$,style_hash) : m__4423__auto__.call(null,this$,style_hash));
} else {
var m__4420__auto__ = (stylefy.impl.dom.style_in_dom_QMARK_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(this$,style_hash) : m__4420__auto__.call(null,this$,style_hash));
} else {
throw cljs.core.missing_protocol("Dom.style-in-dom?",this$);
}
}
});
stylefy.impl.dom.style_in_dom_QMARK_ = (function stylefy$impl$dom$style_in_dom_QMARK_(this$,style_hash){
if((((!((this$ == null)))) && ((!((this$.stylefy$impl$dom$Dom$style_in_dom_QMARK_$arity$2 == null)))))){
return this$.stylefy$impl$dom$Dom$style_in_dom_QMARK_$arity$2(this$,style_hash);
} else {
return stylefy$impl$dom$Dom$style_in_dom_QMARK_$dyn_29922(this$,style_hash);
}
});

var stylefy$impl$dom$Dom$style_by_hash$dyn_29926 = (function (this$,style_hash){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (stylefy.impl.dom.style_by_hash[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(this$,style_hash) : m__4423__auto__.call(null,this$,style_hash));
} else {
var m__4420__auto__ = (stylefy.impl.dom.style_by_hash["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(this$,style_hash) : m__4420__auto__.call(null,this$,style_hash));
} else {
throw cljs.core.missing_protocol("Dom.style-by-hash",this$);
}
}
});
stylefy.impl.dom.style_by_hash = (function stylefy$impl$dom$style_by_hash(this$,style_hash){
if((((!((this$ == null)))) && ((!((this$.stylefy$impl$dom$Dom$style_by_hash$arity$2 == null)))))){
return this$.stylefy$impl$dom$Dom$style_by_hash$arity$2(this$,style_hash);
} else {
return stylefy$impl$dom$Dom$style_by_hash$dyn_29926(this$,style_hash);
}
});


//# sourceMappingURL=stylefy.impl.dom.js.map
