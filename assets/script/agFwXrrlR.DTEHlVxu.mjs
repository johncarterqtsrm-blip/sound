import{t as e}from"./rolldown-runtime.C4p97ucE.mjs";import{A as t,C as n,D as r,I as i,M as a,P as o,R as s,c,o as l}from"./react.DXZ2gJ9b.mjs";import{R as u,_ as d,a as f,b as p,w as m}from"./framer.BnnSNlRy.mjs";var h,g,_=e((()=>{u(),h={position:`relative`,width:`100%`,height:`100%`,display:`flex`,justifyContent:`center`,alignItems:`center`},g={...h,borderRadius:6,background:`rgba(136, 85, 255, 0.3)`,color:`#85F`,border:`1px dashed #85F`,flexDirection:`column`},f.EventHandler,f.EventHandler,f.EventHandler,f.Number,f.Boolean,f.String,f.Enum})),v=e((()=>{u(),n()})),y=e((()=>{n()})),b=e((()=>{u()})),x=e((()=>{u()})),S=e((()=>{n()})),C=e((()=>{u()})),w=e((()=>{i(),n()})),T=e((()=>{n(),x()})),E=e((()=>{n(),u(),x(),y()})),D=e((()=>{u(),n(),_()}));function O(){return t(()=>d.current()===d.canvas,[])}var k=e((()=>{n(),u()})),A=e((()=>{n()})),j=e((()=>{n(),u(),f.FusedNumber,f.FusedNumber})),M=e((()=>{_(),v(),y(),b(),x(),S(),C(),w(),T(),E(),D(),k(),A(),j()})),N=e((()=>{M()}));function P({type:e,url:t,html:n,zoom:r,radius:i,border:a,style:o={}}){return e===`url`&&t?c(I,{url:t,zoom:r,radius:i,border:a,style:o}):e===`html`&&n?c(R,{html:n,style:o}):c(F,{style:o})}function F({style:e}){return c(`div`,{style:{minHeight:G(e),...g,overflow:`hidden`,...e},children:c(`div`,{style:J,children:`To embed a website or widget, add it to the properties\xA0panel.`})})}function I({url:e,zoom:t,radius:n,border:r,style:i}){let s=!i.height;/[a-z]+:\/\//.test(e)||(e=`https://`+e);let l=O(),[u,d]=o(l?void 0:!1);return a(()=>{if(!l)return;let t=!0;d(void 0);async function n(){let n=await fetch(`https://api.framer.com/functions/check-iframe-url?url=`+encodeURIComponent(e));if(n.status==200){let{isBlocked:e}=await n.json();t&&d(e)}else{let e=await n.text();console.error(e),d(Error(`This site can’t be reached.`))}}return n().catch(e=>{console.error(e),d(e)}),()=>{t=!1}},[e]),l&&s?c(W,{message:`URL embeds do not support auto height.`,style:i}):e.startsWith(`https://`)?u===void 0?c(U,{}):u instanceof Error?c(W,{message:u.message,style:i}):u===!0?c(W,{message:`Can’t embed ${e} due to its content security policy.`,style:i}):c(`iframe`,{src:e,style:{...K,...i,...r,zoom:t,borderRadius:n,transformOrigin:`top center`},loading:`lazy`,fetchPriority:l?`low`:`auto`,referrerPolicy:`no-referrer`,sandbox:L(l),allowFullScreen:!0,allow:`presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; clipboard-write`}):c(W,{message:`Unsupported protocol.`,style:i})}function L(e){let t=[`allow-same-origin`,`allow-scripts`];return e||t.push(`allow-downloads`,`allow-forms`,`allow-modals`,`allow-orientation-lock`,`allow-pointer-lock`,`allow-popups`,`allow-popups-to-escape-sandbox`,`allow-presentation`,`allow-storage-access-by-user-activation`,`allow-top-navigation-by-user-activation`),t.join(` `)}function R({html:e,...t}){if(e.includes(`<\/script>`)){let n=e.includes(`</spline-viewer>`),r=e.includes(`<!-- framer-direct-embed -->`);return c(n||r?B:z,{html:e,...t})}return c(V,{html:e,...t})}function z({html:e,style:t}){let n=r(),[i,l]=o(0);a(()=>{let e=n.current?.contentWindow;function t(t){if(t.source!==e)return;let n=t.data;if(typeof n!=`object`||!n)return;let r=n.embedHeight;typeof r==`number`&&l(r)}return s.addEventListener(`message`,t),e?.postMessage(`getEmbedHeight`,`*`),()=>{s.removeEventListener(`message`,t)}},[]);let u=`
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${e}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>
`,d={...K,...t};return t.height||(d.height=i+`px`),c(`iframe`,{ref:n,style:d,srcDoc:u})}function B({html:e,style:t}){let n=r();return a(()=>{let t=n.current;if(t)return t.innerHTML=e,H(t),()=>{t.innerHTML=``}},[e]),c(`div`,{ref:n,style:{...q,...t}})}function V({html:e,style:t}){return c(`div`,{style:{...q,...t},dangerouslySetInnerHTML:{__html:e}})}function H(e){if(e instanceof Element&&e.tagName===`SCRIPT`){let t=document.createElement(`script`);t.text=e.innerHTML;for(let{name:n,value:r}of e.attributes)t.setAttribute(n,r);e.parentElement.replaceChild(t,e)}else for(let t of e.childNodes)H(t)}function U(){return c(`div`,{className:`framerInternalUI-componentPlaceholder`,style:{...h,overflow:`hidden`},children:c(`div`,{style:J,children:`Loading…`})})}function W({message:e,style:t}){return c(`div`,{className:`framerInternalUI-errorPlaceholder`,style:{minHeight:G(t),...h,overflow:`hidden`,...t},children:c(`div`,{style:J,children:e})})}function G(e){if(!e.height)return 200}var K,q,J,Y=e((()=>{i(),l(),n(),u(),N(),p(P,{type:{type:f.Enum,defaultValue:`url`,displaySegmentedControl:!0,options:[`url`,`html`],optionTitles:[`URL`,`HTML`]},url:{title:`URL`,type:f.String,description:`Some websites don’t support embedding.`,hidden(e){return e.type!==`url`}},html:{title:`HTML`,type:f.String,displayTextArea:!0,hidden(e){return e.type!==`html`}},border:{title:`Border`,type:f.Border,optional:!0,hidden(e){return e.type!==`url`}},radius:{type:f.BorderRadius,title:`Radius`,hidden(e){return e.type!==`url`}},zoom:{title:`Zoom`,defaultValue:1,type:f.Number,hidden(e){return e.type!==`url`},min:.1,max:1,step:.1,displayStepper:!0}}),K={width:`100%`,height:`100%`,border:`none`},q={width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`},J={textAlign:`center`,minWidth:140}})),X,Z,Q,$=e((()=>{u(),m.loadFonts([]),X=[{explicitInter:!0,fonts:[]}],Z=[`.framer-4mNZX .framer-styles-preset-184nqfd:not(.rich-text-wrapper), .framer-4mNZX .framer-styles-preset-184nqfd.rich-text-wrapper a { --framer-link-current-text-decoration: none; --framer-link-hover-text-decoration: none; --framer-link-text-decoration: none; }`],Q=`framer-4mNZX`}));export{P as a,$ as i,Z as n,Y as o,X as r,Q as t};
//# sourceMappingURL=agFwXrrlR.DTEHlVxu.mjs.map