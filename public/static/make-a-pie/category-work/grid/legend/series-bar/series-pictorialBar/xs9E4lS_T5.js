const list1=[30,150,140,100],list2=[25,80,70,30],icon2=[55,230,210,130],list3=[30,30,40,50],icon3=[85,260,250,180];option={backgroundColor:"#021132",calculable:!0,legend:{top:20,itemWidth:16,itemHeight:16,textStyle:{color:"#fff"}},xAxis:{type:"category",data:["张三","李四","王五","陈六"],axisTick:{show:!1},axisLine:{show:!0,lineStyle:{type:"solid",color:"gray",opacity:1}},axisLabel:{interval:0,textStyle:{color:"#fff",fontSize:20},margin:20}},yAxis:[{splitLine:{show:!0,lineStyle:{type:"dashed",opacity:.5}},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{textStyle:{color:"#fff",fontSize:20}}}],series:[{name:"",type:"pictorialBar",symbolSize:[14,6],symbolOffset:[0,3],z:12,itemStyle:{opacity:1,color:function(t){var e=t.name.slice(0,2);return new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#347DFF"},{offset:1,color:"#347DFF"}],!1)}},data:[.5,.5,.5,.5]},{name:"",type:"pictorialBar",symbolSize:[14,6],symbolOffset:[0,-4],z:12,itemStyle:{opacity:1,color:function(t){var e=t.name.slice(0,2);return new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#26AEED"},{offset:1,color:"#024E8E"}],!1)}},symbolPosition:"end",data:list1},{name:"",type:"pictorialBar",symbolSize:[14,6],symbolOffset:[0,-5],z:12,itemStyle:{opacity:1,color:function(t){var e=t.name.slice(0,2);return new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#ED9926"},{offset:1,color:"#8E6402"}],!1)}},symbolPosition:"end",data:icon2},{name:"",type:"pictorialBar",symbolSize:[14,6],symbolOffset:[0,-5],z:12,itemStyle:{opacity:1,color:function(t){var e=t.name.slice(0,2);return new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#31DCC9"},{offset:1,color:"#108477"}],!1)}},symbolPosition:"end",data:icon3},{name:"人员信息",type:"bar",stack:"1",data:list1,barWidth:14,label:{show:!0,position:"top",color:"#333",formatter:function(t){return""}},itemStyle:{normal:{color:"#347DFF"}}},{name:"人员信息2",type:"bar",stack:"1",data:list2,barWidth:60,label:{show:!0,position:"top",color:"#333",formatter:function(t){return""}},itemStyle:{normal:{color:"#FFC14B"}}},{name:"人员信息3",type:"bar",stack:"1",data:list3,barWidth:60,label:{show:!0,position:"top",color:"#333",formatter:function(t){return""}},itemStyle:{normal:{color:"#31DCC9"}}}]};
