option={title:{text:"上传图片接口调用"},tooltip:{trigger:"item",triggerOn:"mousemove"},series:[{type:"tree",roam:!0,layout:"orthogonal",orient:"LR",left:80,right:120,symbol:"emptyCircle",symbolSize:10,initialTreeDepth:5,label:{show:!0,offset:[10,0],align:"left"},tooltip:{formatter:function(e){return e.value.replace("/r/n","<br />")}},data:[{name:"上传图片",value:"角色：房产顾问、店长、业务管理员。",symbol:"roundRect",symbolSize:15,label:{offset:[-70,1]},children:[{name:"doSaveUploadPicture",value:"保存图片上传信息，发送图片变动通知。",symbol:"diamond",label:{offset:[-60,-15]},children:[{name:`hasPhotoReserve
(预约接口：YY-012)`,value:"调预约接口，校验是否存在图片预约申请。",symbol:"diamond",children:[{name:`checkPhotoReserveUser
(预约接口：YY-015)`,value:"如果存在预约，调预约接口，校验上传人是否为图片预约人。"}]},{name:"isExistProcessAndSearchHouseStrut",value:"校验是否存在居室信息举报。",label:{offset:[-60,-15]},children:[{name:`chaXunShiFouKeJiuCuo
(楼盘字典接口：LP-002)`,value:"调楼盘字典接口，校验是否存在居室纠错。"},{name:`getRentHouseRoomInfo
(租赁接口：ZL-018)`,value:"调用租赁接口，查询租赁户型信息。"},{name:`getHouseType
(责任盘接口：ZR-001)`,value:"调责任盘接口，查询责任盘户型信息。"}]},{name:`getResPhotoReserveState
(预约接口：YY-013)`,value:"调预约接口，查询是拍照预约状态。"},{name:"saveAdminPicture",value:"管理员上传图片，审核直接通过，需提交复审。",label:{offset:[-60,-15]},children:[{name:`updateRentPicByHousenumber
(租赁接口：ZL-006)`,value:"调用租赁接口，同步图片人、优图标识、审核状态、/r/n是否图片标识、更新人、更新时间。"},{name:`synLayoutPictureToFloorDic
(楼盘字典接口：LP-001)`,value:"调楼盘字典接口，同步图片人（组、区域、大区）、/r/n添加人、添加时间等。"},{name:"saveRecheckPictureAgreeRequest",value:"复审通过，保存图片初审、复审信息。",label:{offset:[10,-20]},children:[{name:`synRentPicInfo
(租赁接口：ZL-009)`,value:"调租赁接口，同步初审状态、有图标识、/r/n优图标识、图片人…"}]}]},{name:"saveGroupManagerPicture",value:"店长上传，直接审核通过。",label:{offset:[-60,-15]},children:[{name:`updateRentPicByHousenumber
(租赁接口：ZL-006)`,value:"调用租赁接口，同步图片人、优图标识、审核状态、/r/n是否图片标识、更新人、更新时间。"}]},{name:"saveAgentPicture",value:"经纪人上传，房源状态为非待审状态时，图片状态/r/n为不需要参与审核。否则，图片状态为审核申请中。",label:{offset:[-50,15]},children:[{name:`updateRentPicByHousenumber
(租赁接口：ZL-006)`,value:"调用租赁接口，同步图片人、优图标识、审核状态、/r/n是否图片标识、更新人、更新时间。"}]}]}]}]}]};
