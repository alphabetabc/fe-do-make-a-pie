let xLabel=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],goToSchool=["4.3","2.5","3.5","4.5","4.3","2.5","3.5","8.5","4.3","2.5","3.5","4.5"],goOutSchool=["2.4","4.4","1.8","2.8","2.4","4.4","1.8","2.8","2.4","4.4","1.8","2.8"],goOutSchool2=["12.4","14.4","11.8","2.8","2.4","4.4","1.8","2.8","2.4","4.4","1.8","2.8"];option={backgroundColor:"#013A54",tooltip:{trigger:"axis",backgroundColor:"transparent",axisPointer:{lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#4E36DC"},{offset:.5,color:"rgba(126,199,255,1)"},{offset:1,color:"rgba(126,199,255,0)"}],global:!1}}},formatter:e=>`<div style="width: 79px;
	height: 80px;;color:#fff;position: relative;">
        <svg style="position: absolute;top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);" class="svg" xmlns="http://www.w3.org/2000/svg" width="100" height="71" viewBox="0 0 84 55">
      <defs>
        <style>
          .cls-1 {
            fill: #07172c;
            fill-opacity: 0.8;
            stroke: #a7d8ff;
            stroke-linejoin: round;
            stroke-opacity: 0.2;
            stroke-width: 1px;
            fill-rule: evenodd;
          }

        </style>
      </defs>
      <path id="矩形_419" data-name="矩形 419" class="cls-1" d="M266,595h74v50H266V624.046L261,620l5-3.984V595Z"
        transform="translate(-258.5 -592.5)" />
    </svg>
        <div style="padding: 4px 8px 4px 14px;display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;position: relative;z-index: 1;">
            <div style="margin-bottom: 4px;width:100%;display:${e[0]?"flex":"none"};justify-content:space-between;align-items:center;">
                <span style="font-size:14px;color:#7ec7ff;">${e[0]?e[0].seriesName:""}</span>
                <span style="font-size:14px;color:#fff;">${e[0]?e[0].data:""}</span>
            </div>
            <div style="width:100%;height:100%;display:${e[1]?"flex":"none"};justify-content:space-between;align-items:center;">
                <span style="font-size:14px;color:#7ec7ff;">${e[1]?e[1].seriesName:""}</span>
                <span style="font-size:14px;color:#fff;">${e[1]?e[1].data:""}</span>
            </div>
            <div style="width:100%;height:100%;display:${e[2]?"flex":"none"};justify-content:space-between;align-items:center;">
                <span style="font-size:14px;color:#7ec7ff;">${e[2]?e[2].seriesName:""}</span>
                <span style="font-size:14px;color:#fff;">${e[2]?e[2].data:""}</span>
            </div>
        </div>
    </div>`},legend:{align:"left",right:"5%",top:"14%",type:"plain",textStyle:{color:"#3CA1EC",fontSize:16},itemGap:25,itemWidth:18,icon:"path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",data:[{name:"应用1"},{name:"应用2"},{name:"应用3"}]},grid:{top:"18%",left:"15%",right:"5%",bottom:"25%"},xAxis:[{type:"category",boundaryGap:!1,axisLine:{show:!0,lineStyle:{color:"#233653"}},axisLabel:{textStyle:{color:"##E06148",padding:16,fontSize:14},formatter:function(e){return e}},splitLine:{show:!0,lineStyle:{color:"#192a44"}},axisTick:{show:!1},data:xLabel}],yAxis:[{name:"单位：笔",nameTextStyle:{color:"#7ec7ff",fontSize:16,padding:10},min:0,splitLine:{show:!0,lineStyle:{color:"#192a44"}},axisLine:{show:!0,lineStyle:{color:"#233653"}},axisLabel:{show:!0,textStyle:{color:"#7ec7ff",padding:16},formatter:function(e){return e}},axisTick:{show:!1}}],series:[{name:"应用1",type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:0,smooth:!0,lineStyle:{normal:{width:5,color:"#F86E4E"},borderColor:"rgba(0,0,0,.4)"},itemStyle:{color:"rgba(25,163,223,1)",borderColor:"#646ace",borderWidth:2},tooltip:{show:!0},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#E06148"},{offset:1,color:"#3CA1EC"},{offset:0,color:"#E06148"}],!1),shadowColor:"rgba(25,163,223, 0.5)",shadowBlur:20}},data:goToSchool},{name:"应用2",type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:0,smooth:!0,lineStyle:{normal:{width:5,color:"rgba(10,219,250,1)"},borderColor:"rgba(0,0,0,.4)"},itemStyle:{color:"rgba(10,219,250,1)",borderColor:"#646ace",borderWidth:2},tooltip:{show:!0},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(10,219,250,.3)"},{offset:1,color:"rgba(10,219,250, 0)"},{offset:0,color:"rgba(10,219,250,.3)"}],!1),shadowColor:"rgba(10,219,250, 0.5)",shadowBlur:20}},data:goOutSchool},{name:"应用3",type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:0,smooth:!0,lineStyle:{normal:{width:5,color:"rgba(10,219,250,1)"},borderColor:"rgba(0,0,0,.4)"},itemStyle:{color:"rgba(10,219,250,1)",borderColor:"#646ace",borderWidth:2},tooltip:{show:!0},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(10,219,250,.3)"},{offset:1,color:"rgba(10,219,250, 0)"},{offset:0,color:"rgba(10,219,250,.3)"}],!1),shadowColor:"rgba(10,219,250, 0.5)",shadowBlur:20}},data:goOutSchool2}]};
