data=[[0,2e3,2200,4e3,6100],[0,2500,3800,6e3,9500]],time=[2012,2013,2014,2015,2016],colors=["#4C72B0","#55A868","#C44E52","#8172B2","#CCB974","#64B5CD"],deemph_color="rgb(165,165,165)",option={title:[{text:"总店面数上，杨国福领先张亮30%左右",textStyle:{fontSize:25},left:-2,subtext:"门店数",subtextStyle:{color:"rgb(10,10,10)"}},{text:"Source: ....",left:0,bottom:0,textStyle:{fontSize:12,fontWeight:"normal"}}],grid:{right:"20%",top:70,left:0,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",boundaryGap:!1,data:time},yAxis:{axisLine:{show:!1},splitLine:{show:!1}},series:[{name:"张亮",data:["-","-","-","-",6100],itemStyle:{normal:{color:colors[0]}},label:{normal:{show:!0,position:[20,0],formatter:"{a}",textStyle:{fontSize:20}}},type:"scatter"},{name:"杨国福",data:["-","-","-","-",9500],itemStyle:{normal:{color:colors[1]}},label:{normal:{show:!0,position:[20,0],formatter:"{a}",textStyle:{fontSize:20}}},type:"scatter"},{name:"张亮",type:"line",data:data[0],symbol:"none",lineStyle:{normal:{color:colors[0],width:3}}},{name:"杨国庆",type:"line",data:data[1],symbol:"none",lineStyle:{normal:{color:colors[1],width:3}}}]};
