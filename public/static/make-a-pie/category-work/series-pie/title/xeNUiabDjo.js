let data=[.05,.04,.1,.1,0,0,0],newData=delZero(data);function delZero(e){for(let l=0;l<e.length;l++)parseFloat(e[l])===0&&(e[l]=null);return console.log(e),e}let xAxisData=["1日","2日","3日","4日","5日","6日","7日"];option={backgroundColor:"#035",title:{text:"",textStyle:{align:"center",color:"#fff"},left:"center"},tooltip:{trigger:"axis",formatter:function(e,l,o){for(var t=0;t<e.length;t++)return parseFloat(e[t].value)>0?e[t].name+": "+e[t].value:e[t].name+": "+0}},grid:{left:"20%"},xAxis:{name:"日期",type:"category",nameLocation:"center",axisTick:{show:!0,alignWithLabel:!0},axisLabel:{show:!0,interval:0,formatter:null,rotate:-50,color:"#ffffff"},axisLine:{lineStyle:{color:"#ffffff"}},splitLine:{show:!1},bottom:"3%",boundaryGap:!0,data:xAxisData},yAxis:{name:"不良率",type:"value",boundaryGap:!0,left:"15%",axisLabel:{show:!0,rotate:0,interval:0,color:"#ffffff",formatter:null},axisLine:{lineStyle:{color:"#ffffff"}},splitLine:{show:!0,lineStyle:{color:"rgba(255,255,255,0.3)"}}},series:[{name:"",type:"line",symbolSize:8,label:{show:!0,color:"#fff",position:"top",formatter:function(e){return e.value>0?e.value:""}},barGap:"0",itemStyle:{normal:{color:"#248ff7",barBorderRadius:[30,30,30,30]}},barMaxWidth:20,data:newData}]};