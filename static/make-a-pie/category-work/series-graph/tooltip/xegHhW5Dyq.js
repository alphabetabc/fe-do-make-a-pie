dataLink=[{source:"引发因素",target:"人为因素",value:66},{source:"引发因素",target:"自然因素",value:88},{source:"自然因素",target:"用户分析",value:12},{source:"自然因素",target:"话题分析",value:18},{source:"自然因素",target:"评论分析",value:50},{source:"人为因素",target:"图书分析",value:23},{source:"人为因素",target:"借阅分析",value:19},{source:"人为因素",target:"借阅排行",value:6},{source:"人为因素",target:"图书收录",value:8}],dataSerise=[{name:"引发因素",symbolSize:120,draggable:!0,value:0,category:0,itemStyle:{normal:{borderColor:"#04f2a7",borderWidth:4,shadowBlur:10,shadowColor:"#04f2a7",color:"#001c43"}}}];for(var i=0;i<dataLink.length;i++)dataChild={name:"",symbolSize:0,value:0,category:0,itemStyle:{normal:{borderColor:"#82dffe",borderWidth:4,shadowBlur:10,shadowColor:"#04f2a7",color:"#001c43"}}},dataChild.value=dataLink[i].value,dataChild.name=dataLink[i].target,dataLink[i].source==="引发因素"?(dataSerise[0].value+=dataLink[i].value,dataChild.symbolSize=100,dataChild.category=1,dataChild.itemStyle.normal.borderColor="#5BD1FF"):(dataLink[i].source==="人为因素"||dataLink[i].source==="自然因素")&&(dataChild.symbolSize=80,dataChild.category=2,dataChild.itemStyle.normal.borderColor="#b457ff"),dataSerise.push(dataChild);option={backgroundColor:"#black",tooltip:{trigger:"item",formatter:a=>a.name+":"+a.data.value},animationDurationUpdate:1500,animationEasingUpdate:"quinticInOut",color:["#83e0ff","#45f5ce","#b158ff"],series:[{type:"graph",layout:"force",force:{repulsion:1e3,edgeLength:50},roam:!0,label:{normal:{show:!0}},data:dataSerise,links:dataLink,lineStyle:{normal:{opacity:.9,width:5,curveness:0}},categories:[{name:"0"},{name:"1"},{name:"2"}]}]};
