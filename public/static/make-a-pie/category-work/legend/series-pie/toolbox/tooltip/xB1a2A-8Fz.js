data=[{name:"北京",value:5600},{name:"上海",value:3600},{name:"广州",value:1500}];let seriesObjs=[],r=200,color=["#8F99F0","#5FC5F5","#6DE0CF"],placeHolderStyle={normal:{label:{show:!1,position:"center"},labelLine:{show:!1},color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}};for(let e=0;e<data.length;e++){let a={name:data[e].name,type:"pie",clockWise:!1,radius:[r-1-e*20,r-e*20],itemStyle:{normal:{label:{show:!1,position:"center"},labelLine:{show:!1},borderWidth:5,shadowBlur:50,borderColor:color[e],shadowColor:"rgba(142,152,241, 0.6)"}},hoverAnimation:!1,data:[{value:data[e].value},{value:data[0].value*4/3-data[e].value,name:"invisible",itemStyle:placeHolderStyle}]};seriesObjs.push(a)}option={backgroundColor:"#011A2E",tooltip:{show:!1,formatter:"{a} : {c}"},legend:{show:!1},toolbox:{show:!1},series:seriesObjs};
