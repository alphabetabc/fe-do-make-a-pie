var UPDATE_DURATION=100;window.AudioContext=window.AudioContext||window.webkitAudioContext;var audioContext=new AudioContext,oReq=new XMLHttpRequest;oReq.open("GET","/asset/get/s/data-1544969115462-_FKVRfnIK.mp3",!0),oReq.responseType="arraybuffer",oReq.onload=function(d){audioContext.decodeAudioData(oReq.response,initVisualizer)},oReq.send();function initVisualizer(d){inited=!0;var a=audioContext.createBufferSource();a.buffer=d,a.noteOn?a.noteOn(0):a.start(0);var n=audioContext.createAnalyser(),o=audioContext.createGain();n.fftSize=4096,o.gain.value=1,a.connect(o),o.connect(n),n.connect(audioContext.destination);var f=n.frequencyBinCount,v=new Uint8Array(f),e=0;function p(){n.getByteFrequencyData(v);for(var A=[],t=50,c=[],i=0;i<t*t;i++){var l=i%t,h=Math.floor(i/t),s=l-t/2,u=h-t/2,r=Math.atan2(u,s);r<0&&(r=Math.PI*2+r);var m=Math.sqrt(s*s+u*u),w=Math.min(f-1,Math.round(r/Math.PI/2*60+m*60)+100),y=Math.pow(v[w]/100,3);c.push([l,h,Math.max(y,.1)])}myChart.setOption({grid3D:{viewControl:{beta:e,alpha:Math.sin(e/10+40)*(e%10+5)/15*30+30,distance:Math.cos(e/50+20)*(e%10+5)/15*50+80,animationDurationUpdate:UPDATE_DURATION,animationEasingUpdate:"linear"}},series:[{data:c}]}),e+=2,setTimeout(p,UPDATE_DURATION)}p()}option={tooltip:{},visualMap:{show:!1,min:.1,max:4,inRange:{color:["#010103","#2f490c","#b0b70f","#fdff44","#fff"]}},xAxis3D:{type:"value"},yAxis3D:{type:"value"},zAxis3D:{type:"value",min:-6,max:6},grid3D:{show:!1,environment:"#000",viewControl:{distance:100},postEffect:{enable:!0,FXAA:{enable:!0}},light:{main:{shadow:!0,intensity:10,quality:"high"},ambientCubemap:{texture:"/asset/get/s/data-1491896094618-H1DmP-5px.hdr",exposure:0,diffuseIntensity:.2}}},series:[{type:"bar3D",silent:!0,shading:"lambert",data:[],barSize:1,lineStyle:{width:4},animationDurationUpdate:UPDATE_DURATION}]};
