option={color:["#6efcd5","#41c2fa"],grid:{show:!0,left:"3%",right:"3%",top:"30%",bottom:"5%",borderWidth:0,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{color:"transparent"}},textStyle:{fontSize:14},backgroundColor:"rgba(0,0,0,0.5)",formatter:function(t){let a="";for(let e of t)a+=`
                    <div style="z-index:999;">
                        <span style="color:#b3bdcb;">${e.seriesName}：</span>
                        <span style="color:white;">${e.data.value}${e.data.unit}</span>
                    </div>
                `;return a}},xAxis:{type:"category",data:["2018-08"],axisTick:{show:!1},axisLabel:{color:"#b3bdcb",fontSize:14,interval:0,rotate:20,align:"center",margin:20},axisLine:{show:!1}},yAxis:[{axisTick:{show:!1},axisLabel:{color:"#b3bdcb",fontSize:14},axisLine:{show:!1},splitLine:{show:!1}},{axisTick:{show:!1},axisLabel:{color:"#b3bdcb",fontSize:14},axisLine:{show:!1},splitLine:{show:!1}}],series:[{name:"笔数",type:"line",data:[{value:1,unit:""}],yAxisIndex:1,lineStyle:{type:"dotted"}},{name:"金额",type:"bar",data:[{value:200,unit:"万"}],yAxisIndex:0,barWidth:"20%"}]};
