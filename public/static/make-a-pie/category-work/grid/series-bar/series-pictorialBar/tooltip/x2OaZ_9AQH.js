var xdata=["内保","治安","网监","人管","公交","禁毒","反恐","水警"],data=[180,145,165,180,150,165,145,125],maxArr=[];let max=parseInt(data[0].value);for(let t=0;t<data.length-1;t++)max=max<parseInt(data[t+1].value)?parseInt(data[t+1].value):max;for(let t=0;t<data.length-1;t++)maxArr.push(max);option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){let e='<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:#02C4DD"></span>';return t[0].name+"<br>实有单位总数 ："+t[0].value}},grid:{left:"4%",right:"4%",bottom:"3%",top:"15%",containLabel:!0},xAxis:{data:xdata,triggerEvent:!0,axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"rgba(193, 207, 220, 1)"}},axisLabel:{show:!0,rotate:0,interval:0,textStyle:{padding:[14,0,0,0],fontSize:14,color:"rgba(0, 0, 0, 1)"}}},yAxis:{triggerEvent:!0,nameTextStyle:{color:"rgba(255,255,255,1)",fontSize:16,padding:[0,0,10,-20]},splitLine:{show:!0,lineStyle:{color:"rgba(193, 207, 220, 1)"}},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,textStyle:{color:"rgba(0, 0, 0, 0.72)",fontSize:16}}},series:[{name:"实有单位总数",barMinHeight:10,type:"pictorialBar",barCategoryGap:"60%",symbol:"path://M0,10 L10,10 L5,0 L0,10 z",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"RGBA(198, 166, 255, 1)"},{offset:.5,color:"RGBA(231, 221, 255, 1)"},{offset:1,color:"RGBA(249, 248, 255, 1)"}])}},label:{normal:{show:!0,position:"top",textStyle:{color:"rgba(29, 145, 245, 1)",fontSize:20}}},data,z:10},{name:"hill",type:"bar",barWidth:"20%",symbol:"path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",itemStyle:{normal:{color:"rgba(11,47,68,.8)"}},data:maxArr,z:9}]};