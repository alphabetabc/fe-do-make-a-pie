let datas=[{value:14,name:"互联网"},{value:35,name:"互联网通信"},{value:10,name:"人工智能"},{value:74,name:"AI技术"},{value:24,name:"电池技术"},{value:34,name:"5G"},{value:7,name:"汽车制造"},{value:24,name:"大数据"},{value:24,name:"医药"},{value:29,name:"工业设计"},{value:14,name:"农业"},{value:64,name:"高新材料"},{value:24,name:"物联网"},{value:29,name:"电脑"}];var lineStyle={normal:{width:1,opacity:.5}};option={backgroundColor:"#161627",title:{text:"个人能力 - 雷达图",left:"center",textStyle:{color:"#eee"}},legend:{orient:"vertical",icon:"circle",y:"center",right:0,textStyle:{color:"#AEC9F9"},itemWidth:10,itemHeight:10,data:datas.map(e=>e.name)},radar:{indicator:[{}],radius:["10%","65%"],shape:"circle",splitNumber:10,name:{show:!1,textStyle:{color:"rgb(238, 197, 102)"}},axisLine:{lineStyle:{color:"rgba(255, 255, 255, 0)"}},splitLine:{lineStyle:{color:["rgba(174,201,249, 0.1)","rgba(174,201,249, 0.2)","rgba(174,201,249, 0.4)","rgba(174,201,249, 0.6)","rgba(174,201,249, 0.8)","rgba(174,201,249, 1)"].reverse()}},splitArea:{show:!1}},series:[{name:"访问来源",type:"pie",radius:["10%","50%"],center:["50%","50%"],label:{fontSize:18},data:datas,roseType:"radius",label:{show:!1},labelLine:{show:!1}}]};
