let pie1Data=[{value:10,name:"26-40",itemStyle:{color:"#72FFA3"}},{value:21,name:"70岁以上",itemStyle:{color:"#FF7469"}},{value:22,name:"56-70",itemStyle:{color:"#FFBA69"}},{value:25,name:"18-25",itemStyle:{color:"#2BD8FB"}},{value:22,name:"41-55",itemStyle:{color:"#FFE269"}}];var percentColor=null,rich={name:{color:"#fff",fontSize:14}};pie1Data.map(function(e,o){rich["p"+o]={color:e.itemStyle.color,fontSize:17,fontWeight:"bold"}}),option={backgroundColor:"#132A7F",tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)",backgroundColor:"#1B2D56",borderColor:"#2BD8FB",textStyle:{color:"#fff"}},series:[{name:"党支部人员",type:"pie",radius:"70%",center:["50%","50%"],label:{color:"#fff",fontSize:14,formatter:function(e){return percentColor=e.color,`{name|${e.name}}:{p${e.dataIndex}|${e.percent+"%"}}`},rich},data:pie1Data,roseType:"area"},{name:"外部刻度",type:"gauge",center:["50%","50%"],radius:"95%",startAngle:90,endAngle:-270,axisLine:{show:!0,lineStyle:{width:1,color:[[1,"rgba(0,0,0,0)"]]}},axisLabel:{show:!1,color:"#4d5bd1",distance:25},axisTick:{show:!0,splitNumber:8,lineStyle:{color:"#2AD2FB",width:1},length:-6},splitLine:{show:!1,length:-20,lineStyle:{color:"#2AD2FB"}},detail:{show:!1},pointer:{show:!1}}]},myChart.setOption(option);