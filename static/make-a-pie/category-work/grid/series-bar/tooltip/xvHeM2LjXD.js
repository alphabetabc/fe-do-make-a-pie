var attaData=[62,52,34,61,15,25];function colorRgb(o){var t=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/,e=o.toLowerCase();if(t.test(e)){if(e.length===4){for(var r="#",a=1;a<4;a+=1)r+=e.slice(a,a+1).concat(e.slice(a,a+1));e=r}for(var s=[],a=1;a<7;a+=2)s.push(parseInt("0x"+e.slice(a,a+2)));return"rgba("+s.join(",")+",0.4)"}else return e}var attackSourcesColor1=["#36C9FF","#6DECEC","#6DFD96","#FFCD00","#F76F1C","#EC6D6D"];function attackSourcesDataFmt(o){var t=[];return o.forEach(function(e,r){let a={barBorderRadius:[0,20,20,0],color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:colorRgb(attackSourcesColor1[r])},{offset:1,color:attackSourcesColor1[r]}])};t.push({value:e,itemStyle:a})}),t}var option={backgroundColor:"#000",tooltip:{trigger:"axis",borderColor:"#62FFFF",formatter:" {b}     {c}户",axisPointer:{type:"shadow"}},grid:{x:65,y:40,x2:20,y2:20},xAxis:{axisLine:{lineStyle:{color:"#44A0B7"}},axisLabel:{textStyle:{color:"#fff"}},show:!0,type:"value",axisTick:{show:!1},splitLine:{show:!1}},yAxis:{name:"单位:户",type:"category",data:["杭州市","宁波市","绍兴市","湖州市","温州市"],axisLine:{lineStyle:{color:"#44A0B7"}},axisLabel:{textStyle:{color:"#fff"}},axisTick:{show:!1},splitLine:{show:!1}},series:[{name:"",type:"bar",barWidth:12,data:attackSourcesDataFmt(attaData)},{name:"",type:"bar",barWidth:12,barGap:"-100%",z:0,itemStyle:{barBorderRadius:[0,20,20,0],color:"rgba(0, 120, 121, 0.54)"},data:[100,100,100,100,100,100]}]};