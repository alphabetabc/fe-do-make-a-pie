let list=[{value:13,name:"吸烟",label:{color:"#666"},itemStyle:{},emphasis:{itemStyle:{}}},{value:12,name:"未带安全帽",label:{color:"#666"},itemStyle:{},emphasis:{itemStyle:{}}},{value:12,name:"未穿反光衣",label:{color:"#666"},itemStyle:{},emphasis:{itemStyle:{}}},{value:12,name:"越界闯入",label:{color:"#666"},itemStyle:{},emphasis:{itemStyle:{}}},{value:43,name:"火焰",label:{color:"#666"},itemStyle:{},emphasis:{itemStyle:{}}},{value:43,name:"未戴安全绳",label:{color:"#666"},itemStyle:{},emphasis:{itemStyle:{}}}];function angleText(l,o){var t=360/o,e=l*t+t/2,r=(l+1)*t;if(e<=90)return-e;if(e<=180&&e>90)return 180-e;if(e<270&&e>180)return 180-e;if(e<360&&e>=270)return 360-e}var data3=[];data3=JSON.parse(JSON.stringify(list));for(var i=0;i<data3.length;i++)i===0?(data3[i].label.color="#333",data3[i].label.rotate=angleText(i,data3.length)):(data3[i].label.color="#666",data3[i].label.rotate=angleText(i,data3.length));let colorList=["#FFC67E","#5DB7D2","#BF8AF2","#FF945E","#1773DD","#61D79B"];option={backgroundColor:"#fff",tooltip:{trigger:"item",formatter:"{b} <br/> {c}人",backgroundColor:"rgba(67,100,247,0.8)",padding:[10,10],axisPointer:{type:"shadow",shadowStyle:{color:"rgba(67,100,247,0.08)"}}},title:{text:"140",subtext:"违规总次数",x:"30%",y:"43%",textStyle:{fontSize:50,fontWeight:"normal",color:"#333"},subtextStyle:{fontSize:20,fontWeight:"normal",align:"center",color:"#555"}},legend:{orient:"vertical",left:"70%",align:"left",top:"middle",itemWidth:13,itemHeight:13,icon:"circle",itemGap:50,data:list,formatter:function(l){console.log("name--",l);for(var o="",t=0;t<list.length;t++)list[t].name==l&&(o+="{a|"+l+"}{b|"+list[t].value+"}");return o},textStyle:{color:"#000",rich:{a:{fontSize:14,color:"#666",padding:[0,10,0,6]},b:{fontSize:14,color:"#666"}}}},series:[{type:"pie",zlevel:3,radius:["130","200"],center:["35%","50%"],color:colorList,itemStyle:{normal:{borderWidth:10,borderColor:"#fff"}},data:list,labelLine:{normal:{show:!1}},label:{normal:{position:"inside",formatter:"{c|{c}%}",rich:{b:{fontSize:14,color:"#666",align:"left",padding:4},c:{fontSize:20,align:"center",color:"#fff",padding:4}}}}},{type:"pie",zlevel:1,roseType:"area",silent:!0,radius:["52%","53%"],center:["35%","50%"],itemStyle:{normal:{color:"#fff"}},labelLine:{show:!1,normal:{length:10,length2:0,lineStyle:{color:"transparent"}}},animation:!1,label:{show:!0,textStyle:{fontSize:16,color:"#666"},position:"inside",rotate:30,align:"right"},data:data3}]};
