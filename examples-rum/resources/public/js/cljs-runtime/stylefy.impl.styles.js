goog.provide('stylefy.impl.styles');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('stylefy.impl.dom');
goog.require('stylefy.impl.hashing');
goog.require('stylefy.impl.utils');
goog.require('stylefy.impl.state');
goog.require('stylefy.impl.conversion');
goog.require('stylefy.impl.log');
goog.require('clojure.set');
stylefy.impl.styles.global_vendor_prefixes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),cljs.core.PersistentHashSet.EMPTY], null));
stylefy.impl.styles.add_global_vendors = (function stylefy$impl$styles$add_global_vendors(style){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.styles.global_vendor_prefixes)),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(style)),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.styles.global_vendor_prefixes)),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(style))], null)], 0));
});
stylefy.impl.styles.create_style_BANG_ = (function stylefy$impl$styles$create_style_BANG_(p__29046,style_created_handler){
var map__29047 = p__29046;
var map__29047__$1 = (((((!((map__29047 == null))))?(((((map__29047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29047):map__29047);
var style = map__29047__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29047__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29047__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var style_css = stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$1(style);
var G__29049_29076 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),style_css,new cljs.core.Keyword(null,"hash","hash",-13781596),hash], null);
(style_created_handler.cljs$core$IFn$_invoke$arity$1 ? style_created_handler.cljs$core$IFn$_invoke$arity$1(G__29049_29076) : style_created_handler.call(null,G__29049_29076));

var seq__29050 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(props)));
var chunk__29051 = null;
var count__29052 = (0);
var i__29053 = (0);
while(true){
if((i__29053 < count__29052)){
var sub_style = chunk__29051.cljs$core$IIndexed$_nth$arity$2(null,i__29053);
var G__29058_29077 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.hashing.hash_style(sub_style)], null);
var G__29059_29078 = style_created_handler;
(stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$2 ? stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$2(G__29058_29077,G__29059_29078) : stylefy.impl.styles.create_style_BANG_.call(null,G__29058_29077,G__29059_29078));


var G__29079 = seq__29050;
var G__29080 = chunk__29051;
var G__29081 = count__29052;
var G__29082 = (i__29053 + (1));
seq__29050 = G__29079;
chunk__29051 = G__29080;
count__29052 = G__29081;
i__29053 = G__29082;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29050);
if(temp__5735__auto__){
var seq__29050__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29050__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__29050__$1);
var G__29084 = cljs.core.chunk_rest(seq__29050__$1);
var G__29085 = c__4550__auto__;
var G__29086 = cljs.core.count(c__4550__auto__);
var G__29087 = (0);
seq__29050 = G__29084;
chunk__29051 = G__29085;
count__29052 = G__29086;
i__29053 = G__29087;
continue;
} else {
var sub_style = cljs.core.first(seq__29050__$1);
var G__29060_29089 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.hashing.hash_style(sub_style)], null);
var G__29061_29090 = style_created_handler;
(stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$2 ? stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$2(G__29060_29089,G__29061_29090) : stylefy.impl.styles.create_style_BANG_.call(null,G__29060_29089,G__29061_29090));


var G__29091 = cljs.core.next(seq__29050__$1);
var G__29092 = null;
var G__29093 = (0);
var G__29094 = (0);
seq__29050 = G__29091;
chunk__29051 = G__29092;
count__29052 = G__29093;
i__29053 = G__29094;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Return class definition as string, or nil if the argument is nil.
 */
