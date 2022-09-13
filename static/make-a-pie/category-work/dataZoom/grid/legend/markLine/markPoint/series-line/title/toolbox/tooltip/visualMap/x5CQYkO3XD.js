let MinTemArray=[1,-2,2,5,3,2,0],MaxTemArray=[10,11,13,11,12,12,9],MinTmin=Math.min.apply(null,MinTemArray),MaxTmin=Math.min.apply(null,MaxTemArray),MaxTmax=Math.max.apply(null,MaxTemArray);option={title:{text:"未来一周气温变化",subtext:"纯属虚构",x:"center",top:"7%"},legend:{top:"14%"},grid:{top:"20%",bottom:"12%",left:"14%",right:"12%"},tooltip:{trigger:"axis"},toolbox:{show:!0,top:"7%",right:"2%",feature:{dataView:{readOnly:!1},magicType:{type:["line","bar"]},restore:{},saveAsImage:{}}},xAxis:{type:"category",axisLine:{lineStyle:{color:"#000000",width:2}},boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value",axisLabel:{formatter:"{value} °C"}},visualMap:{show:!0,top:"13%",right:"2%",pieces:[{gt:-4,lte:0,color:"#7088ff"},{gt:0,lte:4,color:"#75cfff"},{gt:4,lte:8,color:"#ffc619"},{gt:8,lte:12,color:"#ff8766"},{gt:12,lte:16,color:"#ff6b93"}],outOfRange:{color:"#999"}},series:[{name:"最高气温",type:"line",color:"#ff6b93",markPoint:{data:[{name:"最大值",value:MaxTmax,xAxis:MaxTemArray.indexOf(MaxTmax),yAxis:MaxTmax,itemStyle:{color:"#ff6b93"},label:{color:"#ffffff"}},{name:"最小值",value:MaxTmin,xAxis:MaxTemArray.indexOf(MaxTmin),yAxis:MaxTmin,itemStyle:{color:"#ff8766"},label:{color:"#ffffff"}}]},markLine:{data:[{type:"average",name:"最高气温平均值",lineStyle:{color:"#0ED638"},label:{formatter:`{b}
{c}℃`,color:"#0ED638"}},{name:"阈值",yAxis:12,lineStyle:{color:"#FF6464"},label:{formatter:`{b}
{c}℃`,color:"#FF6464"}}]},data:MaxTemArray},{name:"最低气温",type:"line",color:"#75cfff",markPoint:{data:[{name:"周最低",value:MinTmin,xAxis:MinTemArray.indexOf(MinTmin),yAxis:MinTmin,itemStyle:{color:"#7088ff"},label:{color:"#ffffff"}}]},markLine:{data:[{type:"average",name:"最低气温平均值",lineStyle:{color:"#0ED638"},label:{formatter:`{b}
{c}℃`,color:"#0ED638"}},[{symbol:"none",x:"88%",yAxis:"max"},{symbol:"circle",lineStyle:{color:"#ffc619"},label:{position:"start",formatter:"{b}{c}℃",color:"#ffc619"},type:"max",name:"最低温最大"}]]},data:MinTemArray}]};