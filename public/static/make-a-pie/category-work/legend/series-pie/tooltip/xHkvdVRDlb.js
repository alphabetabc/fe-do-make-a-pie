function getData(e){return[{value:e,name:e,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00B2EE"},{offset:1,color:"#00DDE6"}])}}},{value:1-e,itemStyle:{normal:{color:"transparent"}}}]}placeHolderStyle={normal:{label:{show:!1},labelLine:{show:!1}}},option={backgroundColor:"#0E2A43",tooltip:{trigger:"item",formatter:function(e,t,a){return e.seriesName+": "+e.name*100+"%"}},legend:{top:"25%",left:"40%",itemHeight:18,data:["实勘率","户型图比例","钥匙率","委托率","经理陪看率"],textStyle:{color:"#fff"},selectedMode:!0,orient:"vertical"},series:[{name:"实勘率",type:"pie",clockWise:!0,hoverAnimation:!1,radius:[180,200],itemStyle:placeHolderStyle,label:{normal:{show:!1}},data:getData(.6)},{name:"户型图比例",type:"pie",clockWise:!0,hoverAnimation:!1,radius:[155,175],itemStyle:placeHolderStyle,data:getData(.5)},{name:"钥匙率",type:"pie",clockWise:!0,hoverAnimation:!1,radius:[130,150],itemStyle:placeHolderStyle,data:getData(.4)},{name:"委托率",type:"pie",clockWise:!0,hoverAnimation:!1,radius:[105,125],itemStyle:placeHolderStyle,data:getData(.6)},{name:"经理陪看率",type:"pie",clockWise:!0,hoverAnimation:!1,radius:[80,100],itemStyle:placeHolderStyle,data:getData(.3)}]};
