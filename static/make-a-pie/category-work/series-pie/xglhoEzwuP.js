var colorList=["rgba(0, 138, 255, 1)","rgba(255, 155, 48, 1)","rgba(0, 180, 76, 1)","rgba(151, 101, 254, 1)"],colorListLabel=["rgba(224, 245, 255, 1)","rgba(252, 248, 227, 1)","rgba(227, 252, 231, 1)","rgba(226, 225, 255, 1)"];function getRich(){let e={};return colorLine.forEach((a,l)=>{e[`hr${l}`]={backgroundColor:colorLine[l],borderRadius:3,width:3,height:3,padding:[3,3,0,-12]},e[`a${l}`]={padding:[8,-60,-20,-20],color:colorLine[l],fontSize:12}}),e}data=[{name:"30人及以下",value:5775},{name:"31-60人",value:4628},{name:"61-90人",value:2508},{name:"90人及以上",value:1025}].sort((e,a)=>a.value-e.value);let seriesData1=data.map((e,a)=>({...e,value:Math.sqrt(e.value),actValue:e.value,label:{show:!0,position:"outside",backgroundColor:colorListLabel[a],borderRadius:5,padding:[5,10,3,10],color:colorList[a],textStyle:{fontSize:15}},labelLine:{lineStyle:{color:"transparent"}}})),seriesData2=data.map((e,a)=>({...e,value:Math.sqrt(e.value,20),actValue:e.value,label:{show:!0,position:"outside",backgroundColor:colorListLabel[a],borderRadius:5,padding:[5,10,3,10],color:colorList[a],textStyle:{fontSize:15},formatter:l=>(console.log(l),l.data.actValue)},labelLine:{lineStyle:{color:"transparent"}}}));function _pie(){let e=[];for(var a=0;a<150;a++)a%2===0?e.push({name:(a+1).toString(),value:1,itemStyle:{normal:{color:"rgba(223, 223, 223, 1)",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}}):e.push({name:(a+1).toString(),value:1,itemStyle:{normal:{color:"rgba(0,0,0,0)",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}});return e}option={series:[{type:"pie",zlevel:1,color:"rgba(223, 223, 223, 1)",silent:!0,radius:["65.5%","66%"],label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:[1]},{type:"pie",zlevel:2,silent:!0,radius:["51.5%","52%"],label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:_pie()},{type:"pie",zlevel:2,silent:!0,radius:["41.5%","42%"],label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:_pie()},{type:"pie",color:"#D0D0D0",zlevel:2,silent:!0,radius:["31.5%","32%"],label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:_pie()},{type:"pie",zlevel:2,color:"#D0D0D0",silent:!0,radius:["19.2%","20%"],label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:_pie()},{type:"pie",radius:["20%","60%"],center:["50%","50%"],clockwise:!0,avoidLabelOverlap:!0,data:seriesData1,roseType:"area",itemStyle:{normal:{color:e=>colorList[e.dataIndex]}}},{type:"pie",radius:"30%",center:["50%","50%"],clockwise:!0,avoidLabelOverlap:!0,data:seriesData2,roseType:"area",itemStyle:{normal:{color:"transparent"}},zlevel:100,z:100}]};
