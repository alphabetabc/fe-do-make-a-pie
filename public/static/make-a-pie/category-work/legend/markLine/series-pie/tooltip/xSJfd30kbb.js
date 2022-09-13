function getData(l){return[{value:l,name:l,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00B2EE"},{offset:1,color:"#00DDE6"}])}}},{value:1-l,itemStyle:{normal:{color:"transparent"}}}]}function getDatamax(l){return[{value:l,name:l,itemStyle:{normal:{color:"rgba(0, 0, 0, 0)",borderColor:"#61A0A8",borderType:"dashed"}}},{value:1-l,itemStyle:{normal:{color:"transparent"}}}]}function getDataavg(l){return[{value:l,name:l,itemStyle:{normal:{color:"rgba(0, 0, 0, 0)",borderColor:"#2F4554",borderType:"dashed"}}},{value:1-l,itemStyle:{normal:{color:"transparent"}}}]}placeHolderStyle={normal:{label:{show:!1},labelLine:{show:!1}}},placeHolderStyle2={normal:{label:{show:!0},labelLine:{show:!0}}};function gettitle(l,t,e){if(e=="实勘率")return e+":  60% </br>平均"+e+":  40%</br>最大"+e+": 80% </br>";if(e=="户型图比例")return e+":  60% </br>平均"+e+":  40%</br>最大"+e+": 80% </br>";if(e=="钥匙率")return e+":  60% </br>平均"+e+":  40%</br>最大"+e+": 80% </br>";if(e=="委托率")return e+":  60% </br>平均"+e+":  40%</br>最大"+e+": 80% </br>";if(e=="经理陪看率")return e+":  60% </br>平均"+e+":  40%</br>最大"+e+": 80% </br>"}option={backgroundColor:"#0E2A43",tooltip:{trigger:"item",formatter:function(l,t,e){return gettitle(null,null,l.seriesName)}},legend:{top:"25%",left:"40%",itemHeight:18,data:["实勘率","户型图比例","钥匙率","委托率","经理陪看率"],textStyle:{color:"#fff"},selectedMode:!0,orient:"vertical"},series:[{name:"实勘率",type:"pie",clockWise:!0,hoverAnimation:!1,radius:[180,200],itemStyle:placeHolderStyle,legendHoverLink:"false",z:2,label:{normal:{show:!1}},data:getData(.6)},{name:"实勘率",type:"pie",clockWise:!0,hoverAnimation:!1,radius:[180,200],markLine:{silent:!1},itemStyle:placeHolderStyle2,z:3,label:{normal:{show:!1}},data:getDatamax(.8)},{name:"实勘率",type:"pie",clockWise:!0,hoverAnimation:!1,radius:[180,200],markLine:{silent:!1},itemStyle:placeHolderStyle2,z:3,label:{normal:{show:!1}},data:getDataavg(.5)},{name:"户型图比例",type:"pie",clockWise:!0,hoverAnimation:!1,radius:[155,175],itemStyle:placeHolderStyle,data:getData(.5)},{name:"钥匙率",type:"pie",clockWise:!0,hoverAnimation:!1,radius:[130,150],itemStyle:placeHolderStyle,data:getData(.4)},{name:"委托率",type:"pie",clockWise:!0,hoverAnimation:!1,radius:[105,125],itemStyle:placeHolderStyle,data:getData(.6)},{name:"经理陪看率",type:"pie",clockWise:!0,hoverAnimation:!1,radius:[80,100],itemStyle:placeHolderStyle,data:getData(.3)}]};