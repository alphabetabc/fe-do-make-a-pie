var stages=[{name:"人工",max:100},{name:"委外",max:100},{name:"生产",max:100},{name:"资产",max:100},{name:"动能",max:100}],scores=[{name:"实际",value:[60,60,60,60,60]},{name:"目标",value:[80,80,80,80,80]},{name:"标准",value:[40,40,40,40,40]}],colorArr=["#3FB1EC","#00F1FF","#4BCD6C"];function contains(e,r){for(var a=e.length;a--;)if(e[a].name===r)return a;return!1}option={backgroundColor:"#000928",tooltip:{},radar:{radius:"60%",triggerEvent:!0,color:colorArr,name:{textStyle:{fontSize:16,color:"#E3E3E4",lineHeight:"40",padding:[0,15,0,15],fontFamily:"PingFang"}},nameGap:"2",indicator:stages,splitArea:{areaStyle:{color:["rgba(113,170,202, 0.2)","rgba(4,12,37, 0.5)","rgba(113,170,202, 0.2)","rgba(4,12,37, 0.5)"].reverse()}},axisLine:{lineStyle:{color:"rgba(0,0,0,0)"}},splitLine:{lineStyle:{width:2,color:["rgba(113,170,202, 0.5)"].reverse()}}},series:[{name:"实际",type:"radar",symbolSize:0,lineStyle:{normal:{width:1,color:"#3FB1EC"}},areaStyle:{normal:{color:"rgba(113,170,202, 0.1)"}},data:[scores[0]]},{name:"目标",type:"radar",symbolSize:0,lineStyle:{normal:{width:1}},areaStyle:{normal:{color:"rgba(113,170,202, 0.1)"}},data:[scores[1]]},{name:"标准",type:"radar",symbolSize:0,lineStyle:{normal:{width:1}},areaStyle:{normal:{color:"rgba(113,170,202, 0.1)"}},data:[scores[2]]}]};
