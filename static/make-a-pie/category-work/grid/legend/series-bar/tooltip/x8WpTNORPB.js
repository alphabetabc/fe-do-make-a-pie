function contains(o,t){for(var e=o.length;e-=1;)if(o[e]==t)return e;return!1}var attackSourcesName=["1栋609","6栋315","7栋215","4栋326","8栋714","6栋509","7栋617","8栋203","3栋209","8栋225"],attackSourcesData=[157,125,98,88,76,62,55,43,36,22],attackSourcesColor=[{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#FF7E7C"},{offset:1,color:"#FF6061"}]},{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#F9C270"},{offset:1,color:"#F9A146"}]},{x:0,y:0,x2:1,y2:2,colorStops:[{offset:0,color:"#F9C270"},{offset:1,color:"#F9A146"}]},{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#5CC0FF"},{offset:1,color:"#5998FF"}]}];function attackSourcesDataFmt(o){var t=[];return o.forEach(function(e,r){itemStyle={color:r>3?attackSourcesColor[3]:attackSourcesColor[r]},t.push({value:e,itemStyle})}),t}option={tooltip:{show:!0,textStyle:{fontSize:16}},legend:{show:!1},grid:{top:10,bottom:15,left:130,right:40},xAxis:{type:"value",splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!1}},yAxis:{type:"category",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisPointer:{label:{show:!0,margin:30}},data:attackSourcesName,axisLabel:{margin:88,fontSize:14,align:"left",color:"#666",rich:{nt1:{color:"#fff",backgroundColor:"#FF7E7C",width:20,height:20,align:"center",fontSize:14,borderRadius:100},nt2:{color:"#fff",backgroundColor:"#F9C270",width:20,height:20,align:"center",fontSize:14,borderRadius:100},nt:{color:"#EAA53D",width:20,height:20,align:"center",fontSize:14,borderRadius:100},title:{color:"#666",width:50,fontSize:14,align:"left",padding:0}},formatter:function(o,t){return t=contains(attackSourcesName,o)+1,t-1===0?["{nt1|"+t+"}  {title|"+o+"}"].join(`
`):t-1>0&&t-1<3?["{nt2|"+t+"}  {title|"+o+"}"].join(`
`):["{nt|"+t+"}  {title|"+o+"}"].join(`
`)}}},series:[{type:"bar",barWidth:"10px",data:attackSourcesDataFmt(attackSourcesData),itemStyle:{normal:{color:function(o){return attackSourcesColor[o.dataIndex>3?3:o.dataIndex]},barBorderRadius:5}},label:{show:!0,position:"right",color:"#666666",fontSize:16,offset:[5,0]}}]};
