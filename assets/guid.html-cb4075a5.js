import{_ as l,W as i,X as u,Y as s,a0 as n,Z as a,$ as e,a2 as c,C as o}from"./framework-fd65af3d.js";const r={},k={class:"hint-container info"},d=s("p",{class:"hint-container-title"},"前言",-1),m=s("h2",{id:"写在前面",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#写在前面","aria-hidden":"true"},"#"),n(" 写在前面")],-1),v={href:"https://element.eleme.cn/#/zh-CN/component/installation",target:"_blank",rel:"noopener noreferrer"},g={href:"https://element.eleme.cn/#/zh-CN/component/installation",target:"_blank",rel:"noopener noreferrer"},h={href:"https://element.eleme.cn/#/zh-CN/component/installation",target:"_blank",rel:"noopener noreferrer"},b=c(`<h2 id="组件库文件存放位置" tabindex="-1"><a class="header-anchor" href="#组件库文件存放位置" aria-hidden="true">#</a> 组件库文件存放位置</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>  下载完成后可以打开<code>index.html</code>查看部分效果。</p><p>  若想在项目中使用，除了<code>index.html</code>文件，其它文件都需要复制。</p></div><p>  组件库存放位置应在公共路径，让每一位开发者在页面头部引入即可，后面公共库代码修改也只需要替换公共路径下的文件，引入方式也无需修改(建议不带版本号)，方便减少代码维护工作。</p><h2 id="引入方式" tabindex="-1"><a class="header-anchor" href="#引入方式" aria-hidden="true">#</a> 引入方式</h2><p>以下是引用公共库文件方法示例代码（<mark>复制、粘贴后请手动删除注释内容</mark>）：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 在页面头部 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 引用公共库的css --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../dist/index.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- 引入vue --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/vue@2/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 引入公共库的js --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../dist/index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用注意" tabindex="-1"><a class="header-anchor" href="#使用注意" aria-hidden="true">#</a> 使用注意</h2>`,7),_={href:"https://element.eleme.cn/#/zh-CN/component/installation",target:"_blank",rel:"noopener noreferrer"},x=c(`<p>  若用到公共组件，则页面使用方法为：<code>&lt;cdmcs-xxx /&gt;</code>。</p><p>  若用到公共方法，则页面使用方法为：<code>CDMCS.xxx</code>或<code>window.CDMCS.xxx</code>。</p><p>  注意：<strong>CDMCS.xxx或window.CDMCS.xxx使用方法只能在JS中直接使用，无法在html中直接使用，若想在html中直接使用CDMCS.xxx方法，查看下面示例代码：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../dist/index.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/vue@2/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../dist/index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-cloak</span><span class="token punctuation">&gt;</span></span>
      目前你使用的公共组件库版本为：{{CDMCS.version}}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token constant">CDMCS</span><span class="token operator">:</span> window<span class="token punctuation">.</span><span class="token constant">CDMCS</span> <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function q(f,C){const t=o("RouterLink"),p=o("ExternalLinkIcon");return i(),u("div",null,[s("div",k,[d,s("p",null,[n("已了解“使用须知”？"),a(t,{to:"/public-component-intro/components/intro.html"},{default:e(()=>[n("开始使用")]),_:1})]),s("p",null,[n("还未下载组件库？"),a(t,{to:"/public-component-intro/components/versions.html"},{default:e(()=>[n("开始下载")]),_:1})])]),m,s("p",null,[n("  此组件库结合了"),s("a",v,[n("element-ui"),a(p)]),n("封装了一些公司日常开发过程中常用的组件、方法，诣在提高团队整体的开发效率。")]),s("p",null,[n("  此组件库包含了"),s("a",g,[n("element-ui"),a(p)]),n("使用的组件和方法，因此当"),a(t,{to:"/public-component-intro/components/versions.html"},{default:e(()=>[n("下载此组件库")]),_:1}),n("在页面引入后，无需再额外引入"),s("a",h,[n("element-ui"),a(p)]),n("的js文件和css文件，")]),b,s("p",null,[n("  一切在"),s("a",_,[n("element-ui"),a(p)]),n("文档上有介绍的按官方文档正常使用即可，一切组件无需手动在页面注册可以直接使用。")]),x,s("p",null,[n("更多详细常用公共组件或方法，可以详细"),a(t,{to:"/public-component-intro/components/intro.html"},{default:e(()=>[n("查看这篇文章")]),_:1}),n("。")])])}const y=l(r,[["render",q],["__file","guid.html.vue"]]);export{y as default};