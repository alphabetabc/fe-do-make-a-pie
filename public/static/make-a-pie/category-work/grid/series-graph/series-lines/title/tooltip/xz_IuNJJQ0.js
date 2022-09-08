var line03Color=new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#F9E103"},{offset:1,color:"#F9E103"}]),line04Color=new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#157eff"},{offset:1,color:"#35c2ff"}]),line07Color=new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#157eff"},{offset:1,color:"#35c2ff"}]),line15Color=new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#157eff"},{offset:1,color:"#35c2ff"}]),symbolSizeBig=[12,12],symbolSizeSmall=[8,8],data=[{name:"03号线",symbolSize:.1,value:[1108,1166],fixed:!0,category:1,label:{color:"#F9E103",position:"bottom",fontSize:18,fontWeight:1e3},itemStyle:{normal:{color:line03Color}}},{name:"江杨北路",symbol:"circle",symbolSize:symbolSizeBig,value:[1106,1100],fixed:!0,category:1,label:{color:"#FFF",position:"right"},itemStyle:{normal:{color:line03Color}}},{name:"铁力路",value:[1106,1050],fixed:!0,symbol:"circle",symbolSize:symbolSizeSmall,label:{color:"#FFF",position:"right"},category:1,itemStyle:{normal:{color:line03Color}}},{name:"友谊路",value:[1106,1e3],fixed:!0,symbol:"circle",symbolSize:symbolSizeSmall,label:{color:"#FFF",position:"right"},category:1,itemStyle:{normal:{color:line03Color}}},{name:"宝杨路",value:[1106,950],fixed:!0,symbol:"circle",symbolSize:symbolSizeSmall,label:{color:"#FFF",position:"right"},category:1,itemStyle:{normal:{color:line03Color}}},{name:"水产路",value:[1106,900],fixed:!0,symbol:"circle",symbolSize:symbolSizeSmall,label:{color:"#FFF",position:"right"},category:1,itemStyle:{normal:{color:line03Color}}},{name:"淞浜路",value:[1106,850],fixed:!0,symbol:"circle",symbolSize:symbolSizeSmall,label:{color:"#FFF",position:"right"},category:1,itemStyle:{normal:{color:line03Color}}},{name:"张华浜",value:[1106,800],fixed:!0,symbol:"circle",symbolSize:symbolSizeSmall,label:{color:"#FFF",position:"right"},category:1,itemStyle:{normal:{color:line03Color}}},{name:"淞发路",value:[1106,750],fixed:!0,symbol:"circle",symbolSize:symbolSizeSmall,label:{color:"#FFF",position:"right"},category:1,itemStyle:{normal:{color:line03Color}}},{name:"长江南路",value:[1106,700],fixed:!0,symbol:"circle",symbolSize:symbolSizeSmall,label:{color:"#FFF",position:"right"},category:1,itemStyle:{normal:{color:line03Color}}},{name:"殷高西路",value:[1106,650],fixed:!0,symbol:"circle",symbolSize:symbolSizeSmall,label:{color:"#FFF",position:"right"},category:1,itemStyle:{normal:{color:line03Color}}},{name:"江湾镇",value:[1106,600],fixed:!0,symbol:"circle",symbolSize:symbolSizeSmall,label:{color:"#FFF",position:"right"},category:1,itemStyle:{normal:{color:line03Color}}},{name:"大柏树",value:[1106,550],fixed:!0,symbol:"circle",symbolSize:symbolSizeSmall,label:{color:"#FFF",position:"right"},category:1,itemStyle:{normal:{color:line03Color}}},{name:"赤峰路",value:[1106,500],fixed:!0,symbol:"circle",symbolSize:symbolSizeSmall,label:{color:"#FFF",position:"right"},category:1,itemStyle:{normal:{color:line03Color}}},{name:"虹口足球场",value:[1106,450],fixed:!0,symbol:"circle",symbolSize:symbolSizeSmall,label:{color:"#FFF",position:"right"},category:1,itemStyle:{normal:{color:line03Color}}},{name:"东宝兴路",value:[1106,400],fixed:!0,symbol:"circle",symbolSize:symbolSizeSmall,label:{color:"#FFF",position:"right"},category:1,itemStyle:{normal:{color:line03Color}}},{name:"04号线",symbolSize:.1,value:[644,710],fixed:!0,category:1,label:{color:"red",position:"bottom",fontSize:24,fontWeight:1e3},itemStyle:{normal:{color:line04Color}}},{name:"曹杨路",value:[215,860],fixed:!0,symbol:"circle",symbolSize:symbolSizeSmall,label:{color:"#FFF",position:"right"},category:1,itemStyle:{normal:{color:line04Color}}},{name:"金沙江路",value:[170,810],fixed:!0,symbol:"circle",symbolSize:symbolSizeSmall,label:{color:"#FFF",position:"right"},category:1,itemStyle:{normal:{color:line04Color}}},{name:"蓝村路",value:[860,315],fixed:!0,symbol:"circle",symbolSize:symbolSizeSmall,label:{color:"#FFF",position:"right"},category:1,itemStyle:{normal:{color:line04Color}}},{name:"07号线",symbolSize:.1,value:[320,1068],fixed:!0,category:1,label:{color:"#FF00FF",position:"bottom",fontSize:24,fontWeight:1e3},itemStyle:{normal:{color:line07Color}}},{name:"15号线",symbolSize:.1,value:[142,71],fixed:!0,category:1,label:{color:"#48D1CC",position:"bottom",fontSize:24,fontWeight:1e3},itemStyle:{normal:{color:line15Color}}}];option={title:{text:"上海地铁线路图",textStyle:{color:"white",fontSize:20},x:"center",top:10},backgroundColor:"#000000",xAxis:{show:!1,min:0,max:1200,axisPointer:{show:!0}},yAxis:{show:!1,min:0,max:1200,axisPointer:{show:!0}},tooltip:{},series:[{type:"graph",zlevel:5,draggable:!1,coordinateSystem:"cartesian2d",symbol:"rect",symbolOffset:["5%",0],label:{normal:{show:!0}},data,links:[{source:"江杨北路",target:"铁力路",lineStyle:{normal:{color:"#F9E103"}}},{source:"铁力路",target:"友谊路",lineStyle:{normal:{color:"#F9E103"}}},{source:"友谊路",target:"宝杨路",lineStyle:{normal:{color:"#F9E103"}}}],lineStyle:{normal:{opacity:.6,color:"#F9E103",curveness:0,width:5}}},{type:"lines",coordinateSystem:"cartesian2d",z:1,zlevel:7,animation:!0,effect:{show:!0,period:5,trailLength:.71,symbolSize:14,symbol:"circle",loop:!0,color:"yellow"},lineStyle:{normal:{width:0,curveness:0}},data:[{coords:[[5,600],[1130,600]]},{coords:[[680,50],[680,1050]]}]}]};
