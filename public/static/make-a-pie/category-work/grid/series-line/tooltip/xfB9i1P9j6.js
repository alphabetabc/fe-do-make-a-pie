let color=["#109ce5"],xAxisData=["1","2","3","4","5","6","7","8"],yAxisData1=[100,138,350,173,180,150,180,230];const hexToRgba=(o,t)=>{let e="";return/^#[\da-f]{6}$/i.test(o)&&(e=`rgba(${parseInt("0x"+o.slice(1,3))},${parseInt("0x"+o.slice(3,5))},${parseInt("0x"+o.slice(5,7))},${t})`),e};option={color,tooltip:{trigger:"axis",formatter:function(o){let t="";return o.forEach(e=>{t+=`<div style="color: #666;font-size: 14px;line-height: 24px">
                <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color[e.componentIndex]};"></span>
                ${e.seriesName}2020.${e.name}  
                <span style="color:${color[e.componentIndex]};font-weight:700;font-size: 18px;margin-left:5px">${e.value}</span>
                万元`}),t},extraCssText:"background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;",axisPointer:{type:"shadow",shadowStyle:{color:"#103a67",shadowColor:"#103a67",shadowBlur:5}}},grid:{top:80,left:0,right:0,bottom:30,containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,axisLabel:{formatter:"2020-{value}",textStyle:{color:"rgba(187, 209, 238, 1)"}},axisLine:{lineStyle:{color:"#2d5690"}},data:xAxisData}],yAxis:[{type:"value",axisLabel:{textStyle:{color:"rgba(187, 209, 238, 1)"}},splitLine:{show:!1,lineStyle:{type:"dashed",color:"#E9E9E9"}},axisLine:{lineStyle:{color:"#2d5690"}},axisTick:{show:!1}}],series:[{type:"line",smooth:!0,symbolSize:8,zlevel:3,lineStyle:{normal:{color:color[0],shadowBlur:3,shadowColor:hexToRgba(color[0],.5),shadowOffsetY:8}},symbol:"circle",areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:hexToRgba(color[0],.3)},{offset:1,color:hexToRgba(color[0],.1)}],!1),shadowColor:hexToRgba(color[0],.1),shadowBlur:10}},data:yAxisData1}]};