stylefy.impl.styles.class_into_string = (function stylefy$impl$styles$class_into_string(class$){
if(cljs.core.truth_(class$)){
if(typeof class$ === 'string'){
return class$;
} else {
if((class$ instanceof cljs.core.Keyword)){
return cljs.core.name(class$);
} else {
if(cljs.core.vector_QMARK_(class$)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(stylefy.impl.styles.class_into_string,class$)));
} else {
return null;
}
}
}
} else {
return null;
}
});
stylefy.impl.styles.validate_class_definition = (function stylefy$impl$styles$validate_class_definition(class$,origin){
if((((class$ == null)) || (typeof class$ === 'string') || ((class$ instanceof cljs.core.Keyword)) || (((cljs.core.vector_QMARK_(class$)) && (cljs.core.every_QMARK_((function (p1__29062_SHARP_){
return ((typeof p1__29062_SHARP_ === 'string') || ((p1__29062_SHARP_ instanceof cljs.core.Keyword)) || ((p1__29062_SHARP_ == null)));
}),class$)))))){
return null;
} else {
throw (new Error(["Assert failed: ",["Unsupported ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(origin)," type. It should be nil, keyword, string or vector of strings/keywords). Got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class$], 0))].join(''),"\n","(or (nil? class) (string? class) (keyword? class) (and (vector? class) (every? (fn* [p1__29062#] (or (string? p1__29062#) (keyword? p1__29062#) (nil? p1__29062#))) class)))"].join('')));
}
});
/**
 * Given a style, hash and options, returns HTML attributes for a Hiccup component,
 * or nil if there are not any attributes.
 */
stylefy.impl.styles.prepare_style_return_value = (function stylefy$impl$styles$prepare_style_return_value(style,style_hash,options){
if(cljs.core.truth_(new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(options))){
stylefy.impl.log.warn(":stylefy.core/with-classes is deprecated in options map (since 1.3.0, removed in 2.0.0), use :class instead.");
} else {
}

var style_with_classes = new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(style);
var html_attributes = stylefy.impl.utils.remove_special_keywords(options);
var html_attributes_class = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(html_attributes);
var html_attributes_inline_style = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(html_attributes);
stylefy.impl.styles.validate_class_definition(html_attributes_class,":class");

stylefy.impl.styles.validate_class_definition(style_with_classes,":stylefy.core/with-classes");

if((html_attributes_inline_style == null)){
} else {
throw (new Error(["Assert failed: ","HTML attribute :style is not supported in options map. Instead, you should provide your style definitions as the first argument when calling use-style.","\n","(nil? html-attributes-inline-style)"].join('')));
}

var class_as_string = stylefy.impl.styles.class_into_string(html_attributes_class);
var style_with_classes_as_string = stylefy.impl.styles.class_into_string(style_with_classes);
var final_class = clojure.string.trim([cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_hash)," ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_as_string,style_with_classes_as_string], null)))].join(''));
var final_html_attributes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([html_attributes,((cljs.core.seq(final_class))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),final_class], null):null)], 0));
if(cljs.core.seq(final_html_attributes)){
return final_html_attributes;
} else {
return null;
}
});
stylefy.impl.styles.style_return_value = (function stylefy$impl$styles$style_return_value(style,style_hash,options){
var return_map = stylefy.impl.styles.prepare_style_return_value(style,style_hash,options);
if(cljs.core.truth_((function (){var or__4120__auto__ = cljs.core.empty_QMARK_(style);
if(or__4120__auto__){
return or__4120__auto__;
} else {
return stylefy.impl.dom.style_in_dom_QMARK_(cljs.core.deref(stylefy.impl.dom.dom),style_hash);
}
})())){
return return_map;
} else {
var contains_media_queries_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834).cljs$core$IFn$_invoke$arity$1(style) == null)));
var contains_feature_queries_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","supports","stylefy.core/supports",105019324).cljs$core$IFn$_invoke$arity$1(style) == null)));
var contains_manual_mode_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369).cljs$core$IFn$_invoke$arity$1(style) == null)));
var excluded_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),null], null), null);
var modes = new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234).cljs$core$IFn$_invoke$arity$1(style);
var mode_names = ((cljs.core.map_QMARK_(modes))?cljs.core.set(cljs.core.keys(modes)):((cljs.core.vector_QMARK_(modes))?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,modes)):cljs.core.PersistentHashSet.EMPTY
));
var contains_modes_not_excluded_QMARK_ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,excluded_modes),mode_names));
var inline_style = stylefy.impl.conversion.garden_units__GT_css(stylefy.impl.utils.remove_special_keywords(style));
if(((contains_media_queries_QMARK_) || (contains_feature_queries_QMARK_) || (contains_manual_mode_QMARK_) || (contains_modes_not_excluded_QMARK_))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([return_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null)], 0))], null)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([return_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),inline_style], null)], 0));
}
}
});
stylefy.impl.styles.use_style_BANG_ = (function stylefy$impl$styles$use_style_BANG_(style,options,style_created_handler){
stylefy.impl.state.check_stylefy_initialisation();

var style_with_global_vendors = ((cljs.core.empty_QMARK_(style))?null:stylefy.impl.styles.add_global_vendors(style));
var style_hash = stylefy.impl.hashing.hash_style(style_with_global_vendors);
var already_created = stylefy.impl.dom.style_by_hash(cljs.core.deref(stylefy.impl.dom.dom),style_hash);
if(((cljs.core.seq(style_with_global_vendors)) && ((!((style_hash == null)))) && (cljs.core.not(already_created)))){
stylefy.impl.styles.create_style_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),style_with_global_vendors,new cljs.core.Keyword(null,"hash","hash",-13781596),style_hash], null),style_created_handler);
} else {
}

