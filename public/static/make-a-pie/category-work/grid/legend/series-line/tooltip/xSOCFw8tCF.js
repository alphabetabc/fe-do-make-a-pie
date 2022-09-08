let bgColor="#040811",color=["#0090FF","#36CE9E","#EE8931","#FF515A","#8B5CFF","#00CA69"],echartData=[{name:"1月",value1:100,value2:233,value3:133},{name:"2月",value1:138,value2:233,value3:133},{name:"3月",value1:350,value2:200,value3:100},{name:"4月",value1:173,value2:180,value3:80},{name:"5月",value1:180,value2:199,value3:99},{name:"6月",value1:150,value2:233,value3:133},{name:"7月",value1:180,value2:210,value3:110},{name:"8月",value1:230,value2:180,value3:80}],legendItem=["出厂","生产","库存"],xAxisData=echartData.map(e=>e.name),yAxisData1=echartData.map(e=>e.value1),yAxisData2=echartData.map(e=>e.value2),yAxisData3=echartData.map(e=>e.value3);const hexToRgba=(e,l)=>{let a="";return/^#[\da-f]{6}$/i.test(e)&&(a=`rgba(${parseInt("0x"+e.slice(1,3))},${parseInt("0x"+e.slice(3,5))},${parseInt("0x"+e.slice(5,7))},${l})`),a};option={backgroundColor:bgColor,color,legend:{center:!0,top:10,data:legendItem,textStyle:{color:"#00DEFF"}},tooltip:{trigger:"axis",formatter:function(e){let l="";return e.forEach(a=>{console.log(a),l+=`<div style="color: #666;font-size: 14px;line-height: 24px">
                <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color[a.componentIndex]};"></span>
                ${a.seriesName}.${a.name}
                <span style="color:${color[a.componentIndex]};font-weight:700;font-size: 18px">${a.value}</span>
                万元`}),l},extraCssText:"background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;"},grid:{top:100,containLabel:!0},xAxis:[{type:"category",axisTick:{show:!1},axisLine:{show:!0,lineStyle:{type:"dashed",color:"rgba(255, 255, 255,0.5)"}},axisLabel:{inside:!1,textStyle:{color:"rgba(255, 255, 255,0.7)",fontWeight:"normal",fontSize:"14",lineHeight:22}},data:xAxisData}],yAxis:[{type:"value",name:"(t)",axisLabel:{textStyle:{color:"rgba(255, 255, 255,0.7)"}},nameTextStyle:{color:"rgba(255, 255, 255,0.7)",fontSize:12,lineHeight:40,padding:[0,0,0,-20]},splitLine:{show:!1,lineStyle:{type:"dashed",color:"rgba(255, 255, 255,0.5)"}},axisLine:{show:!0,lineStyle:{type:"dashed",color:"rgba(255, 255, 255,0.5)"}},axisTick:{show:!1}}],series:[{name:legendItem[0],type:"line",smooth:!0,symbolSize:8,zlevel:3,lineStyle:{normal:{color:color[0],shadowBlur:3,shadowColor:hexToRgba(color[0],.5),shadowOffsetY:8}},data:yAxisData1},{name:legendItem[1],type:"line",smooth:!0,symbolSize:8,zlevel:3,lineStyle:{normal:{color:color[1],shadowBlur:3,shadowColor:hexToRgba(color[1],.5),shadowOffsetY:8}},data:yAxisData2},{name:legendItem[2],type:"line",smooth:!0,symbolSize:8,zlevel:3,lineStyle:{normal:{color:color[2],shadowBlur:3,shadowColor:hexToRgba(color[2],.5),shadowOffsetY:8}},data:yAxisData3}]};