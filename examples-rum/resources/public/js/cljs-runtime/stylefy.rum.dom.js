goog.provide('stylefy.rum.dom');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('garden.core');
goog.require('cljs.core.async');
goog.require('rum.core');
goog.require('stylefy.impl.cache');
goog.require('stylefy.impl.log');
goog.require('stylefy.impl.dom');
goog.require('stylefy.impl.state');
stylefy.rum.dom.styles_in_dom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
stylefy.rum.dom.dom_update_requested_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
stylefy.rum.dom.styles_as_css = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
stylefy.rum.dom.keyframes_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
stylefy.rum.dom.font_faces_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.rum.dom.custom_tags_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.rum.dom.custom_classes_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.rum.dom.style_by_hash = (function stylefy$rum$dom$style_by_hash(style_hash){
if(cljs.core.truth_(style_hash)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.rum.dom.styles_as_css),style_hash);
} else {
return null;
}
});
stylefy.rum.dom.update_style_tags_BANG_ = (function stylefy$rum$dom$update_style_tags_BANG_(node_stylefy,node_stylefy_constant){
var styles_in_css = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.rum.dom","css","stylefy.rum.dom/css",606562271),stylefy.rum.dom.style_by_hash),cljs.core.keys(cljs.core.deref(stylefy.rum.dom.styles_as_css)));
var keyframes_in_css = cljs.core.vals(cljs.core.deref(stylefy.rum.dom.keyframes_in_use));
var font_faces_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.rum.dom","css","stylefy.rum.dom/css",606562271),cljs.core.deref(stylefy.rum.dom.font_faces_in_use));
var custom_tags_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.rum.dom","css","stylefy.rum.dom/css",606562271),cljs.core.deref(stylefy.rum.dom.custom_tags_in_use));
var custom_classes_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.rum.dom","css","stylefy.rum.dom/css",606562271),cljs.core.deref(stylefy.rum.dom.custom_classes_in_use));
var new_style_constant_css = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(font_faces_in_use,keyframes_in_css,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([custom_tags_in_use,custom_classes_in_use], 0)));
var new_style_css = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,styles_in_css);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dommy.core.text(node_stylefy_constant),new_style_constant_css)){
} else {
dommy.core.set_text_BANG_(node_stylefy_constant,new_style_constant_css);
}

return dommy.core.set_text_BANG_(node_stylefy,new_style_css);
});
stylefy.rum.dom.mark_all_styles_added_in_dom_BANG_ = (function stylefy$rum$dom$mark_all_styles_added_in_dom_BANG_(){
var seq__28873 = cljs.core.seq(cljs.core.keys(cljs.core.deref(stylefy.rum.dom.styles_in_dom)));
var chunk__28874 = null;
var count__28875 = (0);
var i__28876 = (0);
while(true){
if((i__28876 < count__28875)){
var style_hash = chunk__28874.cljs$core$IIndexed$_nth$arity$2(null,i__28876);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.rum.dom.styles_in_dom),style_hash),true);


var G__28910 = seq__28873;
var G__28911 = chunk__28874;
var G__28912 = count__28875;
var G__28913 = (i__28876 + (1));
seq__28873 = G__28910;
chunk__28874 = G__28911;
count__28875 = G__28912;
i__28876 = G__28913;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28873);
if(temp__5735__auto__){
var seq__28873__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28873__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__28873__$1);
var G__28914 = cljs.core.chunk_rest(seq__28873__$1);
var G__28915 = c__4550__auto__;
var G__28916 = cljs.core.count(c__4550__auto__);
var G__28917 = (0);
seq__28873 = G__28914;
chunk__28874 = G__28915;
count__28875 = G__28916;
i__28876 = G__28917;
continue;
} else {
var style_hash = cljs.core.first(seq__28873__$1);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.rum.dom.styles_in_dom),style_hash),true);


