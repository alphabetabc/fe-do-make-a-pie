var hours=["1a","2a","3a","4a","5a","6a"],days=["Saturday","Friday","Thursday","Wednesday","Tuesday","Monday"],data3=[[2,1,3],[2,2,3],[2,3,3],[2,4,3],[3,1,3],[3,2,4],[3,3,3],[3,4,4],[5,1,6],[5,2,3],[5,3,3],[5,4,4]],data2=[{dawei:"123",name:"数据1",value:[0,3,4]},{dawei:"123",name:"数据1",value:[0,0,5]},{dawei:"123",name:"数据1",value:[0,5,3]},{dawei:"123",name:"数据1",value:[3,5,3]}],data0=[[0,1,0],[0,2,0],[0,4,0],[1,0,0],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[2,0,0],[2,5,0],[3,0,0],[4,0,0],[4,1,0],[4,2,0],[4,3,0],[4,4,0],[4,5,0],[5,0,0],[5,5,0]],data=[`越南
90730000`,`尼泊尔
28174724`,`柬埔寨
90730000`,`新加坡
90730000`,`文莱达鲁萨兰国
90730000`,`马尔代夫
90730000`,`不丹
90730000`];option={tooltip:{},visualMap:{itemHeight:0,max:20,inRange:{}},xAxis3D:{type:"category",data:hours,name:" ",axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},yAxis3D:{type:"category",data:days,name:" ",axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},zAxis3D:{type:"category",name:" ",axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:"#fff"}}},grid3D:{boxWidth:150,boxDepth:150,boxHeight:50,light:{main:{intensity:1.2},ambient:{intensity:.3}}},series:[{type:"bar3D",data:data2.map(function(a){return{value:[a.value[1],a.value[0],a.value[2]]}}),shading:"color",itemStyle:{color:"#01A1DB",opacity:.8},label:{show:!0,distance:5,formatter:({data:a,dataIndex:e,seriesIndex:t})=>a.value}},{type:"bar3D",data:data3.map(function(a){return{value:[a[1],a[0],a[2]]}}),shading:"color",label:{show:!0,textStyle:{fontSize:16,borderWidth:1}},itemStyle:{color:"#787878",opacity:.8},emphasis:{label:{textStyle:{fontSize:20,color:"#900"}},itemStyle:{color:"#900"}}},{type:"bar3D",data:data0.map(function(a){return{value:[a[1],a[0],a[2]]}}),shading:"color",itemStyle:{color:"#D9D9D9",opacity:.8}}]};