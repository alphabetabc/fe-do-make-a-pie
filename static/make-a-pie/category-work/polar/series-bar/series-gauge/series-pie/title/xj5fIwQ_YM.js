let data=100,rate="♥♥♥♥♥";option={backgroundColor:"#00111b",title:[{text:`身心能量指数
`+rate,x:"center",top:"54%",textStyle:{color:"#be8c3c",fontSize:20,fontWeight:"100"}},{text:data,x:"center",top:"43%",textStyle:{fontSize:"90",color:"#be8c3c",fontFamily:"SimHei",fontStyle:"oblique",foontWeight:"500"}}],polar:{radius:["24%","30%"],center:["50%","50%"]},angleAxis:{max:100*360/270,show:!1,type:"value",startAngle:225},radiusAxis:{type:"category",show:!0,axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},series:[{type:"bar",data:[{value:data}],itemStyle:{color:function(){let e={type:"linear",x:0,y:.5,x2:1,y2:0,colorStops:[{offset:0,color:"#8ac4d4"},{offset:1,color:"#ec5e26"}]};return data>=0&&data<20?e.colorStops[1].color="#8ac4d4":data>=20&&data<40?(e.y=.3,e.x2=2):data>=40&&data<60?(e.y=.3,e.x2=1.5):data>=60&&data<80&&(e.y=.4,e.x2=1.1),e}},barGap:"-100%",coordinateSystem:"polar",roundCap:!0,cursor:"auto",z:2},{type:"bar",data:[{value:100}],itemStyle:{color:"#013f72"},barGap:"-100%",coordinateSystem:"polar",roundCap:!0,cursor:"auto",emphasis:{itemStyle:{color:"#013f72"}},z:1},{type:"pie",radius:["0%","22%"],hoverAnimation:!1,center:["50%","50%"],cursor:"auto",itemStyle:{normal:{labelLine:{show:!1},color:{type:"radial",x:.5,y:.5,r:.5,colorStops:[{offset:0,color:"#174869"},{offset:1,color:"#08385c"}]}}},data:[{value:100}],z:2},{type:"gauge",radius:"35%",startAngle:"225",endAngle:"-45",splitNumber:10,center:["50%","50%"],min:0,max:100,pointer:{show:!1},title:{show:!1},detail:{show:!1},data:[{value:100,name:""}],axisLine:{lineStyle:{width:20,color:[[0,"#5fa7ca"],[1,"#5fa7ca"]],opacity:0}},axisTick:{length:14,lineStyle:{color:"auto"}},splitLine:{show:!1},axisLabel:{show:!0,distance:18,lineHeight:-50,formatter:function(e){return e%100===0?e:""}}},{type:"pie",radius:["0%","40%"],hoverAnimation:!1,center:["50%","50%"],cursor:"auto",itemStyle:{color:{type:"radial",x:.5,y:.5,r:.5,colorStops:[{offset:0,color:"#002e50"},{offset:.9,color:"#002e50"},{offset:1,color:"#134568"}]}},data:[{value:100}],labelLine:{show:!1},z:-1},{type:"pie",radius:["0","40.4%"],hoverAnimation:!1,center:["50%","50%"],cursor:"auto",itemStyle:{color:"#146a90",shadowBlur:50,shadowColor:"#146a90"},data:[{value:100}],labelLine:{show:!1},emphasis:{itemStyle:{color:"#146a90"}},z:-2},{type:"pie",radius:["46.7%","47%"],hoverAnimation:!1,center:["50%","50%"],cursor:"auto",itemStyle:{color:"#07223b"},data:[{value:100}],labelLine:{show:!1},emphasis:{itemStyle:{color:"#07223b"}},z:-2},{type:"pie",radius:["47%","54%"],hoverAnimation:!1,center:["50%","50%"],cursor:"auto",itemStyle:{color:"#00182d"},data:[{value:100}],labelLine:{show:!1},emphasis:{itemStyle:{color:"#00182d"}},z:-2},{type:"pie",radius:["54%","60%"],hoverAnimation:!1,center:["50%","50%"],cursor:"auto",itemStyle:{color:"#011422"},data:[{value:100}],labelLine:{show:!1},emphasis:{itemStyle:{color:"#011422"}},z:-2}]};function numb(){data=Math.floor(Math.random()*100),data>=0&&data<20?rate="♡♡♡♡♡":data>=20&&data<40?rate="♥♡♡♡♡":data>=40&&data<60?rate="♥♥♡♡♡":data>=60&&data<80?rate="♥♥♥♡♡":data>=80&&data<=100?rate="♥♥♥♥♡":rate="♥♥♥♥♥",option.title[0].text=`身心能量指数
`+rate,option.title[1].text=data,option.series[0].data[0].value=data,myChart.setOption(option,!0)}setInterval(function(){numb()},1e3);
