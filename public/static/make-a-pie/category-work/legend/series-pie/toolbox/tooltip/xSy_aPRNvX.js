var scaleData=[{name:"工程建设",value:10},{name:"产权交易",value:10},{name:"土地交易",value:30},{name:"其他交易",value:10},{name:"土地交易",value:10},{name:"其他交易",value:10}],rich={white:{color:"#ddd",align:"center",padding:[3,0]}},placeHolderStyle={normal:{label:{show:!1},labelLine:{show:!1},color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}};function bg2(){return"#"+Math.floor(Math.random()*16777215).toString(16)}function rancolors(r){for(var a=[],e=0;e<=r;e++){var o=bg2();a.push(o);for(var e=0;e<a.length;e++)(a[e]=o)&&(a[e]=bg2())}return a}for(var data=[],color=rancolors(7),i=0;i<scaleData.length;i++)data.push({value:scaleData[i].value,name:scaleData[i].name,itemStyle:{normal:{borderWidth:50,shadowBlur:100,borderColor:color[i],shadowColor:color[i]}}},{value:50,name:"",itemStyle:placeHolderStyle});var seriesObj=[{name:"",type:"pie",clockWise:!1,radius:[100,200],hoverAnimation:!1,itemStyle:{normal:{label:{show:!0,position:"outside",color:"#ddd",formatter:function(r){for(var a=0,e=0,o=0;o<scaleData.length;o++)e+=scaleData[o].value;return a=(r.value/e*100).toFixed(0),r.name!==""?r.name+`
{white|占比`+a+"%}":""},rich},labelLine:{length:30,length2:100,show:!0,color:"#00ffff"}}},data}];option={backgroundColor:"#04243E",tooltip:{show:!1},legend:{show:!1},toolbox:{show:!1},series:seriesObj};
