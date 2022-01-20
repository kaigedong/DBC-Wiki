import{e as t}from"./app.554cb4e4.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const l={},a=t('<h1 id="\u94FE\u4E0A\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#\u94FE\u4E0A\u5B58\u50A8" aria-hidden="true">#</a> \u94FE\u4E0A\u5B58\u50A8</h1><h2 id="onlineprofile-\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#onlineprofile-\u6A21\u5757" aria-hidden="true">#</a> onlineProfile \u6A21\u5757</h2><h3 id="value" tabindex="-1"><a class="header-anchor" href="#value" aria-hidden="true">#</a> value</h3><table><thead><tr><th style="text-align:left;">\u5B58\u50A8</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">onlineStakeParams</td><td style="text-align:left;">OnlineStakeParamsInfo</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">standardGpuPointPrice</td><td style="text-align:left;">StandardGpuPointPrice</td><td style="text-align:left;">A standard example for rent fee calculation(price: USD*10^6)</td></tr><tr><td style="text-align:left;">galaxyIsOn</td><td style="text-align:left;">bool</td><td style="text-align:left;">If galaxy competition is begin: switch 5000 gpu</td></tr><tr><td style="text-align:left;">galaxyOnGpuThreshold</td><td style="text-align:left;">5000</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">sysInfo</td><td style="text-align:left;">SysInfoDetail</td><td style="text-align:left;">Statistics of gpu and stake</td></tr><tr><td style="text-align:left;">nextSlashId</td><td style="text-align:left;">u64</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">allMachineIdSnap</td><td style="text-align:left;">AllMachineIdSnapDetail</td><td style="text-align:left;">\u5C06\u8981\u53D1\u653E\u5956\u52B1\u7684\u673A\u5668</td></tr><tr><td style="text-align:left;">phaseRewardInfo</td><td style="text-align:left;">PhaseRewardInfoDetail</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">liveMachines</td><td style="text-align:left;">LiveMachine</td><td style="text-align:left;">\u7CFB\u7EDF\u4E2D\u5B58\u50A8\u6709\u6570\u636E\u7684\u673A\u5668</td></tr><tr><td style="text-align:left;">currentEra</td><td style="text-align:left;">EraIndex</td><td style="text-align:left;">\u6A21\u5757\u5F53\u524D\u662F\u7B2C\u51E0\u5929\uFF082880 Block/Era\uFF09</td></tr></tbody></table><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h3><table><thead><tr><th style="text-align:left;">\u5B58\u50A8</th><th style="text-align:left;">\u952E\u7C7B\u578B</th><th style="text-align:left;">\u503C\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">stashController</td><td style="text-align:left;">AccountId</td><td style="text-align:left;">AccountId</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">controllerStash</td><td style="text-align:left;">AccountId</td><td style="text-align:left;">AccountId</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">machinesInfo</td><td style="text-align:left;">MachineId</td><td style="text-align:left;">MachineInfo</td><td style="text-align:left;">Detail info of machines</td></tr><tr><td style="text-align:left;">stashMachines</td><td style="text-align:left;">AccountId</td><td style="text-align:left;">StashMachine</td><td style="text-align:left;">Statistics of stash account</td></tr><tr><td style="text-align:left;">stashServerRooms</td><td style="text-align:left;">AccountId</td><td style="text-align:left;"><code>Vec&lt;H256&gt;</code></td><td style="text-align:left;">Server rooms in stash account</td></tr><tr><td style="text-align:left;">controllerMachines</td><td style="text-align:left;">AccountId</td><td style="text-align:left;"><code>Vec&lt;MachineId&gt;</code></td><td style="text-align:left;">All machines controlled by controller</td></tr><tr><td style="text-align:left;">erasStashPoints</td><td style="text-align:left;">EraIndex</td><td style="text-align:left;">EraStashPoints</td><td style="text-align:left;">\u6BCF\u4E2A Era \u8D44\u91D1\u8D26\u6237\u7684\u5F97\u5206\u5FEB\u7167</td></tr><tr><td style="text-align:left;">erasMachinePoints</td><td style="text-align:left;">EraIndex</td><td style="text-align:left;"><code>BTreeMap&lt;MachineId, MachineGradeStatus&gt;</code></td><td style="text-align:left;">\u6BCF\u4E2A Era \u673A\u5668\u7684\u5F97\u5206\u5FEB\u7167</td></tr><tr><td style="text-align:left;">stashStake</td><td style="text-align:left;">AccountId</td><td style="text-align:left;">Balance</td><td style="text-align:left;">\u8D44\u91D1\u8D26\u6237\u7684\u8D28\u62BC\u603B\u8BA1</td></tr><tr><td style="text-align:left;">machineRecentReward</td><td style="text-align:left;">MachineId</td><td style="text-align:left;">MachineRecentRewardInfo</td><td style="text-align:left;">store max 150 era reward</td></tr><tr><td style="text-align:left;">eraReward</td><td style="text-align:left;">EraIndex</td><td style="text-align:left;">Balance</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">pendingSlash</td><td style="text-align:left;">u64</td><td style="text-align:left;">OPPendingSlashInfo</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">pendingSlashReview</td><td style="text-align:left;">SlashId</td><td style="text-align:left;">OPPendingSlashReviewInfo</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">rentedFinished</td><td style="text-align:left;">MachineId</td><td style="text-align:left;">AccountId</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="doublemap" tabindex="-1"><a class="header-anchor" href="#doublemap" aria-hidden="true">#</a> DoubleMap</h3><table><thead><tr><th style="text-align:left;">\u5B58\u50A8</th><th style="text-align:left;">\u952E\u7C7B\u578B</th><th style="text-align:left;">\u503C\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">userMutHardwareStake</td><td style="text-align:left;">(AccountId,MachineId)</td><td style="text-align:left;">UserMutHardwareStakeInfo</td><td style="text-align:left;">Reonline to change hardware, should stake some balance</td></tr><tr><td style="text-align:left;">posGpuInfo</td><td style="text-align:left;">(Longitude, Latitude)</td><td style="text-align:left;">PosInfo</td><td style="text-align:left;">Statistics of gpu in one position</td></tr><tr><td style="text-align:left;">erasMachineReward</td><td style="text-align:left;">(EraIndex, MachineId)</td><td style="text-align:left;">Balance</td><td style="text-align:left;">\u67D0\u4E2A Era \u673A\u5668\u83B7\u5F97\u7684\u603B\u5956\u52B1</td></tr><tr><td style="text-align:left;">erasMachineReleasedReward</td><td style="text-align:left;">(EraIndex,MachineId)</td><td style="text-align:left;">Balance</td><td style="text-align:left;">\u67D0\u4E2A Era \u673A\u5668\u91CA\u653E\u7684\u603B\u5956\u52B1</td></tr><tr><td style="text-align:left;">erasStashReward</td><td style="text-align:left;">(EraIndex, AccountId)</td><td style="text-align:left;">Balance</td><td style="text-align:left;">\u67D0\u4E2A Era Stash \u83B7\u5F97\u7684\u603B\u5956\u52B1</td></tr><tr><td style="text-align:left;">erasStashReleasedReward</td><td style="text-align:left;">(EraIndex, AccountId)</td><td style="text-align:left;">Balance</td><td style="text-align:left;">\u67D0\u4E2A Era Stash \u89E3\u9501\u7684\u603B\u5956\u52B1</td></tr></tbody></table><h2 id="onlinecommittee-\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#onlinecommittee-\u6A21\u5757" aria-hidden="true">#</a> onlineCommittee \u6A21\u5757</h2><h3 id="value-1" tabindex="-1"><a class="header-anchor" href="#value-1" aria-hidden="true">#</a> Value</h3><table><thead><tr><th style="text-align:left;">\u5B58\u50A8</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">nextSlashId</td><td style="text-align:left;">u64</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">unhandledSlash</td><td style="text-align:left;"><code>Vec&lt;SlashId&gt;</code></td><td style="text-align:left;"></td></tr></tbody></table><h3 id="map-1" tabindex="-1"><a class="header-anchor" href="#map-1" aria-hidden="true">#</a> Map</h3><table><thead><tr><th style="text-align:left;">\u5B58\u50A8</th><th style="text-align:left;">\u952E\u7C7B\u578B</th><th style="text-align:left;">\u503C\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">committeeMachine</td><td style="text-align:left;">AccountId</td><td style="text-align:left;">OCCommitteeMachineList</td><td style="text-align:left;">\u5B58\u50A8\u7528\u6237\u8BA2\u9605\u7684\u4E0D\u540C\u786E\u8BA4\u9636\u6BB5\u7684\u673A\u5668</td></tr><tr><td style="text-align:left;">machineCommittee</td><td style="text-align:left;">MachineId</td><td style="text-align:left;">OCMachineCommitteeList</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">machineSubmitedHash</td><td style="text-align:left;">MachineId</td><td style="text-align:left;"><code>Vec&lt;[u8; 16]&gt;</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">committeeOps</td><td style="text-align:left;"><code>(AccountId,MachineId)</code></td><td style="text-align:left;">OCCommitteeOps</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">pendingSlash</td><td style="text-align:left;">SlashId</td><td style="text-align:left;">OCPendingSlashInfo</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">pendingSlashReview</td><td style="text-align:left;">SlashId</td><td style="text-align:left;">OCPendingSlashReviewInfo</td><td style="text-align:left;"></td></tr></tbody></table><h2 id="rentmachine-\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#rentmachine-\u6A21\u5757" aria-hidden="true">#</a> rentMachine \u6A21\u5757</h2><h3 id="map-2" tabindex="-1"><a class="header-anchor" href="#map-2" aria-hidden="true">#</a> Map</h3><p>| \u5B58\u50A8 | \u952E\u7C7B\u578B | \u503C\u7C7B\u578B | \u8BF4\u660E | | :------------------ | :---------- | :--------------- | :------------------------------- | -------------------------- | | userRented | AccountId | <code>Vec&lt;MachineId&gt;</code> | \u5B58\u50A8\u7528\u6237\u5F53\u524D\u79DF\u7528\u7684\u673A\u5668\u5217\u8868 | | rentOrder | MachineId | RentOrderDetail | \u7528\u6237\u5F53\u524D\u79DF\u7528\u7684\u67D0\u4E2A\u673A\u5668\u7684\u8BE6\u60C5 | | pendingConfirming | MachineId | AccountId | | \u7B49\u5F85\u7528\u6237\u786E\u8BA4\u79DF\u7528\u6210\u529F\u7684\u673A\u5668 | | pending_rent_ending | BlockNumber | <code>Vec&lt;MachineId&gt;</code> | \u8BB0\u5F55\u6BCF\u4E2A\u533A\u5757\u5C06\u8981\u7ED3\u675F\u79DF\u7528\u7684\u673A\u5668 | | userTotalStake | AccountId | Balance | \u5B58\u50A8\u6BCF\u4E2A\u7528\u6237\u5728\u8BE5\u6A21\u5757\u4E2D\u7684\u603B\u8D28\u62BC\u91CF |</p><h3 id="value-2" tabindex="-1"><a class="header-anchor" href="#value-2" aria-hidden="true">#</a> Value</h3><table><thead><tr><th style="text-align:left;">\u5B58\u50A8</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">rentFeePot</td><td style="text-align:left;">AccountId</td><td style="text-align:left;">\u79DF\u91D1\u652F\u4ED8\u76EE\u6807\u5730\u5740(\u94F6\u6CB3\u7ADE\u8D5B\u5F00\u542F\u540E\uFF0C\u7528\u8BE5\u8D26\u6237\u9500\u6BC1\u79DF\u91D1)</td></tr></tbody></table>',18);function d(n,i){return a}var f=e(l,[["render",d]]);export{f as default};
