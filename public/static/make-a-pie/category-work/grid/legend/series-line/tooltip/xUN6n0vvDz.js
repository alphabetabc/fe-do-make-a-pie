var startDate=new Date("2020-01-19"),startTime=startDate.getTime();function getDateNum(t){var a=t*24*60*60*1e3,e=new Date(startTime+a);return e.getMonth()+1+"月"+e.getDate()+"日"}for(var datas=[],dates=[],datas1=[],i=80;i>=0;i--){dates.push(getDateNum(i)),datas.push(Math.floor(Math.random()*300+Math.random()*(i*100))+200);var d1="";i>42&&(d1=Math.floor(Math.random()*400+Math.random()*(i*120))+300),datas1.push(d1)}option={tooltip:{trigger:"axis"},legend:{data:["离汉通道暂时关闭","离汉离鄂通道解除管控"],itemWidth:20,itemHeight:10,itemGap:10,left:135,bottom:2,textStyle:{fontSize:14,fontWeight:"bolder",color:"#fff"}},grid:{left:"1%",right:"1%",bottom:"1%",containLabel:!0},xAxis:{type:"value",axisLabel:{show:!0,textStyle:{color:"#fff"}},axisLine:{lineStyle:{color:"#1df9b8",opacity:.3,width:1}}},yAxis:{type:"category",axisLine:{onZero:!1},boundaryGap:!1,axisLabel:{show:!0,textStyle:{color:"#fff"}},axisLine:{lineStyle:{color:"#1df9b8",opacity:.3,width:1}},data:dates},series:[{name:"离汉通道暂时关闭",type:"line",smooth:!0,symbolSize:10,lineStyle:{normal:{color:"#faf800",width:5}},itemStyle:{normal:{label:{show:!1},color:"#faf800"}},areaStyle:{origin:"start",color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:1,color:"rgba(250, 250, 0,0.8)"},{offset:0,color:"rgba(250, 250, 0,0.1)"}])},data:datas1,formatter:function(t){return console.log(t),"{b}: {@score}"}},{name:"离汉离鄂通道解除管控",type:"line",smooth:!0,symbolSize:10,lineStyle:{normal:{color:"#1ffaae",width:5}},itemStyle:{normal:{label:{show:!1},color:"#1ffaae"}},areaStyle:{origin:"start",color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:1,color:"rgba(27, 249, 188,0.8)"},{offset:0,color:"rgba(27, 249, 188,0.1)"}])},data:datas}]};
