let getData=[{value:4360,name:"新疆金风",itemStyle:{color:"#fff"}},{value:20588,name:"江阴远景",itemStyle:{color:"#fff"}},{value:2118,name:"国电龙源",itemStyle:{color:"#fff"}},{value:3512,name:"山东中车",itemStyle:{color:"#fff"}},{value:6006,name:"浙江运达",itemStyle:{color:"#fff"}}];var calcData=[{value:2541,name:"三一重能"},{value:4336,name:"东方电气"},{value:1206,name:"中车株洲"}];let forceUseData=new Array(calcData.length).fill();(function(){let t={value:calcData.map(a=>a.value).reduce((a,l)=>(a+=l,a)),name:"合计",itemStyle:{color:"#fff"}};getData.splice(0,0,t),console.log(getData)})(),option={grid:[{left:"60%"}],color:["#f79646","#fd79aa","#feb63b","#987292"],backgroundColor:"#fff",title:{text:"小清新复合条饼图",x:"center",y:"5%",textStyle:{fontSize:30}},tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},legend:{show:!0,y:"bottom",data:getData.map(e=>e.name)},xAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1,margin:20},data:["bar"]},yAxis:{type:"value",show:!1},series:[{name:"外圈",type:"pie",radius:["0%","50%"],center:["35%","center"],startAngle:35,label:{normal:{show:!0,position:"inside",color:"#fff",formatter:e=>e.value}},itemStyle:{normal:{borderWidth:5,borderColor:"#fff"}},labelLine:{normal:{show:!1}},data:getData.map(e=>({value:e.value,name:e.name}))},{data:[{value:calcData[0].value,name:calcData[0].name}],type:"bar",stack:"one",barWidth:100,itemStyle:{barWidth:30},label:{show:!0,position:"right",distance:20,color:"#000",formatter:e=>e.value}},{data:[{value:calcData[1].value,name:calcData[1].name}],type:"bar",stack:"one",barWidth:100,itemStyle:{barWidth:30},label:{show:!0,position:"right",distance:20,color:"#000",formatter:e=>e.value}},{data:[{value:calcData[2].value,name:calcData[2].name}],type:"bar",stack:"one",barWidth:100,itemStyle:{barWidth:30},label:{show:!0,position:"right",distance:20,color:"#000",formatter:e=>e.value}}]},myChart.setOption(option),function(){var e=myChart.getZr(),t;t=new echarts.graphic.Line({shape:{x1:e.getWidth()/1.8,y1:e.getHeight()/2.55,x2:e.getWidth()/1.55,y2:e.getHeight()/3},style:{stroke:"#dbdbdb",lineWidth:5}}),line2=new echarts.graphic.Line({shape:{x1:e.getWidth()/1.8,y1:e.getHeight()/1.65,x2:e.getWidth()/1.55,y2:e.getHeight()/1.5},style:{stroke:"#dbdbdb",lineWidth:5}}),e.add(t),e.add(line2)}();
