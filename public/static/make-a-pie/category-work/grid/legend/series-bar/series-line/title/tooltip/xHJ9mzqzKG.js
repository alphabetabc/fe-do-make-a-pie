var colors=["#81d0d7"],data2=[917,689,1264,734,957,835,1154,656,742,1135,754];options=[{backgroundColor:"#fff",title:{text:"色标管理市场规模情况（餐饮服务）"},color:colors,tooltip:{trigger:"axis",axisPointer:{type:"cross"}},grid:{top:80,left:"10%",right:"47%",bottom:"65%"},legend:{data:["色标管理开展数","色标管理开展环比率"],align:"left",left:"7%",top:45},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},boundaryGap:["0%","0%"],axisLabel:{interval:{default:0},rotate:50,formatter:function(e){var a="",t=e.length,i=4,l=Math.ceil(t/i);if(t>i){var r="";r=e.substring(0,4),a=r+"..."}else a=e;return a}},data:["金城江区","宜州市","南丹县","天峨县","东兰县","凤山县","罗城仫佬族自治县","都安瑶族自治县","大化瑶族自治县","巴马瑶族自治县","环江毛南族自治县"]}],yAxis:[{type:"value",name:"",min:0,max:1500,position:"left",axisLine:{lineStyle:{color:"#1f6770"}},axisLabel:{formatter:"{value} "}},{type:"value",name:"",position:"right",axisLine:{lineStyle:{color:"#1f6770"}},axisLabel:{formatter:"{value} %"}}],series:[{name:"色标管理开展数",type:"bar",barWidth:"30%",data:data2},{name:"色标管理开展环比率",color:"#66d282",yAxisIndex:1,type:"line",itemStyle:{normal:{lineStyle:{width:3}}},data:[4.5,4,5.5,1.7,3.5,2,4.5,3,3.5,4,3.3]}]}];
