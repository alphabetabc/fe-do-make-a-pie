var ydata=[{name:"国家学生体质健康标准",value:75},{name:"音乐成绩",value:86},{name:"美术成绩",value:73}],fontColor="#fff",totalScore=100,colors=["#E38DFF","#C451EA","#FEFF97","#E7E906","#FFAAAA","#FF5252"],option={backgroundColor:"#012A5C",legend:{show:!1},tooltip:{trigger:"item",formatter:function(e){return e.marker+e.name+" : "+e.value}},title:[titleFn(ydata[0].name,"7%"),titleFn(ydata[1].name,"45%"),titleFn(ydata[1].name,"75%")],series:[seriesFn(["20%","50%"],ydata[0].name,ydata[0].value,[colors[0],colors[1]]),seriesFn(["50%","50%"],ydata[1].name,ydata[1].value,[colors[2],colors[3]]),seriesFn(["80%","50%"],ydata[2].name,ydata[2].value,[colors[4],colors[5]])]};function titleFn(e,n){return{text:e,left:n,top:"68%",textStyle:{color:fontColor,fontSize:25,fontWeight:"normal"}}}function seriesFn(e,n,o,a){return{type:"pie",radius:["20%","30%"],center:e||"",labelLine:{normal:{show:!1}},itemStyle:{color:function(t){return a&&a[t.dataIndex]}},data:[{name:n||"",value:o||"",label:{show:!0,formatter:"{c}",position:"center",fontSize:50,fontWeight:"bold",padding:[15,0,0,0],color:fontColor}},{value:totalScore-o,name:"总分",tooltip:{formatter:function(t){return t.marker+t.name+" : "+totalScore}},label:{show:!1}}]}}