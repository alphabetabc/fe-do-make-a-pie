option={backgroundColor:"#080b30",tooltip:{show:!1},grid:{top:"8%",right:"1%",bottom:"28%",left:"9%"},xAxis:{data:["微信","微博","QQ","网易","头条号","搜狐号","趣头条"],axisTick:{show:!1},axisLabel:{interval:0,rotate:25,textStyle:{color:"#fff",fontSize:16},formatter:function(o){return o.length>=12?o.slice(0,12)+"...":o}},axisLine:{lineStyle:{type:"solid",color:"#fff",width:"1  "}}},yAxis:{splitLine:{show:!1},axisTick:{show:!0,lineStyle:{color:"#fff"}},axisLabel:{textStyle:{color:"#fff",fontSize:12}},axisLine:{show:!1}},series:[{name:"正常",type:"pictorialBar",symbol:"roundRect",symbolRepeat:!0,symbolSize:[22,3],symbolMargin:2,itemStyle:{normal:{color:"rgba(75,227,248,1)"}},label:{show:!0,position:"top",color:"#fff",formatter:"{c}"},data:[50,42,26,25,32,12,45]},{name:"异常",type:"pictorialBar",symbol:"roundRect",symbolRepeat:!0,symbolSize:[22,3],symbolMargin:2,color:"#6E7B7E",barGap:"-100%",z:1,data:[100,100,100,100,100,100,100]}]};
