$.getJSON("/asset/get/s/data-1491916702551-rJDoP856x.json",function(e){var b=e.edges.map(function(r){return{source:r[0],target:r[1],value:2}}),g=[],t={},a=e.nodes.map(function(r){return t[r[3]]||(g.push({name:r[3]}),t[r[3]]=!0),{x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,symbolSize:r[2],category:r[3],value:1}});myChart.setOption({color:["rgb(203,239,15)","rgb(73,15,239)","rgb(239,231,15)","rgb(15,217,239)","rgb(30,15,239)","rgb(15,174,239)","rgb(116,239,15)","rgb(239,15,58)","rgb(15,239,174)","rgb(239,102,15)","rgb(239,15,15)","rgb(15,44,239)","rgb(239,145,15)","rgb(30,239,15)","rgb(239,188,15)","rgb(159,239,15)","rgb(159,15,239)","rgb(15,239,44)","rgb(15,239,87)","rgb(15,239,217)","rgb(203,15,239)","rgb(239,15,188)","rgb(239,15,102)","rgb(239,58,15)","rgb(239,15,145)","rgb(116,15,239)","rgb(15,131,239)","rgb(73,239,15)","rgb(15,239,131)","rgb(15,87,239)","rgb(239,15,231)"],series:[{type:"graphGL",nodes:a,edges:b,categories:g.sort(function(r,n){return r.name-n.name}),lineStyle:{color:"rgba(28,28,28,28.2)"},itemStyle:{opacity:1},forceAtlas2:{steps:1,stopThreshold:1,jitterTolerence:10,edgeWeight:[.2,1],gravity:0,edgeWeightInfluence:1,scaling:.2}}]})});