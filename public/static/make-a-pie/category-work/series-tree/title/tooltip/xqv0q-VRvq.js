option={title:{text:"委托复审接口调用"},tooltip:{trigger:"item",triggerOn:"mousemove"},series:[{type:"tree",roam:!0,layout:"orthogonal",orient:"LR",symbol:"emptyCircle",symbolSize:10,left:80,right:200,initialTreeDepth:5,label:{show:!0,offset:[10,0],align:"left"},tooltip:{formatter:function(e){return e.value.replace(/\/r\/n/g,"<br />")}},data:[{name:"委托复审",value:"角色：(租赁)房源核查部。",label:{offset:[-60,0]},children:[{name:"doSaveAudit",value:"保存委托复审信息。",label:{offset:[-30,-15]},children:[{name:`updateDutyToTaoBao
(责任盘接口：ZR-002)`,value:"审核拒绝，钥匙委托。/r/n调责任盘接口，同步房源掉淘宝池状态。"},{name:`picKeyEntrustFalse
(租赁接口：ZL-019)`,value:"审核拒绝，钥匙委托。/r/n调租赁接口，同步拒绝提醒信息（含提醒人、房号、委托类型、拒绝原因）。"},{name:`updateRentKeyByHousenumber
(租赁接口：ZL-021)`,value:"审核拒绝，钥匙委托。/r/n调租赁接口，同步委托人、委托时间、审核状态、生效时间、操作人。"},{name:`synVipInfoToTrade
(交易接口：JY-004)`,value:"独家、锁盘委托。/r/n调交易接口，同步VIP状态。含房号、用户ID、VIP状态标识。"}]}]}]}]};
