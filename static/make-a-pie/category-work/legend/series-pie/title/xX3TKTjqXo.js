let datas=[{value:10453,name:"rose 1",rate:"20%"},{value:20444,name:"rose 2",rate:"10%"},{value:30646,name:"rose 3",rate:"22%"},{value:40643,name:"rose 4",rate:"11%"},{value:54240,name:"rose 5",rate:"13%"}],datap=[],colorList=["#3399ff","#85c285","#ffc266","#ff8585","#c299ff"],color=colorList.splice(0,datas.length);for(let e=0;e<datas.length;e++)datap.push({value:datas[e].value,name:"rosetemp"+e}),color.push("#FFFFFF");datap=datas.concat(datap),option={legend:{bottom:"25%",left:"center",orient:"vertical",data:datas,icon:"circle",itemWith:8,itemHeight:8,itemGap:10,formatter(e){const t=datas.filter(a=>a.name===e)[0];return`{name|${e}}{value| ${parseInt(t.value).toLocaleString()}}${t.rate}`},textStyle:{rich:{name:{color:"#595959",fontSize:12,width:150},value:{color:"#595959",fontSize:12,width:120}}}},title:{text:"渠道数",top:"47%",textAlign:"center",left:"49.5%",textStyle:{color:"#262626",fontSize:12,fontWeight:"400"}},color,series:[{name:"Nightingale Chart",type:"pie",radius:[40,200],center:["50%","50%"],roseType:"radius",silent:!0,startAngle:180,legendHoverLink:!1,itemStyle:{borderRadius:0},label:{show:!1},emphasis:{label:{show:!1}},color:["#f6f8fe","#ffffff"],data:[{value:10,name:"r"},{value:10,name:"ro"}]},{name:"Nightingale Chart",type:"pie",radius:[40,190],center:["50%","50%"],roseType:"radius",startAngle:180,legendHoverLink:!1,itemStyle:{borderRadius:0,borderColor:"#fff",borderWidth:1},label:{show:!0,position:"inside",color:"#fff",formatter(e){return e.data.rate}},emphasis:{label:{show:!0}},data:datap}]};