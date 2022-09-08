let xLabel=["3.26","3.27","3.28","3.29","3.30","3.31"],goToSchool=["40","60","22","85","50","40"],goOutSchool=["20","50","12","65","30","60"],days=["9-1","9-2","9-3","9-4","9-5","9-6","9-7"];option={backgroundColor:"#000237",tooltip:{trigger:"axis",backgroundColor:"transparent",axisPointer:{lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(126,199,255,0)"},{offset:.5,color:"rgba(126,199,255,1)"},{offset:1,color:"rgba(126,199,255,0)"}],global:!1}}},formatter:e=>`<div style="width: 100px;
	height: 50px;;color:#fff;position: relative;">
        <div style="padding: 4px 8px 4px 14px;display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;position: relative;z-index: 1;">
        <div style="font-size:12px;color:#fff">${days[e[0].dataIndex]}</div>
            <div style="margin-bottom: 4px;width:100%;display:${e[0]?"flex":"none"};justify-content:space-between;align-items:center;">
                <span style="background-color:#ff9b00;width:10px;height:10px;display:block;border-radius:50%;margin-right:0"></span>
                <span style="font-size:12px;color:#7ec7ff;text-align:right;">${e[0]?e[0].seriesName:""}:</span>
                <span style="font-size:12px;color:#fff;">${e[0]?e[0].data:""}</span>
            </div>
            <div style="width:100%;height:100%;display:${e[1]?"flex":"none"};justify-content:space-between;align-items:center;">
               <span style="background-color:#00ffff;width:10px;height:10px;display:block;border-radius:50%;margin-right:0"></span>
                <span style="font-size:12px;color:#7ec7ff;text-align:right;">${e[1]?e[1].seriesName:""}:</span>
                <span style="font-size:12px;color:#fff;">${e[1]?e[1].data:""}</span>
            </div>
        </div>
    </div>`},legend:{align:"left",right:"12%",top:"20%",type:"plain",textStyle:{color:"#7ec7ff",fontSize:16},itemGap:25,itemWidth:18,icon:"path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",data:[{name:"今日"},{name:"近7日"}]},grid:{top:"15%",left:"10%",right:"10%",bottom:"15%"},xAxis:[{type:"category",boundaryGap:!1,axisLine:{show:!0,lineStyle:{color:"#233653"}},axisLabel:{textStyle:{color:"#78bdf5",padding:16,fontSize:14},formatter:function(e){return e}},splitLine:{show:!0,lineStyle:{color:"#233653"}},axisTick:{show:!1},data:xLabel}],yAxis:[{min:0,splitLine:{show:!0,lineStyle:{color:"#233653"}},axisLine:{show:!0,lineStyle:{color:"#233653"}},axisLabel:{show:!0,textStyle:{color:"#78bdf5",padding:16},formatter:function(e){return e}},axisTick:{show:!1}}],series:[{name:"今日",type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:16,smooth:!0,lineStyle:{normal:{width:4,color:"#ff9b00"}},itemStyle:{color:"#ff9b00"},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(255,155,0,.6)"},{offset:1,color:"rgba(255,155,0, 0)"}],!1)}},data:goToSchool},{name:"近7日",type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:16,smooth:!0,lineStyle:{normal:{width:4,color:"#00ffff"}},itemStyle:{color:"#00ffff"},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(0,255,255,.6)"},{offset:1,color:"rgba(0,255,255, 0)"}],!1)}},data:goOutSchool}]};
