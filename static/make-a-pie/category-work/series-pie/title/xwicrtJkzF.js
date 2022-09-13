for(var dotData=[],colors=["#d41452","rgba(1,1,1,.01)"],i=0;i<360;i++){var color=colors[i%2];dotData.push({value:1,itemStyle:{normal:{color}}})}var option={title:{text:`120

人员统计`,x:"center",y:"center",textStyle:{color:"white",fontSize:40}},backgroundColor:"#f6f6f6",series:[{type:"pie",data:[100],radius:"55%",label:{show:!1},itemStyle:{color:"#d41452"}},{type:"pie",data:dotData,radius:["60%","61%"],label:{show:!1}}]};
