goog.provide('stylefy.examples.custom_tags');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('stylefy.core');
stylefy.core.tag("code",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"lightyellow","lightyellow",1576303380),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"5px","5px",-1871779569),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null));
stylefy.core.tag("ul",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),new cljs.core.Keyword(null,"upper-roman","upper-roman",-2049918490),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"10px","10px",-859606082)], null));
stylefy.examples.custom_tags.custom_tags = (function stylefy$examples$custom_tags$custom_tags(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"(map (partial clojure.pprint/cl-format nil \"~@r\") (range 1 5))"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"One"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Two"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Three"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Four"], null)], null)], null);
});
});

//# sourceMappingURL=stylefy.examples.custom_tags.js.map
