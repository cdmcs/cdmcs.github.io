import{_ as n,W as s,X as a,a2 as t}from"./framework-fd65af3d.js";const p={},e=t(`<h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> 使用说明</h2><ol><li>下面介绍的样式都应创立一个文件夹，然后每个页面引入即可。</li><li>引入的时候，该css文件一定是第一个css文件引入，后面可能还有组件库的css或者自己定义的css。</li></ol><h2 id="移动端" tabindex="-1"><a class="header-anchor" href="#移动端" aria-hidden="true">#</a> 移动端</h2><details class="hint-container details"><summary>查看代码示例</summary><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span> <span class="token property">-webkit-tap-highlight-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span> <span class="token property">outline</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td</span> <span class="token punctuation">{</span> <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">img</span> <span class="token punctuation">{</span> <span class="token property">border</span><span class="token punctuation">:</span> 0 none<span class="token punctuation">;</span> <span class="token property">vertical-align</span><span class="token punctuation">:</span> top<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">i, em</span> <span class="token punctuation">{</span> <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">ol, ul</span> <span class="token punctuation">{</span> <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">input, select, button, h1, h2, h3, h4, h5, h6</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token property">font-family</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">table</span> <span class="token punctuation">{</span> <span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span> <span class="token property">border-spacing</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">a</span> <span class="token punctuation">{</span> <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token property">color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span> <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span> <span class="token property">min-width</span><span class="token punctuation">:</span> 320px<span class="token punctuation">;</span> <span class="token property">max-width</span><span class="token punctuation">:</span> 640px<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span> <span class="token property">font-family</span><span class="token punctuation">:</span> -apple-system<span class="token punctuation">,</span>Helvetica<span class="token punctuation">,</span>sans-serif<span class="token punctuation">;</span> <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span> <span class="token property">color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span> <span class="token property">-webkit-text-size-adjust</span><span class="token punctuation">:</span> 100% <span class="token important">!important</span><span class="token punctuation">;</span> <span class="token property">text-size-adjust</span><span class="token punctuation">:</span> 100% <span class="token important">!important</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">input[type=&quot;text&quot;], textarea</span> <span class="token punctuation">{</span> <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token property">-moz-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token property">appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="pc端" tabindex="-1"><a class="header-anchor" href="#pc端" aria-hidden="true">#</a> PC端</h2><details class="hint-container details"><summary>查看代码示例</summary><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span> <span class="token property">-webkit-tap-highlight-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span> <span class="token property">outline</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td</span> <span class="token punctuation">{</span> <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">img</span> <span class="token punctuation">{</span> <span class="token property">border</span><span class="token punctuation">:</span> 0 none<span class="token punctuation">;</span> <span class="token property">vertical-align</span><span class="token punctuation">:</span> top<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">i, em</span> <span class="token punctuation">{</span> <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">ol, ul</span> <span class="token punctuation">{</span> <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">input, select, button, h1, h2, h3, h4, h5, h6</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token property">font-family</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">table</span> <span class="token punctuation">{</span> <span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span> <span class="token property">border-spacing</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">a</span> <span class="token punctuation">{</span> <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token property">color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span> <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span> <span class="token property">min-width</span><span class="token punctuation">:</span> 320px<span class="token punctuation">;</span> <span class="token property">max-width</span><span class="token punctuation">:</span> 640px<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span> <span class="token property">font-family</span><span class="token punctuation">:</span> -apple-system<span class="token punctuation">,</span>Helvetica<span class="token punctuation">,</span>sans-serif<span class="token punctuation">;</span> <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span> <span class="token property">color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span> <span class="token property">-webkit-text-size-adjust</span><span class="token punctuation">:</span> 100% <span class="token important">!important</span><span class="token punctuation">;</span> <span class="token property">text-size-adjust</span><span class="token punctuation">:</span> 100% <span class="token important">!important</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">input[type=&quot;text&quot;], textarea</span> <span class="token punctuation">{</span> <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token property">-moz-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token property">appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="meyerweb推荐" tabindex="-1"><a class="header-anchor" href="#meyerweb推荐" aria-hidden="true">#</a> meyerweb推荐</h2><details class="hint-container details"><summary>查看代码示例</summary><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/</span>

<span class="token selector">html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video</span> <span class="token punctuation">{</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
	<span class="token property">font</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* HTML5 display-role reset for older browsers */</span>
<span class="token selector">article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section</span> <span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
	<span class="token property">line-height</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">ol, ul</span> <span class="token punctuation">{</span>
	<span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">blockquote, q</span> <span class="token punctuation">{</span>
	<span class="token property">quotes</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">blockquote:before, blockquote:after,
q:before, q:after</span> <span class="token punctuation">{</span>
	<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token property">content</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">table</span> <span class="token punctuation">{</span>
	<span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span>
	<span class="token property">border-spacing</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="简约格式化布局" tabindex="-1"><a class="header-anchor" href="#简约格式化布局" aria-hidden="true">#</a> 简约格式化布局</h2><details class="hint-container details"><summary>查看代码示例</summary><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,10),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","css-reset.html.vue"]]);export{r as default};
