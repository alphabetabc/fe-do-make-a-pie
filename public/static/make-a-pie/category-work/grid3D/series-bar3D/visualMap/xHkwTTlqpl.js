var noise=new SimplexNoise(Math.random);function generateData(i,r,o){for(var n=[],a=0;a<=50;a++)for(var e=0;e<=50;e++){var t=noise.noise2D(a/20,e/20);valMax=Math.max(valMax,t),valMin=Math.min(valMin,t),n.push([a,e,t*2+4])}return n}var valMin=1/0,valMax=-1/0,data=generateData(2,-5,5);console.log(valMin,valMax),option={visualMap:{show:!1,min:2,max:6,inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"]}},xAxis3D:{type:"value"},yAxis3D:{type:"value"},zAxis3D:{type:"value",max:10,min:0},grid3D:{axisLine:{lineStyle:{color:"#fff"}},axisPointer:{lineStyle:{color:"#fff"}},viewControl:{},light:{main:{shadow:!0,quality:"ultra",intensity:1.5}}},series:[{type:"bar3D",data,shading:"lambert",label:{formatter:function(i){return i.value[2].toFixed(1)}}}]};
