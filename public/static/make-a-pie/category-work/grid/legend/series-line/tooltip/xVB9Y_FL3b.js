let xLabel=["0","14:20","14:25","14:30","14:35","14:40","14:45","14:50","14:55","13:00"],res1=[2,2,2,2,2,1,1,1,2,2],res2=[11,17,10,12,11,20,10,15,13,11],res3=[12,20,18,16,17,18,20,9,11,10],res4=[32,18,18,40,30,35,30,36,31,33];option={backgroundColor:"#0e1c47",tooltip:{trigger:"axis",backgroundColor:"transparent",axisPointer:{lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(126,199,255,0)"},{offset:.5,color:"rgba(126,199,255,1)"},{offset:1,color:"rgba(126,199,255,0)"}],global:!1}}},formatter:e=>`<div >
    
        <div style="padding: 4px 8px 4px 14px;display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;position: relative;z-index: 1;">
            <div style="margin-bottom: 4px;width:100%;display:${e[0]?"flex":"none"};color:rgb(243,58,57)">
                <span style="font-size:14px;color:rgb(243,58,57);">${e[0]?e[0].seriesName:""}</span>：
                <span style="font-size:14px;color:rgb(243,58,57);">${e[0]?e[0].data:""}</span>
            </div>
            <div style="width:100%;height:100%;display:${e[1]?"flex":"none"};color:rgb(255,128,0);">
                <span style="font-size:14px;color:rgb(255,128,0);">${e[1]?e[1].seriesName:""}</span>：
                <span style="font-size:14px;color:rgb(255,128,0);">${e[1]?e[1].data:""}</span>
            </div>
            <div style="width:100%;height:100%;display:${e[2]?"flex":"none"};color:rgb(252,210,84);">
                <span style="font-size:14px;color:rgb(252,210,84);">${e[2]?e[2].seriesName:""}</span>：
                <span style="font-size:14px;color:rgb(252,210,84);">${e[2]?e[2].data:""}</span>
            </div>
            <div style="width:100%;height:100%;display:${e[3]?"flex":"none"};color:rgba(25,163,223,1);">
                <span style="font-size:14px;color:rgba(25,163,223,1);">${e[3]?e[3].seriesName:""}</span>：
                <span style="font-size:14px;color:rgba(25,163,223,1);">${e[3]?e[3].data:""}</span>
            </div>
        </div>
    </div>`},legend:{align:"left",right:"10%",top:"10%",type:"plain",textStyle:{color:"#ffffff",fontSize:16},icon:"rect",itemGap:25,itemWidth:18,data:[{name:"致命"},{name:"严重"},{name:"一般"},{name:"警告"}]},grid:{top:"15%",left:"10%",right:"10%",bottom:"15%"},xAxis:[{type:"category",boundaryGap:!1,axisLine:{show:!0,lineStyle:{color:"#rgb(77,83,141)",width:4}},axisLabel:{textStyle:{color:"#7ec7ff",padding:16,fontSize:14},formatter:function(e){return e}},splitLine:{show:!0,lineStyle:{color:"#192a44"}},axisTick:{show:!1},data:xLabel}],yAxis:[{min:0,max:50,interval:10,type:"value",axisLabel:{textStyle:{color:"#ffffff"},formatter:function(e,t){return e>=10?e=e/10+"0":e<10,e}},nameTextStyle:{color:"#7ec7ff",fontSize:16,padding:10},splitLine:{show:!0,lineStyle:{color:"#192a44"}},axisLine:{show:!0,lineStyle:{color:"#rgb(77,83,141)",width:4}},axisTick:{show:!1}}],series:[{name:"致命",type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:0,lineStyle:{normal:{width:2,color:"rgb(243,58,57)"}},itemStyle:{color:"rgb(2243,58,57)"},tooltip:{show:!0},data:res1},{name:"严重",type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:0,lineStyle:{normal:{width:2,color:"rgb(255,128,0)"}},itemStyle:{color:"rgb(255,128,0)"},tooltip:{show:!0},data:res2},{name:"一般",type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:0,lineStyle:{normal:{width:2,color:"rgb(252,210,84)"}},itemStyle:{color:"rgb(252,210,84)"},tooltip:{show:!0},data:res3},{name:"警告",type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:0,lineStyle:{normal:{width:2,color:"rgba(25,163,223,1)"}},itemStyle:{color:"rgba(25,163,223,1)"},tooltip:{show:!0},data:res4}]};let len=0;setInterval(()=>{len===xLabel.length&&(len=0),myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:len}),len++},1e3);
