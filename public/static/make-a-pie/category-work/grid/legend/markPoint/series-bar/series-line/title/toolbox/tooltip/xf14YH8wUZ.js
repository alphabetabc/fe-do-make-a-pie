option={title:{text:"2018-11-12温度走势"},legend:{data:["温度","湿度"]},toolbox:{show:!0,feature:{saveAsImage:{show:!0}}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){for(var o=t.length,a=t[0].name+"<br/>",r=0;r<o;r++){var e=t[r];e.seriesIndex==2||e.seriesIndex==5||(e.value.length>1?(a+="最高温度: "+(e.value[1]+e.value[3])+"<br/>",a+="平均温度: "+e.value[2]+"<br/>"):a+="最低温度 : "+e.value+"<br/>")}return a}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",splitLine:{show:!1},data:[`14:00:12
`,"14:01:12","14:02:12","14:03:12","14:04:12"]},yAxis:{type:"value"},series:[{name:"设备1最低温度",type:"bar",stack:"设备1data",cursor:"auto",barWidth:2,itemStyle:{normal:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"},emphasis:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"}},data:[7,2,0,5,10]},{name:"温度",type:"bar",stack:"设备1data",data:[[0,1,8,7],[1,8,7,2],[2,7,7,0],[3,6,6,5],[4,.1,6,10]]},{name:"设备1最高温度标线",type:"line",itemStyle:{normal:{color:"#c23531"}},data:[8,10,7,11,10],markPoint:{color:"blue",data:[{type:"max",name:"最大值"}]}}]};