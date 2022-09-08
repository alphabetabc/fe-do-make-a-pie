var ccqdcl=4571,cctjcl=0,shqdcl=2338,shtjcl=3450,ccqd=[[125.81,44.25],[120.33,36.07]],cctj=[[125.81,44.25],[117.2,39.12]],shqd=[[121.46,31.28],[120.33,36.07]],shtj=[[121.46,31.28],[117.2,39.12]];function toThousands(e){var t=e.toString().replace(/\d+/,function(r){return r.replace(/(\d)(?=(\d{3})+$)/g,function(o){return o+","})});return t}var geoCoordMap={上海:[121.46,31.28],长春:[125.81,44.25],天津:[117.2,39.12],青岛:[120.33,36.07]},CCData=[[{name:"长春"},{name:"青岛",value:ccqdcl}],[{name:"长春"},{name:"天津",value:cctjcl}]],SHData=[[{name:"上海"},{name:"青岛",value:shqdcl}],[{name:"上海"},{name:"天津",value:shtjcl}]],planePath="path://M39.883,27.852h-0.959V16.795H24.632l-0.002,7.509l-0.186-0.002v-4.995h-6.446l-2.897,5.002h-4.262v3.543h-0.723v2h0.723v1.25h2.514c0.234,1.197,1.289,2.104,2.556,2.104c1.265,0,2.317-0.905,2.553-2.104h12.326c0.234,1.197,1.289,2.104,2.553,2.104c1.268,0,2.32-0.905,2.557-2.104h3.027v-1.25h0.959V27.852L39.883,27.852z M15.908,32.205c-0.887,0-1.605-0.721-1.605-1.604s0.721-1.604,1.605-1.604c0.884,0,1.604,0.721,1.604,1.604S16.792,32.205,15.908,32.205z M33.34,32.205c-0.885,0-1.604-0.721-1.604-1.604s0.719-1.604,1.604-1.604c0.887,0,1.605,0.721,1.605,1.604S34.227,32.205,33.34,32.205zM37.924,30.102h-2.029c-0.234-1.197-1.289-2.104-2.555-2.104s-2.318,0.906-2.553,2.104H18.46c-0.234-1.197-1.288-2.104-2.553-2.104c-1.266,0-2.32,0.906-2.555,2.104h-1.514v-4.793h3.837l2.898-5.002h4.87v4.984l2.186,0.021l0.002-7.519h12.291V30.102L37.924,30.102z M19.152,21.307h3.354v3.896h-5.612L19.152,21.307z",convertData=function(e){for(var t=[],r=0;r<e.length;r++){var o=geoCoordMap[e[r].name];o&&t.push({value:o.concat(e[r].value),name:e[r].name})}return t},shqdzhuanhuan=function(e){var t=[];return e!==0?(t.push({fromName:"上海",toName:"青岛",coords:shqd,value:shqdcl}),t):null},cctjzhuanhuan=function(e){var t=[];return e!==0?(t.push({fromName:"长春",toName:"天津",coords:cctj,value:cctjcl}),t):null},ccqdzhuanhuan=function(e){var t=[];return e!==0?(t.push({fromName:"长春",toName:"青岛",coords:ccqd,value:ccqdcl}),t):null},shtjzhuanhuan=function(e){var t=[];return e!==0?(t.push({fromName:"上海",toName:"天津",coords:shtj,value:shtjcl}),t):null},color=["#1B4F93","#1B4F93"],series=[];[["长春",CCData],["上海",SHData]].forEach(function(e,t){series.push({name:"长春-青岛",type:"lines",zlevel:2,symbol:["none","arrow"],symbolSize:15,effect:{show:!0,period:6,trailLength:0,symbol:planePath,symbolSize:15},lineStyle:{normal:{color:color[t],width:4,opacity:.6,curveness:.3}},data:ccqdzhuanhuan(ccqdcl)},{name:"长春-天津",type:"lines",zlevel:2,symbol:["none","arrow"],symbolSize:15,effect:{show:!0,period:6,trailLength:0,symbol:planePath,symbolSize:15},lineStyle:{normal:{color:color[t],width:4,opacity:.6,curveness:.3}},data:cctjzhuanhuan(cctjcl)},{name:"上海-天津",type:"lines",zlevel:2,symbol:["none","arrow"],symbolSize:15,effect:{show:!0,period:6,trailLength:0,symbol:planePath,symbolSize:15},lineStyle:{normal:{color:color[t],width:4,opacity:.6,curveness:.3}},data:shtjzhuanhuan(shtjcl)},{name:"上海-青岛",type:"lines",zlevel:2,symbol:["none","arrow"],symbolSize:15,effect:{show:!0,period:6,trailLength:0,symbol:planePath,symbolSize:15},lineStyle:{normal:{color:color[t],width:4,opacity:.6,curveness:.3}},data:shqdzhuanhuan(shqdcl)},{name:"青岛和天津",type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,position:"right",formatter:"{b}"}},symbolSize:function(r){return r[2]>200?20:r[2]/10},itemStyle:{normal:{color:"#EE7700"}},data:convertData([{name:"青岛",value:150},{name:"天津",value:150}])},{name:"长春和上海",type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,position:"right",formatter:"{b}"}},itemStyle:{normal:{color:"#EE7700"}},data:convertData([{name:"长春",value:80},{name:"上海",value:80}])})}),option={title:[{text:"运输图",x:"center",textStyle:{fontSize:20,color:"#1e56a0",fontWeight:"bold"}},{text:`{words|
长春-天津运输量:  }`+toThousands(cctjcl),x:"40%",top:"1%",textStyle:{rich:{words:{fontSize:15,fontWeight:"normal"}}}},{text:`{words|

长春-青岛运输量:  }`+toThousands(ccqdcl),x:"40%",top:"2%",textStyle:{rich:{words:{fontSize:15,fontWeight:"normal"}}}},{text:`{words|


上海-天津运输量:  }`+toThousands(shtjcl),x:"40%",top:"3%",textStyle:{rich:{words:{fontSize:15,fontWeight:"normal"}}}},{text:`{words|



上海-青岛运输量:  }`+toThousands(shqdcl),x:"40%",top:"4%",textStyle:{rich:{words:{fontSize:15,fontWeight:"normal"}}}}],backgroundColor:"#cecece",tooltip:{show:!0,trigger:"item",formatter:function(e){if(e.seriesType=="effectScatter"){if(e.data.name=="上海"||e.data.name=="长春")return"始发站："+e.data.name;if(e.data.name=="天津")return"终到站："+e.data.name+"<br />共计"+(shtjcl+cctjcl);if(e.data.name=="青岛")return"终到站："+e.data.name+"<br />共计"+(shqdcl+ccqdcl)}else return e.seriesType=="lines"?e.data.fromName+">"+e.data.toName+"<br />"+e.data.value:e.name}},geo:{map:"china",label:{emphasis:{show:!1}},roam:!1,itemStyle:{normal:{areaColor:"#C2C2C2",borderColor:"#868686"},emphasis:{areaColor:"#FDDD31"}}},series};
