var years=["2016","2017","2018"],jdData=[["香港同胞","澳门同胞","台湾同胞","日  本","韩  国","蒙  古","印度尼西亚","马来西亚","菲律宾","新加坡","泰  国","印  度","越  南","缅  甸","朝  鲜","巴基斯坦","其  它"],["香港同胞","澳门同胞","台湾同胞","日  本","韩  国","蒙  古","印度尼西亚","马来西亚","菲律宾","新加坡","泰  国","印  度","越  南","缅  甸","朝  鲜","巴基斯坦","其  它"],["香港同胞","澳门同胞","台湾同胞","日  本","韩  国","蒙  古","印度尼西亚","马来西亚","菲律宾","新加坡","泰  国","印  度","越  南","缅  甸","朝  鲜","巴基斯坦","其  它"]],data=[[13.2,1.11,13.6,9284,64138,2237,4779,48877,2371,36224,12956,2499,4778,594,717,534,16487],[15.26,1.31,16.68,10331,91580,1909,40469,67490,1765,36982,15371,3643,2871,762,962,757,34414],[14.23,1.31,21.13,10873,94964,2966,129748,59827,8519,38344,18495,3531,1369,544,2005,975,33855]];option={baseOption:{backgroundColor:"#2c343c",timeline:{data:years,axisType:"category",autoPlay:!0,playInterval:1500,left:"5%",right:"5%",bottom:"0%",width:"90%",label:{normal:{textStyle:{color:"red"}},emphasis:{textStyle:{color:"red"}}},symbolSize:10,lineStyle:{color:"#red"},checkpointStyle:{borderColor:"#red",borderWidth:2},controlStyle:{showNextBtn:!0,showPrevBtn:!0,normal:{color:"#ff8800",borderColor:"#ff8800"},emphasis:{color:"red",borderColor:"red"}}},title:{text:"",right:"2%",bottom:"8%",textStyle:{fontSize:50,color:"black"}},tooltip:{trigger:"axis"},calculable:!0,grid:{left:"8%",right:"2%",bottom:"6%",top:"0%",containLabel:!0},label:{normal:{textStyle:{color:"red"}}},yAxis:[{nameGap:50,offset:"37",type:"category",interval:50,data:"",nameTextStyle:{color:"red"},axisLabel:{show:!1,textStyle:{fontSize:32,color:function(e,a){var o=["#6bc0fb","#7fec9d","#fedd8b","#ffa597","#84e4dd","#749f83","#ca8622","#bda29a","#a8d8ea","#aa96da","#fcbad3","#ffffd2","#f38181","#fce38a","#eaffd0","#95e1d3","#e3fdfd","#749f83","#ca8622"];return o[jdData[0].indexOf(e)]}},interval:50},axisLine:{lineStyle:{color:"balck"}},splitLine:{show:!1,lineStyle:{color:"balck"}}}],xAxis:[{type:"value",name:"",splitNumber:8,nameTextStyle:{color:"balck"},axisLine:{lineStyle:{color:"#ffa597"}},axisLabel:{formatter:"{value} "},splitLine:{show:!0,lineStyle:{color:"#fedd8b"}}}],series:[{name:"",type:"bar",markLine:{label:{normal:{show:!1}},lineStyle:{normal:{color:"red",width:3}}},label:{normal:{show:!0,position:"right",formatter:"{c}"}},itemStyle:{normal:{color:function(e){var a=["#6bc0fb","#7fec9d","#fedd8b","#ffa597","#84e4dd","#749f83","#ca8622","#bda29a","#a8d8ea","#aa96da","#fcbad3","#ffffd2","#f38181","#fce38a","#eaffd0","#95e1d3","#e3fdfd","#749f83","#ca8622"];return console.log("111",e.name),a[jdData[0].indexOf(e.name)]}}}},{name:"",type:"bar",markLine:{label:{normal:{show:!1}},lineStyle:{normal:{color:"red",width:3}}},barWidth:"50%",barGap:"-100%",label:{normal:{show:!0,fontSize:16,position:"left",formatter:function(e){return e.name}}},itemStyle:{normal:{color:function(e){var a=["#6bc0fb","#7fec9d","#fedd8b","#ffa597","#84e4dd","#749f83","#ca8622","#bda29a","#a8d8ea","#aa96da","#fcbad3","#ffffd2","#f38181","#fce38a","#eaffd0","#95e1d3","#e3fdfd","#749f83","#ca8622"];return a[jdData[0].indexOf(e.name)]}}}}],animationEasingUpdate:"quinticInOut",animationDurationUpdate:1500},options:[]};for(var n=0;n<years.length;n++){var res=[];for(j=0;j<data[n].length;j++)res.push({name:jdData[n][j],value:data[n][j]});res.sort(function(e,a){return a.value-e.value}).slice(0,6),res.sort(function(e,a){return e.value-a.value});var res1=[],res2=[];for(t=0;t<res.length;t++)res1[t]=res[t].name,res2[t]=res[t].value;option.options.push({title:{text:years[n]+"年"},yAxis:{data:res1},series:[{data:res2},{data:res2}]})}
