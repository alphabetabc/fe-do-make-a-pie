function createNodes(a,s){for(var o=[],e=0;e<a;e++)for(var r=0;r<s;r++)o.push({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,value:1});return o}function createEdges(a,s){for(var o=[],e=0;e<a;e++)for(var r=0;r<s;r++)e<a-1&&o.push({source:e+r*a,target:e+1+r*a,value:1}),r<s-1&&o.push({source:e+r*a,target:e+(r+1)*a,value:1});return o}var nodes=createNodes(50,50),edges=createEdges(50,50);option={series:[{type:"graphGL",nodes,edges,itemStyle:{color:"rgba(255,255,255,0.8)"},lineStyle:{color:"rgba(255,255,255,0.8)",width:3},forceAtlas2:{steps:5,jitterTolerence:10,edgeWeightInfluence:4}}]};
