option={grid:{containLabel:!0,left:20},xAxis:{splitLine:{show:!1},axisTick:{show:!1},axisLine:{lineStyle:{color:"#83bff9"}},data:["X向振动","Y向振动","Z向震动"]},yAxis:{name:"结束时间",type:"time",splitLine:{show:!1},axisTick:{show:!1},axisLine:{lineStyle:{color:"#83bff9"}}},tooltip:{trigger:"axis",formatter:function(e){var n=e[0].name+"</br>",t=e[0].data,a=e[1].data;return t=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate(),a=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate(),n+=e[0].seriesName+"~"+e[1].seriesName+":</br>"+t+"~"+a+"</br>",n}},series:[{name:"开始时间",type:"bar",stack:"test1",barWidth:25,itemStyle:{normal:{color:"rgba(0,0,0,0)"}},data:[new Date("2015/09/2"),new Date("2015/09/15"),new Date("2015/09/15"),new Date("2015/10/03"),new Date("2015/10/04"),new Date("2015/10/05"),new Date("2015/10/06")]},{name:"结束时间",type:"bar",stack:"test1",barWidth:25,itemStyle:{normal:{color:"#ffb434"}},data:[new Date("2015/09/12"),new Date("2015/09/20"),new Date("2015/09/25"),new Date("2015/10/05"),new Date("2015/10/07"),new Date("2015/10/09"),new Date("2015/10/12")]}]};
