import{r as p,o,c as t,a as n,b as c,F as r,e as s,d as a}from"./app.554cb4e4.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";var i="/DBC-Wiki/assets/image-20211020111401731.52d0d6e3.png",u="/DBC-Wiki/assets/image-20210813113734192.75462bbb.png";const d={},b=s('<h1 id="dbc-blockchain-\u4E3B\u7F51-rpc-\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#dbc-blockchain-\u4E3B\u7F51-rpc-\u8BF4\u660E" aria-hidden="true">#</a> DBC-Blockchain \u4E3B\u7F51 RPC \u8BF4\u660E</h1><h2 id="_1-rpc-\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_1-rpc-\u8BF4\u660E" aria-hidden="true">#</a> 1. RPC \u8BF4\u660E</h2><h3 id="_1-1-\u9002\u7528\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_1-1-\u9002\u7528\u7248\u672C" aria-hidden="true">#</a> 1.1 \u9002\u7528\u7248\u672C</h3>',3),h=a("\u6587\u6863\u9002\u7528 dbc \u4E3B\u7F51\uFF0C\u4E3B\u7F51\u5206\u652F"),m={href:"https://github.com/DeepBrainChain/DeepBrainChain-MainChain",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"master",-1),_=a("\uFF0Cwebsocket \u63A5\u53E3\u5730\u5740\uFF1A "),g=n("code",null,"wss://info.dbcwallet.io",-1),q=s(`<h3 id="_1-2-\u642D\u5EFA\u81EA\u5DF1\u7684-rpc-\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_1-2-\u642D\u5EFA\u81EA\u5DF1\u7684-rpc-\u8282\u70B9" aria-hidden="true">#</a> 1.2 \u642D\u5EFA\u81EA\u5DF1\u7684 RPC \u8282\u70B9</h3><p>\u9664\u4E86\u4F7F\u7528 DBC \u63D0\u4F9B\u7684<code>websocket\u63A5\u53E3</code>\uFF0C\u8FD8\u53EF\u4EE5\u81EA\u5DF1\u642D\u5EFA\u540C\u6B65\u8282\u70B9\u4F7F\u7528\u81EA\u5DF1\u7684\u8282\u70B9\u63D0\u4F9B\u7684<code>websocket</code>\u6216<code>HTTP\u63A5\u53E3</code>\u83B7\u53D6\u6570\u636E\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u914D\u7F6ERust\u7F16\u8BD1\u73AF\u5883</span>
<span class="token function">curl</span> https://getsubstrate.io -sSf <span class="token operator">|</span> <span class="token function">bash</span> -s -- --fast
<span class="token builtin class-name">source</span> ~/.cargo/env

<span class="token comment"># \u7F16\u8BD1dbc-chain</span>
<span class="token function">git</span> clone https://github.com/DeepBrainChain/DeepBrainChain-MainChain.git <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> DeepBrainChain-MainChain
cargo build --release

<span class="token comment"># \u8FD0\u884C\u540C\u6B65\u8282\u70B9\uFF1A</span>
./target/release/dbc-chain --base-path ./db_data --chain ./dbcSpecRaw.json --pruning archive --rpc-cors all --no-mdns --bootnodes /ip4/47.74.88.41/tcp/8947/p2p/12D3KooWD87i4TKA68P7zpGNXxUaHgvnimbgihEzDyJrmG3iGJPw

<span class="token comment"># \u7AEF\u53E3\u53C2\u6570\uFF1A</span>
--rpc-port <span class="token number">9933</span>   <span class="token comment"># \u6307\u5B9A\u4F60\u7684\u8282\u70B9\u76D1\u542CRPC\u7684\u7AEF\u53E3\u3002 9933 \u662F\u9ED8\u8BA4\u503C\uFF0C\u56E0\u6B64\u8BE5\u53C2\u6570\u4E5F\u53EF\u5FFD\u7565</span>
--ws-port <span class="token number">9945</span>    <span class="token comment"># \u6307\u5B9A\u4F60\u7684\u8282\u70B9\u7528\u4E8E\u76D1\u542C WebSocket \u7684\u7AEF\u53E3\u3002 \u9ED8\u8BA4\u7AEF\u53E3\u4E3A 9944</span>
--port <span class="token number">30333</span>      <span class="token comment"># \u6307\u5B9A\u4F60\u7528\u4E8E\u76D1\u542C p2p \u6D41\u91CF\u7684\u8282\u70B9\u7AEF\u53E3\u3002 30333 \u662F\u9ED8\u8BA4\u7AEF\u53E3\uFF0C\u82E5\u65E0\u9700\u66F4\u6539\uFF0C\u53EF\u4EE5\u5FFD\u7565\u8BE5 flag</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u5982\u4E0A\u65B9\u6CD5\u8FD0\u884C\u4E86\u540C\u6B65\u8282\u70B9\u4E4B\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>ws://127.0.0.1:9945</code> \u8C03\u7528 websocket \u63A5\u53E3\uFF0C\u901A\u8FC7<code>http://127.0.0.1:9933</code> \u8C03\u7528 http \u63A5\u53E3\u3002</p><p>\u5982\u679C\u60F3\u8FDC\u7A0B\u8BBF\u95EE\uFF0C\u9700\u8981\u4E3A websocket \u6216 http \u914D\u7F6E\u57DF\u540D\uFF0C\u4EE5\u652F\u6301 <code>wss</code> \u6216\u8005 <code>https</code></p><p>\u4F7F\u7528 HTTP \u63A5\u53E3\u83B7\u53D6\u6570\u636E\u7684\u4F8B\u5B50\uFF0C\u53EF\u4EE5\u67E5\u770B\u672C\u6587\u4EF6\u5939\u4E0B\u7684<code>dbc_chain_rpc.postman_collection.json</code>\uFF0C\u5BFC\u5165 Postman \u8FDB\u884C\u67E5\u770B\u3002</p><h3 id="_1-3-rpc-\u8BF7\u6C42\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-3-rpc-\u8BF7\u6C42\u683C\u5F0F" aria-hidden="true">#</a> 1.3 RPC \u8BF7\u6C42\u683C\u5F0F</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;jsonrpc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> method_name<span class="token punctuation">,</span>
  <span class="token property">&quot;params&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>params_1<span class="token punctuation">,</span> params_2...<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5176\u4E2D\uFF0C<code>method_name</code> \u4E3A RPC \u65B9\u6CD5\u540D\uFF0Cparams_1, params_2... \u66FF\u6362\u6210\u9700\u8981\u7684\u53C2\u6570\u3002</p><p>\u4F8B\u5982\uFF0C\u5229\u7528 Postman \u8FDE\u63A5 websocket \u67E5\u8BE2<code>\u533A\u5757\u4FE1\u606F</code>\uFF1A</p><blockquote><p>Postman \u521B\u5EFA websocket API \u7684\u65B9\u6CD5\uFF1Ahttps://blog.postman.com/postman-supports-websocket-apis/</p><p><img src="`+i+'" alt="image-20211020111401731"></p></blockquote><h3 id="_1-4-\u5982\u4F55\u8BBF\u95EE\u94FE\u4E0A\u5386\u53F2\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_1-4-\u5982\u4F55\u8BBF\u95EE\u94FE\u4E0A\u5386\u53F2\u6570\u636E" aria-hidden="true">#</a> 1.4 \u5982\u4F55\u8BBF\u95EE\u94FE\u4E0A\u5386\u53F2\u6570\u636E</h3><p>\u5728 1.3 \u4E2D\uFF0C\u83B7\u53D6\u5230\u7684\u6570\u636E\u4E3A\u94FE\u4E0A\u7684\u5F53\u524D\u72B6\u6001\u3002\u5982\u679C\u60F3\u83B7\u53D6\u8FC7\u53BB\u67D0\u4E2A\u65F6\u95F4\u7684\u72B6\u6001\uFF0C\u9700\u8981\u4F20\u5165\u67D0\u4E2A\u65F6\u95F4\u5BF9\u5E94\u533A\u5757\u7684 Hash\u3002</p><p>\u5982\u60F3\u8981\u67E5\u770B\u4E24\u5929\u524D\u7684\u6570\u636E\uFF0C\u5728\u53D1\u9001 post \u8BF7\u6C42\u7684&quot;params&quot; \u5B57\u6BB5\u7684\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u6DFB\u52A0\u4E24\u5929\u524D\u7684\u533A\u5757 Hash \u5373\u53EF\u3002</p><h3 id="_1-5-\u672A\u5305\u542B\u7684-rpc-\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#_1-5-\u672A\u5305\u542B\u7684-rpc-\u6587\u6863" aria-hidden="true">#</a> 1.5 \u672A\u5305\u542B\u7684 RPC \u6587\u6863</h3><p>\u672C\u6587\u6863\u4EC5\u5305\u542B DBC \u4E3B\u7F51 <strong><code>\u81EA\u5B9A\u4E49RPC\u7684\u8BF4\u660E</code></strong> \uFF0C\u5982\u679C\u60F3\u67E5\u770B <strong><code>\u6CE2\u5361\u94FE\u539F\u751FRPC\u7684\u6587\u6863\u8BF4\u660E</code></strong> \uFF0C\u53EF\u4EE5\u53C2\u8003: https://polkadot.js.org/docs/substrate/rpc/\uFF1B</p><h3 id="_1-6-\u67E5\u770B\u6240\u6709-\u652F\u6301\u7684-rpc-\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-6-\u67E5\u770B\u6240\u6709-\u652F\u6301\u7684-rpc-\u7684\u65B9\u6CD5" aria-hidden="true">#</a> 1.6 \u67E5\u770B\u6240\u6709 \u652F\u6301\u7684 RPC \u7684\u65B9\u6CD5</h3><p>\u53EF\u5230 dbc \u7F51\u9875\u94B1\u5305\uFF1Ahttps://www.dbcwallet.io/ \uFF0C\u70B9\u51FB\u5DE6\u4FA7\u5207\u6362\u7F51\u7EDC\uFF0C\u5728\u81EA\u5B9A\u4E49\u7EC8\u7AEF\u4E2D\uFF0C\u8F93\u5165 websocket \u5730\u5740\u3002\u7136\u540E\u5982\u4E0B\u56FE\u5BFC\u822A\u5230 <code>RPC calls</code>\uFF0C\u67E5\u770B\u533A\u5757\u94FE\u652F\u6301\u7684\u6240\u6709 RPC\u3002\u5982\u56FE\uFF0C\u9009\u62E9 <code>rpc</code>\u6A21\u5757\u7684<code>methods</code>\u65B9\u6CD5\uFF0C\u70B9\u51FB\u53F3\u8FB9\u7684<code>\u63D0\u4EA4RPC\u8C03\u7528</code>\uFF0C\u5C06\u5217\u51FA\u6240\u6709\u7684 RPC \u65B9\u6CD5\u540D\u3002</p><img src="'+u+`" width="50%" height="50%"><h2 id="_2-\u5173\u4E8E\u5757\u9AD8-\u5956\u52B1\u53D1\u653E\u65F6\u95F4-\u4E0Eera\u7684\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_2-\u5173\u4E8E\u5757\u9AD8-\u5956\u52B1\u53D1\u653E\u65F6\u95F4-\u4E0Eera\u7684\u8BF4\u660E" aria-hidden="true">#</a> 2. <strong>\u5173\u4E8E<code>\u5757\u9AD8</code>\uFF0C\u5956\u52B1\u53D1\u653E\u65F6\u95F4\uFF0C\u4E0E<code>Era</code>\u7684\u8BF4\u660E</strong></h2><p>\u5757\u9AD8\u5C31\u662F\u94FE\u4E0A\u7684\u65F6\u95F4\u3002</p><h3 id="_2-1-\u83B7\u53D6\u5F53\u524D\u5757\u9AD8" tabindex="-1"><a class="header-anchor" href="#_2-1-\u83B7\u53D6\u5F53\u524D\u5757\u9AD8" aria-hidden="true">#</a> 2.1 \u83B7\u53D6\u5F53\u524D\u5757\u9AD8</h3><ul><li><p>\u65B9\u6CD5\uFF1A <code>chain_getBlock</code></p></li><li><p>\u8C03\u7528\u65B9\u6CD5\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;jsonrpc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;chain_getBlock&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;params&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p>\u8FD4\u56DE\u7ED3\u679C\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;jsonrpc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;block&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      ...
            <span class="token property">&quot;header&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      ...
                <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x2d8&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;parentHash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0xc0e1b239fafc0edf3e08a908b5caecb27c2b351ed0daef3fc60c5600b28d6d7d&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;stateRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0x55ce4794b2cdd21275656a80febf5133d882d909a2de6d40d7b8887bd65628bc&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;justification&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5176\u4E2D\uFF0C&quot;number&quot;: &quot;0x2d8&quot; \u5373\u4E3A\u5757\u9AD8\uFF0C\u8F6C\u4E3A\u5341\u8FDB\u5236\u4E3A\uFF1A728</p></li></ul><h3 id="_2-2-era-\u4E0E\u5956\u52B1\u53D1\u653E\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#_2-2-era-\u4E0E\u5956\u52B1\u53D1\u653E\u65F6\u95F4" aria-hidden="true">#</a> 2.2 Era \u4E0E\u5956\u52B1\u53D1\u653E\u65F6\u95F4</h3><ul><li><p>1 Era \u4E3A 2880 \u4E2A\u533A\u5757\u9AD8\u5EA6\uFF0C\u5728 DBC \u533A\u5757\u94FE\u4E0A\uFF0C\u7EA6\u662F 1 \u5929\u3002\u53D1\u653E\u5956\u52B1\u7684\u65F6\u95F4\uFF0C\u4E3A\u533A\u5757\u94FE\u9AD8\u5EA6\u7684 <code>[2880*n, 2880*n+60]</code> \u7684\u65F6\u95F4\u533A\u95F4\u3002</p></li><li><p>\u5728\u7B2C n Era \u4E0A\u7EBF\u7684\u673A\u5668\uFF0C\u5728 n+1 Era \u7ED3\u675F\u65F6\u53D1\u653E\u3002\u5373\u5982\u679C\u5728 Era2 \u4E0A\u7EBF\u7684\u673A\u5668\u5373 [5761, 8640]\uFF0C\u5956\u52B1\u5C06\u4F1A\u5728 Era4 \u5F00\u59CB\u524D 60 \u4E2A\u5757\u7684\u533A\u95F4\u5185\u53D1\u653E Era3 \u7684\u5956\u52B1\uFF0C\u5373\u5728 <code>2880*4=11520</code> \u65F6\u5F00\u59CB\u53D1\u653E\u3002\u53EF\u4EE5\u5728\u4E4B\u540E\u67E5\u5230 Era3 \u7684\u5956\u52B1\uFF0C\u5982\u901A\u8FC7 erasMachineReleasedReward \u65B9\u6CD5\uFF0C\u67E5\u5230 era3 \u673A\u5668\u83B7\u5F97\u7684\u5956\u52B1\u3002</p></li><li><p>\u5F53\u524D\u4E3B\u7F51\u4E0A\uFF0C[529920, 532800] \u4E3A Era1\uFF0C [532801, 535680] \u4E3A Era2...</p></li></ul>`,25);function f(C,x){const e=p("ExternalLinkIcon");return o(),t(r,null,[b,n("p",null,[h,n("a",m,[k,c(e)]),_,g]),q],64)}var P=l(d,[["render",f]]);export{P as default};
