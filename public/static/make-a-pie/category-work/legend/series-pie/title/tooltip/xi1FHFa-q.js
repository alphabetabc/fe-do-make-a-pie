let bgColor="#fff",fontColor="#333",innerColor="#E5F5F4",titleColor="#22C278",scale=1,echartData=[{name:"A类",value:"372",unit:"元"},{name:"B类",value:"292",unit:"元"},{name:"C类",value:"220",unit:"元"},{name:"D类",value:"142",unit:"元"}],unit=echartData[0].unit||"",total=echartData.reduce((e,t)=>e+t.value*1,0);option={backgroundColor:bgColor,color:["#8FC8F0","#67A0D5","#FF7B51","#FFBA00","#4AEAB0"],tooltip:{trigger:"item"},title:{text:"{val|"+total+`}
{name|`+unit+"}",top:"center",left:"center",textStyle:{rich:{name:{fontSize:16*scale,fontWeight:"normal",color:fontColor},val:{fontSize:36*scale,fontWeight:"bold",color:titleColor,padding:[10,0]}}}},legend:{orient:"vertical",icon:"circle",x:"80%",y:"center",itemWidth:12*scale,align:"left",textStyle:{rich:{name:{fontSize:12*scale},value:{fontSize:16*scale,padding:[0,5,0,15]},unit:{fontSize:12*scale}}},formatter:function(e){let t=echartData.filter(n=>n.name===e);t=t[0]||{};let l=t.unit||"";return"{name|"+e+"}  {value|"+t.value+"}{unit|"+l+"}"}},series:[{type:"pie",radius:["40%","60%"],center:["50%","50%"],data:echartData,labelLine:{normal:{length:20,length2:20}},label:{normal:{show:!1,formatter:e=>(console.log(e),"{name| "+e.name+`}
{value|`+e.percent.toFixed(2)+"}{unit|%}"),rich:{name:{fontSize:12*scale,lineHeight:12*scale,color:fontColor},value:{fontSize:16*scale,lineHeight:16*scale,color:fontColor},unit:{fontSize:12*scale,lineHeight:12*scale,color:fontColor,padding:[0,0,5*scale,0]}}}}},{type:"pie",radius:["0","35%"],color:[innerColor],data:[100],label:{show:!1},hoverAnimation:!1,tooltip:{show:!1}}]};
