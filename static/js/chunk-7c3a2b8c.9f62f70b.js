(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c3a2b8c"],{"9b99":function(t,e,n){"use strict";n("c80b")},"9ca2":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-page-header",{staticClass:"download-header",attrs:{content:"Download "+this.$route.params.title},on:{back:function(e){return t.$router.back()}}}),n("el-table",{staticClass:"download-container",attrs:{"show-header":!1,"cell-style":{padding:"4px"},data:t.urls,lazy:!0}},[n("el-table-column",{attrs:{prop:"name"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-link",{attrs:{href:e.row.url,underline:!1}},[t._v(" "+t._s(e.row.name)+" ")])]}}])})],1)],1)},r=[],o=(n("7db0"),n("2b0e")),l=o["default"].extend({name:"DownloadEntry",computed:{urls:function(){var t,e=this;return(null===(t=this.$store.state.isoContents.find((function(t){return t.distro==e.$route.params.title&&t.category==e.$route.params.category})))||void 0===t?void 0:t.urls)||[]}}}),s=l,u=(n("9b99"),n("2877")),c=Object(u["a"])(s,a,r,!1,null,null,null);e["default"]=c.exports},c80b:function(t,e,n){}}]);
//# sourceMappingURL=chunk-7c3a2b8c.9f62f70b.js.map