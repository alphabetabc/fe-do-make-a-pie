var getname=["学前教育","初等教育","语文教育","英语教育"],getzrs=[1200,1e3,1235,1060],getxwsy=[800,900,500,800],getbj=[1,1,1,1],getbl=[];for(let a=0;a<getzrs.length;a++)getbl[a]=getxwsy[a]/getzrs[a];option={backgroundColor:"#000",grid:{left:"15%",right:"5%",bottom:"5%",top:"5%"},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(a){var t="";t+="<div>"+a[0].name+"</div>";for(var e=0;e<a.length;e++)t="<span>"+a[0].name+'</span></br><span style="display:inline-block;float:left;width:12px;height:12px;margin-top:5px;background:#2472e3;color:#fff;border-radius:30%;"></span><span>&nbsp&nbsp总人数：</span><span style="display:block;width:100px;float:right;text-align:right">'+getzrs[a[e].dataIndex]+'人</span></br><span style="display:inline-block;float:left;width:12px;height:12px;margin-top:5px;background:#ED11AC;color:#fff;border-radius:30%;"></span><span>&nbsp&nbsp学位授予：</span><span style="display:block;width:100px;float:right;text-align:right">'+getxwsy[a[e].dataIndex]+"人</span>";return t}},xAxis:[{type:"value",axisLabel:{show:!1},min:0,max:1,splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},{type:"value",axisLabel:{show:!1},min:0,max:1,splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1}}],yAxis:[{type:"category",inverse:!0,axisLabel:{textStyle:{color:"#6F84BD",fontSize:"13"},padding:[0,15,0,0]},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},data:getname}],series:[{name:"数值",type:"bar",zlevel:1,xAxisIndex:0,itemStyle:{normal:{barBorderRadius:[0,6,6,0],color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#6569FF"},{offset:1,color:"#00C0F0"}],!1)}},barWidth:15,data:getbl},{name:"条形背景颜色",type:"bar",barWidth:15,barGap:"-100%",xAxisIndex:1,data:getbj,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#6569FF"},{offset:1,color:"#00C0F0"}],!1),opacity:.2,barBorderRadius:[0,6,6,0]}}}]};