const data1=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],data2=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],data3=changeData(data1),data4=changeData(data2);function changeData(a){console.log("-----",a.length);let e=[];for(let t=0;t<a.length;t++)e[t]=a[t]-7;return e}console.log("--data3---",data3),console.log("---data4--",data4),option={color:["#C371E0","#1AAEEF"],tooltip:{trigger:"axis",formatter:function(a){console.log("---params--",a);const e=a[0],t=a[1];return e.marker+e.seriesName+": "+(e.data+7)+"<br/>"+t.marker+t.seriesName+": "+(t.data+7)},axisPointer:{type:"shadow"}},grid:{},xAxis:[{type:"category",axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]}],yAxis:[{type:"value",interval:1,min:-7,max:7,axisLabel:{show:!0,formatter:function(a,e){return a+7}},scale:!0}],series:[{name:"生活用水",type:"bar",data:data3},{name:"非传统水源",type:"bar",data:data4}]};
