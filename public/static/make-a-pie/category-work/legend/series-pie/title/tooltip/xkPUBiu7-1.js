let placeHolderStyle={normal:{color:"transparent",label:{show:!1},labelLine:{show:!1}}},dataPie=[{name:"机柜",value:60},{name:"服务器",value:40},{name:"路由器",value:45},{name:"交换机",value:55},{name:"PDU",value:35}],dataColor=[{os1:"#4f91f0",os2:"#1955a9"},{os1:"#3e79cd",os2:"#4be0ff"},{os1:"#36d7e7",os2:"#226c96"},{os1:"#22aae0",os2:"#5abae0"},{os1:"#41d7cd",os2:"#01abff"}],legendData=[],seriesData=[],total=0,radiusValue=100;for(var i=0;i<dataPie.length;i++)total+=dataPie[i].value,legendData.push(dataPie[i].name),console.log(radiusValue-10*i-2+"%",radiusValue-10*i+"%"),seriesData.push({type:"pie",clockWise:!1,radius:[radiusValue-10*i-1+"%",radiusValue-10*i+"%"],center:["35%","50%"],label:{normal:{show:!1}},hoverAnimation:!1,startAngle:90,data:[{value:dataPie[i].value,name:dataPie[i].name,itemStyle:{normal:{borderWidth:5,borderColor:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:dataColor[i].os1},{offset:1,color:dataColor[i].os2}]),color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:dataColor[i].os1},{offset:1,color:dataColor[i].os2}])}}},{value:100-dataPie[i].value,tooltip:{show:!1},itemStyle:{normal:{color:"transparent",label:{show:!1}}}}]});option={backgroundColor:"#021228",title:{text:"设备类型",x:"28.5%",y:"center",textStyle:{fontWeight:"normal",fontSize:12,color:"#419ece"}},grid:{left:"5px",right:"5px",top:"5px",bottom:"5px"},tooltip:{trigger:"item",show:!0,formatter:"{b} : <br/>{d}%",backgroundColor:"rgba(0,0,0,0.7)",padding:[8,10],extraCssText:"box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);"},legend:{type:"scroll",orient:"vertical",icon:"circle",right:"50px",top:"10px",itemGap:20,pageIconColor:"#00f6ff",pageTextStyle:{color:"#fff"},textStyle:{color:"#419ece",rich:{yellow:{color:"#00b5f3",fontWeight:"bold"},blue:{color:"#4be1ff",align:"right"}}},formatter:function(a){let o,t;for(let e=0;e<dataPie.length;e++)dataPie[e].name===a&&(o=dataPie[e].value,t=Math.round(o/total*100));return[" {blue|"+a+"}",t+"%  {yellow|"+o+"}"]},data:legendData},series:seriesData};