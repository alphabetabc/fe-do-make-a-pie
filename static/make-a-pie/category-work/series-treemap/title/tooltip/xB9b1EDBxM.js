var testData=[{name:`已租

62%`,itemStyle:{color:"#C2C2D9"},value:62},{name:`已售

31.5%`,itemStyle:{color:" #FFBCA7"},value:31.5},{value:10,children:[{name:`自用

25.5%`,itemStyle:{color:"#FEDF9A"},value:25.5}]},{value:4,children:[{name:`空置

3.5%`,itemStyle:{color:"#FFDDD3"},value:3.5}]}],formatUtil=echarts.format;function getLevelOption(){return[{itemStyle:{normal:{borderWidth:0,gapWidth:5}}},{itemStyle:{normal:{gapWidth:5}}},{colorSaturation:[.3,.5],itemStyle:{normal:{gapWidth:5,borderColorSaturation:.6}}}]}myChart.setOption(option={title:{text:""},tooltip:{formatter:function(t){for(var o=t.value,a=t.treePathInfo,r=[],e=1;e<a.length;e++)r.push(a[e].name);return['<div class="tooltip-title">'+formatUtil.encodeHTML(r.join(""))+"</div>","占比: "+formatUtil.addCommas(o)+" %"].join("")}},series:[{name:"信用分类",type:"treemap",roam:!1,nodeClick:!1,width:600,height:300,breadcrumb:{show:!1},label:{show:!0,formatter:"{b}",fontSize:14},itemStyle:{normal:{borderColor:"#fff"}},levels:getLevelOption(),data:testData}]});
