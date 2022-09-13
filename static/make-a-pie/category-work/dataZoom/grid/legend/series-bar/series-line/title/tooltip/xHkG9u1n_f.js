option={title:{text:"即办件情况分析",left:"1%",top:"1%"},tooltip:{trigger:"axis",axisPointer:{type:"shadow",textStyle:{color:"#fff"}}},grid:{top:80,left:"1%",right:"60%",bottom:"55%"},legend:{left:"1%",top:50,right:"55%",data:["审批事项即办数","审批事项即办同比率"]},xAxis:{splitLine:{show:!1},type:"category",axisLabel:{interval:0},data:["南宁市局",`
武鸣区局`,"横县局",`
宾阳县局`,"上林县局",`
隆安县局`,"兴宁区分局",`
江南区分局`,"青秀区分局",`
西乡塘区分局`,"邕宁区分局",`
良庆区分局`,"广西-东盟经济技术开发区行政审批局",`
广西-东盟经济技术开发区`,"南宁高新技术产业开发区",`
南宁经济技术开发区`]},yAxis:[{type:"value",name:"",min:0,max:1e3,position:"left",axisLine:{lineStyle:{color:"#000"}},axisLabel:{formatter:"{value} "}},{type:"value",name:"",position:"right",axisLine:{lineStyle:{color:"#1f6770"}},axisLabel:{formatter:"{value} %"}}],dataZoom:[{show:!0,height:30,xAxisIndex:[0],bottom:"45%",start:10,end:80,handleSize:"110%",handleStyle:{color:"#d3dee5"},textStyle:{color:"#000"},borderColor:"#90979c"},{type:"inside",show:!0,height:15,start:1,end:25}],series:[{name:"审批事项即办数",color:"#6e6b1d",type:"bar",barWidth:"50%",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#1ae1f8"},{offset:1,color:"#158de1"}]),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},data:[934,863,845,765,737,653,634,556,489,442,422,356,315,252,212,132]},{name:"审批事项即办同比率",color:"#d53f4b",yAxisIndex:1,type:"line",itemStyle:{normal:{lineStyle:{width:5}}},data:[4.5,4,6.5,4.2,5.4,9,4,7,3,6,3,4.5,3,5,4,6]}]};
