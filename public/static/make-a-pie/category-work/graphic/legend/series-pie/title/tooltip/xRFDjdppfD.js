for(var complaintType=[{value:20,name:"已完成"},{value:40,name:"未完成"},{value:60,name:"处理中"}],buildList=complaintType,arry=[],i=0;i<buildList.length;i++){let e={value:buildList[i].value,name:buildList[i].name};arry.push(e)}var buildData=arry,colorList=["#34D160","#F19610","#FF3333"],arr=buildData;function _pie2(){let e=[];for(var t=0;t<8;t++)t%2===0?e.push({name:(t+1).toString(),value:25,itemStyle:{normal:{color:"rgba(232,184,38,1)",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}}):e.push({name:(t+1).toString(),value:20,itemStyle:{normal:{color:"rgba(0,0,0,0)",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}});return e}var text="投诉数量",finish="10",option={color:colorList,title:{text:finish,x:"center",y:"44%",textStyle:{color:"#19F1F9",fontSize:38}},graphic:[{type:"text",left:"center",top:"37%",style:{text,textAlign:"center",fill:"#141B5F",fontSize:32,fontWeight:700}}],tooltip:{trigger:"item"},legend:{orient:"vertical",right:10,show:!1},series:[{type:"pie",zlevel:2,silent:!0,center:["49.5%","43%"],radius:["55%","58%"],startAngle:-110,label:{normal:{show:!1}},data:_pie2()},{name:"圆圈",type:"pie",zlevel:1,silent:!0,center:["49.5%","43%"],radius:["57%","58%"],hoverAnimation:!1,color:"#cea053",label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:[{value:1,name:"",itemStyle:{normal:{color:"#e8b826"}}}]},{type:"pie",center:["50%","43%"],radius:["30%","43%"],clockwise:!0,avoidLabelOverlap:!0,hoverOffset:5,itemStyle:{normal:{color:function(e){return colorList[e.dataIndex]}}},label:{formatter:`{text|}
{b}`,borderWidth:20,borderRadius:4,padding:[-30,-40,0,-40],alignTo:"labelLine",rich:{b:{color:"#fff",fontSize:12,lineHeight:33},per:{fontSize:12,padding:[2,4],borderRadius:2}}},labelLine:{show:!0,normal:{position:"outside",length:35,length2:90,show:!0}},data:arr}]};