var getzszy=["专业1","专业2","专业3","专业4","专业5","专业6","专业7","专业8","专业9","专业10","专业11"],getzswcl=[101,100,100,98.65,98.3,97.55,92.63,90.55,89.98,88.72,85.72],getzswcl2=[101,100,100,98.65,98.3,97.55,92.63,90.55,89.98,88.72,85.72],getzswclzd=[];for(let e=0;e<getzswcl.length;e++)getzswcl[e]>100&&(getzswcl[e]=100),getzswclzd.push(100);option={grid:{left:"170",right:"120",bottom:"3%",top:"3%"},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(e){return getzszy[e[0].dataIndex]+"<br>招生完成率: "+getzswcl2[e[0].dataIndex]+"%"}},xAxis:{show:!1,type:"value"},yAxis:[{type:"category",inverse:!0,axisLabel:{show:!0,textStyle:{color:"#666666",fontSize:"13"}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},data:getzszy},{type:"category",inverse:!0,axisTick:"none",axisLine:"none",show:!0,axisLabel:{textStyle:{color:"#333333",fontSize:"13"},formatter:"{value}%"},data:getzswcl2}],dataZoom:[{type:"slider",show:!0,yAxisIndex:[0,1],right:"20",width:"20",startValue:0,endValue:8,zoomLock:!0}],series:[{name:"值",type:"bar",zlevel:1,itemStyle:{normal:{barBorderRadius:5,color:"#4E7BFE"}},barWidth:10,data:getzswcl},{name:"背景",type:"bar",barWidth:10,barGap:"-100%",data:getzswclzd,itemStyle:{normal:{color:"rgba(103,150,253,0.3)",barBorderRadius:5}}}]};