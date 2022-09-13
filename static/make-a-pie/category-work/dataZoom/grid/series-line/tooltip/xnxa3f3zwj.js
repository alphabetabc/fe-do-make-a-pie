let list=[{CJSJ:"2020-02",PGCODE:1,PGZT:"良好"},{CJSJ:"2020-03",PGCODE:1,PGZT:"良好"},{CJSJ:"2020-04",PGCODE:1,PGZT:"良好"},{CJSJ:"2020-05",PGCODE:2,PGZT:"一般"},{CJSJ:"2020-06",PGCODE:1,PGZT:"良好"}],colorList=[{name:"差",color:"#61ff00"},{name:"一般",color:"#ffe500"},{name:"良好",color:"#de8d0f"},{name:"好",color:"#bc2016"}],xAxisData=[],seriesData=[],colorAry=[],LinearGradientAry=[];switch(list.map((o,e)=>{xAxisData.push(o.CJSJ),seriesData.push(o.PGCODE),colorAry.push(colorList[o.PGCODE].color)}),colorAry.length){case 1:LinearGradientAry=[{offset:0,color:colorAry[0]},{offset:1,color:colorAry[0]}];break;case 2:LinearGradientAry=[{offset:0,color:colorAry[0]},{offset:1,color:colorAry[1]}];break;default:let o=1/(colorAry.length-1);colorAry.map((e,t)=>{let r={};t==colorAry.length-2?r={offset:1,color:e}:r={offset:t*o,color:e},LinearGradientAry.push(r)});break}let tooltip=o=>{let e=o[0],t="";switch(o[0].value){case 3:t="差";break;case 2:t="一般";break;case 1:t="良好";break;case 0:t="好";break}return t=`${e.axisValueLabel}</br>现状 : ${t}`,t},func=o=>{let e=[];switch(o){case 3:e.push("差");break;case 2:e.push("一般");break;case 1:e.push("良好");break;case 0:e.push("好");break}return e};option={backgroundColor:"#333",tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(0, 255, 233,0)"},{offset:.5,color:"rgba(255, 255, 255,1)"},{offset:1,color:"rgba(0, 255, 233,0)"}],global:!1}}},formatter:tooltip},grid:{top:30,right:0,left:50,bottom:30},dataZoom:[{type:"inside",show:!0,start:0,end:100},{type:"inside",start:10,end:100}],xAxis:{type:"category",data:xAxisData,axisLine:{lineStyle:{color:"#105578",width:2}},axisLabel:{margin:10,color:"rgb(215,234,245)",textStyle:{fontSize:16}}},yAxis:{type:"value",name:"",nameTextStyle:{fontSize:12,color:"rgba(53,107,144,1)"},axisLabel:{formatter:func},axisLine:{show:!1,lineStyle:{color:"#0f5378",width:2}},splitLine:{lineStyle:{color:"rgba(15,83,122,0.2)"}}},series:[{data:seriesData,type:"line",barWidth:10,smooth:!0,symbol:"none",itemStyle:{normal:{color:colorAry[colorAry.length-1].color,lineStyle:{width:2,type:"solid",color:new echarts.graphic.LinearGradient(0,0,1,0,LinearGradientAry)}},emphasis:{color:colorAry[colorAry.length-1].color,lineStyle:{width:2,type:"dotted",color:new echarts.graphic.LinearGradient(0,0,1,0,LinearGradientAry)}}}}]};
