var uploadedDataURL="/asset/get/s/data-1568175541645-ltY4Mkcpv.json";$.getJSON(uploadedDataURL,function(o){const d="transparent",l="whitesmoke",s="#666666",p="white",u="#bee7fb";$("body").css({background:"radial-gradient(#063d7e,#081a2e)",color:"#42423f","text-shadow":"0 1px 2px white","font-family":"隶书","font-weight":"bold"}),echarts.registerMap("china",o),option={title:[{text:"中華人民共和國地圖",left:"left",top:10,textStyle:{color:s,fontSize:28,textShadowColor:p,textShadowBlur:2}}]},option.globe={baseTexture:"/asset/get/s/data-1568168168276-rhs_FhJOs.jpg",heightTexture:"/asset/get/s/data-1568167925700-QJsl5Cr-a.jpg",displacementScale:.1,shading:"lambert",environment:"asset/get/s/data-1567743711128-O_8Ju_06S.jpg",realisticMaterial:{roughness:.9},viewControl:{autoRotate:!1,targetCoord:o.properties.center,distance:100},light:{ambient:{intensity:.1},main:{intensity:1.5}}},option.series=[];let i=[],c=o.properties;o.geometry.coordinates.forEach(function(t,r){t.forEach(function(a){i.push({name:c.name,value:r,coords:a.map(function(e){return[e.lng,e.lat]})})})}),option.series.push({type:"lines3D",polyline:!0,lineStyle:{color:"yellow",width:3.2},effect:{show:!0,trailWidth:2.1,trailColor:"red"},data:i}),i=[],o.features.forEach(function(t){let r=t.properties;t.geometry.coordinates.forEach(function(a,e){a.forEach(function(n){i.push({name:r.name,value:r.subFeatureIndex,coords:n})})})}),option.series.push({type:"lines3D",polyline:!0,lineStyle:{color:l,type:"dashed",width:1.2},effect:{show:!0,trailWidth:1.5,trailColor:"yellowgreen"},data:i}),option.series.push({type:"scatter3D",coordinateSystem:option.globe?"globe":"geo3D",symbolSize:6,symbol:"circle",itemStyle:{color:"white",borderColor:"darkgray",borderWidth:.52,opacity:1},label:{show:!0,formatter:"{b}",distance:0,textStyle:{color:s,textShadowColor:p,textShadowBlur:2,backgroundColor:d,borderColor:l,fontFamily:"隶书",fontSize:12,fontWeight:"bold",padding:0}},data:o.features.map(function(t,r,a){let e=t.properties;return{name:"省会",value:e.center}})}),option.series.push({silent:!0,zlevel:1,type:"scatter3D",coordinateSystem:option.globe?"globe":"geo3D",symbolSize:2,symbol:"circle",itemStyle:{color:"black",borderWidth:0,opacity:1},data:o.features.map(function(t,r,a){let e=t.properties;return{name:e.name,value:e.center}})}),option.series.push({type:"bar3D",coordinateSystem:"globe",barSize:.521,shading:"realistic",opacity:1,label:{show:option.geo3D?!option.geo3D.label.show:!0,formatter:"{b}",distance:10,textStyle:{color:s,textShadowColor:p,textShadowBlur:2,fontFamily:"隶书",fontSize:14,fontWeight:"bold",padding:2}},itemStyle:{color:l},data:o.features.map(function(t,r,a){let e=t.properties,n;return option.geo3D?n=a.length-(e.subFeatureIndex?e.subFeatureIndex:r):n=0,{name:e.name,value:e.center.concat(0)}})}),myChart.setOption(option)});
