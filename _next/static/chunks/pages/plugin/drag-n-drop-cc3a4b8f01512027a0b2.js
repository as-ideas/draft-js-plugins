(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[903],{36154:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(2784),r=n(6277),a=(n(26832),n(34721)),i=n.n(a),c=o.createElement;function s(e){var t=e.code,n=e.className,o=e.name,a=(0,r.Z)(i().root,n),s=o?i().name:i().hiddenName,l=(0,r.Z)(i().code,"language-".concat(o&&o.endsWith("css")?"css":"js"));return c("div",{className:a},c("div",{className:s},o),c("pre",{className:l},c("code",null,t)))}},39646:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(2784),r=n(6277),a=(n(26832),n(78267)),i=n.n(a),c=o.createElement;function s(e){var t=e.code,n=e.className,o=(0,r.Z)(i().root,n);return c("span",{className:o},c("code",{dangerouslySetInnerHTML:{__html:t}}))}},93986:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(2784),r=n(18476),a=n.n(r),i=n(74157),c=n(47100),s=n(99428),l=n(62334),u=o.createElement;function d(e){var t=e.children;return(0,o.useEffect)((function(){a().highlightAll()}),[]),u("div",null,u(i.Z,null),u(c.Z,null),t,u(s.Z,null),u(l.Z,null))}},35531:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var o=n(84558),r=n(33831),a=n(64583),i=n(60942),c=n(10389),s=n(2784),l=n(76047),u=n(45565),d=n(26804),f=n(99167),g=n.n(f),p=n(36154),y=n(71520),m=n(77243),h=n(1503),v=n(64705),S=n(51747),k=n(95597),b=n(74782),C=n(18056),E=n.n(C),K=s.createElement;function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,i.Z)(this,n)}}var Z=(0,k.Z)(),w=(0,b.Z)(),B=(0,v.lM)(Z.decorator,w.decorator),R=[w,Z,(0,S.Z)({decorator:B})],A={entityMap:{0:{type:"IMAGE",mutability:"IMMUTABLE",data:{src:"/images/canada-landscape-small.jpg"}}},blocks:[{key:"9gm3s",text:"You can have images in your text field which are draggable. Hover over the image press down your mouse button and drag it to another position inside the editor.",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"ov7r",text:" ",type:"atomic",depth:0,inlineStyleRanges:[],entityRanges:[{offset:0,length:1,key:0}],data:{}},{key:"e23a8",text:"You can checkout the alignment tool plugin documentation to see how to build a compatible block plugin \u2026",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}}]},O=function(e){(0,a.Z)(n,e);var t=_(n);function n(){var e;(0,o.Z)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),(0,m.Z)((0,y.Z)(e),"state",{editorState:h.EditorState.createWithContent((0,h.convertFromRaw)(A))}),(0,m.Z)((0,y.Z)(e),"onChange",(function(t){e.setState({editorState:t})})),(0,m.Z)((0,y.Z)(e),"focus",(function(){e.editor.focus()})),e}return(0,r.Z)(n,[{key:"render",value:function(){var e=this;return K("div",null,K("div",{className:E().editor,onClick:this.focus},K(v.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:R,ref:function(t){e.editor=t}})))}}]),n}(s.Component),N=n(15702),P=n(39646),x=n(93986),M=s.createElement;function F(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,i.Z)(this,n)}}var j=function(e){(0,a.Z)(n,e);var t=F(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,r.Z)(n,[{key:"render",value:function(){return M(x.Z,null,M(l.Z,null,M(d.Z,{level:2},"Drag'n'Drop"),M(d.Z,{level:3},"Supported Environment"),M("ul",{className:g().list},M("li",{className:g().listEntry},"Desktop: Yes"),M("li",{className:g().listEntry},"Mobile: No"),M("li",{className:g().listEntry},"Screen-reader: No"))),M(u.Z,null,M(d.Z,{level:2},"Getting Started"),M(p.Z,{code:"npm install @draft-js-plugins/editor"}),M(p.Z,{code:"npm install @draft-js-plugins/focus"}),M(p.Z,{code:"npm install @draft-js-plugins/drag-n-drop"}),M(p.Z,{code:"// It is important to import the Editor which accepts plugins.\n\nimport Editor from '@draft-js-plugins/editor';\n\nimport createImagePlugin from '@draft-js-plugins/image';\nimport React from 'react';\n\nconst imagePlugin = createImagePlugin();\n\n// The Editor accepts an array of plugins. In this case, only the imagePlugin\n// is passed in, although it is possible to pass in multiple plugins.\nconst MyEditor = ({ editorState, onChange }) => (\n  <Editor\n    editorState={editorState}\n    onChange={onChange}\n    plugins={[imagePlugin]}\n  />\n);\n\nexport default MyEditor;\n",name:"gettingStarted.js"}),M(d.Z,{level:3},"Importing the default styles"),M("p",null,"The plugin ships with a default styling available at this location in the installed package: \xa0",M(P.Z,{code:"node_modules/@draft-js-plugins/drag-n-drop/lib/plugin.css"})),M(d.Z,{level:4},"Webpack Usage"),M("ul",{className:g().list},M("li",{className:g().listEntry},"1. Install Webpack loaders: \xa0",M(P.Z,{code:"npm i style-loader css-loader --save-dev"})),M("li",{className:g().listEntry},"2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.",M(p.Z,{code:"module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",className:g().guideCodeBlock})),M("li",{className:g().listEntry},"3. Add the below import line to your component to tell Webpack to inject the style to your component.",M(p.Z,{code:"import '@draft-js-plugins/image/lib/plugin.css';",className:g().guideCodeBlock})),M("li",{className:g().listEntry},"4. Restart Webpack.")),M(d.Z,{level:4},"Browserify Usage"),M("p",null,"Please help, by submiting a Pull Request to the"," ",M(N.Z,{href:"https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Image/index.js"},"documentation"),".")),M(l.Z,null,M(d.Z,{level:2},"Configuration Parameters")),M(l.Z,null,M(d.Z,{level:2},"Image + Drag'n'Drop"),M(O,null),M(p.Z,{code:"import React, { Component } from 'react';\nimport { convertFromRaw, EditorState } from 'draft-js';\n\nimport Editor, { composeDecorators } from '@draft-js-plugins/editor';\n\nimport createImagePlugin from '@draft-js-plugins/image';\n\nimport createFocusPlugin from '@draft-js-plugins/focus';\n\nimport createBlockDndPlugin from '@draft-js-plugins/drag-n-drop';\nimport editorStyles from './editorStyles.module.css';\n\nconst focusPlugin = createFocusPlugin();\nconst blockDndPlugin = createBlockDndPlugin();\n\nconst decorator = composeDecorators(\n  focusPlugin.decorator,\n  blockDndPlugin.decorator\n);\nconst imagePlugin = createImagePlugin({ decorator });\n\nconst plugins = [blockDndPlugin, focusPlugin, imagePlugin];\n\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: 'IMAGE',\n      mutability: 'IMMUTABLE',\n      data: {\n        src: '/images/canada-landscape-small.jpg',\n      },\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'You can have images in your text field which are draggable. Hover over the image press down your mouse button and drag it to another position inside the editor.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n    {\n      key: 'e23a8',\n      text:\n        'You can checkout the alignment tool plugin documentation to see how to build a compatible block plugin \u2026',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\n\nexport default class CustomImageEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n        </div>\n      </div>\n    );\n  }\n}\n",name:"Editor.js"}),M(p.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n",name:"editorStyles.css"})))}}]),n}(s.Component)},48893:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugin/drag-n-drop",function(){return n(35531)}])},34721:function(e){e.exports={root:"Code_root__32MsM",name:"Code_name__Asuq_",hiddenName:"Code_hiddenName__3h9eQ"}},18056:function(e){e.exports={editor:"editorStyles_editor__2AmgK",options:"editorStyles_options__7g5i7"}},78267:function(e){e.exports={root:"InlineCode_root__1EGp7"}},99167:function(e){e.exports={root:"styles_root__1j2ew",param:"styles_param__1qnbj",paramBig:"styles_paramBig__cu8zb",paramName:"styles_paramName__2eUb0",subParams:"styles_subParams__3IaUf",subParam:"styles_subParam__2_jpF",subParamName:"styles_subParamName__R_leo",list:"styles_list__1nZt7",listEntry:"styles_listEntry__2XqbL",guideCodeBlock:"styles_guideCodeBlock__-rLdN"}},74782:function(e,t,n){"use strict";var o=n(1503),r=n(46670),a=n(2784);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var c="DRAFTJS_BLOCK_KEY",s=function(e,t,n,a){var s=a.getEditorState,l=a.setEditorState,u=s(),d=t.data.getData("text"),f=d?d.split(":"):[];if(2!==f.length)return"not-handled";if(f[0]===c){var g=f[1],p=u.getCurrentContent(),y=p.getBlockForKey(g),m=p.getEntity(y.getEntityAt(0)),h=function(e,t){var n,r=e.getKeyAfter(t),a=e.getBlockForKey(r);n=a&&"unstyled"===a.getType()&&0===a.getLength()&&a===e.getBlockMap().last()?new o.SelectionState({anchorKey:t,anchorOffset:0,focusKey:r,focusOffset:0}):new o.SelectionState({anchorKey:t,anchorOffset:0,focusKey:t,focusOffset:1});var i=o.Modifier.setBlockType(e,n,"unstyled");return o.Modifier.removeRange(i,n,"backward")}(function(e,t,n,a,c,s){void 0===s&&(s=" ");var l,u,d=e.getCurrentContent(),f=t,g=o.Modifier.removeRange(d,f,"backward"),p=g.getSelectionAfter(),y=p.get("focusKey"),m=d.getBlockForKey(y),h=0===m.getLength()&&null===m.getEntityAt(0),v=0===f.getStartOffset();h||v?(l=p,u=g):l=(u=o.Modifier.splitBlock(g,p)).getSelectionAfter();var S=o.Modifier.setBlockType(u,l,n),k=S.createEntity(c||n,"IMMUTABLE",i({},a)).getLastCreatedEntityKey(),b=o.CharacterMetadata.create({entity:k}),C=[new o.ContentBlock({key:(0,o.genKey)(),type:n,text:s,characterList:(0,r.List)((0,r.Repeat)(b,s.length||1))}),new o.ContentBlock({key:(0,o.genKey)(),type:"unstyled",text:"",characterList:(0,r.List)()})],E=o.BlockMapBuilder.createFromArray(C);return o.Modifier.replaceWithFragment(S,l,E)}(u,e,y.getType(),m.getData(),m.getType()),g),v=new o.SelectionState({anchorKey:g,anchorOffset:0,focusKey:g,focusOffset:0}),S=o.EditorState.push(u,h,"insert-fragment");l(o.EditorState.forceSelection(S,v))}return"handled"},l=function(e){var t=e.store;return function(e){var n=a.forwardRef((function(n,o){var r=!t.getReadOnly||t.getReadOnly();return a.createElement(e,i({ref:o},n,{onDragStart:r?void 0:function(e){e.dataTransfer.dropEffect="move",e.dataTransfer.setData("text","DRAFTJS_BLOCK_KEY:"+n.block.getKey())}}))}));return n.displayName="BlockDraggable("+function(e){var t=e.WrappedComponent||e;return t.displayName||t.name||"Component"}(e)+")",n.WrappedComponent=e.WrappedComponent||e,n}};t.Z=function(){var e={getReadOnly:void 0};return{initialize:function(t){var n=t.getReadOnly;e.getReadOnly=n},decorator:l({store:e}),handleDrop:s}}},95597:function(e,t,n){"use strict";var o=n(1503),r=n(46670),a=n(52358),i=n.n(a),c=n(2784),s=n(6277);function l(e){var t=function(e,t,n){var r=t.getStartKey(),a=[];return e.getBlockMap().forEach((function(e,t){a.push(e),t===r&&a.push(n)})),e.merge({blockMap:o.BlockMapBuilder.createFromArray(a),selectionBefore:t,selectionAfter:t.merge({anchorKey:n.getKey(),anchorOffset:n.getLength(),focusKey:n.getKey(),focusOffset:n.getLength(),isBackward:!1})})}(e.getCurrentContent(),e.getSelection(),new o.ContentBlock({key:(0,o.genKey)(),type:"unstyled",text:"",characterList:(0,r.List)()})),n=t.merge({selectionAfter:t.getSelectionAfter().set("hasFocus",!0)});return o.EditorState.push(e,n,"insert-fragment")}var u=function(e,t,n,r){var a=e(),c=a.getSelection().getAnchorKey(),s="up"===n?a.getCurrentContent().getBlockBefore(c):a.getCurrentContent().getBlockAfter(c);if((!s||s.get("key")!==c)&&s){var l=i().encode(s.getKey(),0,0),u=document.querySelectorAll('[data-offset-key="'+l+'"]')[0],d=window.getSelection(),f=document.createRange();f.setStart(u,0),f.setEnd(u,0),d.removeAllRanges(),d.addRange(f);var g="up"===n?s.getLength():0;r.preventDefault(),t(o.EditorState.forceSelection(a,new o.SelectionState({anchorKey:s.getKey(),anchorOffset:g,focusKey:s.getKey(),focusOffset:g,isBackward:!1})))}};function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var f=function(e){var t=e.theme,n=e.blockKeyStore;return function(e){var o=c.forwardRef((function(o,r){(0,c.useEffect)((function(){return n.add(o.block.getKey()),function(){n.remove(o.block.getKey())}}),[]);var a=o.blockProps,i=o.className,l=a.isFocused?(0,s.Z)(i,t.focused):(0,s.Z)(i,t.unfocused);return c.createElement(e,d({},o,{ref:r,onClick:function(e){e.preventDefault(),o.blockProps.isFocused||o.blockProps.setFocusToBlock()},className:l}))}));return o.displayName="BlockFocus("+function(e){var t=e.WrappedComponent||e;return t.displayName||t.name||"Component"}(e)+")",o.WrappedComponent=e.WrappedComponent||e,o}};var g=function(e,t,n){return e.getBlockMap().keySeq().skipUntil((function(e){return e===t})).takeUntil((function(e){return e===n})).concat([n])},p=function(e,t){return function(e){var t=e.getSelection(),n=e.getCurrentContent();return g(n,t.getStartKey(),t.getEndKey())}(e).includes(t)};var y={unfocused:"uz5k6rs",focused:"f1vn2c6d"},m=function(e,t){var n=e.getSelection();if(n.getAnchorKey()!==n.getFocusKey())return!1;var o=e.getCurrentContent().getBlockForKey(n.getAnchorKey());return t.includes(o.getKey())},h=["backspace","backspace-word","backspace-to-start-of-line","delete","delete-word","delete-to-end-of-block"];function v(e){return o.EditorState.set(e,{selection:e.getSelection(),forceSelection:!0,nativelyRenderedContent:null,inlineStyleOverride:null})}t.Z=function(e){void 0===e&&(e={});var t,n,a=function(){var e=(0,r.List)();return{add:function(t){return e=e.push(t)},remove:function(t){return e=e.filter((function(e){return e!==t}))},includes:function(t){return e.includes(t)},getAll:function(){return e}}}(),c=e.theme?e.theme:y;return{handleReturn:function(e,t,n){var o=n.setEditorState;return m(t,a)?(o(l(t)),"handled"):"not-handled"},handleKeyCommand:function(e,t,n,r){var i=r.setEditorState;if(h.includes(e)&&m(t,a)){var c=t.getSelection().getStartKey(),s=function(e,t){var n=e.getCurrentContent(),r=n.getKeyBefore(t),a=n.getBlockForKey(r);if(void 0===a){var i=new o.SelectionState({anchorKey:t,anchorOffset:0,focusKey:t,focusOffset:1});n=o.Modifier.removeRange(n,i,"backward"),n=o.Modifier.setBlockType(n,i,"unstyled");var c=o.EditorState.push(e,n,"remove-range"),s=new o.SelectionState({anchorKey:t,anchorOffset:0,focusKey:t,focusOffset:0});return o.EditorState.forceSelection(c,s)}var l=new o.SelectionState({anchorKey:r,anchorOffset:a.getLength(),focusKey:t,focusOffset:1});n=o.Modifier.removeRange(n,l,"backward");var u=o.EditorState.push(e,n,"remove-range"),d=new o.SelectionState({anchorKey:r,anchorOffset:a.getLength(),focusKey:r,focusOffset:a.getLength()});return o.EditorState.forceSelection(u,d)}(t,c);if(s!==t)return i(s),"handled"}return"not-handled"},onChange:function(e){var o=e.getCurrentContent();if(!o.equals(n))return n=o,e;n=o;var r=e.getSelection();if(t&&r.equals(t))return t=e.getSelection(),e;var i=a.getAll();if(t&&g(o,t.getStartKey(),t.getEndKey()).some((function(e){return i.includes(e)})))return t=r,v(e);return g(o,r.getStartKey(),r.getEndKey()).some((function(e){return i.includes(e)}))?(t=r,v(e)):e},keyBindingFn:function(e,t){var n=t.getEditorState,o=t.setEditorState,r=n();if(m(r,a)&&(37===e.keyCode&&u(n,o,"up",e),39===e.keyCode&&u(n,o,"down",e),38===e.keyCode&&u(n,o,"up",e),40===e.keyCode))u(n,o,"down",e);else if(!e.shiftKey){if(37===e.keyCode){var i=r.getSelection(),c=i.getAnchorKey(),s=r.getCurrentContent().getBlockBefore(c);s&&0===i.getAnchorOffset()&&a.includes(s.getKey())&&u(n,o,"up",e)}if(39===e.keyCode){var l=r.getSelection(),d=l.getFocusKey(),f=r.getCurrentContent().getBlockForKey(d),g=r.getCurrentContent().getBlockAfter(d),p="atomic"!==f.getType()&&f.getLength()===l.getFocusOffset();g&&p&&a.includes(g.getKey())&&u(n,o,"down",e)}if(38===e.keyCode){var y=r.getSelection().getAnchorKey(),h=r.getCurrentContent().getBlockBefore(y);h&&a.includes(h.getKey())&&u(n,o,"up",e)}if(40===e.keyCode){var v=r.getSelection().getAnchorKey(),S=r.getCurrentContent().getBlockAfter(v);S&&a.includes(S.getKey())&&u(n,o,"down",e)}}},blockRendererFn:function(e,t){var n=t.getEditorState,r=t.setEditorState;if("atomic"===e.getType()){var a=n();return{props:{isFocused:a.getSelection().getHasFocus()&&p(a,e.getKey()),isCollapsedSelection:a.getSelection().isCollapsed(),setFocusToBlock:function(){!function(e,t,n){var r=e(),a=i().encode(n.getKey(),0,0),c=document.querySelectorAll('[data-offset-key="'+a+'"]')[0],s=window.getSelection(),l=document.createRange();l.setStart(c,0),l.setEnd(c,0),s.removeAllRanges(),s.addRange(l),t(o.EditorState.forceSelection(r,new o.SelectionState({anchorKey:n.getKey(),anchorOffset:0,focusKey:n.getKey(),focusOffset:0,isBackward:!1})))}(n,r,e)}}}}},decorator:f({theme:c,blockKeyStore:a})}}},51747:function(e,t,n){"use strict";var o=n(2784),r=n(1503),a=n(6277);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}var s=function(e,t,n){var o=e.getCurrentContent().createEntity("IMAGE","IMMUTABLE",i({},n,{src:t})).getLastCreatedEntityKey(),a=r.AtomicBlockUtils.insertAtomicBlock(e,o," ");return r.EditorState.forceSelection(a,a.getCurrentContent().getSelectionAfter())},l=o.forwardRef((function(e,t){var n=e.block,r=e.className,s=e.theme,l=void 0===s?{}:s,u=c(e,["block","className","theme"]);u.blockProps,u.customStyleMap,u.customStyleFn,u.decorator,u.forceSelection,u.offsetKey,u.selection,u.tree,u.blockStyleFn,u.preventScroll;var d=u.contentState,f=c(u,["blockProps","customStyleMap","customStyleFn","decorator","forceSelection","offsetKey","selection","tree","blockStyleFn","preventScroll","contentState"]),g=(0,a.Z)(l.image,r),p=d.getEntity(n.getEntityAt(0)).getData().src;return o.createElement("img",i({},f,{ref:t,src:p,role:"presentation",className:g}))})),u={};t.Z=function(e){void 0===e&&(e={});var t=e.theme?e.theme:u,n=e.imageComponent||l;e.decorator&&(n=e.decorator(n));var r=function(e){return o.createElement(n,i({},e,{theme:t}))};return{blockRendererFn:function(e,t){var n=t.getEditorState;if("atomic"===e.getType()){var o=n().getCurrentContent(),a=e.getEntityAt(0);if(!a)return null;var i=o.getEntity(a).getType();return"IMAGE"===i||"image"===i?{component:r,editable:!1}:null}return null},addImage:s}}}},function(e){e.O(0,[774,351,69,44,145],(function(){return t=48893,e(e.s=t);var t}));var t=e.O();_N_E=t}]);