var G__28918 = cljs.core.next(seq__28873__$1);
var G__28919 = null;
var G__28920 = (0);
var G__28921 = (0);
seq__28873 = G__28918;
chunk__28874 = G__28919;
count__28875 = G__28920;
i__28876 = G__28921;
continue;
}
} else {
return null;
}
}
break;
}
});
stylefy.rum.dom.get_stylefy_node = (function stylefy$rum$dom$get_stylefy_node(id,base_node,instance_id){
var final_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),(cljs.core.truth_(instance_id)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_id):null)].join('');
if((base_node == null)){
return document.querySelector(dommy.core.selector(final_id));
} else {
return base_node.querySelector(dommy.core.selector(final_id));
}
});
stylefy.rum.dom.update_dom = (function stylefy$rum$dom$update_dom(){
var node_stylefy = stylefy.rum.dom.get_stylefy_node(stylefy.impl.dom.stylefy_node_id,cljs.core.deref(stylefy.impl.dom.stylefy_base_node),cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));
var node_stylefy_constant = stylefy.rum.dom.get_stylefy_node(stylefy.impl.dom.stylefy_constant_node_id,cljs.core.deref(stylefy.impl.dom.stylefy_base_node),cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));
if(cljs.core.truth_((function (){var and__4109__auto__ = node_stylefy;
if(cljs.core.truth_(and__4109__auto__)){
return node_stylefy_constant;
} else {
return and__4109__auto__;
}
})())){
stylefy.rum.dom.update_style_tags_BANG_(node_stylefy,node_stylefy_constant);

cljs.core.reset_BANG_(stylefy.rum.dom.dom_update_requested_QMARK_,false);

try{stylefy.impl.cache.cache_styles.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.rum.dom.styles_as_css),cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));
}catch (e28877){var e_28922 = e28877;
stylefy.impl.log.warn(["Unable to cache styles, error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_28922)].join(''));

stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));

}
return stylefy.rum.dom.mark_all_styles_added_in_dom_BANG_();
} else {
return stylefy.impl.log.error("stylefy is unable to find the required <style> tags!");
}
});
stylefy.rum.dom.update_dom_if_requested = (function stylefy$rum$dom$update_dom_if_requested(){
if(cljs.core.truth_(cljs.core.deref(stylefy.rum.dom.dom_update_requested_QMARK_))){
return stylefy.rum.dom.update_dom();
} else {
return null;
}
});
stylefy.rum.dom.request_asynchronous_dom_update = (function stylefy$rum$dom$request_asynchronous_dom_update(){
if(cljs.core.truth_(cljs.core.deref(stylefy.impl.state.stylefy_initialised_QMARK_))){
if(cljs.core.truth_(cljs.core.deref(stylefy.rum.dom.dom_update_requested_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(stylefy.rum.dom.dom_update_requested_QMARK_,true);

var c__26406__auto___28923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26407__auto__ = (function (){var switch__26274__auto__ = (function (state_28880){
var state_val_28881 = (state_28880[(1)]);
if((state_val_28881 === (1))){
var inst_28878 = stylefy.rum.dom.update_dom();
var state_28880__$1 = state_28880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28880__$1,inst_28878);
} else {
return null;
}
});
return (function() {
var stylefy$rum$dom$request_asynchronous_dom_update_$_state_machine__26275__auto__ = null;
var stylefy$rum$dom$request_asynchronous_dom_update_$_state_machine__26275__auto____0 = (function (){
var statearr_28882 = [null,null,null,null,null,null,null];
(statearr_28882[(0)] = stylefy$rum$dom$request_asynchronous_dom_update_$_state_machine__26275__auto__);

(statearr_28882[(1)] = (1));

return statearr_28882;
});
var stylefy$rum$dom$request_asynchronous_dom_update_$_state_machine__26275__auto____1 = (function (state_28880){
while(true){
var ret_value__26276__auto__ = (function (){try{while(true){
var result__26277__auto__ = switch__26274__auto__(state_28880);
if(cljs.core.keyword_identical_QMARK_(result__26277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26277__auto__;
}
break;
}
}catch (e28883){var ex__26278__auto__ = e28883;
var statearr_28884_28924 = state_28880;
(statearr_28884_28924[(2)] = ex__26278__auto__);


if(cljs.core.seq((state_28880[(4)]))){
var statearr_28885_28925 = state_28880;
(statearr_28885_28925[(1)] = cljs.core.first((state_28880[(4)])));

} else {
throw ex__26278__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26276__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28926 = state_28880;
state_28880 = G__28926;
continue;
} else {
return ret_value__26276__auto__;
}
break;
}
});
stylefy$rum$dom$request_asynchronous_dom_update_$_state_machine__26275__auto__ = function(state_28880){
switch(arguments.length){
case 0:
return stylefy$rum$dom$request_asynchronous_dom_update_$_state_machine__26275__auto____0.call(this);
case 1:
return stylefy$rum$dom$request_asynchronous_dom_update_$_state_machine__26275__auto____1.call(this,state_28880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stylefy$rum$dom$request_asynchronous_dom_update_$_state_machine__26275__auto__.cljs$core$IFn$_invoke$arity$0 = stylefy$rum$dom$request_asynchronous_dom_update_$_state_machine__26275__auto____0;
stylefy$rum$dom$request_asynchronous_dom_update_$_state_machine__26275__auto__.cljs$core$IFn$_invoke$arity$1 = stylefy$rum$dom$request_asynchronous_dom_update_$_state_machine__26275__auto____1;
return stylefy$rum$dom$request_asynchronous_dom_update_$_state_machine__26275__auto__;
})()
})();
var state__26408__auto__ = (function (){var statearr_28886 = f__26407__auto__();
(statearr_28886[(6)] = c__26406__auto___28923);

return statearr_28886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26408__auto__);
}));


return null;
}
} else {
return null;
}
});
stylefy.rum.dom.init_multi_instance = (function stylefy$rum$dom$init_multi_instance(p__28887){
var map__28888 = p__28887;
var map__28888__$1 = (((((!((map__28888 == null))))?(((((map__28888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28888):map__28888);
var _options = map__28888__$1;
var multi_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28888__$1,new cljs.core.Keyword(null,"multi-instance","multi-instance",-1525956512));
var base_node = new cljs.core.Keyword(null,"base-node","base-node",-275497090).cljs$core$IFn$_invoke$arity$1(multi_instance);
var instance_id = new cljs.core.Keyword(null,"instance-id","instance-id",951361263).cljs$core$IFn$_invoke$arity$1(multi_instance);
if((((instance_id == null)) || (typeof instance_id === 'string'))){
} else {
throw (new Error(["Assert failed: ",["instance-id must be string. Got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_node,instance_id], 0))].join(''),"\n","(or (nil? instance-id) (string? instance-id))"].join('')));
}

cljs.core.reset_BANG_(stylefy.impl.dom.stylefy_base_node,base_node);

return cljs.core.reset_BANG_(stylefy.impl.dom.stylefy_instance_id,instance_id);
});
stylefy.rum.dom.init_cache = (function stylefy$rum$dom$init_cache(options){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"use-caching?","use-caching?",427588313).cljs$core$IFn$_invoke$arity$1(options),false)){
stylefy.impl.cache.use_caching_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cache-options","cache-options",1443503739).cljs$core$IFn$_invoke$arity$1(options),cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));

var temp__5735__auto__ = stylefy.impl.cache.read_cache_value(stylefy.impl.cache.cache_key_styles(cljs.core.deref(stylefy.impl.dom.stylefy_instance_id)));
if(cljs.core.truth_(temp__5735__auto__)){
var cached_styles = temp__5735__auto__;
cljs.core.reset_BANG_(stylefy.rum.dom.styles_as_css,(function (){var or__4120__auto__ = cached_styles;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return cljs.core.reset_BANG_(stylefy.rum.dom.styles_in_dom,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28890_SHARP_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__28890_SHARP_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false)]);
}),cljs.core.keys(cached_styles))));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Stores the style in an atom. The style is going to be added into the DOM soon.
 */
stylefy.rum.dom.save_style = (function stylefy$rum$dom$save_style(p__28891){
var map__28892 = p__28891;
var map__28892__$1 = (((((!((map__28892 == null))))?(((((map__28892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28892):map__28892);
var _style = map__28892__$1;
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28892__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28892__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
if(cljs.core.truth_(css)){
} else {
throw (new Error(["Assert failed: ","Unable to save empty style!","\n","css"].join('')));
}

if(cljs.core.truth_(hash)){
} else {
throw (new Error(["Assert failed: ","Unable to save style without hash!","\n","hash"].join('')));
}

var style_to_be_saved = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.rum.dom","css","stylefy.rum.dom/css",606562271),css], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylefy.rum.dom.styles_as_css,cljs.core.assoc,hash,style_to_be_saved);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylefy.rum.dom.styles_in_dom,cljs.core.assoc,hash,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false));

return stylefy.rum.dom.request_asynchronous_dom_update();
});
stylefy.rum.dom.style_in_dom_QMARK_ = (function stylefy$rum$dom$style_in_dom_QMARK_(style_hash){
return cljs.core.boolean$(rum.core.react(cljs.core.get.cljs$core$IFn$_invoke$arity$2(rum.core.react(stylefy.rum.dom.styles_in_dom),style_hash)));
});
stylefy.rum.dom.add_keyframes = (function stylefy$rum$dom$add_keyframes(identifier,keyframes_as_css){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylefy.rum.dom.keyframes_in_use,cljs.core.assoc,identifier,keyframes_as_css);

stylefy.rum.dom.request_asynchronous_dom_update();

return null;
});
stylefy.rum.dom.add_font_face = (function stylefy$rum$dom$add_font_face(font_faces_as_css){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.rum.dom.font_faces_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.rum.dom","css","stylefy.rum.dom/css",606562271),font_faces_as_css], null));

stylefy.rum.dom.request_asynchronous_dom_update();

return null;
});
stylefy.rum.dom.add_tag = (function stylefy$rum$dom$add_tag(tag_css){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.rum.dom.custom_tags_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.rum.dom","css","stylefy.rum.dom/css",606562271),tag_css], null));

stylefy.rum.dom.request_asynchronous_dom_update();

return null;
});
stylefy.rum.dom.add_class = (function stylefy$rum$dom$add_class(class_as_css){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.rum.dom.custom_classes_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.rum.dom","css","stylefy.rum.dom/css",606562271),class_as_css], null));

stylefy.rum.dom.request_asynchronous_dom_update();

return null;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {stylefy.impl.dom.Dom}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
stylefy.rum.dom.RumDom = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(stylefy.rum.dom.RumDom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(stylefy.rum.dom.RumDom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k28895,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__28899 = k28895;
switch (G__28899) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28895,else__4377__auto__);

}
}));

(stylefy.rum.dom.RumDom.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__28900){
var vec__28901 = p__28900;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28901,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28901,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(stylefy.rum.dom.RumDom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#stylefy.rum.dom.RumDom{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(stylefy.rum.dom.RumDom.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28894){
var self__ = this;
var G__28894__$1 = this;
return (new cljs.core.RecordIter((0),G__28894__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(stylefy.rum.dom.RumDom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(stylefy.rum.dom.RumDom.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new stylefy.rum.dom.RumDom(self__.__meta,self__.__extmap,self__.__hash));
}));

(stylefy.rum.dom.RumDom.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(stylefy.rum.dom.RumDom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (coll__4371__auto__){
return (136101052 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
})(this__4370__auto____$1);
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(stylefy.rum.dom.RumDom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28896,other28897){
var self__ = this;
var this28896__$1 = this;
return (((!((other28897 == null)))) && ((this28896__$1.constructor === other28897.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28896__$1.__extmap,other28897.__extmap)));
}));

(stylefy.rum.dom.RumDom.prototype.stylefy$impl$dom$Dom$ = cljs.core.PROTOCOL_SENTINEL);

(stylefy.rum.dom.RumDom.prototype.stylefy$impl$dom$Dom$add_tag$arity$2 = (function (this$,tag_as_css){
var self__ = this;
var this$__$1 = this;
return stylefy.rum.dom.add_tag(tag_as_css);
}));

(stylefy.rum.dom.RumDom.prototype.stylefy$impl$dom$Dom$style_in_dom_QMARK_$arity$2 = (function (this$,style_hash){
var self__ = this;
var this$__$1 = this;
return stylefy.rum.dom.style_in_dom_QMARK_(style_hash);
}));

(stylefy.rum.dom.RumDom.prototype.stylefy$impl$dom$Dom$save_style$arity$2 = (function (this$,style){
var self__ = this;
var this$__$1 = this;
return stylefy.rum.dom.save_style(style);
}));

(stylefy.rum.dom.RumDom.prototype.stylefy$impl$dom$Dom$add_font_face$arity$2 = (function (this$,font_face_as_css){
var self__ = this;
var this$__$1 = this;
return stylefy.rum.dom.add_font_face(font_face_as_css);
}));

(stylefy.rum.dom.RumDom.prototype.stylefy$impl$dom$Dom$init_multi_instance$arity$2 = (function (this$,options){
var self__ = this;
var this$__$1 = this;
return stylefy.rum.dom.init_multi_instance(options);
}));

(stylefy.rum.dom.RumDom.prototype.stylefy$impl$dom$Dom$add_keyframes$arity$3 = (function (this$,identifier,keyframes_as_css){
var self__ = this;
var this$__$1 = this;
return stylefy.rum.dom.add_keyframes(identifier,keyframes_as_css);
}));

(stylefy.rum.dom.RumDom.prototype.stylefy$impl$dom$Dom$update_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return stylefy.rum.dom.update_dom();
}));

(stylefy.rum.dom.RumDom.prototype.stylefy$impl$dom$Dom$update_dom_if_needed$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return stylefy.rum.dom.update_dom_if_requested();
}));

(stylefy.rum.dom.RumDom.prototype.stylefy$impl$dom$Dom$init_cache$arity$2 = (function (this$,options){
var self__ = this;
var this$__$1 = this;
return stylefy.rum.dom.init_cache(options);
}));

(stylefy.rum.dom.RumDom.prototype.stylefy$impl$dom$Dom$style_by_hash$arity$2 = (function (this$,style_hash){
var self__ = this;
var this$__$1 = this;
return stylefy.rum.dom.style_by_hash(style_hash);
}));

(stylefy.rum.dom.RumDom.prototype.stylefy$impl$dom$Dom$add_class$arity$2 = (function (this$,class_as_css){
var self__ = this;
var this$__$1 = this;
return stylefy.rum.dom.add_class(class_as_css);
}));

(stylefy.rum.dom.RumDom.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new stylefy.rum.dom.RumDom(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(stylefy.rum.dom.RumDom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__28894){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__28904 = cljs.core.keyword_identical_QMARK_;
var expr__28905 = k__4382__auto__;
return (new stylefy.rum.dom.RumDom(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__28894),null));
}));

(stylefy.rum.dom.RumDom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(stylefy.rum.dom.RumDom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__28894){
var self__ = this;
var this__4373__auto____$1 = this;
return (new stylefy.rum.dom.RumDom(G__28894,self__.__extmap,self__.__hash));
}));

(stylefy.rum.dom.RumDom.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4380__auto__,(0)),cljs.core._nth(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(stylefy.rum.dom.RumDom.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(stylefy.rum.dom.RumDom.cljs$lang$type = true);

(stylefy.rum.dom.RumDom.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"stylefy.rum.dom/RumDom",null,(1),null));
}));

(stylefy.rum.dom.RumDom.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"stylefy.rum.dom/RumDom");
}));

/**
 * Positional factory function for stylefy.rum.dom/RumDom.
 */
stylefy.rum.dom.__GT_RumDom = (function stylefy$rum$dom$__GT_RumDom(){
return (new stylefy.rum.dom.RumDom(null,null,null));
});

/**
 * Factory function for stylefy.rum.dom/RumDom, taking a map of keywords to field values.
 */
stylefy.rum.dom.map__GT_RumDom = (function stylefy$rum$dom$map__GT_RumDom(G__28898){
var extmap__4413__auto__ = (function (){var G__28907 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__28898);
if(cljs.core.record_QMARK_(G__28898)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28907);
} else {
return G__28907;
}
})();
return (new stylefy.rum.dom.RumDom(null,cljs.core.not_empty(extmap__4413__auto__),null));
});


//# sourceMappingURL=stylefy.rum.dom.js.map
