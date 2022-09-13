let xLabel=["9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"],online=["180","203","198","190","198","201","190","198","190"],sum=["200","210","215","204","210","209","210","215","204"];option={title:{text:"设备数量(单位:台)",top:10,right:"4%",bottom:"2%",textStyle:{color:"#0099FF",fontSize:12,fontFamily:"Microsoft YaHei"}},grid:{top:50,left:"6%",right:"5%",bottom:"8%",containLabel:!0},tooltip:{trigger:"axis",backgroundColor:"transparent",axisPointer:{lineStyle:{type:"solid",width:3,color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(126,199,255,0)"},{offset:.5,color:"rgba(126,199,255,1)"},{offset:1,color:"rgba(126,199,255,0)"}],global:!1}}},formatter:e=>`<div style="width: 100px;
 height: 50px;;color:#fff;position: relative;">
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
        </div>
    </div>`},xAxis:[{type:"category",boundaryGap:!1,axisLine:{lineStyle:{color:"#0099FF"}},axisLabel:{textStyle:{show:!0,color:"#DBDBDB",padding:16,fontSize:14},formatter:function(e){return e}},splitLine:{show:!0,lineStyle:{color:"#192a44"}},axisTick:{show:!0,inside:!0},data:xLabel}],yAxis:[{nameTextStyle:{color:"#7ec7ff",fontSize:16,padding:10},min:0,splitLine:{show:!1,lineStyle:{color:"#2AF4F7"}},axisLine:{show:!0,lineStyle:{color:"#0099FF"}},axisLabel:{show:!0,textStyle:{color:"#DBDBDB",padding:16},formatter:function(e){return e}},axisTick:{show:!1}}],series:[{name:"在线：",type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:8,smooth:!0,lineStyle:{normal:{width:1,color:"rgba(10,219,250,1)"}},itemStyle:{color:"rgba(25,163,223,1)",borderColor:"#646ace",borderWidth:0},tooltip:{show:!0},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(50,228,228,0.3)"},{offset:1,color:"rgba(50,228,228,0)"}],!1),shadowColor:"rgba(25,163,223,0.5)",shadowBlur:20}},data:online},{name:"总数：",type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:8,smooth:!0,lineStyle:{normal:{width:1,color:"#19a3df"},borderColor:"rgba(0,0,0,.4)"},itemStyle:{color:"rgba(10,219,250,1)",borderColor:"#646ace",borderWidth:0},tooltip:{show:!0},areaStyle:{normal:{stack:!0,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(10,810,224,0.1)"},{offset:1,color:"rgba(10,810,224,0)"}],!1),shadowColor:"rgba(10,219,250, 0.5)",shadowBlur:20}},data:sum}]};let len=0;setInterval(()=>{len===xLabel.length&&(len=0),myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:len}),len++},1e3);
