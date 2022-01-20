const e={key:"v-43259224",path:"/en/install-and-update-dbc/install-dbc-compute-node.html",title:"DBC computing node deployment",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Pre-installation preparation (based on the configured fixed public network ip address), deploy the KVM installation environment",slug:"pre-installation-preparation-based-on-the-configured-fixed-public-network-ip-address-deploy-the-kvm-installation-environment",children:[{level:3,title:"Note: Please uninstall the installed graphics driver before starting, this operation cannot have graphics driver",slug:"note-please-uninstall-the-installed-graphics-driver-before-starting-this-operation-cannot-have-graphics-driver",children:[]}]},{level:2,title:"create and mount the XFS file system",slug:"create-and-mount-the-xfs-file-system",children:[{level:3,title:"1. Check the hard disk partition",slug:"_1-check-the-hard-disk-partition",children:[]},{level:3,title:"2. Create a data disk folder, format the hard disk, and mount the hard disk (the data disk mounting directory must be /data)",slug:"_2-create-a-data-disk-folder-format-the-hard-disk-and-mount-the-hard-disk-the-data-disk-mounting-directory-must-be-data",children:[]}]},{level:2,title:"Determine whether the machine supports virtualization",slug:"determine-whether-the-machine-supports-virtualization",children:[{level:3,title:"1. Turn on hardware support",slug:"_1-turn-on-hardware-support",children:[]},{level:3,title:"2. Environment dependence, check whether the CPU supports virtualization and whether KVM is available",slug:"_2-environment-dependence-check-whether-the-cpu-supports-virtualization-and-whether-kvm-is-available",children:[]}]},{level:2,title:"If you are a ubuntu20.04 system, please do the following",slug:"if-you-are-a-ubuntu20-04-system-please-do-the-following",children:[]},{level:2,title:"If you are a ubuntu18.04 system, please continue to operate",slug:"if-you-are-a-ubuntu18-04-system-please-continue-to-operate",children:[]},{level:2,title:"enable system grouping",slug:"enable-system-grouping",children:[{level:3,title:"1. Configure intel_iommu",slug:"_1-configure-intel-iommu",children:[]},{level:3,title:"2. Configure the module file",slug:"_2-configure-the-module-file",children:[]}]},{level:2,title:"isolate GPU resources",slug:"isolate-gpu-resources",children:[{level:3,title:"1. Set up a blacklist to prevent the card from being occupied",slug:"_1-set-up-a-blacklist-to-prevent-the-card-from-being-occupied",children:[]},{level:3,title:"2. Collect PCI device information",slug:"_2-collect-pci-device-information",children:[]},{level:3,title:"3. Set up vfio and isolate the GPU for pass-through",slug:"_3-set-up-vfio-and-isolate-the-gpu-for-pass-through",children:[]},{level:3,title:"4. Check the GPU status (all interfaces must be queried to prevent it from being occupied by vfio-pci)",slug:"_4-check-the-gpu-status-all-interfaces-must-be-queried-to-prevent-it-from-being-occupied-by-vfio-pci",children:[]}]},{level:2,title:"If the driver query is Kernel driver in use: vfio-pci, there is no need to operate the following content, please continue to execute if the binding is not successful",slug:"if-the-driver-query-is-kernel-driver-in-use-vfio-pci-there-is-no-need-to-operate-the-following-content-please-continue-to-execute-if-the-binding-is-not-successful",children:[{level:3,title:"1. Unbind the device",slug:"_1-unbind-the-device",children:[]},{level:3,title:"2. Manually bind the GPU",slug:"_2-manually-bind-the-gpu",children:[]}]},{level:2,title:"After confirming that the graphics card of the machine is occupied by vfio-pci, start the libvirtd service and set the boot to start automatically",slug:"after-confirming-that-the-graphics-card-of-the-machine-is-occupied-by-vfio-pci-start-the-libvirtd-service-and-set-the-boot-to-start-automatically",children:[{level:3,title:"1. Turn on the virt tcp monitoring service:",slug:"_1-turn-on-the-virt-tcp-monitoring-service",children:[]},{level:3,title:"2. Start libvirtd and set it to start at boot",slug:"_2-start-libvirtd-and-set-it-to-start-at-boot",children:[]}]},{level:2,title:"Create a dbc user",slug:"create-a-dbc-user",children:[]},{level:2,title:"Install the DBC node program",slug:"install-the-dbc-node-program",children:[]},{level:2,title:"Restart DBC program & service status check",slug:"restart-dbc-program-service-status-check",children:[]},{level:2,title:"Download the mirror template",slug:"download-the-mirror-template",children:[]},{level:2,title:"Back up the machine id and private key (very important,if this private key is lost, 50% of the pledged coins will be lost, please pay attention to multiple backups)",slug:"back-up-the-machine-id-and-private-key-very-important-if-this-private-key-is-lost-50-of-the-pledged-coins-will-be-lost-please-pay-attention-to-multiple-backups",children:[]},{level:2,title:"Viewing personal wallet address",slug:"viewing-personal-wallet-address",children:[]},{level:2,title:"Parameter check(Ignore it temporarily, it is being revised again, and the program package has been temporarily removed)",slug:"parameter-check-ignore-it-temporarily-it-is-being-revised-again-and-the-program-package-has-been-temporarily-removed",children:[]},{level:2,title:"Test to create a virtual machine with graphics card pass-through to check whether the previous configuration is correct",slug:"test-to-create-a-virtual-machine-with-graphics-card-pass-through-to-check-whether-the-previous-configuration-is-correct",children:[]},{level:2,title:"Check whether the various hardware parameters of the machine are normal",slug:"check-whether-the-various-hardware-parameters-of-the-machine-are-normal",children:[]},{level:2,title:"Check whether the machine is correctly added to the computing power network",slug:"check-whether-the-machine-is-correctly-added-to-the-computing-power-network",children:[]},{level:2,title:"Machine on the chain",slug:"machine-on-the-chain",children:[]}],git:{updatedTime:1641467464e3,contributors:[{name:"kaigedong",email:"dongkaige@gmail.com",commits:1}]},filePathRelative:"en/install-and-update-dbc/install-dbc-compute-node.md"};export{e as data};