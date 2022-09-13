for(var outname=["南海诸岛","天津","上海","重庆","河北","河南","云南","辽宁","黑龙江","湖南","安徽","山东","新疆","江苏","浙江","江西","湖北","广西","甘肃","山西","内蒙古","陕西","吉林","福建","贵州","广东","青海","西藏","四川","宁夏","海南","台湾","香港","澳门"],outvalue=[0,13,140,75,13,83,11,19,15,69,260,39,4,31,104,36,1052,33,347,9,157,22,4,18,5,2398,41,0,484,404,22,3,5,225],outdata=[],bjname=["北京"],bjvalue=[300],beijing=[],i=0;i<outname.length;i++)outdata.push({name:outname[i],value:outvalue[i]});for(var i=0;i<bjname.length;i++)beijing.push({name:bjname[i],value:bjvalue[i]});var geoCoordMap={},mapFeatures=echarts.getMap("china").geoJson.features;mapFeatures.forEach(function(e){console.info(e);var a=e.properties.name;geoCoordMap[a]=e.properties.cp});var convertData=function(e){for(var a=[],o=0;o<e.length;o++){var r=geoCoordMap[e[o].name];r&&a.push({name:e[o].name,value:r.concat(e[o].value)})}return a};option={backgroundColor:"#0F1C3C",tooltip:{show:!0,formatter:function(e){return e.value.length>1?"&nbsp;&nbsp;"+e.name+"&nbsp;&nbsp;&nbsp;"+e.value[2]+"人&nbsp;&nbsp;":"&nbsp;&nbsp;"+e.name+"&nbsp;&nbsp;&nbsp;"+e.value+"人&nbsp;&nbsp;"}},geo:{map:"china",show:!0,roam:!1,label:{emphasis:{show:!1}},layoutSize:"100%",itemStyle:{normal:{borderColor:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00F6FF"},{offset:1,color:"#53D9FF"}],!1),borderWidth:3,shadowColor:"rgba(10,76,139,1)",shadowOffsetY:0,shadowBlur:60}}},series:[{symbolSize:1,label:{normal:{formatter:function(e){return"{name|"+e.data.name+"}"},rich:{cnNum:{fontSize:14,color:"#D4EEFF",align:"center"},name:{fontSize:12,color:"#D4EEFF",align:"center",lineHeight:20}},color:"#D4EEFF",show:!0},emphasis:{show:!0}},itemStyle:{normal:{color:"#D4EEFF"}},name:"light",type:"scatter",coordinateSystem:"geo",data:convertData(outdata)},{type:"map",map:"china",aspectScale:.75,label:{normal:{show:!1},emphasis:{show:!1}},itemStyle:{normal:{areaColor:{x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#073684"},{offset:1,color:"#061E3D"}]},borderColor:"#215495",borderWidth:1},emphasis:{areaColor:{x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#073684"},{offset:1,color:"#061E3D"}]}}},data:outdata},{type:"scatter",coordinateSystem:"geo",label:{normal:{show:!1,color:"#fff",fontWeight:"bold",formatter:function(e){return"{cnNum|"+e.data.value[2]+"}"},rich:{cnNum:{fontSize:13,color:"#D4EEFF",left:"center"}}}},symbol:"image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC60lEQVRYR8WVS2gTURSG/zPJnbZaF1UDtslEu9BMKG6UbroSQbRaUSgiFB+4seBCRBARhCouXBRdCSoKoqgoiJQWQbpw0UUXCgpCycSFlUwSlagVX2nnZuZIqilNTTvJpDazm3vP+f/vnnMfhBp/VGN/VAXAgAKACLC9LqQqACPo35o31lO5Z7UBCIsbDHA0IY8uOQADwgiLj9MVSMiA1zZ4bkEs7Osi+IbyAIptd21I2U+8VMEzgKGJeyDq+WPKd/WEPLhkAOPrUD/liAmA6v8CTNYpsqn1HSYrhfBUgbim7mfCgyIz296np+xHSwJgaOoACHtmmzHjcdS0uv87wFgAjUqD+EIgUQQAlk5WrmzL4EclEDMtiGui3WFe7pqsKFsI6CsVR47T5wAjbhoK0c+IKV/k42YA3jQj6gg1f5Ra3QSqnB9XpLVrw3vEigDyP8ZqrECD+hCEzipNSqczBpG1Duif8L0QUPIUGCH/KRBdBJFvUUCYbTCf0ZO5/rl68x7DWIu/g3w0AKJAVRDMGbZ5bzSdGy25bxYSHw9gzVS9GARRuzcIHq3Lyu7WDD7Ml+96ETHgj2uiH0QnKoFg5ku6KU+7PVKuAAXTmCaGiWhbORDMGI6a1vZyYssCGANURRMTRLSsHFFm/uWYsqkNsNziywKIh3w7WfFV9tw6TqeezD1dFABDE9dA1OsmVjTPfFU35TG3nLIqEAuraQKa/xFjvj49VgqOkdZNK1g1QP6NYKLnc1aXAfOhQomNkH8HiO7MvTN8Od68Pi1fLgThWgFDUy+AcHZGhDHEjnUkmsLn2cKxIFaRot4CYXdhnIHz0YR1rkoA8RpEGwH+RsDxSELeXkgwHhaHHcYVImpk8KtoQm7yDGBoaAGpKWYeUVj2RJJIufU0P/+2GWstIe4D1AG2grqJtKebMBYWvWBu1M3cZQK4HPNZ5VcMzX9SYfoaScqbngDMEBq0JLKVGM+NddNw3YTVmJeTW3OA36BMBTBHLcIWAAAAAElFTkSuQmCC",symbolSize:[30,30],z:999,data:convertData(beijing)}]};