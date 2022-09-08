let xLabel=["0","1220","1230","1240","1250","1300","1310","1320","1330"],res1=[2233,3233,4200,4180,2199,3233,4210,2180,2240,3412],res2=[3133,2133,3100,4280,3299,2133,4110,3280,4251,5321];option={backgroundColor:"#0e1c47",tooltip:{trigger:"axis",backgroundColor:"transparent",axisPointer:{lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(126,199,255,0)"},{offset:.5,color:"rgba(126,199,255,1)"},{offset:1,color:"rgba(126,199,255,0)"}],global:!1}}},formatter:e=>`<div >
    
        <div style="padding: 4px 8px 4px 14px;display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;position: relative;z-index: 1;">
            <div style="margin-bottom: 4px;width:100%;display:${e[0]?"flex":"none"};justify-content:space-between;align-items:center;color:#7ec7ff;">
                <span style="font-size:14px;color:#7ec7ff;">${e[0]?e[0].seriesName:""}</span>：
                <span style="font-size:14px;color:#7ec7ff;;">${e[0]?e[0].data:""}</span>
            </div>
            <div style="width:100%;height:100%;display:${e[1]?"flex":"none"};justify-content:space-between;align-items:center;color:rgb(255,128,0);padding-left:4px;">
                <span style="font-size:14px;color:rgb(255,128,0);">${e[1]?e[1].seriesName:""}</span>：
                <span style="font-size:14px;color:rgb(255,128,0);">${e[1]?e[1].data:""}</span>
            </div>
        </div>
    </div>`},legend:{align:"left",right:"10%",top:"10%",type:"plain",textStyle:{color:"#ffffff",fontSize:16},icon:"rect",itemGap:25,itemWidth:18,data:[{name:"政务外网区"},{name:"互联网区"}]},grid:{top:"15%",left:"10%",right:"10%",bottom:"15%"},xAxis:[{type:"category",boundaryGap:!1,axisLine:{show:!0,lineStyle:{color:"#rgb(77,83,141)",width:4}},axisLabel:{textStyle:{color:"#7ec7ff",padding:16,fontSize:14},formatter:function(e){return e}},splitLine:{show:!0,lineStyle:{color:"#192a44"}},axisTick:{show:!1},data:xLabel}],yAxis:[{nameTextStyle:{color:"#7ec7ff",fontSize:16,padding:10},splitLine:{show:!0,lineStyle:{color:"#192a44"}},axisLine:{show:!0,lineStyle:{color:"#rgb(77,83,141)",width:4}},axisLabel:{show:!0,textStyle:{color:"#7ec7ff",padding:8},formatter:function(e){var t=[];return e==1e3?t.push("1000"):e==2e3?t.push("2000"):e==3e3?t.push("3000"):e==4e3?t.push("4000"):e==5e3?t.push("5000"):e==0&&t.push("0"),t}},axisTick:{show:!1}}],series:[{name:"政务外网区",type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:0,lineStyle:{normal:{width:2,color:"rgba(25,163,223,1)"}},itemStyle:{color:"rgba(25,163,223,1)"},tooltip:{show:!0},data:res1},{name:"互联网区",type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:0,lineStyle:{normal:{width:2,color:"rgb(255,128,0)"}},itemStyle:{color:"rgb(255,128,0)"},tooltip:{show:!0},data:res2}]};let len=0;setInterval(()=>{len===xLabel.length&&(len=0),myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:len}),len++},1e3);
