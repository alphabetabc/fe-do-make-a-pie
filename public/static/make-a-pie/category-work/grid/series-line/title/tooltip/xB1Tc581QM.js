option={backgroundColor:"#ffffff",title:[{text:"",left:"28%",top:"1%",textAlign:"center"},{text:"",left:"28%",top:"34%",textAlign:"center"},{text:"",left:"28%",top:"66%",textAlign:"center"}],tooltip:{trigger:"axis"},grid:[{show:!1,left:"5%",top:"5%",containLabel:!0,width:"100%",height:"33%"},{show:!1,left:"2%",top:"35%",containLabel:!0,width:"100%",height:"33%"},{show:!1,left:"5%",top:"68%",containLabel:!0,width:"100%",height:"33%"}],xAxis:[{gridIndex:0,type:"category",name:"暂降幅值区间",nameLocation:"center",nameGap:"30",nameTextStyle:{fontSize:16},axisTick:{alignWithLabel:!0},data:["0~10%","10%~20%","20%~30%","30%~40%","40%~50%","50%~60%","60%~70%","70%~80%","80%~90%"]},{gridIndex:1,type:"category",name:"暂降幅值",nameLocation:"center",nameGap:"30",nameTextStyle:{fontSize:16},boundaryGap:!1,axisTick:{alignWithLabel:!0},data:["0","10%","20%","30%","40%","50%","60%","70%","80%","90%"]},{gridIndex:2,type:"category",name:"暂降持续时间（s）",nameLocation:"center",nameGap:"30",nameTextStyle:{fontSize:16},axisTick:{alignWithLabel:!0},data:["0~0.1","0.1~0.25","0.25~0.5","0.5~1",">1"]}],yAxis:[{gridIndex:0,type:"value",name:"暂降频次(次/年)",nameLocation:"center",nameGap:"30",nameTextStyle:{fontSize:16},axisLine:{lineStyle:{}},splitLine:{show:!1}},{gridIndex:1,type:"value",name:"概率分布",nameLocation:"center",nameGap:"40",nameTextStyle:{fontSize:16},axisLabel:{show:!0,interval:"auto",formatter:"{value} %"},axisLine:{lineStyle:{}},splitLine:{show:!1}},{gridIndex:2,type:"value",name:"暂降频次(次/年)",nameLocation:"center",nameGap:"30",nameTextStyle:{fontSize:16},axisLine:{lineStyle:{}},splitLine:{show:!1},position:"left"}],series:[{name:"暂降幅值与暂降频次",type:"line",xAxisIndex:0,yAxisIndex:0,label:{normal:{show:!0,position:"top"}},data:[3.5,.7,.6,1.4,1.8,3,5,9.5,24.6]},{name:"暂降幅值与暂降频次",type:"line",xAxisIndex:0,yAxisIndex:0,label:{normal:{show:!0,position:"top"}},data:[4,1.7,1.6,2.4,2.8,3.8,6,10,25.6]},{name:"暂降幅值概率分布",type:"line",smooth:!0,barWidth:25,xAxisIndex:1,yAxisIndex:1,symbolSize:8,label:{normal:{show:!0,position:"top",color:"#FAD860"}},lineStyle:{normal:{width:4,color:"#FAD860"}},data:[0,7,8.4,9.6,12.4,16,22,31.9,50.9,100]},{name:"暂降幅值概率分布",type:"line",smooth:!0,barWidth:25,xAxisIndex:1,yAxisIndex:1,symbolSize:8,label:{normal:{show:!0,position:"top",color:"#FAD860"}},lineStyle:{normal:{width:4,color:"#FAD860"}},data:[0,17,18.4,29.6,32.4,26,32,41.9,58.9,110]},{name:"持续时间与暂降频次",type:"line",xAxisIndex:2,yAxisIndex:2,label:{normal:{show:!0,position:"top"}},data:[36.1,5.4,2.4,1,5.2]},{name:"持续时间与暂降频次",type:"line",xAxisIndex:2,yAxisIndex:2,label:{normal:{show:!0,position:"top"}},data:[46.1,15.4,12.4,11,15.2]}]};
