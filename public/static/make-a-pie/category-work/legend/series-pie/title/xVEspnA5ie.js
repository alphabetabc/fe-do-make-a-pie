var data={id:"echartPie",value:[12,32,54,12],legend:["人质","要不要投降","过期","追梦的蚂蚁"],color:["#3FA7DC","#7091C4","#5170A2","#E1CA74"],title:"饼图"},seriesData=[];data.value.forEach(function(t,i){seriesData.push({value:t,name:data.legend[i]})}),option={title:{text:data.title},legend:{orient:"horizontal",bottom:22,icon:"circle",selectedMode:!1,itemWidth:6,itemHeight:6,itemGap:6,borderRadius:6,data:data.legend},series:[{name:"-",type:"pie",hoverAnimation:!1,radius:["40%","52%"],labelLine:{normal:{show:!0,length:10,length2:40,lineStyle:{color:"#ccc",width:1},emphasis:{show:!0}}},label:{normal:{formatter:function(t){if(!t.percent)return"";var i=Math.round(t.percent*10)/10,e=i.toString(),r=e.indexOf(".");for(r<0&&(r=e.length,e+=".");e.length<=r+1;)e+="0";let n=t.data.name;return["{a|"+n+`}
{hr|}
{per|`+e+"%}"]},rich:{a:{fontSize:12,color:"#687284",lineHeight:34,width:60,padding:[0,0,0,100],align:"left"},hr:{borderColor:"#ccc",width:"100%",borderWidth:1,height:0},per:{lineHeight:33,fontSize:14,align:"left",color:"#414957",padding:[2,6]}}}},color:data.color,data:seriesData}]};
