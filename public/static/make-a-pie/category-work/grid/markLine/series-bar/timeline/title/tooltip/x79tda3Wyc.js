var years=["2016","2017","2018"],jdData=[["香港同胞","澳门同胞","台湾同胞","日  本","韩  国","蒙  古","印度尼西亚","马来西亚","菲律宾","新加坡","泰  国","印  度","越  南","缅  甸","朝  鲜","巴基斯坦","其  它"],["香港同胞","澳门同胞","台湾同胞","日  本","韩  国","蒙  古","印度尼西亚","马来西亚","菲律宾","新加坡","泰  国","印  度","越  南","缅  甸","朝  鲜","巴基斯坦","其  它"],["香港同胞","澳门同胞","台湾同胞","日  本","韩  国","蒙  古","印度尼西亚","马来西亚","菲律宾","新加坡","泰  国","印  度","越  南","缅  甸","朝  鲜","巴基斯坦","其  它"]],data=[[13.2,1.11,13.6,9284,64138,2237,4779,48877,2371,36224,12956,2499,4778,594,717,534,16487],[15.26,1.31,16.68,10331,91580,1909,40469,67490,1765,36982,15371,3643,2871,762,962,757,34414],[14.23,1.31,21.13,10873,94964,2966,129748,59827,8519,38344,18495,3531,1369,544,2005,975,33855]];option={baseOption:{timeline:{data:years,axisType:"category",autoPlay:!0,playInterval:5e3,left:"10%",right:"10%",bottom:"0%",width:"80%",label:{normal:{textStyle:{color:"#ddd"}},emphasis:{textStyle:{color:"#fff"}}},symbolSize:10,lineStyle:{color:"#555"},checkpointStyle:{borderColor:"#777",borderWidth:2},controlStyle:{showNextBtn:!0,showPrevBtn:!0,normal:{color:"#666",borderColor:"#666"},emphasis:{color:"#aaa",borderColor:"#aaa"}}},title:{text:"",right:"2%",bottom:"8%",textStyle:{fontSize:50,color:"#666"}},tooltip:{trigger:"axis"},calculable:!0,grid:{left:"8%",right:"2%",bottom:"6%",top:"0%",containLabel:!0},label:{normal:{textStyle:{color:"#fff"}}},yAxis:[{offset:"37",type:"category",data:"",nameTextStyle:{color:"#fff"},axisLabel:{textStyle:{fontSize:12,color:"#333"},interval:0},axisLine:{lineStyle:{color:"#333"}},splitLine:{show:!1,lineStyle:{color:"#333"}}}],xAxis:[{type:"value",name:"",splitNumber:8,nameTextStyle:{color:"#333"},axisLine:{lineStyle:{color:"#333"}},axisLabel:{formatter:"{value} "},splitLine:{show:!0,lineStyle:{color:"#ccc"}}}],series:[{name:"",type:"bar",markLine:{label:{normal:{show:!1}},lineStyle:{normal:{color:"red",width:3}}},barWidth:"50%",label:{normal:{show:!0,position:"inside",formatter:"{c}"}},itemStyle:{normal:{color:function(e){var o=["#bcd3bb","#e88f70","#9dc5c8","#e1e8c8","#7b7c68","#e5b5b5","#f0b489","#928ea8","#bda29a","#376956","#c3bed4","#495a80","#9966cc","#bdb76a","#eee8ab","#a35015","#04dd98","#d9b3e6","#b6c3fc","#315dbc"];return o[e.dataIndex]}}}}],animationDurationUpdate:2e3,animationEasingUpdate:"quinticInOut"},options:[]};for(var n=0;n<years.length;n++){var res=[];for(j=0;j<data[n].length;j++)res.push({name:jdData[n][j],value:data[n][j]});res.sort(function(e,o){return o.value-e.value}).slice(0,6),res.sort(function(e,o){return e.value-o.value});var res1=[],res2=[];for(t=0;t<res.length;t++)res1[t]=res[t].name,res2[t]=res[t].value;console.log(res1),console.log("----------------"),console.log(jdData[n]),option.options.push({title:{text:years[n]+"年"},yAxis:{data:res1},series:[{data:res2}]})}
