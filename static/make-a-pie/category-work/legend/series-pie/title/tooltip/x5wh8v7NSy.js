var legendName=["名称一","名称二","名称三","名称四","名称五","名称六","名称七","名称八"],data=[100,200,150,80,67,240,122,187],fucolor=["#bdd6e9","#ab98e8","#ffd7fd","#fffcc6","#bdf3ec","#d9dcf6","#ffe7d7","#d1f5d2","#cff0ff","#ffd8d8"],matData=function(){for(var e=[],t=0;t<legendName.length;t++){var a={};a.value=data[t],a.name=legendName[t],e.push(a)}return e};myChart.on("click",function(e){alert(e.dataIndex)}),option={title:{text:"知识点分布图",left:"center",bottom:"30",textStyle:{color:"#333",align:"center",fontSize:16,fontWeight:"normal"}},tooltip:{trigger:"item",formatter:"{b} : {c} ({d}%)"},legend:{orient:"vertical",show:!1,data:legendName},series:[{name:"",type:"pie",radius:"50%",center:["50%","45%"],data:matData(),label:{normal:{show:!1}},color:fucolor,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};
