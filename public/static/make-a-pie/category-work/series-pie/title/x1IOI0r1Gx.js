var scale=1,echartData=[{value:469,name:"微信小程序"},{value:261,name:"微信公众号"},{value:427,name:"场馆App-安卓"},{value:274,name:"场馆App-苹果"},{value:151,name:"微信小程序2"}],rich={yellow:{color:"#fff",fontSize:30*scale,padding:[8,4],align:"center"},white:{color:"#00B9FC",align:"center",fontSize:18*scale,padding:[20,0]},blue:{color:"#49dff0",fontSize:16*scale,align:"center"},hr:{borderColor:"rgba(255,255,255,.1)",width:"100%",borderWidth:1,height:0}},colorArr=["#297AE6","#5D46D4","#7F46D3","#00AA6C","#28A1E6","#28A1E6"];option={backgroundColor:"#031f2d",title:{text:"年吸纳新用户",subtext:"86601",x:"center",y:"55%",textStyle:{fontSize:25,fontWeight:"normal",color:["#BDBEC3"]},subtextStyle:{color:"#00FFED",fontSize:48,fontWeight:700}},series:[{type:"pie",radius:["42%","50%"],hoverAnimation:!1,color:colorArr,label:{normal:{formatter:function(e,a,l){var t=0,o=0;return echartData.forEach(function(r,n,i){t+=r.value}),"{white|"+e.name+`}
{hr|}
{yellow|`+e.value+`}
{blue|}`},rich}},labelLine:{normal:{length:55*scale,length2:0,lineStyle:{color:"rgba(255,255,255,.1)"}}},data:echartData}]};