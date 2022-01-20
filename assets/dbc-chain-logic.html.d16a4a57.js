import{r as i,o as l,c as t,a as e,b as p,F as c,d as n,e as a}from"./app.554cb4e4.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const o={},m=e("h1",{id:"dbc-\u94FE\u4E0A\u6A21\u5757\u8BF4\u660E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dbc-\u94FE\u4E0A\u6A21\u5757\u8BF4\u660E","aria-hidden":"true"},"#"),n(" DBC \u94FE\u4E0A\u6A21\u5757\u8BF4\u660E")],-1),d=e("li",null,[e("p",null,"\u9879\u76EE\u5730\u5740\uFF1Ahttps://github.com/DeepBrainChain/DeepBrainChain-MainChain")],-1),h=e("li",null,[e("p",null,[n("\u5F53\u524D\u5F00\u53D1\u5206\u652F\uFF1A"),e("code",null,"master")])],-1),b=n("\u9879\u76EE\u57FA\u4E8E substrate "),u={href:"https://github.com/paritytech/substrate/releases/tag/v3.0.0",target:"_blank",rel:"noopener noreferrer"},_=n("v3.0.0"),g=a(`<li><p>\u9879\u76EE\u7ED3\u6784\u8BF4\u660E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u9879\u76EE\u4E3B\u8981\u903B\u8F91\u4F4D\u4E8Epallets\u6587\u4EF6\u5939, \u6A21\u5757\u7684\u5C42\u6B21\u5173\u7CFB\u5982\u4E0B\uFF1A
# dbc-staking, generic-func, dbc-price-ocw\u72EC\u7ACB\u4E8E\u5176\u4ED6\u6A21\u5757
# committee, online-profile \u4F9D\u8D56 generic-func, dbc-price-ocw
# maintain-committee, online-committee, rent-machine \u4F9D\u8D56\u4E0A\u4E00\u5C42\u6A21\u5757

