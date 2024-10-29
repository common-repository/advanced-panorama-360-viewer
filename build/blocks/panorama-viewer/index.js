(()=>{"use strict";const e=window.wp.blocks,t=window.React,n=window.wp.blockEditor;function a({attributes:e,viewer:n,setViewer:a}){const{clientId:r,scene:o,options:l={}}=e,i=(0,t.useRef)();return(0,t.useEffect)((()=>{if(i.current&&window.pannellum){i.current.innerHTML='<div id="controls"></div>';const e=window.pannellum.viewer(i.current,{type:"equirectangular",scenes:[o],...l});window.viewer=e,a(e)}return()=>{n&&n.destroy()}}),[e]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{id:r,ref:i},(0,t.createElement)("div",{id:"controls"})))}const r=window.wp.i18n,o=window.wp.element;var l=Symbol.for("immer-nothing"),i=Symbol.for("immer-draftable"),c=Symbol.for("immer-state");function s(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var u=Object.getPrototypeOf;function p(e){return!!e&&!!e[c]}function d(e){return!!e&&(m(e)||Array.isArray(e)||!!e[i]||!!e.constructor?.[i]||v(e)||w(e))}var f=Object.prototype.constructor.toString();function m(e){if(!e||"object"!=typeof e)return!1;const t=u(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===f}function _(e,t){0===h(e)?Reflect.ownKeys(e).forEach((n=>{t(n,e[n],e)})):e.forEach(((n,a)=>t(a,n,e)))}function h(e){const t=e[c];return t?t.type_:Array.isArray(e)?1:v(e)?2:w(e)?3:0}function y(e,t){return 2===h(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function b(e,t,n){const a=h(e);2===a?e.set(t,n):3===a?e.add(n):e[t]=n}function v(e){return e instanceof Map}function w(e){return e instanceof Set}function g(e){return e.copy_||e.base_}function E(e,t){if(v(e))return new Map(e);if(w(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=m(e);if(!0===t||"class_only"===t&&!n){const t=Object.getOwnPropertyDescriptors(e);delete t[c];let n=Reflect.ownKeys(t);for(let a=0;a<n.length;a++){const r=n[a],o=t[r];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[r]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[r]})}return Object.create(u(e),t)}{const t=u(e);if(null!==t&&n)return{...e};const a=Object.create(t);return Object.assign(a,e)}}function S(e,t=!1){return C(e)||p(e)||!d(e)||(h(e)>1&&(e.set=e.add=e.clear=e.delete=P),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>S(t,!0)))),e}function P(){s(2)}function C(e){return Object.isFrozen(e)}var O,x={};function z(e){const t=x[e];return t||s(0),t}function A(){return O}function j(e,t){t&&(z("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function k(e){F(e),e.drafts_.forEach(R),e.drafts_=null}function F(e){e===O&&(O=e.parent_)}function D(e){return O={drafts_:[],parent_:O,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function R(e){const t=e[c];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function N(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[c].modified_&&(k(t),s(4)),d(e)&&(e=$(t,e),t.parent_||M(t,e)),t.patches_&&z("Patches").generateReplacementPatches_(n[c].base_,e,t.patches_,t.inversePatches_)):e=$(t,n,[]),k(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==l?e:void 0}function $(e,t,n){if(C(t))return t;const a=t[c];if(!a)return _(t,((r,o)=>I(e,a,t,r,o,n))),t;if(a.scope_!==e)return t;if(!a.modified_)return M(e,a.base_,!0),a.base_;if(!a.finalized_){a.finalized_=!0,a.scope_.unfinalizedDrafts_--;const t=a.copy_;let r=t,o=!1;3===a.type_&&(r=new Set(t),t.clear(),o=!0),_(r,((r,l)=>I(e,a,t,r,l,n,o))),M(e,t,!1),n&&e.patches_&&z("Patches").generatePatches_(a,n,e.patches_,e.inversePatches_)}return a.copy_}function I(e,t,n,a,r,o,l){if(p(r)){const l=$(e,r,o&&t&&3!==t.type_&&!y(t.assigned_,a)?o.concat(a):void 0);if(b(n,a,l),!p(l))return;e.canAutoFreeze_=!1}else l&&n.add(r);if(d(r)&&!C(r)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;$(e,r),t&&t.scope_.parent_||"symbol"==typeof a||!Object.prototype.propertyIsEnumerable.call(n,a)||M(e,r)}}function M(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&S(t,n)}var L={get(e,t){if(t===c)return e;const n=g(e);if(!y(n,t))return function(e,t,n){const a=B(t,n);return a?"value"in a?a.value:a.get?.call(e.draft_):void 0}(e,n,t);const a=n[t];return e.finalized_||!d(a)?a:a===U(e.base_,t)?(K(e),e.copy_[t]=W(a,e)):a},has:(e,t)=>t in g(e),ownKeys:e=>Reflect.ownKeys(g(e)),set(e,t,n){const a=B(g(e),t);if(a?.set)return a.set.call(e.draft_,n),!0;if(!e.modified_){const a=U(g(e),t),l=a?.[c];if(l&&l.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(((r=n)===(o=a)?0!==r||1/r==1/o:r!=r&&o!=o)&&(void 0!==n||y(e.base_,t)))return!0;K(e),V(e)}var r,o;return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==U(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,K(e),V(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=g(e),a=Reflect.getOwnPropertyDescriptor(n,t);return a?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:a.enumerable,value:n[t]}:a},defineProperty(){s(11)},getPrototypeOf:e=>u(e.base_),setPrototypeOf(){s(12)}},T={};function U(e,t){const n=e[c];return(n?g(n):e)[t]}function B(e,t){if(!(t in e))return;let n=u(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=u(n)}}function V(e){e.modified_||(e.modified_=!0,e.parent_&&V(e.parent_))}function K(e){e.copy_||(e.copy_=E(e.base_,e.scope_.immer_.useStrictShallowCopy_))}function W(e,t){const n=v(e)?z("MapSet").proxyMap_(e,t):w(e)?z("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),a={type_:n?1:0,scope_:t?t.scope_:A(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let r=a,o=L;n&&(r=[a],o=T);const{revoke:l,proxy:i}=Proxy.revocable(r,o);return a.draft_=i,a.revoke_=l,i}(e,t);return(t?t.scope_:A()).drafts_.push(n),n}function q(e){if(!d(e)||C(e))return e;const t=e[c];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=E(e,t.scope_.immer_.useStrictShallowCopy_)}else n=E(e,!0);return _(n,((e,t)=>{b(n,e,q(t))})),t&&(t.finalized_=!1),n}_(L,((e,t)=>{T[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),T.deleteProperty=function(e,t){return T.set.call(this,e,t,void 0)},T.set=function(e,t,n){return L.set.call(this,e[0],t,n,e[0])};var H=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"==typeof e&&"function"!=typeof t){const n=t;t=e;const a=this;return function(e=n,...r){return a.produce(e,(e=>t.call(this,e,...r)))}}let a;if("function"!=typeof t&&s(6),void 0!==n&&"function"!=typeof n&&s(7),d(e)){const r=D(this),o=W(e,void 0);let l=!0;try{a=t(o),l=!1}finally{l?k(r):F(r)}return j(r,n),N(a,r)}if(!e||"object"!=typeof e){if(a=t(e),void 0===a&&(a=e),a===l&&(a=void 0),this.autoFreeze_&&S(a,!0),n){const t=[],r=[];z("Patches").generateReplacementPatches_(e,a,t,r),n(t,r)}return a}s(1)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...n)=>this.produceWithPatches(t,(t=>e(t,...n)));let n,a;return[this.produce(e,t,((e,t)=>{n=e,a=t})),n,a]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){var t;d(e)||s(8),p(e)&&(p(t=e)||s(10),e=q(t));const n=D(this),a=W(e,void 0);return a[c].isManual_=!0,F(n),a}finishDraft(e,t){const n=e&&e[c];n&&n.isManual_||s(9);const{scope_:a}=n;return j(a,t),N(void 0,a)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const a=t[n];if(0===a.path.length&&"replace"===a.op){e=a.value;break}}n>-1&&(t=t.slice(n+1));const a=z("Patches").applyPatches_;return p(e)?a(e,t):this.produce(e,(e=>a(e,t)))}},J=H.produce;H.produceWithPatches.bind(H),H.setAutoFreeze.bind(H),H.setUseStrictShallowCopy.bind(H),H.applyPatches.bind(H),H.createDraft.bind(H),H.finishDraft.bind(H);const{Fragment:Z}=wp.element,{MediaUpload:G,MediaUploadCheck:X}=wp.blockEditor,{Button:Q,PanelRow:Y,TextControl:ee}=wp.components,te=function({value:e,type:n=[],onSelect:a,placeholder:r,label:o}){return(0,t.createElement)("div",{className:"bMediaUpload"},(0,t.createElement)(Z,null,o&&(0,t.createElement)("label",null,o),(0,t.createElement)(Y,{className:"width-100"},(0,t.createElement)(X,{fallback:(0,t.createElement)(Q,{icon:"upload",className:"button button-primary",onClick:()=>{const e=wp.media({button:{text:"Select"},multiple:!1});e.open(),e.on("select",(()=>{var t=e.state().get("selection").first().toJSON();a(t.url)}))}})},(0,t.createElement)(G,{allowedTypes:n,onSelect:e=>a(e.url),render:({open:e})=>(0,t.createElement)(Q,{className:"button button-primary",onClick:e,icon:"upload"})})),(0,t.createElement)(ee,{value:e,onChange:e=>a(e),placeholder:r}))))},ne=window.wp.components,{Panel:ae,PanelBody:re,PanelRow:oe,FormToggle:le}=wp.components;function ie({attributes:e,setAttributes:n}){const{options:a,scene:o}=e,{title:l,author:i,panorama:c}=o,s=(e,t)=>{const a=J(o,(n=>{n[e]=t}));n({scene:a})};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(ae,null,(0,t.createElement)(re,{title:"Scene",initialOpen:!0},(0,t.createElement)(te,{value:c,placeholder:(0,r.__)("Scene","advanced-panorama-360-viewer"),onSelect:e=>s("panorama",e),type:["image"],label:(0,r.__)("Scene URL","advanced-panorama-360-viewer")}),(0,t.createElement)(ne.TextControl,{label:(0,r.__)("Title","advanced-panorama-360-viewer"),value:l,onChange:e=>s("title",e)}),(0,t.createElement)(ne.TextControl,{label:(0,r.__)("Author","advanced-panorama-360-viewer"),value:i||"",onChange:e=>s("author",e)})),(0,t.createElement)(re,{title:(0,r.__)("Options","advanced-panorama-360-viewer"),initialOpen:!1},(0,t.createElement)(oe,null,(0,t.createElement)("label",null,(0,r.__)("Autoload","advanced-panorama-360-viewer")),(0,t.createElement)(le,{checked:a?.autoLoad,onChange:()=>n({options:{...a,autoLoad:!a?.autoLoad}})})),(0,t.createElement)(oe,null,(0,t.createElement)("label",null,(0,r.__)("Mouse Draggable","advanced-panorama-360-viewer")),(0,t.createElement)(le,{checked:a?.draggable,onChange:()=>n({options:{...a,draggable:!a?.draggable}})})))))}const{__experimentalUnitControl:ce}=wp.components,se=e=>{const{units:n=[{value:"px",label:"px",default:16},{value:"em",label:"em",default:1}],value:a,onChange:r,isResetValueOnUnitChange:o=!0,...l}=e;return(0,t.createElement)("div",{id:"BUnitControl"},(0,t.createElement)(ce,{onChange:r,isResetValueOnUnitChange:o,value:a,units:n,...l}))},{Panel:ue,PanelBody:pe,PanelRow:de}=wp.components;function fe({attributes:e,setAttributes:n}){const{style:a}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(ue,null,(0,t.createElement)(pe,{title:(0,r.__)("Style","advanced-panorama-360-viewer")},(0,t.createElement)(de,null,(0,t.createElement)("label",null,(0,r.__)("Width","advanced-panorama-360-viewer")),(0,t.createElement)(se,{value:a?.width,onChange:e=>n({style:{...a,width:e}}),units:[{value:"px",label:"px",default:500},{value:"%",label:"%",default:100}]})),(0,t.createElement)(de,null,(0,t.createElement)("label",null,(0,r.__)("Height","advanced-panorama-360-viewer")),(0,t.createElement)(se,{value:a?.height,onChange:e=>n({style:{...a,height:e}}),units:[{value:"px",label:"px",default:500},{value:"%",label:"%",default:100},{value:"vh",label:"vh",default:100}]})))))}function me(){setTimeout((()=>{const e=document.querySelectorAll(".components-panel__body-title button");function t(){this.removeEventListener("click",t),e.forEach((e=>{"true"!==e.getAttribute("aria-expanded")||e.isEqualNode(this)||e.click()})),setTimeout((()=>{this.addEventListener("click",t)}),500)}e.forEach((e=>{e.addEventListener("click",t)}))}),500)}const{TabPanel:_e,PanelBody:he,PanelRow:ye}=wp.components,{InspectorControls:be}=wp.blockEditor,ve=({attributes:e,setAttributes:n,isSelected:a})=>{const[l,i]=(0,o.useState)(!1),c=wp.data.select("core/editor")?.getCurrentPostType()||"product",s=wp.data.select("core/editor")?.getCurrentPostId();return(0,o.useEffect)((()=>{me()}),[a]),(0,t.createElement)(be,null,"ap360v-viewer"===c&&(0,t.createElement)(he,null,(0,t.createElement)(ye,null,(0,t.createElement)(ne.ClipboardButton,{style:{width:"100%",justifyContent:"center"},variant:"primary",text:`[advance_panorama_viewer id=${s}]`,onCopy:()=>i(!0),onFinishCopy:()=>i(!1)},l?"Copied!":"Copy Shortcode"))),(0,t.createElement)(_e,{className:"ap360v-tab-panel",activeClass:"active",onSelect:me,tabs:[{name:"general",title:(0,r.__)("General","advanced-panorama-360-viewer"),className:"general"},{name:"style",title:(0,r.__)("Style","advanced-panorama-360-viewer"),className:"style"}]},(a=>(0,t.createElement)("span",null,"general"===a.name&&(0,t.createElement)(ie,{attributes:e,setAttributes:n}),"style"===a.name&&(0,t.createElement)(fe,{attributes:e,setAttributes:n})))))};function we({attributes:e}){const{clientId:n,style:a,scene:r,additional:o,align:l,options:i}=e,[c,s]=(0,t.useState)();return(0,t.useEffect)((()=>{let e=`#${n} .pnlm-title-box {display: ${r.title?"":"none"};}`;e+=`#${n} .pnlm-author-box {display: ${r.author?"":"none"};}`,e+=`#${n} {height: ${a.height}; width: ${a.width}}`,e+=`#${n} .next_prev{display: ${i?.nextPrevBtn?"flex":"none"};}`,e+=`#${n} {${"right"===l?"margin-left:auto":"center"===l?"margin: auto":""}}`,e+=o?.CSS,s(e)}),[r,a,n,o,l]),(0,t.createElement)("style",null,c)}const ge=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ap360v/panorama-viewer","version":"1.0.0","title":"Advanced 360 Panorama Viewer","category":"media","icon":"format-image","description":"Display a 360-degree panorama image or video.","supports":{"html":false,"align":["wide","full"]},"textdomain":"advanced-panorama-360-viewer","attributes":{"clientId":{"type":"string","default":"uniqueId"},"align":{"type":"string","default":""},"scene":{"type":"object","default":{"title":"First Scene","panorama":"","hotSpots":[]}},"defaultScene":{"type":"string","default":""},"options":{"type":"object","default":{"autoLoad":true,"autoRotate":0,"draggable":true,"showControls":true,"nextPrevBtn":false,"keyboardZoom":false,"mouseZoom":false,"compass":false,"sceneFadeDuration":1000,"preview":"","default":{"firstScene":"0"}}},"controls":{"type":"object","default":{"moveUp":false,"moveRight":false,"moveDown":false,"moveLeft":false,"zoomIn":false,"zoomOut":false,"fullscreen":false}},"style":{"type":"object","default":{"height":"400px","width":"100%"}},"css":{"type":"string","default":""},"additional":{"type":"object","default":{"Class":"","ID":"","CSS":""}}},"editorScript":["file:./index.js","pannellum-2.5.6"],"editorStyle":["file:./index.css"],"style":["file:./view.css","pannellum-2.5.6"],"viewScript":["file:./view.js","pannellum-2.5.6"],"render":"file:./render.php"}');(0,e.registerBlockType)(ge.name,{...ge,edit:function(e){const[r,o]=(0,t.useState)(null),{attributes:l,setAttributes:i}=e;return(0,t.useEffect)((()=>{i({clientId:"advanced-panorama-360-viewer"+e.clientId.substr(0,8)})}),[e.clientId]),(0,t.createElement)("div",{...(0,n.useBlockProps)()},(0,t.createElement)(ve,{...e}),(0,t.createElement)(we,{attributes:l}),(0,t.createElement)(a,{attributes:l,viewer:r,setViewer:o}))},save:()=>null})})();