var districtList=["听力","口语","阅读","写作"],bN=[12e3,2e4,15e3,8e3],lN=[6e3,8008,12e3,2e3];option={backgroundColor:"#fff",legend:{x:"center",y:"bottom",orient:"horizontal",textStyle:{fontSize:12,lineHeight:45,color:"#666"},selectedMode:!1,data:["个人","整体"]},xAxis:{type:"category",data:districtList,axisLine:{lineStyle:{color:"#666"}}},yAxis:{type:"value",axisLine:{lineStyle:{color:"#666"}}},grid:{top:"5%",left:"5%",right:"5%",bottom:"10%"},series:[{name:"个人",data:lN,type:"bar",color:"#1185fd",showBackground:!1},{name:"整体",data:bN,type:"bar",color:"#ff9191",showBackground:!1}]};