return stylefy.impl.styles.style_return_value(style_with_global_vendors,style_hash,options);
});
stylefy.impl.styles.use_sub_style_BANG_ = (function stylefy$impl$styles$use_sub_style_BANG_(style,sub_style,options,style_created_handler){
var resolved_sub_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style),sub_style);
if(cljs.core.truth_(resolved_sub_style)){
return stylefy.impl.styles.use_style_BANG_(resolved_sub_style,options,style_created_handler);
} else {
return stylefy.impl.log.warn(["Sub-style ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_style], 0))," not found in style: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0))].join(''));
}
});
stylefy.impl.styles.sub_style = (function stylefy$impl$styles$sub_style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29097 = arguments.length;
var i__4731__auto___29098 = (0);
while(true){
if((i__4731__auto___29098 < len__4730__auto___29097)){
args__4736__auto__.push((arguments[i__4731__auto___29098]));

var G__29099 = (i__4731__auto___29098 + (1));
i__4731__auto___29098 = G__29099;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic = (function (style,sub_styles){
var resolved_sub_style = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29063_SHARP_,p2__29064_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__29063_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),p2__29064_SHARP_], null));
}),style,sub_styles);
if(cljs.core.truth_(resolved_sub_style)){
return resolved_sub_style;
} else {
return stylefy.impl.log.warn(["Sub-style ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_styles], 0))," not found in style: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0))].join(''));
}
}));

(stylefy.impl.styles.sub_style.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stylefy.impl.styles.sub_style.cljs$lang$applyTo = (function (seq29065){
var G__29066 = cljs.core.first(seq29065);
var seq29065__$1 = cljs.core.next(seq29065);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29066,seq29065__$1);
}));

stylefy.impl.styles.prepare_styles = (function stylefy$impl$styles$prepare_styles(var_args){
var G__29068 = arguments.length;
switch (G__29068) {
case 1:
return stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1 = (function (styles){
return stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2(styles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),true], null));
}));

(stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2 = (function (styles,p__29069){
var map__29070 = p__29069;
var map__29070__$1 = (((((!((map__29070 == null))))?(((((map__29070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29070):map__29070);
var _options = map__29070__$1;
var request_dom_update_after_done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29070__$1,new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510));
var styles_29103__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,styles);
var seq__29072_29104 = cljs.core.seq(styles_29103__$1);
var chunk__29073_29105 = null;
var count__29074_29106 = (0);
var i__29075_29107 = (0);
while(true){
if((i__29075_29107 < count__29074_29106)){
var style_29108 = chunk__29073_29105.cljs$core$IIndexed$_nth$arity$2(null,i__29075_29107);
stylefy.impl.styles.use_style_BANG_(style_29108,cljs.core.PersistentArrayMap.EMPTY,((function (seq__29072_29104,chunk__29073_29105,count__29074_29106,i__29075_29107,style_29108,styles_29103__$1,map__29070,map__29070__$1,_options,request_dom_update_after_done_QMARK_){
return (function (style__$1){
return stylefy.impl.dom.save_style(cljs.core.deref(stylefy.impl.dom.dom),style__$1);
});})(seq__29072_29104,chunk__29073_29105,count__29074_29106,i__29075_29107,style_29108,styles_29103__$1,map__29070,map__29070__$1,_options,request_dom_update_after_done_QMARK_))
);

var temp__5735__auto___29109 = cljs.core.vals(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_29108));
if(cljs.core.truth_(temp__5735__auto___29109)){
var sub_styles_29110 = temp__5735__auto___29109;
stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2(sub_styles_29110,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),false], null));
} else {
}


var G__29111 = seq__29072_29104;
var G__29112 = chunk__29073_29105;
var G__29113 = count__29074_29106;
var G__29114 = (i__29075_29107 + (1));
seq__29072_29104 = G__29111;
chunk__29073_29105 = G__29112;
count__29074_29106 = G__29113;
i__29075_29107 = G__29114;
continue;
} else {
var temp__5735__auto___29116 = cljs.core.seq(seq__29072_29104);
if(temp__5735__auto___29116){
var seq__29072_29117__$1 = temp__5735__auto___29116;
if(cljs.core.chunked_seq_QMARK_(seq__29072_29117__$1)){
var c__4550__auto___29118 = cljs.core.chunk_first(seq__29072_29117__$1);
var G__29120 = cljs.core.chunk_rest(seq__29072_29117__$1);
var G__29121 = c__4550__auto___29118;
var G__29122 = cljs.core.count(c__4550__auto___29118);
var G__29123 = (0);
seq__29072_29104 = G__29120;
chunk__29073_29105 = G__29121;
count__29074_29106 = G__29122;
i__29075_29107 = G__29123;
continue;
} else {
var style_29124 = cljs.core.first(seq__29072_29117__$1);
stylefy.impl.styles.use_style_BANG_(style_29124,cljs.core.PersistentArrayMap.EMPTY,((function (seq__29072_29104,chunk__29073_29105,count__29074_29106,i__29075_29107,style_29124,seq__29072_29117__$1,temp__5735__auto___29116,styles_29103__$1,map__29070,map__29070__$1,_options,request_dom_update_after_done_QMARK_){
return (function (style__$1){
return stylefy.impl.dom.save_style(cljs.core.deref(stylefy.impl.dom.dom),style__$1);
});})(seq__29072_29104,chunk__29073_29105,count__29074_29106,i__29075_29107,style_29124,seq__29072_29117__$1,temp__5735__auto___29116,styles_29103__$1,map__29070,map__29070__$1,_options,request_dom_update_after_done_QMARK_))
);

var temp__5735__auto___29125__$1 = cljs.core.vals(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_29124));
if(cljs.core.truth_(temp__5735__auto___29125__$1)){
var sub_styles_29126 = temp__5735__auto___29125__$1;
stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2(sub_styles_29126,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),false], null));
} else {
}


var G__29127 = cljs.core.next(seq__29072_29117__$1);
var G__29128 = null;
var G__29129 = (0);
var G__29130 = (0);
seq__29072_29104 = G__29127;
chunk__29073_29105 = G__29128;
count__29074_29106 = G__29129;
i__29075_29107 = G__29130;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(request_dom_update_after_done_QMARK_)){
return stylefy.impl.dom.update_dom_if_needed(cljs.core.deref(stylefy.impl.dom.dom));
} else {
return null;
}
}));

(stylefy.impl.styles.prepare_styles.cljs$lang$maxFixedArity = 2);

stylefy.impl.styles.init_global_vendor_prefixes = (function stylefy$impl$styles$init_global_vendor_prefixes(options){
var global_vendor_prefixes_options = new cljs.core.Keyword(null,"global-vendor-prefixes","global-vendor-prefixes",882986417).cljs$core$IFn$_invoke$arity$1(options);
return cljs.core.reset_BANG_(stylefy.impl.styles.global_vendor_prefixes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options)], null));
});

//# sourceMappingURL=stylefy.impl.styles.js.map
