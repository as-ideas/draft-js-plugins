(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[231],{36154:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var o=n(2784),r=n(6277),i=(n(26832),n(34721)),l=n.n(i),a=o.createElement;function s(t){var e=t.code,n=t.className,o=t.name,i=(0,r.Z)(l().root,n),s=o?l().name:l().hiddenName,c=(0,r.Z)(l().code,"language-".concat(o&&o.endsWith("css")?"css":"js"));return a("div",{className:i},a("div",{className:s},o),a("pre",{className:c},a("code",null,e)))}},39646:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var o=n(2784),r=n(6277),i=(n(26832),n(78267)),l=n.n(i),a=o.createElement;function s(t){var e=t.code,n=t.className,o=(0,r.Z)(l().root,n);return a("span",{className:o},a("code",{dangerouslySetInnerHTML:{__html:e}}))}},93986:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var o=n(2784),r=n(18476),i=n.n(r),l=n(74157),a=n(47100),s=n(99428),c=n(62334),u=o.createElement;function d(t){var e=t.children;return(0,o.useEffect)((function(){i().highlightAll()}),[]),u("div",null,u(l.Z,null),u(a.Z,null),e,u(s.Z,null),u(c.Z,null))}},38126:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return tt}});var o=n(84558),r=n(33831),i=n(64583),l=n(60942),a=n(10389),s=n(2784),c=n(76047),u=n(45565),d=n(26804),f=n(80013),p=n.n(f),h=n(36154),m=n(39646),g=n(64705),v=n(77012),b=n(70095),y=n.n(b),E=s.createElement,S=function(){var t=(0,s.useMemo)((function(){var t=(0,v.C)();return[[t],t.InlineToolbar]}),[]),e=t[0],n=t[1],o=(0,s.useState)((function(){return(0,g.bf)("")})),r=o[0],i=o[1];(0,s.useEffect)((function(){i((0,g.bf)("In this editor a toolbar shows up once you select part of the text \u2026"))}),[]);var l=(0,s.useRef)(null);return E("div",{className:y().editor,onClick:function(){var t;null===(t=l.current)||void 0===t||t.focus()}},E(g.ZP,{editorKey:"SimpleInlineToolbarEditor",editorState:r,onChange:function(t){i(t)},plugins:e,ref:function(t){l.current=t}}),E(n,null))},w=n(9360),x=n(71520),C=n(77243),Z=n(20138),L=n(98092),T=n.n(L),k=s.createElement;function _(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=(0,a.Z)(t);if(e){var r=(0,a.Z)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,l.Z)(this,n)}}var B=function(t){(0,i.Z)(n,t);var e=_(n);function n(){var t;(0,o.Z)(this,n);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return t=e.call.apply(e,[this].concat(i)),(0,C.Z)((0,x.Z)(t),"onWindowClick",(function(){return t.props.onOverrideContent(void 0)})),t}return(0,r.Z)(n,[{key:"componentDidMount",value:function(){var t=this;setTimeout((function(){window.addEventListener("click",t.onWindowClick)}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.onWindowClick)}},{key:"render",value:function(){var t=this,e=[Z.gS,Z.oV,Z.R8];return k("div",null,e.map((function(e,n){return k(e,(0,w.Z)({key:n},t.props))})))}}]),n}(s.Component),I=function(t){(0,i.Z)(n,t);var e=_(n);function n(){var t;(0,o.Z)(this,n);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return t=e.call.apply(e,[this].concat(i)),(0,C.Z)((0,x.Z)(t),"onMouseDown",(function(t){return t.preventDefault()})),(0,C.Z)((0,x.Z)(t),"onClick",(function(){return t.props.onOverrideContent(B)})),t}return(0,r.Z)(n,[{key:"render",value:function(){return k("div",{onMouseDown:this.onMouseDown,className:T().headlineButtonWrapper},k("button",{onClick:this.onClick,className:T().headlineButton},"H"))}}]),n}(s.Component),M=(0,v.C)(),P=M.InlineToolbar,N=[M],H="In this editor a toolbar shows up once you select part of the text \u2026",R=function(t){(0,i.Z)(n,t);var e=_(n);function n(){var t;(0,o.Z)(this,n);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return t=e.call.apply(e,[this].concat(i)),(0,C.Z)((0,x.Z)(t),"state",{editorState:(0,g.bf)(H)}),(0,C.Z)((0,x.Z)(t),"onChange",(function(e){t.setState({editorState:e})})),(0,C.Z)((0,x.Z)(t),"focus",(function(){t.editor.focus()})),t}return(0,r.Z)(n,[{key:"componentDidMount",value:function(){this.setState({editorState:(0,g.bf)(H)})}},{key:"render",value:function(){var t=this;return k("div",{className:T().editor,onClick:this.focus},k(g.ZP,{editorKey:"CustomInlineToolbarEditor",editorState:this.state.editorState,onChange:this.onChange,plugins:N,ref:function(e){t.editor=e}}),k(P,null,(function(t){return k("div",null,k(Z.n3,t),k(Z.BI,t),k(Z.tg,t),k(Z.Ed,t),k(v.Z,t),k(I,t),k(Z.cU,t),k(Z.pu,t),k(Z.YC,t),k(Z.Ou,t))})))}}]),n}(s.Component),z=n(41114),D=n.n(z),O=n(621),W=n.n(O),j=n(61831),A=n.n(j),U=s.createElement;function K(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=(0,a.Z)(t);if(e){var r=(0,a.Z)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,l.Z)(this,n)}}var V=(0,v.C)({theme:{buttonStyles:W(),toolbarStyles:A()}}),F=V.InlineToolbar,q=[V],Y="In this editor a toolbar with a lot more options shows up once you select part of the text \u2026",G=function(t){(0,i.Z)(n,t);var e=K(n);function n(){var t;(0,o.Z)(this,n);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return t=e.call.apply(e,[this].concat(i)),(0,C.Z)((0,x.Z)(t),"state",{editorState:(0,g.bf)(Y)}),(0,C.Z)((0,x.Z)(t),"onChange",(function(e){t.setState({editorState:e})})),(0,C.Z)((0,x.Z)(t),"focus",(function(){t.editor.focus()})),t}return(0,r.Z)(n,[{key:"componentDidMount",value:function(){this.setState({editorState:(0,g.bf)(Y)})}},{key:"render",value:function(){var t=this;return U("div",{className:D().editor,onClick:this.focus},U(g.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:q,ref:function(e){t.editor=e}}),U(F,null))}}]),n}(s.Component),J=n(15702),Q=n(93986),X=s.createElement;function $(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=(0,a.Z)(t);if(e){var r=(0,a.Z)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,l.Z)(this,n)}}var tt=function(t){(0,i.Z)(n,t);var e=$(n);function n(){return(0,o.Z)(this,n),e.apply(this,arguments)}return(0,r.Z)(n,[{key:"render",value:function(){return X(Q.Z,null,X(c.Z,null,X(d.Z,{level:2},"InlineToolbar"),X(d.Z,{level:3},"Supported Environment"),X("ul",{className:p().list},X("li",{className:p().listEntry},"Desktop: Yes"),X("li",{className:p().listEntry},"Mobile: No"),X("li",{className:p().listEntry},"Screen-reader: No"))),X(u.Z,null,X(d.Z,{level:2},"Getting Started"),X(h.Z,{code:"npm install @draft-js-plugins/editor"}),X(h.Z,{code:"npm install @draft-js-plugins/inline-toolbar"}),X(h.Z,{code:"// It is important to import the Editor which accepts plugins.\nimport Editor from '@draft-js-plugins/editor';\nimport createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';\nimport React from 'react';\n\n// Creates an Instance. At this step, a configuration object can be passed in\n// as an argument.\nconst inlineToolbarPlugin = createInlineToolbarPlugin();\n\n// The Editor accepts an array of plugins. In this case, only the inlineToolbarPlugin\n// is passed in, although it is possible to pass in multiple plugins.\nconst MyEditor = ({ editorState, onChange }) => (\n  <Editor\n    editorState={editorState}\n    onChange={onChange}\n    plugins={[inlineToolbarPlugin]}\n  />\n);\n\nexport default MyEditor;\n",name:"gettingStarted.js"}),X(d.Z,{level:3},"Importing the default styles"),X("p",null,"The plugin ships with a default styling available at this location in the installed package: \xa0",X(m.Z,{code:"node_modules/@draft-js-plugins/inline-toolbar/lib/plugin.css"})),X(d.Z,{level:4},"Webpack Usage"),X("ul",{className:p().list},X("li",{className:p().listEntry},"1. Install Webpack loaders: \xa0",X(m.Z,{code:"npm i style-loader css-loader --save-dev"})),X("li",{className:p().listEntry},"2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.",X(h.Z,{code:"module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",className:p().guideCodeBlock})),X("li",{className:p().listEntry},"3. Add the below import line to your component to tell Webpack to inject the style to your component.",X(h.Z,{code:"import '@draft-js-plugins/inline-toolbar/lib/plugin.css';",className:p().guideCodeBlock})),X("li",{className:p().listEntry},"4. Restart Webpack.")),X(d.Z,{level:4},"Browserify Usage"),X("p",null,"Please help, by submiting a Pull Request to the"," ",X(J.Z,{href:"https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/InlineToolbar/index.js"},"documentation"),".")),X(c.Z,null,X(d.Z,{level:2},"Simple Inline Toolbar Example"),X(S,null),X(h.Z,{code:"import React, {\n  ReactElement,\n  useEffect,\n  useMemo,\n  useRef,\n  useState,\n} from 'react';\nimport { EditorState } from 'draft-js';\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\nimport createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';\nimport editorStyles from './editorStyles.module.css';\n\nconst text =\n  'In this editor a toolbar shows up once you select part of the text \u2026';\n\nconst SimpleInlineToolbarEditor = (): ReactElement => {\n  const [plugins, InlineToolbar] = useMemo(() => {\n    const inlineToolbarPlugin = createInlineToolbarPlugin();\n    return [[inlineToolbarPlugin], inlineToolbarPlugin.InlineToolbar];\n  }, []);\n\n  const [editorState, setEditorState] = useState(() =>\n    createEditorStateWithText('')\n  );\n\n  useEffect(() => {\n    // fixing issue with SSR https://github.com/facebook/draft-js/issues/2332#issuecomment-761573306\n    setEditorState(createEditorStateWithText(text));\n  }, []);\n\n  const editor = useRef<Editor | null>(null);\n\n  const onChange = (value: EditorState): void => {\n    setEditorState(value);\n  };\n\n  const focus = (): void => {\n    editor.current?.focus();\n  };\n\n  return (\n    <div className={editorStyles.editor} onClick={focus}>\n      <Editor\n        editorKey=\"SimpleInlineToolbarEditor\"\n        editorState={editorState}\n        onChange={onChange}\n        plugins={plugins}\n        ref={(element) => {\n          editor.current = element;\n        }}\n      />\n      <InlineToolbar />\n    </div>\n  );\n};\n\nexport default SimpleInlineToolbarEditor;\n",name:"SimpleInlineToolbarEditor.js"}),X(h.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n",name:"editorStyles.css"})),X(c.Z,null,X(d.Z,{level:2},"Custom Inline Toolbar Example"),X(R,null),X(h.Z,{code:"/* eslint-disable react/no-multi-comp */\nimport React, { Component } from 'react';\n\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\n\nimport createInlineToolbarPlugin, {\n  Separator,\n} from '@draft-js-plugins/inline-toolbar';\nimport {\n  ItalicButton,\n  BoldButton,\n  UnderlineButton,\n  CodeButton,\n  HeadlineOneButton,\n  HeadlineTwoButton,\n  HeadlineThreeButton,\n  UnorderedListButton,\n  OrderedListButton,\n  BlockquoteButton,\n  CodeBlockButton,\n} from '@draft-js-plugins/buttons';\nimport editorStyles from './editorStyles.module.css';\n\nclass HeadlinesPicker extends Component {\n  componentDidMount() {\n    setTimeout(() => {\n      window.addEventListener('click', this.onWindowClick);\n    });\n  }\n\n  componentWillUnmount() {\n    window.removeEventListener('click', this.onWindowClick);\n  }\n\n  onWindowClick = () =>\n    // Call `onOverrideContent` again with `undefined`\n    // so the toolbar can show its regular content again.\n    this.props.onOverrideContent(undefined);\n\n  render() {\n    const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];\n    return (\n      <div>\n        {buttons.map((Button, i) => (\n          // eslint-disable-next-line react/no-array-index-key\n          <Button key={i} {...this.props} />\n        ))}\n      </div>\n    );\n  }\n}\n\nclass HeadlinesButton extends Component {\n  // When using a click event inside overridden content, mouse down\n  // events needs to be prevented so the focus stays in the editor\n  // and the toolbar remains visible  onMouseDown = (event) => event.preventDefault()\n  onMouseDown = (event) => event.preventDefault();\n\n  onClick = () =>\n    // A button can call `onOverrideContent` to replace the content\n    // of the toolbar. This can be useful for displaying sub\n    // menus or requesting additional information from the user.\n    this.props.onOverrideContent(HeadlinesPicker);\n\n  render() {\n    return (\n      <div\n        onMouseDown={this.onMouseDown}\n        className={editorStyles.headlineButtonWrapper}\n      >\n        <button onClick={this.onClick} className={editorStyles.headlineButton}>\n          H\n        </button>\n      </div>\n    );\n  }\n}\n\nconst inlineToolbarPlugin = createInlineToolbarPlugin();\nconst { InlineToolbar } = inlineToolbarPlugin;\nconst plugins = [inlineToolbarPlugin];\nconst text =\n  'In this editor a toolbar shows up once you select part of the text \u2026';\n\nexport default class CustomInlineToolbarEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  componentDidMount() {\n    // fixing issue with SSR https://github.com/facebook/draft-js/issues/2332#issuecomment-761573306\n    // eslint-disable-next-line react/no-did-mount-set-state\n    this.setState({\n      editorState: createEditorStateWithText(text),\n    });\n  }\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div className={editorStyles.editor} onClick={this.focus}>\n        <Editor\n          editorKey=\"CustomInlineToolbarEditor\"\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          plugins={plugins}\n          ref={(element) => {\n            this.editor = element;\n          }}\n        />\n        <InlineToolbar>\n          {\n            // may be use React.Fragment instead of div to improve perfomance after React 16\n            (externalProps) => (\n              <div>\n                <BoldButton {...externalProps} />\n                <ItalicButton {...externalProps} />\n                <UnderlineButton {...externalProps} />\n                <CodeButton {...externalProps} />\n                <Separator {...externalProps} />\n                <HeadlinesButton {...externalProps} />\n                <UnorderedListButton {...externalProps} />\n                <OrderedListButton {...externalProps} />\n                <BlockquoteButton {...externalProps} />\n                <CodeBlockButton {...externalProps} />\n              </div>\n            )\n          }\n        </InlineToolbar>\n      </div>\n    );\n  }\n}\n",name:"CustomInlineToolbarEditor.js"}),X(h.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.headlineButtonWrapper {\n  display: inline-block;\n}\n\n.headlineButton {\n  background: #fbfbfb;\n  color: #888;\n  font-size: 18px;\n  border: 0;\n  padding-top: 5px;\n  vertical-align: bottom;\n  height: 34px;\n  width: 36px;\n}\n\n.headlineButton:hover,\n.headlineButton:focus {\n  background: #f3f3f3;\n}\n",name:"editorStyles.css"})),X(c.Z,null,X(d.Z,{level:2},"Themed Inline Toolbar Example"),X(G,null),X(h.Z,{code:"import React, { Component } from 'react';\n\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\n\nimport createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';\nimport editorStyles from './editorStyles.module.css';\nimport buttonStyles from './buttonStyles.module.css';\nimport toolbarStyles from './toolbarStyles.module.css';\n\nconst inlineToolbarPlugin = createInlineToolbarPlugin({\n  theme: { buttonStyles, toolbarStyles },\n});\nconst { InlineToolbar } = inlineToolbarPlugin;\nconst plugins = [inlineToolbarPlugin];\nconst text =\n  'In this editor a toolbar with a lot more options shows up once you select part of the text \u2026';\n\nexport default class ThemedInlineToolbarEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  componentDidMount() {\n    // fixing issue with SSR https://github.com/facebook/draft-js/issues/2332#issuecomment-761573306\n    // eslint-disable-next-line react/no-did-mount-set-state\n    this.setState({\n      editorState: createEditorStateWithText(text),\n    });\n  }\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div className={editorStyles.editor} onClick={this.focus}>\n        <Editor\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          plugins={plugins}\n          ref={(element) => {\n            this.editor = element;\n          }}\n        />\n        <InlineToolbar />\n      </div>\n    );\n  }\n}\n",name:"ThemedInlineToolbarEditor.js"}),X(h.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n",name:"editorStyles.css"})))}}]),n}(s.Component)},19405:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugin/inline-toolbar",function(){return n(38126)}])},34721:function(t){t.exports={root:"Code_root__32MsM",name:"Code_name__Asuq_",hiddenName:"Code_hiddenName__3h9eQ"}},98092:function(t){t.exports={editor:"editorStyles_editor__3ocb0",headlineButtonWrapper:"editorStyles_headlineButtonWrapper__2O9uZ",headlineButton:"editorStyles_headlineButton__FfZC1"}},70095:function(t){t.exports={editor:"editorStyles_editor__1ufHm"}},621:function(t){t.exports={buttonWrapper:"buttonStyles_buttonWrapper__3Yr1W",button:"buttonStyles_button__3Qfji",active:"buttonStyles_active__1pxfh"}},41114:function(t){t.exports={editor:"editorStyles_editor__3RUD6"}},61831:function(t){t.exports={toolbar:"toolbarStyles_toolbar__1POhO"}},78267:function(t){t.exports={root:"InlineCode_root__1EGp7"}},80013:function(t){t.exports={root:"styles_root__3qZZl",param:"styles_param__2Tn5n",paramName:"styles_paramName__3eRJF",subParams:"styles_subParams__L918N",subParam:"styles_subParam__13_-5",subParamName:"styles_subParamName__3yCJd",list:"styles_list__3jaAM",listEntry:"styles_listEntry__2aPRg",guideCodeBlock:"styles_guideCodeBlock__6UoIb"}},20138:function(t,e,n){"use strict";n.d(e,{xM:function(){return S},f9:function(){return E},qA:function(){return w},Tj:function(){return x},YC:function(){return b},n3:function(){return u},Ou:function(){return y},Ed:function(){return d},gS:function(){return p},R8:function(){return m},oV:function(){return h},BI:function(){return c},pu:function(){return v},tg:function(){return f},cU:function(){return g}});var o=n(2784),r=n(1503),i=n(6277);function l(t){var e=t.blockType,n=t.children;return function(t){var l=t.theme,a=function(){if(!t.getEditorState)return!1;var n=t.getEditorState();return n.getCurrentContent().getBlockForKey(n.getSelection().getStartKey()).getType()===e}()?(0,i.Z)(l.button,l.active):l.button;return o.createElement("div",{className:l.buttonWrapper,onMouseDown:function(t){t.preventDefault()}},o.createElement("button",{className:a,onClick:function(n){n.preventDefault(),t.setEditorState(r.RichUtils.toggleBlockType(t.getEditorState(),e))},type:"button",children:n}))}}function a(t){var e=t.style,n=t.children;return function(t){var l=t.theme,a=t.getEditorState&&t.getEditorState().getCurrentInlineStyle().has(e)?(0,i.Z)(l.button,l.active):l.button;return o.createElement("div",{className:l.buttonWrapper,onMouseDown:function(t){t.preventDefault()}},o.createElement("button",{className:a,onClick:function(n){n.preventDefault(),t.setEditorState(r.RichUtils.toggleInlineStyle(t.getEditorState(),e))},type:"button",children:n}))}}function s(t){var e=t.alignment,n=t.children;return function(t){var r=t.theme,l=t.alignment===e?(0,i.Z)(r.button,r.active):r.button;return o.createElement("div",{className:r.buttonWrapper,onMouseDown:function(t){t.preventDefault()}},o.createElement("button",{className:l,onClick:function(n){n.preventDefault(),t.setAlignment({alignment:e})},type:"button",children:n}))}}var c=a({style:"ITALIC",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"}))}),u=a({style:"BOLD",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"}),o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),d=a({style:"CODE",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}))}),f=a({style:"UNDERLINE",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"}))}),p=l({blockType:"header-one",children:"H1"}),h=l({blockType:"header-two",children:"H2"}),m=l({blockType:"header-three",children:"H3"}),g=l({blockType:"unordered-list-item",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}),o.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}))}),v=l({blockType:"ordered-list-item",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"}),o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),b=l({blockType:"blockquote",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"}),o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),y=l({blockType:"code-block",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}))}),E=s({alignment:"default",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M3,7 L3,17 L17,17 L17,7 L3,7 Z"}),o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),S=s({alignment:"center",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M5,7 L5,17 L19,17 L19,7 L5,7 Z"}),o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),w=s({alignment:"left",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M21,15 L15,15 L15,17 L21,17 L21,15 Z M21,7 L15,7 L15,9 L21,9 L21,7 Z M15,13 L21,13 L21,11 L15,11 L15,13 Z M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M3,7 L3,17 L13,17 L13,7 L3,7 Z"}),o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),x=s({alignment:"right",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M9,15 L3,15 L3,17 L9,17 L9,15 Z M9,7 L3,7 L3,9 L9,9 L9,7 Z M3,13 L9,13 L9,11 L3,11 L3,13 Z M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M11,7 L11,17 L21,17 L21,7 L11,7 Z"}),o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))});a({style:"SUBSCRIPT",children:o.createElement("div",null,"x",o.createElement("sub",null,"2"))}),a({style:"SUPERSCRIPT",children:o.createElement("div",null,"x",o.createElement("sup",null,"2"))})},77012:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var o=n(2784),r=n(52367),i=n(1503),l=n(20138);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var c=function(t){var e,n;function r(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).state={isVisible:!1,position:void 0,overrideContent:void 0},e.toolbar=null,e.onOverrideContent=function(t){e.setState({overrideContent:t})},e.onSelectionChanged=function(){setTimeout((function(){if(e.toolbar){var t=e.props.store.getItem("getEditorRef")();if(t){for(var n=t.refs&&t.refs.editor?t.refs.editor:t.editor;-1===n.className.indexOf("DraftEditor-root");)n=n.parentNode;var o=n.getBoundingClientRect(),r=n.ownerDocument&&n.ownerDocument.defaultView,l=(0,i.getVisibleSelectionRect)(r||window);if(l){var a={top:n.offsetTop-e.toolbar.offsetHeight+(l.top-o.top)-5,left:n.offsetLeft+(l.left-o.left)+l.width/2};e.setState({position:a})}}}}))},e}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,s(e,n);var l=r.prototype;return l.UNSAFE_componentWillMount=function(){this.props.store.subscribeToItem("selection",this.onSelectionChanged)},l.componentWillUnmount=function(){this.props.store.unsubscribeFromItem("selection",this.onSelectionChanged)},l.getStyle=function(){var t=this.props.store,e=this.state,n=e.overrideContent,o=e.position,r=t.getItem("getEditorState")().getSelection(),i=!r.isCollapsed()&&r.getHasFocus()||n,l=a({},o);return i?(l.visibility="visible",l.transform="translate(-50%) scale(1)",l.transition="transform 0.15s cubic-bezier(.3,1.2,.2,1)"):(l.transform="translate(-50%) scale(0)",l.visibility="hidden"),l},l.render=function(){var t=this,e=this.props,n=e.theme,r=e.store,i=this.state.overrideContent,l={theme:n.buttonStyles,getEditorState:r.getItem("getEditorState"),setEditorState:r.getItem("setEditorState"),onOverrideContent:this.onOverrideContent};return o.createElement("div",{className:n.toolbarStyles.toolbar,style:this.getStyle(),ref:function(e){t.toolbar=e}},i?o.createElement(i,l):this.props.children(l))},r}(o.Component);c.defaultProps={children:function(t){return o.createElement("div",null,o.createElement(l.BI,t),o.createElement(l.n3,t),o.createElement(l.tg,t),o.createElement(l.Ed,t))}};function u(t){var e=t.className,n=void 0===e?"s1o2cezu":e;return o.createElement("div",{className:n})}var d={buttonStyles:{buttonWrapper:"bpsgbes",button:"b181v2oy",active:"a9immln"},toolbarStyles:{toolbar:"tukdd6b"}};e.C=function(t){void 0===t&&(t={});var e=(0,r.MT)({isVisible:!1}),n=t.theme,i=void 0===n?d:n;return{initialize:function(t){var n=t.getEditorState,o=t.setEditorState,r=t.getEditorRef;e.updateItem("getEditorState",n),e.updateItem("setEditorState",o),e.updateItem("getEditorRef",r)},onChange:function(t){return e.updateItem("selection",t.getSelection()),t},InlineToolbar:function(t){return o.createElement(c,a({},t,{store:e,theme:i}))}}}},52367:function(t,e,n){"use strict";n.d(e,{MT:function(){return i},$m:function(){return l}});var o=n(1503);function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function i(t){void 0===t&&(t={});var e=t,n={};return{subscribeToItem:function(t,e){n[t]=n[t]||[],n[t].push(e)},unsubscribeFromItem:function(t,e){var o=n[t];o&&(n[t]=o.filter((function(t){return t!==e})))},updateItem:function(t,o){var i;e=r({},e,((i={})[t]=o,i));var l=n[t];l&&l.forEach((function(n){return n(e[t])}))},getItem:function(t){return e[t]}}}function l(t,e,n){for(var o,r,i=e.getText();null!==(o=t.exec(i));)o.index===t.lastIndex&&(t.lastIndex+=1),n(r=o.index,r+o[0].length)}var a={decodeOffsetKey:function(t){var e=t.split("-"),n=e[0],o=e[1],r=e[2];return{blockKey:n,decoratorKey:parseInt(o,10),leafKey:parseInt(r,10)}},createLinkAtSelection:function(t,e){var n=t.getCurrentContent().createEntity("LINK","MUTABLE",{url:e}).getLastCreatedEntityKey(),r=o.RichUtils.toggleLink(t,t.getSelection(),n);return o.EditorState.forceSelection(r,t.getSelection())},removeLinkAtSelection:function(t){var e=t.getSelection();return o.RichUtils.toggleLink(t,e,null)},collapseToEnd:function(t){var e=t.getSelection();return o.EditorState.forceSelection(t,e.merge({anchorKey:e.getEndKey(),focusKey:e.getEndKey(),anchorOffset:e.getEndOffset(),focusOffset:e.getEndOffset()}))},getCurrentEntityKey:function(t){var e=t.getSelection(),n=e.getAnchorKey(),o=t.getCurrentContent().getBlockForKey(n),r=e.getAnchorOffset(),i=e.getIsBackward()?r-1:r;return o.getEntityAt(i)},getCurrentEntity:function(t){var e=t.getCurrentContent(),n=this.getCurrentEntityKey(t);return n?e.getEntity(n):null},hasEntity:function(t,e){var n=this.getCurrentEntity(t);return Boolean(n&&n.getType()===e)}};e.ZP=a}},function(t){t.O(0,[774,351,69,44,145],(function(){return e=19405,t(t.s=e);var e}));var e=t.O();_N_E=e}]);