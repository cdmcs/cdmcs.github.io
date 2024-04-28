import{_ as p,W as l,X as o,Y as n,a0 as a,Z as t,$ as e,a2 as c,C as i}from"./framework-fd65af3d.js";const u={},d={class:"hint-container info"},r=n("p",{class:"hint-container-title"},"前言",-1),k=c(`<h2 id="公共组件" tabindex="-1"><a class="header-anchor" href="#公共组件" aria-hidden="true">#</a> 公共组件</h2><h3 id="cdmcs-phone-组件" tabindex="-1"><a class="header-anchor" href="#cdmcs-phone-组件" aria-hidden="true">#</a> cdmcs-phone 组件</h3><p>控制手机号是否脱敏显示</p><h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 在页面中使用 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdmcs-phone</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h4><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th>可选值</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;">控制手机号是否脱敏</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td>-</td></tr><tr><td style="text-align:left;">telephone</td><td style="text-align:left;">显示的11位手机号</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td>-</td></tr><tr><td style="text-align:left;">show-icon</td><td style="text-align:left;">是否显示隐藏图标</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td>-</td></tr></tbody></table><h5 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h5><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th></tr></thead><tbody><tr><td style="text-align:left;">change</td><td style="text-align:left;">当控制手机号是否脱敏显示时触发</td><td style="text-align:left;">(value:boolean)=&gt;void</td></tr></tbody></table><h2 id="公共方法" tabindex="-1"><a class="header-anchor" href="#公共方法" aria-hidden="true">#</a> 公共方法</h2><h3 id="usevalidate" tabindex="-1"><a class="header-anchor" href="#usevalidate" aria-hidden="true">#</a> useValidate</h3><p>使用<code>useValidate</code>可验证用户输入的、信息是否正确。</p><h4 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1" aria-hidden="true">#</a> 使用</h4><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>phone<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>手机号码<span class="token punctuation">&quot;</span></span> 
    <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[ 
      { required: true, message: &#39;请输入手机号码&#39;, trigger: &#39;blur&#39; },
      {  trigger: [&#39;blur&#39;, &#39;change&#39;], validator: validateTelephoneByHand}
  ]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">form</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">phone</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 将window上的CDMCS方法挂载到vue</span>
        <span class="token constant">CDMCS</span><span class="token operator">:</span> window<span class="token punctuation">.</span><span class="token constant">CDMCS</span> <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 手动提示校验错误提示</span>
      <span class="token function-variable function">validateTelephoneByHand</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">rule<span class="token punctuation">,</span> value<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token constant">CDMCS</span><span class="token punctuation">.</span><span class="token function">useValidate</span><span class="token punctuation">(</span><span class="token string">&quot;tel&quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;亲，请输入正确的手机号！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h5><p><strong>类型：</strong><code>useValidate(type, value) =&gt; boolean</code></p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th>可选值</th></tr></thead><tbody><tr><td style="text-align:left;">type</td><td style="text-align:left;">校验类型</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td>见下</td></tr><tr><td style="text-align:left;">value</td><td style="text-align:left;">校验的值</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td>-</td></tr></tbody></table><p>传入第一个参数校验类型，再传入第一个参数需要校验的值，调用返回boolean类型。为true代表校验通过，为false代表校验失败。</p><p><strong>type可选值</strong></p><ul><li><code>id</code>——校验身份证号</li><li><code>tel</code>——校验手机号</li></ul><p><strong>使用场景：</strong></p><p>当需要校验不通过时想手动处理逻辑可调用此方法。</p><h3 id="usevalidateidnum" tabindex="-1"><a class="header-anchor" href="#usevalidateidnum" aria-hidden="true">#</a> useValidateIdNum</h3><p>通过调用<code>useValidateIdNum</code>使用预设的校验18位身份证号码错误失败提示。</p><p><mark>已经实现了校验身份证号码18位的长度和身份证的格式</mark></p><h4 id="使用-2" tabindex="-1"><a class="header-anchor" href="#使用-2" aria-hidden="true">#</a> 使用</h4><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span>
    <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>phone<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>手机号码<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
      { required: true, message: &#39;手机号码不可为空&#39;, trigger: &#39;blur&#39; },
      {  trigger: [&#39;blur&#39;, &#39;change&#39;],validator: CDMCS.useValidateTelephone}
    ]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form.phone<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>请输入手机号码(使用预设校验提示错误信息)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-input</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">form</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">phone</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 将window上的CDMCS方法挂载到vue，然后在上面的validator中直接使用CDMCS.useValidateTelephone</span>
        <span class="token constant">CDMCS</span><span class="token operator">:</span> window<span class="token punctuation">.</span><span class="token constant">CDMCS</span> <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usevalidatetelephone" tabindex="-1"><a class="header-anchor" href="#usevalidatetelephone" aria-hidden="true">#</a> useValidateTelephone</h3><p>通过调用<code>useValidateTelephone</code>使用预设的校验11位手机号码错误失败提示。</p><p>使用方法：参考<code>useValidateIdNum</code>的使用</p>`,30);function v(h,m){const s=i("RouterLink");return l(),o("div",null,[n("div",d,[r,n("ul",null,[n("li",null,[a("还未了解“使用须知”？"),t(s,{to:"/public-component-intro/components/guid.html"},{default:e(()=>[a("开始了解")]),_:1})]),n("li",null,[a("还未下载组件库？"),t(s,{to:"/public-component-intro/components/versions.html"},{default:e(()=>[a("开始下载")]),_:1})])])]),k])}const b=p(u,[["render",v],["__file","intro.html.vue"]]);export{b as default};
