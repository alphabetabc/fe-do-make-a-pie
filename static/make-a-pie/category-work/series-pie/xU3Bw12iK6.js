var backgroundColor="#021547",fontColor="#B3B3B3",lineColor="rgba(50, 68, 73, 1)",color4=["#7EE1DE","#4F6EE0","#7870C5","#2F8973","#27AE60","#4FB9FF","#DAB772"],color6=["#59E1FF","#0B1B27","#193A4D","#0B1B27"],upImg="/asset/get/s/data-1603518592129-n8znKjxq4.png",downImg="/asset/get/s/data-1603518596377-RnJ6_xbsf.png",result={delayTotalNum:1e3,delayAveTime:50,pieData:[36,28,15,17,9],prepieData:[40,45,13,11,9],time:["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],delayNum:[70,60,20,15,12,20,40,180,190,230,320,270,330,200,157,408,500,530,610,600,567,300,204,100],delayTime:[170,160,120,115,112,120,140,1180,1190,1230,1320,1270,1330,1200,1157,1408,1500,1530,1610,1600,1567,1300,1204,1100]},val=result.pieData[0],timeList=deepCopy(result.time);timeList.push("00");function deepCopy(a){if(a instanceof Array){for(var e=[],r=0;r<a.length;++r)e[r]=deepCopy(a[r]);return e}else if(a instanceof Object){var e={};for(var r in a)e[r]=deepCopy(a[r]);return e}else return a}option={backgroundColor,color:color6,textStyle:{fontSize:14,color:"#3FDBFF",fontFamily:"苹方-简"},grid:{left:"5%",right:"5%",top:"5",bottom:"5",containLabel:!1},series:[{type:"pie",radius:[50,60],startAngle:360,label:{show:!0,position:"center",formatter:function(a){var e=Number(val)-Number(result.prepieData[0]);return"{normal|"+val+`%}
{level|}
`+(e>0?"{upImg|}{up|"+e+"%}":e<0?"{downImg|}{down|"+Math.abs(e)+"%}":"{evelx|-}")},rich:{normal:{fontSize:18,height:25},up:{color:"#FFAB3F",height:25,padding:[-5,0,0,2]},down:{height:25,padding:[-5,0,0,2]},evelx:{height:25,padding:[-5,0,0,2]},level:{borderColor:"rgba(58, 153, 175, 1)",borderWidth:.35,width:40,height:.7},upImg:{backgroundColor:{image:upImg},height:15,width:10,borderWidth:0,padding:[-5,0,5,0]},downImg:{backgroundColor:{image:downImg},height:15,width:10,borderWidth:0,padding:[-5,0,5,0]}}},labelLine:{show:!1},hoverAnimation:!1,data:[{value:val,itemStyle:{color:color6[0]}},{value:100-Number(val),itemStyle:{color:color6[1]}}]},{type:"pie",radius:[37,47],startAngle:360,label:{show:!1},labelLine:{show:!1},hoverAnimation:!1,data:[{value:result.prepieData[0],itemStyle:{color:color6[2]}},{value:100-Number(result.prepieData[0]),itemStyle:{color:color6[3]}}]}]};