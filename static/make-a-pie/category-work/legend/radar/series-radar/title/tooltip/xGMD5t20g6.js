var data=[80,70,38,85,25,56,78,49],indicatorname=["Marketing","Technology","Search","Business news","Social","Design","Advertising","Tech news"],maxdata=[100,100,100,100,100,100,100,100];function contains(e,r){for(var t=e.length;t--;)if(e[t]===r)return t;return!1}for(var indicator=[],i=0;i<indicatorname.length;i++)indicator.push({name:indicatorname[i],max:maxdata[i]});option={normal:{top:200,left:300,width:500,height:400,zIndex:6},title:{show:!1},tooltip:{show:!1,trigger:"item"},legend:{show:!1},radar:{center:["50%","50%"],radius:"70%",startAngle:90,splitNumber:4,shape:"circle",splitArea:{areaStyle:{color:["transparent"]}},axisLabel:{show:!0,fontSize:10,showMinLabel:!1,showMaxLabel:!1,formatter:function(e){return e+"%"},rotate:0,color:"#888",fontStyle:"normal",fontWeight:"normal"},axisLine:{show:!0,lineStyle:{color:"#d6d6d6"}},splitLine:{show:!0,lineStyle:{color:"#d6d6d6"}},name:{textStyle:{rich:{a:{fontSize:"14",color:"#666",align:"center",lineHeight:"30"},b:{fontSize:"14",color:"#333",align:"center",fontWeight:"bold"}}},formatter:function(e,r){var t=contains(indicatorname,e),a=data[t]/100*100;return"{a|"+e+`}
{b|`+Math.round(a)+"%}"}},indicator},series:[{name:"Business Interests",type:"radar",symbol:"circle",symbolSize:10,itemStyle:{normal:{opacity:0}},areaStyle:{normal:{color:"rgba(169,168,254,0.75)"}},lineStyle:{normal:{color:"#5755FE",width:4,type:"solid"}},data:[data]}]};