let colorList=["rgb(96, 255, 0)","rgb(255, 229, 0)","rgb(255, 159, 3)","rgb(216, 30, 7)"],data=[{name:"可控",value:0},{name:"轻微",value:0},{name:"严重",value:0},{name:"非常严重",value:1}],num=0;data.map(e=>{e.value==0&&num++});let center=["44%","50%"],arrName=getArrayValue(data,"name"),arrValue=getArrayValue(data,"value"),sumValue=eval(arrValue.join("+")),objData=array2obj(data,"name"),optionData=getData(data);function getArrayValue(e,a){var a=a||"value",t=[];return e&&e.forEach(function(o){t.push(o[a])}),t}function array2obj(e,l){let a={};for(let t=0;t<e.length;t++){let o={name:e[t].name,value:e[t].value,percent:sumValue==0?0:(e[t].value/sumValue*100).toFixed(1)};data[t].percent=sumValue==0?0:(e[t].value/sumValue).toFixed(1),a[e[t][l]]=o}return a}function getData(e){var l={series:[],yAxis:[]};for(let a=0;a<e.length;a++){let t=null;switch(num){case 3:e[a].value==0?t=[{value:7.5,name:e[a].name,itemStyle:{color:"rgba(136,220,255,0.1)",borderWidth:0},tooltip:{show:!1},hoverAnimation:!1},{value:2.5,name:"",itemStyle:{color:"rgba(0,0,0,0)",borderWidth:0},tooltip:{show:!1},hoverAnimation:!1}]:t=[{value:7.5,name:e[a].name},{value:2.5,name:"",itemStyle:{color:"rgba(0,0,0,0)",borderWidth:0},tooltip:{show:!1},hoverAnimation:!1}];break;case 4:t=[{value:7.5,name:e[a].name,itemStyle:{color:"rgba(136,220,255,0.1)",borderWidth:0},tooltip:{show:!1},hoverAnimation:!1},{value:2.5,name:"",itemStyle:{color:"rgba(0,0,0,0)",borderWidth:0},tooltip:{show:!1},hoverAnimation:!1}];break;default:e[a].value==0?t=[{value:7.5,name:e[a].name,itemStyle:{color:"rgba(136,220,255,0.1)",borderWidth:0},tooltip:{show:!1},hoverAnimation:!1},{value:2.5,name:"",itemStyle:{color:"rgba(0,0,0,0)",borderWidth:0},tooltip:{show:!1},hoverAnimation:!1}]:t=[{value:parseFloat(e[a].percent)*75,name:e[a].name},{value:(1-parseFloat(e[a].percent))*75,name:"",itemStyle:{color:"rgba(136,220,255,0.1)",borderWidth:0},tooltip:{show:!1},hoverAnimation:!1},{value:25,name:"",itemStyle:{color:"rgba(0,0,0,0)",borderWidth:0},tooltip:{show:!1},hoverAnimation:!1}];break}l.series.push({name:"",type:"pie",clockWise:!1,hoverAnimation:!1,radius:[73-a*15+"%",68-a*15+"%"],center,label:{show:!1},itemStyle:{label:{show:!1},labelLine:{show:!1},borderWidth:5},data:t}),l.series.push({name:"",type:"pie",silent:!0,z:1,clockWise:!1,hoverAnimation:!1,radius:[73-a*15+"%",68-a*15+"%"],center,label:{show:!1},itemStyle:{label:{show:!1},labelLine:{show:!1},borderWidth:5},data:[{value:7.5,itemStyle:{color:"rgb(3, 31, 62)",borderWidth:0},tooltip:{show:!1},hoverAnimation:!1},{value:2.5,name:"",itemStyle:{color:"rgba(0,0,0,0)",borderWidth:0},tooltip:{show:!1},hoverAnimation:!1}]}),l.yAxis.push(e[a].percent)}return l}option={backgroundColor:"#666",legend:{show:!0,icon:"circle",top:"12%",bottom:"40%",right:"0%",data:arrName,width:20,padding:[0,16],itemGap:9,formatter:e=>"{title|"+e+"}{value| "+objData[e].value+" }{value|("+objData[e].percent+"%)}",textStyle:{rich:{title:{fontSize:12,lineHeight:12,color:"#babe83"},value:{fontSize:14,lineHeight:20,color:"#fff"}}}},tooltip:{show:!0,trigger:"item",formatter:e=>(console.log("e",e),`${e.marker}${e.name}<br>${objData[e.name].value}(${objData[e.name].percent}%)`)},color:colorList,xAxis:[{show:!1}],series:optionData.series};