var colors=["#2978aa","#3470a3"];option={backgroundColor:"#fff",tooltip:{trigger:"axis",axisPointer:{type:"shadow",textStyle:{color:"#fff"}}},grid:{top:80,left:"10%",right:"50%",bottom:"65%"},legend:{data:["超时办理事项数"],align:"left",left:50,top:10},calculable:!0,xAxis:[{type:"category",axisLine:{lineStyle:{color:"#000"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:{default:0},rotate:50,formatter:function(e){var t="",a=e.length,o=4,l=Math.ceil(a/o);if(a>o){var r="";r=e.substring(0,4),t=r+"..."}else t=e;return t}},data:["网上收件","市局政务窗口初审","政务窗口受理","业务部门经办、审核","审评中心审查办理","现场查看、整改","首席代表审核","政务窗口承办","首席代表审核、签批","局领导审批"]}],yAxis:[{type:"value",name:"",min:0,position:"left",axisLine:{lineStyle:{color:colors[0]}},axisLabel:{formatter:"{value} "}}],dataZoom:[{show:!0,height:20,xAxisIndex:[0],bottom:"15%",start:10,end:80,handleIcon:"path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",handleSize:"110%",handleStyle:{color:"#d3dee5"},textStyle:{color:"#000"},borderColor:"#90979c"},{type:"inside",show:!0,height:15,start:1,end:35}],series:[{name:"超时办理事项数",type:"bar",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#60c9ed"},{offset:1,color:"#a7d8e8"}]),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},barWidth:"50%",data:["351","318","265","245","213","185","155","133","104","85","75","63","54","45"]}]};
