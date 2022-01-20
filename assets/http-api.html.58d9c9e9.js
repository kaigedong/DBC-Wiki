import{e}from"./app.554cb4e4.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";var s="/DBC-Wiki/assets/query_machine_info.4e40c27c.png",a="/DBC-Wiki/assets/query_session_id.4a7d3922.png",t="/DBC-Wiki/assets/create_task.3ddee2d1.png",i="/DBC-Wiki/assets/query_task_info.e24f4642.png",r="/DBC-Wiki/assets/list_task.90d6f04c.png",o="/DBC-Wiki/assets/delete_task.02556d3a.png";const u={},l=e(`<h1 id="http-client-request-api" tabindex="-1"><a class="header-anchor" href="#http-client-request-api" aria-hidden="true">#</a> HTTP client request API</h1><h4 id="the-dbc-client-ip-and-dbc-client-port-in-the-following-http-request-are-the-dbc-client-access-addresses-deployed-by-the-user" tabindex="-1"><a class="header-anchor" href="#the-dbc-client-ip-and-dbc-client-port-in-the-following-http-request-are-the-dbc-client-access-addresses-deployed-by-the-user" aria-hidden="true">#</a> ( The dbc_client_ip and dbc_client_port in the following HTTP request are the DBC client access addresses deployed by the user )</h4><hr><h2 id="_1-querying-gpu-node-machine-configuration-information" tabindex="-1"><a class="header-anchor" href="#_1-querying-gpu-node-machine-configuration-information" aria-hidden="true">#</a> 1. Querying GPU Node Machine Configuration Information</h2><blockquote><p><code>request method</code>\uFF1APOST</p><p><code>request URL</code>\uFF1Ahttp://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/mining_nodes</p><p><code>request body</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;peer_nodes_list&quot;: [
        // The node_id of the requesting machine
        &quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;
    ],
    &quot;additional&quot;: {

    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></blockquote><p>Example\uFF1A <img src="`+s+`" width="500" height="160" align="center"></p><br><h2 id="_2-tenant-query-to-get-session-id" tabindex="-1"><a class="header-anchor" href="#_2-tenant-query-to-get-session-id" aria-hidden="true">#</a> 2. Tenant query to get session_id</h2><blockquote><p><code>request method</code>\uFF1APOST</p><p><code>request URL</code>\uFF1Ahttp://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/mining_nodes/session_id</p><p><code>request body</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;peer_nodes_list&quot;: [
        // The node_id of the requesting machine
        &quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;
    ],
    &quot;additional&quot;: {

    },
   //Identity authentication information, use tenant signature or multi-signature account signature (refer to the description of HTTP request format), choose one of the two
   ...
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></blockquote><p>Example (the tenant&#39;s signature is used here, and a multi-signature account signature can also be used)\uFF1A <img src="`+a+`" width="500" height="180" align="center"></p><br><h2 id="_3-create-a-virtual-machine" tabindex="-1"><a class="header-anchor" href="#_3-create-a-virtual-machine" aria-hidden="true">#</a> 3. Create a virtual machine</h2><blockquote><p><code>request method</code>\uFF1APOST</p><p><code>request URL</code>\uFF1Ahttp://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/start</p><p><code>request body</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;peer_nodes_list&quot;: [
        // The node_id of the requesting machine
        &quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;
    ],
    &quot;additional&quot;: {
        // The port number when logging into the virtual machine (set a different value for each virtual machine)
        &quot;ssh_port&quot;: &quot;5684&quot;,
        // Image name (fill in according to the image owned by the machine or the image existing in the image management center)
        &quot;image_name&quot;: &quot;ubuntu.qcow2&quot;,
        // Number of gpus (greater than or equal to 0)
        &quot;gpu_count&quot;: &quot;0&quot;,
        // Number of CPUs (greater than 0)
        &quot;cpu_cores&quot;: &quot;4&quot;,
        // Memory size (greater than 0, unit: G)
        &quot;mem_size&quot;: &quot;8&quot;,
        // Disk size (greater than 0, unit: G)
        &quot;disk_size&quot;: &quot;10&quot;,
        // The port number when connecting to this virtual machine using vnc (set a different value for each virtual machine)
        &quot;vnc_port&quot;: &quot;5904&quot;
    },

    &quot;session_id&quot;: &quot;The session_id distributed by the renter&quot;,
    &quot;session_id_sign&quot;: &quot;session_id_sign distributed by the renter&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></blockquote><p>Example\uFF1A <img src="`+t+`" width="500" height="240" align="center"></p><ul><li>The length of the creation process will vary depending on the configuration, ranging from five to fifteen minutes.</li><li>You can query the <code>login method</code> of the virtual machine and the <code>current status</code> of the virtual machine by requesting <code>virtual machine details</code> (when the status value is &quot;creating&quot;, it means that the virtual machine is in the process of being created)</li></ul><br><h2 id="_4-querying-virtual-machine-details" tabindex="-1"><a class="header-anchor" href="#_4-querying-virtual-machine-details" aria-hidden="true">#</a> 4. Querying Virtual Machine Details</h2><blockquote><p><code>request method</code>\uFF1APOST</p><p><code>request URL</code>\uFF1Ahttp://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/&lt;task_id value to query&gt;</p><p><code>request body</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;peer_nodes_list&quot;: [
        // The node_id of the requesting machine
        &quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;
    ],
    &quot;additional&quot;: {
         
    },

    &quot;session_id&quot;: &quot;The session_id distributed by the renter&quot;,
    &quot;session_id_sign&quot;: &quot;session_id_sign distributed by the renter&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></blockquote><p>Example\uFF1A <img src="`+i+`" width="500" height="240" align="center"></p><h2 id="_5-query-the-list-of-virtual-machines" tabindex="-1"><a class="header-anchor" href="#_5-query-the-list-of-virtual-machines" aria-hidden="true">#</a> 5. Query the list of virtual machines</h2><blockquote><p><code>request method</code>\uFF1APOST</p><p><code>request URL</code>\uFF1Ahttp://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks</p><p><code>request body</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;peer_nodes_list&quot;: [
        // The node_id of the requesting machine
        &quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;
    ],
    &quot;additional&quot;: {
         
    },

    &quot;session_id&quot;: &quot;The session_id distributed by the renter&quot;,
    &quot;session_id_sign&quot;: &quot;session_id_sign distributed by the renter&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></blockquote><p>Example\uFF1A <img src="`+r+`" width="500" height="200" align="center"></p><h2 id="_6-delete-virtual-machine" tabindex="-1"><a class="header-anchor" href="#_6-delete-virtual-machine" aria-hidden="true">#</a> 6. delete virtual machine</h2><blockquote><p><code>request method</code>\uFF1APOST</p><p><code>request URL</code>\uFF1Ahttp://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/&lt;\u8981\u5220\u9664\u7684task_id\u503C&gt;</p><p><code>request body</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;peer_nodes_list&quot;: [
        // The node_id of the requesting machine
        &quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;
    ],
    &quot;additional&quot;: {
         
    },

    &quot;session_id&quot;: &quot;The session_id distributed by the renter&quot;,
    &quot;session_id_sign&quot;: &quot;session_id_sign distributed by the renter&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></blockquote><p>Example\uFF1A <img src="`+o+'" width="500" height="200" align="center"></p>',25);function c(d,p){return l}var m=n(u,[["render",c]]);export{m as default};
