var data=[89,79,100,100,100],name=["支委会","支部党员大会","党建","主题党日","党小组会"];function contains(e,r){for(var a=e.length;a--;)if(e[a]===r)return a;return!1}option={backgroundColor:"#0D1850",color:["#3D91F7","#61BE67"],tooltip:{textStyle:{fontSize:16},formatter:function(){for(var e="",r=0;r<data.length;r++)e+=name[r]+" : "+data[r]+"<br>";return e}},radar:{radius:"58%",center:["50%","50%"],triggerEvent:!0,name:{textStyle:{color:"#fff",fontSize:"18",borderRadius:3,padding:[3,5],align:"center",rich:{a:{fontSize:"18",align:"center",padding:[6,0,0,0]},b:{fontSize:"18",align:"center",padding:[-110,0,0,0]}}},formatter:function(e,r){var a=contains(name,e),n=data[a]/100*100;return a===0?" {b|"+e+"  "+n+"%}":"{a|"+n+`%}
`+e}},nameGap:"70",indicator:[{name:"支委会",max:100},{name:"支部党员大会",max:100},{name:"党建",max:100},{name:"主题党日",max:100},{name:"党小组会",max:100}],splitArea:{areaStyle:{color:"transparent"}},axisLine:{lineStyle:{color:"rgba(38,124,170,1)",width:1}},splitLine:{lineStyle:{width:1,color:"rgba(38,124,170,1)",shadowBlur:20,shadowColor:"rgba(255,255,255,1)"}},splitNumber:4},series:[{name:"",type:"radar",areaStyle:{normal:{color:"rgba(24,167,188, .8)"}},symbolSize:0,lineStyle:{normal:{color:"rgba(24,167,188, 1)",width:1}},data:[{value:data}]}]};