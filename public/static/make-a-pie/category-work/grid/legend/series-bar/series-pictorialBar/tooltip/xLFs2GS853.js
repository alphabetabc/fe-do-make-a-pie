var xData=["竹山路乐天玛特超市","何山路与滨河路路口","石路国际生活广场","金狮大厦","狮山路滨河路路口","狮山路工商银行","苏州银监局","太湖大道锦峰路路口","新区美罗广场","新区金鹰百货"],data0=[1,1,1,1,1,1,1],data1=[100,150,130,170,185,160,180,175,185,160],data4=[120,100,140,160,210,180,200,190,220,170],data3=[],data5=[];for(let t=0;t<data1.length;t++)data3.push(data1[t]+data4[t]);for(let t=0;t<data1.length;t++)data5.push(data1[t]);option={backgroundColor:"#000E1A",tooltip:{trigger:"axis",borderColor:"rgba(255,255,255,.3)",backgroundColor:"rgba(13,5,30,.6)",textStyle:{color:"white"},borderWidth:1,padding:5,formatter:function(t){var e=t[0].axisValue+"</br>"+t[0].marker+"商业："+t[0].value+"</br>"+t[1].marker+"公益："+t[1].value;return e}},textStyle:{color:"#C9C9C9"},legend:{data:["商业","公益"],right:60,top:0,selectedMode:!1,textStyle:{fontSize:15,color:"#fff"},itemWidth:30,itemHeight:15,itemGap:20},grid:{borderWidth:0,x:70,x2:65,y:40,y2:80,textStyle:{color:"#fff"}},xAxis:[{type:"category",axisLine:{lineStyle:{color:"rgba(255,255,255,.5)"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0,margin:30,align:"center",rotate:20,color:"#ffff",fontSize:12,lineHeight:8,formatter:function(t,e){switch(e){case 0:return t.substring(0,4)+`

`+t.substring(4);case 1:return t.substring(0,4)+`

`+t.substring(4);case 2:return t.substring(0,7)+`

`+t.substring(7);case 3:return t.substring(0,7)+`

`+t.substring(7);case 4:return t.substring(0,5)+`

`+t.substring(5);case 5:return t.substring(0,7)+`

`+t.substring(7);case 6:return t.substring(0,11)+`

`+t.substring(11);case 7:return t.substring(0,13)+`

`+t.substring(13);case 8:return t.substring(0,5)+`

`+t.substring(5);case 9:return t.substring(0,2)+`

`+t.substring(2);default:return t}}},data:xData}],yAxis:[{type:"value",name:"小时",nameTextStyle:{color:"#fff"},splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0,color:"#ffff",fontSize:16}}],series:[{type:"bar",name:"商业",type:"bar",data:data1,stack:"zs",barMaxWidth:"auto",barWidth:30,itemStyle:{normal:{color:{x:0,y:0,x2:0,y2:1,type:"linear",global:!1,colorStops:[{offset:0,color:"#06fbfe"},{offset:1,color:"#017ebb"}]},label:{show:!0,textStyle:{color:"#fff"},position:["120%","50%"],formatter:function(t){return t.value}}}}},{name:"公益",type:"bar",data:data4,stack:"zs",type:"bar",barMaxWidth:"auto",barWidth:30,itemStyle:{normal:{color:{x:0,y:0,x2:0,y2:1,type:"linear",global:!1,colorStops:[{offset:0,color:"#05b76e"},{offset:1,color:"#028878"}]},label:{show:!0,textStyle:{color:"#fff"},position:["120%","50%"],formatter:function(t){return t.value}}}}},{data:data0,type:"pictorialBar",barMaxWidth:"20",symbol:"diamond",symbolOffset:[0,"50%"],symbolSize:[30,20],zlevel:2,itemStyle:{normal:{color:"#0184be"}}},{data:data1,type:"pictorialBar",barMaxWidth:"20",symbolPosition:"end",symbol:"diamond",symbolOffset:[0,"-50%"],symbolSize:[30,20],zlevel:2},{data:data1,type:"pictorialBar",barMaxWidth:"20",symbolPosition:"end",symbol:"diamond",symbolOffset:[0,"-50%"],symbolSize:[30,20],zlevel:2},{data:data5,type:"pictorialBar",barMaxWidth:"20",symbolPosition:"end",symbol:"diamond",symbolOffset:[0,"-50%"],symbolSize:[0,20],zlevel:2},{data:data5,type:"pictorialBar",barMaxWidth:"20",symbolPosition:"end",symbol:"diamond",symbolOffset:[0,"-50%"],symbolSize:[30,20],zlevel:2,itemStyle:{normal:{color:"#06fbfe"}}},{data:data3,type:"pictorialBar",barMaxWidth:"20",symbolPosition:"end",symbol:"diamond",symbolOffset:[0,"-50%"],symbolSize:[30,20],zlevel:2,itemStyle:{normal:{color:"#07e564"}}}]};