pallets
\u251C\u2500\u2500 dbc-staking 	# \u7528\u4E8E\u8282\u70B9POA\u51FA\u5757\u9A8C\u8BC1\u5956\u52B1\uFF0C\u4FEE\u6539\u81EAsubstrate staking\u6A21\u5757
\u251C\u2500\u2500 generic-func 	# \u4E00\u4E9B\u5E2E\u52A9\u51FD\u6570\uFF0C\u5982\u5E8F\u5217\u5316/\u4E00\u4E9B\u5E38\u7528\u8BA1\u7B97
\u251C\u2500\u2500 dbc-price-ocw 	# offchain-worker\uFF0C\u7528\u4E8E\u83B7\u53D6dbc\u5B9E\u65F6\u4EF7\u683C
|
\u251C\u2500\u2500 committee 		# \u59D4\u5458\u4F1A\u6A21\u5757\uFF0C\u7528\u4E8E\u540E\u7EED\u94FE\u4E0A\u673A\u5668\u7684\u7BA1\u7406
\u251C\u2500\u2500 online-profile 	# \u673A\u5668\u7BA1\u7406\u6A21\u5757\uFF0C\u4E3B\u8981\u7528\u4E8E\u673A\u5668\u4E0A\u7EBF/\u4E0B\u7EBF/\u5728\u7EBF\u5956\u52B1\u53D1\u653E
|
\u251C\u2500\u2500 maintain-committee 	# \u673A\u5668\u4E0A\u7EBF\u540E\u51FA\u73B0\u95EE\u9898\u7684\u4E3E\u62A5\u6A21\u5757\uFF0C\u79DF\u7528\u8005\u53EF\u4EE5\u901A\u8FC7\u8BE5\u6A21\u5757\u8FDB\u884C\u4E3E\u62A5\uFF0C\u59D4\u5458\u4F1A\u8FDB\u884C\u5BA1\u6838
\u251C\u2500\u2500 online-committee 	# \u673A\u5668\u4E0A\u7EBF\u5BA1\u6838\u6A21\u5757\uFF0C\u4E3B\u8981\u7528\u4E8E\u673A\u5668\u4E0A\u7EBF\u65F6\u5206\u6D3E\u7ED9\u59D4\u5458\u4F1A\u8FDB\u884C\u5BA1\u6838
\u251C\u2500\u2500 rent-machine 		# \u79DF\u7528\u673A\u5668/\u7EED\u79DF
|
\u2514\u2500\u2500 simple-rpc # \u4EC5\u7528\u4E8E\u63D0\u4F9BRPC\uFF0C\u4E3A\u4E86testcase\u66F4\u7B80\u5355\uFF0C\u5C06\u4E00\u90E8\u5206RPC\u5355\u72EC\u653E\u5728\u8BE5palelt\u4E0B
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></li><li><p>\u6D4B\u8BD5\uFF1A\u6839\u636E pallets \u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0Ctestcase \u4F4D\u4E8E<code>maintain-committee</code>, <code>online-committee</code>, <code>rent-machine</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>cargo <span class="token builtin class-name">test</span> -p online-committee
cargo <span class="token builtin class-name">test</span> -p rent-machine
cargo <span class="token builtin class-name">test</span> -p maintain-committee
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>`,2),f=a('<h2 id="dbc-chain-\u4E3B\u8981\u6A21\u5757\u529F\u80FD\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#dbc-chain-\u4E3B\u8981\u6A21\u5757\u529F\u80FD\u8BF4\u660E" aria-hidden="true">#</a> dbc-chain \u4E3B\u8981\u6A21\u5757\u529F\u80FD\u8BF4\u660E</h2><ol><li><p>\u59D4\u5458\u4F1A\u6A21\u5757(<code>committee</code> pallet)\uFF1A\u901A\u8FC7\u516C\u6295\uFF08Root \u6743\u9650\uFF09\u6DFB\u52A0\u59D4\u5458\u4F1A\uFF0C\u59D4\u5458\u4F1A\u6210\u5458(committee)\u8D28\u62BC\u4E00\u5B9A DBC\uFF0C\u53C2\u4E0E\u673A\u5668\u7684\u7BA1\u7406\u5E76\u83B7\u53D6 DBC \u5956\u52B1</p></li><li><p>\u673A\u5668\u4E0A\u7EBF\u4E3B\u8981\u903B\u8F91 (<code>online-profile</code> pallet \u548C <code>online-committee</code> pallet)</p><ol><li><p>\u673A\u5668\u8D44\u91D1\u5E10\u53F7(stash) \u7ED1\u5B9A \u673A\u5668\u63A7\u5236\u5E10\u53F7(controller)</p></li><li><p>\u63A7\u5236\u5E10\u53F7\u63D0\u4EA4\u673A\u5668\u4E0A\u7EBF\u8BF7\u6C42\uFF08\u63D0\u4EA4\u673A\u5668\u79C1\u94A5\u7B7E\u540D\uFF0C\u7528\u4E8E\u673A\u5668\u8BA4\u8BC1 stash \u8D26\u6237\uFF09\uFF0C\u5E76\u8D28\u62BC stash \u8D26\u6237\u4E00\u5B9A DBC</p></li><li><p>\u673A\u5668\u88AB\u6D3E\u5355\u7ED9\u72B6\u6001\u6B63\u5E38\u7684\u59D4\u5458\u4F1A\uFF0C\u5141\u8BB8\u5728\u7279\u5B9A\u65F6\u95F4\u767B\u5F55\u673A\u5668\u8FDB\u884C\u9A8C\u8BC1\u3002\u88AB\u6D3E\u5355\u7684\u59D4\u5458\u4F1A\u88AB\u8BB0\u5F55\u201C\u4F7F\u7528\u4E86\u4E00\u90E8\u5206\u8D28\u62BC\u201D</p></li><li><p>committee <strong>\u4F9D\u6B21</strong>\u9A8C\u8BC1\u673A\u5668\u4FE1\u606F\uFF08\u94FE\u4E0B\u9A8C\u8BC1\uFF09\uFF0C\u5E76\u63D0\u4EA4\u786E\u8BA4\u7684\u7ED3\u679C\uFF08\u8BA4\u53EF\u4E0A\u7EBF/\u62D2\u7EDD\u4E0A\u7EBF\uFF09\u7684 Hash</p></li><li><p>\u5230\u7279\u5B9A\u65F6\u95F4/\u6240\u6709\u59D4\u5458\u4F1A\u63D0\u4EA4\u4E86 Hash \u4E4B\u540E\uFF0C\u5141\u8BB8\u59D4\u5458\u4F1A\u63D0\u4EA4\u539F\u59CB\u786E\u8BA4\u7ED3\u679C\uFF08\u540C\u610F/\u62D2\u7EDD\u673A\u5668\u4E0A\u7EBF\uFF09</p><p>5.1 \u673A\u5668\u6210\u529F\u4E0A\u7EBF\uFF08\u540C\u610F\u4E0A\u7EBF\u7684\u59D4\u5458\u4F1A&gt;\u62D2\u7EDD\u7684\u59D4\u5458\u4F1A\uFF09\uFF1A\u4ECE\u4E0B\u4E00\u5929\u5F00\u59CB\uFF0C\u673A\u5668\u548C\u59D4\u5458\u4F1A\u83B7\u5F97\u5956\u52B1\u3002\u540C\u65F6\uFF0C\u62D2\u7EDD\u4E0A\u7EBF/\u63D0\u4EA4\u4E86\u4E0E\u5176\u4ED6\u59D4\u5458\u4F1A\u4E0D\u540C\u4FE1\u606F\u7684\u59D4\u5458\u4F1A\uFF0C\u4F1A\u88AB\u7CFB\u7EDF\u8BB0\u5F55\uFF0C\u5E76\u6DFB\u52A0\u4E00\u4E2A\u5F85\u6267\u884C\u7684\u60E9\u7F5A</p><p>5.2 \u673A\u5668\u88AB\u62D2\u7EDD\u4E0A\u7EBF\uFF08\u540C\u610F\u4E0A\u7EBF\u7684\u59D4\u5458\u4F1A&lt;=\u62D2\u7EDD\u7684\u59D4\u5458\u4F1A\uFF09 \uFF1A\u652F\u6301\u4E0A\u7EBF\u7684\u59D4\u5458\u4F1A\u548C\u673A\u5668 stash \u4F1A\u88AB\u8BB0\u5F55\uFF0C\u5E76\u6DFB\u52A0\u4E00\u4E2A\u5F85\u6267\u884C\u7684\u60E9\u7F5A</p></li><li><p>\u6267\u884C\u60E9\u7F5A\uFF1A\u5728\u7CFB\u7EDF\u4E2D\u5B58\u5728\u60E9\u7F5A\uFF0C\u60E9\u7F5A\u6267\u884C\u524D\uFF08\u4E24\u5929\u5185\uFF09\u5141\u8BB8\u88AB\u60E9\u7F5A\u4EBA\u8FDB\u884C\u7533\u8FF0\uFF08\u989D\u5916\u8D28\u62BC DBC\uFF09\uFF0C\u6280\u672F\u59D4\u5458\u4F1A(technical committee)\u5728\u60E9\u7F5A\u6267\u884C\u524D\u53EF\u4EE5\u53D6\u6D88\u60E9\u7F5A\uFF0C\u5982\u679C\u7533\u8FF0\u901A\u8FC7\uFF0C\u5219\u60E9\u7F5A\u88AB\u5220\u9664\u3002\u5426\u5219\uFF0C\u60E9\u7F5A\u5728\u4E24\u5929\u540E(\u60E9\u7F5A\u53D1\u751F\u7B97\u8D77)\u6267\u884C\u3002</p></li><li><p>\u673A\u5668\u6210\u529F\u4E0A\u7EBF\u540E\uFF0C\u63A7\u5236\u8D26\u6237\u7684\u64CD\u4F5C</p></li><li><p>\u9886\u53D6\u8D44\u91D1\u8D26\u6237\u83B7\u53D6\u7684\u5956\u52B1</p></li><li><p>\u4F7F\u673A\u5668\u4E0B\u7EBF\uFF08\u79DF\u7528/\u5728\u7EBF\u65F6\uFF09\uFF0C\u4EE5\u5904\u7406\u6545\u969C\uFF08\u907F\u514D\u88AB\u4E3E\u62A5\uFF09\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u673A\u5668\u4E0A\u7EBF\u65F6\uFF08\u9700\u8981\u8D28\u62BC\u5F85\u60E9\u7F5A\u91D1\u989D\uFF09\uFF0C\u7EDF\u8BA1\u673A\u5668\u79BB\u7EBF\u65F6\u957F\uFF0C\u6839\u636E\u79BB\u7EBF\u65F6\u7684\u72B6\u6001\u8FDB\u884C\u60E9\u7F5A\u3002</p></li><li><p>\u4E0B\u7EBF\u4EE5\u7528\u4E8E\u4FEE\u6539\u673A\u5668\u914D\u7F6E\u3002\u4E0D\u540C\u4E8E\u76F4\u63A5\u4E0B\u7EBF\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u9700\u8981\u59D4\u5458\u4F1A\u91CD\u65B0\u5BA1\u6838\u624D\u80FD\u4E0A\u7EBF\u3002</p></li></ol></li><li><p>\u673A\u5668\u7EF4\u62A4\u6A21\u5757(<code>maintain-committee</code>)\u4E3B\u8981\u903B\u8F91</p><ol><li><p>\u6210\u529F\u4E0A\u7EBF\u7684\u673A\u5668\uFF0C\u53EF\u4EE5\u88AB\u666E\u901A\u7528\u6237\u79DF\u7528(renter)\u3002\u79DF\u7528\u4E4B\u524D/\u79DF\u7528\u8FC7\u7A0B\u4E2D\u53D1\u73B0\u95EE\u9898\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>maintain-committee</code>\u8FDB\u884C\u4E3E\u62A5\u3002</p></li><li><p>\u53EF\u4EE5\u4E3E\u62A5\u7684\u60C5\u51B5\uFF1A</p><p>1). \u5F53\u673A\u5668\u5904\u4E8E\u79DF\u7528\u72B6\u6001\uFF0C\u673A\u5668\u65E0\u6CD5\u8BBF\u95EE</p><p>2). \u5F53\u673A\u5668\u5904\u4E8E\u79DF\u7528\u72B6\u6001\uFF0C\u673A\u5668\u786C\u4EF6\u51FA\u73B0\u6545\u969C</p><p>3). \u5F53\u673A\u5668\u5904\u4E8E\u79DF\u7528\u72B6\u6001\uFF0C\u53D1\u73B0\u786C\u4EF6\u53C2\u6570\u914D\u7F6E\u9020\u5047</p><p>4). \u5F53\u673A\u5668\u5904\u4E8E\u95F2\u7F6E\u72B6\u6001\uFF0C\u673A\u5668\u65E0\u6CD5\u79DF\u7528</p></li></ol></li></ol><h2 id="\u5956\u52B1\u4E0E\u60E9\u7F5A\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5956\u52B1\u4E0E\u60E9\u7F5A\u8BF4\u660E" aria-hidden="true">#</a> \u5956\u52B1\u4E0E\u60E9\u7F5A\u8BF4\u660E</h2><h3 id="\u5956\u52B1" tabindex="-1"><a class="header-anchor" href="#\u5956\u52B1" aria-hidden="true">#</a> \u5956\u52B1</h3><p>stash \u8D26\u6237\u7684\u5956\u52B1\uFF1A</p><ol><li><p>\u673A\u5668\u5728\u7EBF/\u88AB\u79DF\u7528\uFF0C\u5C06\u4F1A\u6309\u6BD4\u4F8B\u5206\u5F97\u6BCF\u5929\u53D1\u653E\u7684\u5956\u52B1\u3002</p></li><li><p><strong><em>\u94F6\u6CB3\u7ADE\u8D5B</em></strong> \u5F00\u542F\u524D(\u7CFB\u7EDF\u4E2D\u5728\u7EBF\u7684 GPU \u8FBE\u5230\u4E00\u5B9A\u6570\u91CF\u5F00\u542F)\uFF0C\u79DF\u91D1\u5C06\u53D1\u653E\u7ED9 stash \u8D26\u6237\u3002</p></li></ol><p>committee \u7684\u5956\u52B1</p><ol><li><p>\u673A\u5668\u521D\u6B21\u6210\u529F\u4E0A\u7EBF\u65F6\uFF0C\u6709\u6548\u5BA1\u6838\u7684\u59D4\u5458\u4F1A\u5C06\u88AB\u8BB0\u5F55\uFF0C\u5E76\u5728\u968F\u540E\u7684\u4E24\u5E74\u5185\uFF0C\u6BCF\u5929\u5206\u5F97\u673A\u5668\u83B7\u5F97\u5956\u52B1\u7684 1%</p></li><li><p>\u673A\u5668\u4E0A\u7EBF\u5931\u8D25\u65F6\uFF0C\u62D2\u7EDD\u4E0A\u7EBF\u7684\u59D4\u5458\u4F1A\u5C06\u83B7\u5F97\u673A\u5668\u4E0A\u7EBF\u65F6 stash \u8D26\u6237\u8D28\u62BC\u7684\u4E00\u5B9A\u6BD4\u4F8B\u7684\u5956\u52B1</p></li><li><p>\u673A\u5668\u56E0\u4FEE\u6539\u914D\u7F6E\u4E0B\u7EBF\u65F6\uFF0C\u9700\u8981 stash \u8D28\u62BC\u4E00\u5B9A\u91D1\u989D\uFF0C\u5E76\u8FDB\u884C\u59D4\u5458\u4F1A\u5BA1\u6838\u3002\u968F\u540E\u673A\u5668\u6210\u529F\u4E0A\u7EBF\u65F6\uFF0C\u6709\u6548\u7684\u5BA1\u6838\u7684\u59D4\u5458\u4F1A\uFF0C\u5C06\u5206\u5F97\u8D28\u62BC\u7684\u91D1\u989D\u3002</p></li><li><p>\u5F53\u673A\u5668\u88AB\u4E3E\u62A5\u65F6\uFF0C\u5E76\u4E14\u4E3E\u62A5\u88AB\u901A\u8FC7\u65F6\uFF0C\u59D4\u5458\u4F1A\u5C06\u83B7\u5F97\u4E00\u5B9A\u6BD4\u4F8B\u7684\u5BF9 stash \u7684\u60E9\u7F5A</p></li></ol><h3 id="\u60E9\u7F5A" tabindex="-1"><a class="header-anchor" href="#\u60E9\u7F5A" aria-hidden="true">#</a> \u60E9\u7F5A</h3><p>stash \u8D26\u6237\u7684\u60E9\u7F5A</p><ol><li><p>\u673A\u5668\u4E0A\u7EBF\u88AB\u62D2\u7EDD</p></li><li><p>\u673A\u5668\u4E0A\u7EBF\u4E4B\u540E\u4E0B\u7EBF</p></li><li><p>\u88AB\u4E3E\u62A5\u800C\u4E0B\u7EBF</p></li><li><p>\u4E0B\u7EBF\u4FEE\u6539\u914D\u7F6E\u4FE1\u606F\uFF0C\u5BA1\u6838\u4E0D\u901A\u8FC7</p></li></ol><p>committee \u7684\u60E9\u7F5A</p><ol><li><p>\u6CA1\u6709\u505A\u5B8C\u5206\u6D3E\u7684\u4EFB\u52A1\uFF1A\u673A\u5668\u4E0A\u7EBF\u65F6\uFF0C\u4F1A\u968F\u673A\u6311\u9009\u59D4\u5458\u4F1A\u8FDB\u884C\u9A8C\u8BC1\u3002\u6CA1\u6709\u5B8C\u6210\u9A8C\u8BC1\u4EFB\u52A1\u7684\u5C06\u4F1A\u88AB\u60E9\u7F5A</p></li><li><p>\u4E0E\u5176\u4ED6\u59D4\u5458\u4F1A\u610F\u89C1\u4E0D\u4E00\u81F4\uFF1A\u5F53\u9700\u8981\u5BA1\u6838\uFF08\u5305\u62EC\u673A\u5668\u4E0A\u7EBF\u65F6\u7684\u7CFB\u7EDF\u81EA\u52A8\u6D3E\u5355\uFF0C\u4EE5\u53CA\u673A\u5668\u88AB\u4E3E\u62A5\u65F6\u59D4\u5458\u4F1A\u4E3B\u52A8\u62A2\u5355\uFF09\u65F6\uFF0C\u901A\u5E38\u9700\u8981\u59D4\u5458\u4F1A\u5148\u63D0\u4EA4\u7ED3\u679C\u7684 Hash\uFF0C\u7B49\u5230\u6240\u6709\u59D4\u5458\u4F1A\u63D0\u4EA4\u5B8C Hash \u540E\uFF0C\u518D\u63D0\u4EA4\u539F\u59CB\u4FE1\u606F\u3002\u5982\u679C\u63D0\u4EA4\u7684\u539F\u59CB\u4FE1\u606F\u4E0E\u5927\u591A\u6570\u59D4\u5458\u4F1A\u4E0D\u4E00\u81F4\uFF0C\u5C06\u88AB\u60E9\u7F5A</p></li></ol><h3 id="\u60E9\u7F5A\u7684\u7533\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u60E9\u7F5A\u7684\u7533\u8FF0" aria-hidden="true">#</a> \u60E9\u7F5A\u7684\u7533\u8FF0</h3><p>\u6240\u6709\u7684\u60E9\u7F5A\u90FD\u4F1A\u88AB\u8BB0\u5F55\uFF0C\u5E76\u5EF6\u8FDF\u6267\u884C\u3002\u5141\u8BB8\u88AB\u60E9\u7F5A\u4EBA\u8D28\u62BC\u5E76\u7533\u8FF0\u3002\u6280\u672F\u59D4\u5458\u4F1A\u6709\u6743\u9650\u53D6\u6D88\u60E9\u7F5A\u3002</p>',15);function x(v,k){const s=i("ExternalLinkIcon");return l(),t(c,null,[m,e("ul",null,[d,h,e("li",null,[e("p",null,[b,e("a",u,[_,p(s)])])]),g]),f],64)}var D=r(o,[["render",x]]);export{D as default};