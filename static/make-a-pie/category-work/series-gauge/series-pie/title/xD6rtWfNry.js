var top2URL="/asset/get/s/data-1604298243112-wVMFKjFRU.png",top1URL="/asset/get/s/data-1604298213716-BI27ZxE4S.png",imgURL="/asset/get/s/data-1604297660027-BIglMnvCQ.png",piePatternImg=new Image;piePatternImg.src=imgURL;var top1Img=new Image;top1Img.src=top1URL;var top2Img=new Image;top2Img.src=top2URL;for(var i_data=7,deg=360/i_data,angdeg=2*Math.PI/360*deg,r=1,series_data=[],i=0;i<i_data;i++){var ideg=i*deg,iangdeg=i*angdeg-90,x=r*Math.cos(iangdeg),y=r*Math.sin(iangdeg);console.log("====================",x,y);var x1=0,y1=0,x2=0,y2=0;x>0?x2=x:x1=Math.abs(x),y>0?y2=y:y1=Math.abs(y),console.log(x1,y1,x2,y2),series_data.push({stack:"fenshu",type:"bar",roundCap:!0,barWidth:40,label:{show:!0,position:"inside",formatter:e=>"aaa"},data:[{value:i_data,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(x1,y1,x2,y2,[{offset:0,color:"rgba(101,15,36,0)"},{offset:.05,color:"rgba(101,15,36,0)"},{offset:1,color:"rgba(116,27,49,1)"}])}}},{value:i_data,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(x1,y1,x2,y2,[{offset:0,color:"rgba(14,63,95,0)"},{offset:.05,color:"rgba(14,63,95,0)"},{offset:1,color:"rgba(20,73,107,1)"}])}}}],coordinateSystem:"polar",name:i+"red",label:{show:!0}})}series_data.push({type:"pie",zlevel:20,silent:!0,radius:["45.9%","46%"],hoverAnimation:!1,color:"#fff",data:[1],labelLine:{normal:{show:!1}},itemStyle:{normal:{color:"rgba(13,243,171,0.1)",borderColor:"rgba(13,243,171,0.01)"}}}),series_data.push({type:"pie",zlevel:20,silent:!0,radius:["44.8%","44.9%"],hoverAnimation:!1,color:"#fff",data:[1],labelLine:{normal:{show:!1}},itemStyle:{normal:{color:"rgba(13,243,171,0.3)",borderColor:"rgba(13,243,171,0.3)"}}}),series_data.push({type:"pie",zlevel:20,silent:!0,radius:["43.7%","43.8%"],hoverAnimation:!1,color:"#fff",data:[1],labelLine:{normal:{show:!1}},itemStyle:{normal:{color:"rgba(13,243,171,0.5)",borderColor:"rgba(13,243,171,0.5)"}}}),series_data.push({type:"pie",zlevel:20,silent:!0,radius:["42.5%","42.7%"],hoverAnimation:!1,color:"#fff",data:[1],labelLine:{normal:{show:!1}},itemStyle:{normal:{color:"rgba(13,243,171,0.8)",borderColor:"rgba(13,243,171,0.8)"}}}),series_data.push({type:"pie",zlevel:20,silent:!0,radius:["41%","41.5%"],hoverAnimation:!1,color:"#fff",data:[1],labelLine:{normal:{show:!1}},itemStyle:{normal:{color:"rgba(13,243,171,1)",borderColor:"rgba(13,243,171,1)"}}}),series_data.push({type:"pie",zlevel:20,silent:!0,radius:["38%","40%"],hoverAnimation:!1,color:"#fff",data:[1],labelLine:{normal:{show:!1}},itemStyle:{normal:{color:"rgba(13,243,171,1)",borderColor:"rgba(13,243,171,0.1)",borderWidth:20}}}),series_data.push({name:"中间环形图",type:"pie",radius:["0%","30%"],avoidLabelOverlap:!1,hoverAnimation:!1,itemStyle:{normal:{color:"rgba(13,243,171,0.5)",borderColor:"rgba(13,243,171,1)"}},label:{normal:{show:!0,position:"inside",rotate:!0},emphasis:{show:!1,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:[{value:5,name:"直接访问"},{value:5,name:"邮件营销"},{value:5,name:"联盟广告"},{value:5,name:"视频广告"},{value:5,name:"搜索引擎"},{value:5,name:"直接访问"},{value:5,name:"邮件营销"},{value:5,name:"联盟广告"},{value:5,name:"视频广告"},{value:5,name:"搜索引擎"},{value:5,name:"直接访问"},{value:5,name:"邮件营销"}]}),option={backgroundColor:"rgba(0,46,32,1)",angleAxis:{max:i_data*i_data,show:!0,axisLabel:{show:!0},axisTick:{show:!0}},radiusAxis:{type:"category",show:!0,axisLabel:{show:!0},axisLine:{show:!0},axisTick:{show:!0}},polar:{radius:["70%","100%"],center:["50%","50%"]},series:series_data};function _pie1(){let e=[];for(var a=0;a<8;a++)e.push({name:(a+1).toString(),value:20,itemStyle:{normal:{color:"rgba(88,142,197,0.4)",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}});return e}function _pie2(){let e=[];for(var a=0;a<8;a++)a%2===0?e.push({name:(a+1).toString(),value:25,itemStyle:{normal:{color:"rgba(88,142,197,0.5)",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}}):e.push({name:(a+1).toString(),value:20,itemStyle:{normal:{color:"rgba(0,0,0,1)",borderWidth:0,borderColor:"rgba(0,0,0,1)"}}});return e}var timer,pie_index=11;function doing(){pie_index<6&&(pie_index=11);let e=myChart.getOption();console.log("pie_index:",pie_index),console.log("111111",e),console.log("111111",e.series[pie_index]),e.angleAxis[0].startAngle=e.angleAxis[0].startAngle+1;for(var a=11;a>6;a--)a==pie_index?e.series[pie_index].itemStyle.opacity=.5:e.series[a].itemStyle.opacity=1;myChart.setOption(e),pie_index-=1}function startTimer(){}setTimeout(startTimer,500);