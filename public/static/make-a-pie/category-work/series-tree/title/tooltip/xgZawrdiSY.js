option={title:{text:"替换图片（图片处理）接口调用"},tooltip:{trigger:"item",triggerOn:"mousemove"},series:[{type:"tree",roam:!0,layout:"orthogonal",orient:"LR",symbol:"emptyCircle",symbolSize:10,left:80,right:130,initialTreeDepth:5,label:{show:!0,offset:[10,0],align:"left"},tooltip:{formatter:function(e){return e.value.replace(/\/r\/n/g,"<br />")}},data:[{name:` 替换图片
(图片处理)`,value:"角色：摄影师、视觉部主管、专员、图片审核员。",symbol:"roundRect",symbolSize:15,label:{offset:[-70,1]},children:[{name:"saveReplacingPictureReq",value:"保存替换图片信息。",label:{offset:[-70,-15]},children:[{name:"handlePicInfo",value:"读取图片业绩人。",label:{offset:[-30,-15]},children:[{name:"findPicInfo",value:"默认从买卖房源读取图片业绩人。",symbol:"diamond",label:{offset:[-30,-15]},children:[{name:`searchRentHousePicByHousenumber
(租赁接口：ZL-010)`,value:"如果买卖房源无图片业绩人，调租赁接口，读取图片业绩人。"},{name:`getReserveUserIdAndReserveDate
(预约接口：YY-010)`,value:"如果租赁房源无图片业绩人，调预约接口，读取图片业绩人。",label:{offset:[10,-15]},children:[{name:`getHRyejiRen
(人事接口：MH-001)`,value:"校验是否存在离职异动，调人事接口，读取图片业绩人。"}]}]}]},{name:"cancelReckeckPictureAutomatically",value:"保存并结束未审核的图片复审记录。",label:{offset:[-5,-20]},children:[{name:`synRentPicInfo
(租赁接口：ZL-009)`,value:"调租赁接口，同步初审状态、有图标识、/r/n优图标识、图片人…"}]},{name:`updateRentPicForProcessingToLease
(租赁接口：ZL-011)`,value:"调租赁接口，同步图片人、优图标识、优图时间/r/n、申请时间、操作类型、操作日志。"},{name:`updateFloorDicLayoutPics
(楼盘字典接口：LP-001)`,value:"调楼盘字典接口，同步房号、店组、区域、大区/r/n、图片列表、操作人ID、操作人姓名、客户端系/r/n统ID、客户端系统名称、操作时间、操作类型（/r/n1：本地上传、2：图片替换、3：举报）…"},{name:`syncAppointmentPlatReserveState
(预约接口：YY-005)`,value:"调预约接口，同步预约状态（已上传完成）。"}]},{name:"sysAppoimentEnd",value:"调接口，同步预约状态（已上传完成）。",label:{offset:[-50,15]},children:[{name:`syncAppointmentPlatReserveState
(预约接口：YY-005)`,value:"调预约接口，同步预约状态（已上传完成）。"},{name:`synRentUpdateResState
(租赁接口：ZL-008)`,value:"调租赁接口，同步预约状态（已上传完成）。"}]}]}]}]};
