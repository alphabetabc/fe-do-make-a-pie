var colors=["#91b6c2","#81d0d7"],data1=[917,889,1264,1127,950,1153,920,861,996,866,898,1314,866,1053,850,1265,996,866,898,781],data2=[717,689,1064,927,650,753,620,561,696,666,698,1014,566,753,550,1065,696,666,698,770];option={backgroundColor:"#fff",title:{text:"单位审批事项情况",textStyle:{fontSize:"18"}},color:colors,tooltip:{trigger:"axis",axisPointer:{type:"cross"}},grid:{top:80,left:"10%",right:"35%",bottom:"52%"},legend:{data:["受理数","办结数","办结率"],align:"left",left:"7%",top:45},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},boundaryGap:["0%","0%"],axisLabel:{interval:{default:0},rotate:50,textStyle:{fontSize:10},formatter:function(e){var t="",a=e.length,i=4,l=Math.ceil(a/i);if(a>i){var r="";r=e.substring(0,4),t=r+"..."}else t=e;return t}},data:["区局","南宁市行政审批局","南宁市局","柳州市局","柳州市行政审批局","桂林市局","梧州市局","梧州市行政审批局","北海市局","北海市行政审批局","防城港市局","钦州市局","钦州市行政审批局","贵港市局","玉林市局","百色市局","贺州市局","河池市局","来宾市局","崇左市局"]}],yAxis:[{type:"value",name:"",min:0,max:1500,position:"left",axisLine:{lineStyle:{color:colors[0]}},axisLabel:{formatter:"{value} "}},{type:"value",name:"",position:"right",axisLine:{lineStyle:{color:"#1f6770"}},axisLabel:{formatter:"{value} %"}}],series:[{name:"受理数",type:"bar",barWidth:"30%",data:data1},{name:"办结数",type:"bar",barWidth:"30%",data:data2},{name:"办结率",color:"#66d282",yAxisIndex:1,type:"line",itemStyle:{normal:{lineStyle:{width:3}}},data:[78,72,84,82,68,65,67,65,69,76,77,75,65,71,64,84,76,88,89,90]}]};
