option={backgroundColor:{type:"radial",x:.5,y:.4,r:.3,colorStops:[{offset:0,color:"#895355"},{offset:.2,color:"#593640"},{offset:1,color:"#39273d"}],globalCoord:!1},tooltip:{trigger:"item",backgroundColor:"rgba(0,0,250,0.2)"},legend:{show:!0,bottom:5,left:16,itemWidth:14,itemHeight:10,itemGap:48,width:680,height:80,align:"auto",data:["06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00"],textStyle:{color:"#fff",fontSize:14},selectedMode:!0,orient:"horizontal"},textStyle:{color:"#4ac7f5",fontSize:16},visualMap:{min:0,max:100,calculable:!0,itemWidth:14,itemHeight:165,align:"left",color:["#3f4199","#5d54b5","#a0589e","#e76281","#fe846d","#feda5b"],right:0,bottom:0,textStyle:{color:"#4ac7f5",fontSize:14}},radar:{center:["500","350"],radius:215,startAngle:90,nameGap:16,splitNumber:4,shape:"polygon",axisLine:{show:!0,lineStyle:{color:"#564d8e",width:1}},splitLine:{show:!0,lineStyle:{color:"#4b476f",width:1}},splitArea:{show:!0,areaStyle:{color:"#2c2949"}},indicator:[{text:"超速",max:100},{text:"变道 ",max:100},{text:"起步不关门",max:100},{text:"未停稳开门",max:100},{text:"急加速",max:100},{text:"急减速",max:100}]},series:{name:"违规占比雷达图",type:"radar",symbol:"none",areaStyle:{emphasis:{opacity:.3}},lineStyle:{normal:{width:.8}},data:[{name:"06:00",value:[100,80,30,30,40,80]},{name:"07:00",value:[95,75,35,35,45,75]},{name:"08:00",value:[90,72,40,40,50,70]},{name:"09:00",value:[85,70,45,45,55,65]},{name:"10:00",value:[80,68,50,50,60,60]},{name:"11:00",value:[75,65,55,55,65,55]},{name:"12:00",value:[70,62,60,60,70,50]},{name:"13:00",value:[65,60,65,65,75,45]},{name:"14:00",value:[60,58,70,70,80,40]},{name:"15:00",value:[55,55,75,75,85,35]},{name:"16:00",value:[50,52,80,80,90,30]},{name:"17:00",value:[45,50,85,85,95,25]},{name:"18:00",value:[40,48,90,90,100,20]},{name:"19:00",value:[35,45,95,93,95,15]}]}};