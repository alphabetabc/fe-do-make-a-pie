var getXY=["学前教育系","初等教育系","语言文学系","音乐舞蹈系","经济管理系"],getRS=[255,244,233,222,211];function calMax(e){let i=0;return e.forEach(a=>{a.forEach(t=>{t===void 0||t===""||i<t&&(i=t)})}),Math.ceil(i/9.5)*10}var max=Math.ceil(calMax([getRS])/10)*10;option={grid:{left:"150",right:"80",bottom:"30",top:"30"},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(e){return"人均开课<br>"+e[0].name+": "+e[0].value+"个"}},xAxis:[{type:"value",show:!1,axisLabel:{margin:5,color:"#666666",textStyle:{fontSize:"13"}},min:0,max,interval:max/5,splitNumber:5,splitLine:{show:!0,lineStyle:{color:"#D1D1D1"}},axisLine:{lineStyle:{color:"#333333"}},axisTick:{show:!1}}],yAxis:[{type:"category",inverse:!0,axisLabel:{textStyle:{color:"#6F84BD",fontSize:"13"}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1,lineStyle:{color:"#333333"}},data:getXY}],series:[{name:"值",type:"bar",zlevel:1,xAxisIndex:0,label:{show:!0,position:"right",color:"#6F84BD",fontSize:14,offset:[10,0]},itemStyle:{normal:{barBorderRadius:[10,10,10,10],color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#6569FF"},{offset:1,color:"#00C0F0"}],!1)}},barWidth:15,data:getRS}]};
