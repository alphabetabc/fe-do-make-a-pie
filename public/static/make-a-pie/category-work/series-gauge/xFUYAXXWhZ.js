option={backgroundColor:["#fff"],grid:{top:10},series:[{type:"gauge",startAngle:180,endAngle:0,radius:"100%",center:["50%","80%"],axisTick:{show:!1},splitLine:{show:!1},axisLabel:{color:"#666",show:!0,padding:[20,0,0,0],fontSize:12,distance:-20,formatter(e){if(e===0||e===100)return e}},detail:{offsetCenter:[0,-15],textStyle:{fontSize:18,fontWeight:"",color:"#333"},formatter:function(e){return console.log(e),e+"tian"}},pointer:{show:!1},itemStyle:{normal:{color:"#323232"}},min:0,max:100,axisLine:{lineStyle:{width:40,color:[[.8,"#323232"],[1,"#edeeef"]]}},data:[{name:"111",value:99}]}]};
