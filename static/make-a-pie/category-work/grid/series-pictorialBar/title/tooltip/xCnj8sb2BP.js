option={title:{text:`中国之声
106.7MHz`,top:"center",left:"left",textStyle:{color:"#ffffff",lineHeight:20,fontSize:14},padding:[0,0,0,10]},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(e){console.log(e);var a="<div><p>"+e[2].name+" "+e[2].seriesName+"："+e[2].value+"HZ</p><p>"+e[3].name+" "+e[3].seriesName+"："+e[3].value+"HZ</p></div>";return a}},grid:[{left:"40%",bottom:"35%",height:"50%",width:"55%"}],yAxis:{splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!1}},color:["#00ae44","#00ae44"],xAxis:{data:["卫星信源","网传信源","发射接收"],inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{interval:0,textStyle:{fontSize:8,color:"#ffffff"}}},series:[{name:"左边最大值",type:"pictorialBar",barGap:"10%",label:{normal:{show:!1}},symbolRepeat:!0,symbolOffset:["100%",0],symbolSize:["80%","50%"],itemStyle:{normal:{color:"#ff0000"}},data:[{value:70,symbol:"reat"},{value:70,symbol:"reat"},{value:70,symbol:"reat"}],z:10},{name:"右边最大值",type:"pictorialBar",barGap:"10%",label:{normal:{show:!1}},symbolRepeat:!0,symbolOffset:["197%",0],symbolSize:["80%","50%"],itemStyle:{normal:{color:"#ff0000"}},data:[{value:70,symbol:"reat"},{value:70,symbol:"reat"},{value:70,symbol:"reat"}],z:10},{name:"2015",type:"pictorialBar",label:{normal:{show:!1}},symbolRepeat:!0,symbolOffset:["-175%",0],symbolSize:["80%","50%"],barCategoryGap:"40%",data:[{value:50,symbol:"reat"},{value:21,symbol:"reat"},{value:50,symbol:"reat"}],z:11},{name:"2016",type:"pictorialBar",barGap:"10%",label:{normal:{show:!1}},symbolRepeat:!0,symbolOffset:["-77%",0],symbolSize:["80%","50%"],data:[{value:60,symbol:"reat"},{value:29,symbol:"reat"},{value:48,symbol:"reat"}],z:11}]};
