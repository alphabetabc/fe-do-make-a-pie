var radarStyle=document.createElement("style"),str=`
    #radar:after {
	  content: ' ';
	  display: block;
	  background-image: linear-gradient(44deg, rgba(0, 255, 51, 0) 50%, #00ff33 100%);
	  width: 180px;
	  height: 180px;
	  position: absolute;
	  top: 14%;
	  left: 14%;
	  animation: radar-beam 4s infinite;
	  animation-timing-function: linear;
	  transform-origin: bottom right;
	  border-radius: 100% 0 0 0;
	}
	@keyframes radar-beam {
	  0% {
	    transform: rotate(0deg);
	  }
	  100% {
	    transform: rotate(360deg);
	  }
	}
`;radarStyle.styleSheet?radarStyle.styleSheet.cssText=str:radarStyle.innerHTML=str,document.getElementsByTagName("head")[0].appendChild(radarStyle);var radarDiv=document.createElement("div");radarDiv.id="radar",radarDiv.style.position="relative",radarDiv.style.width="500px",radarDiv.style.height="500px",radarDiv.style.margin="0 auto";var body=document.querySelector("body");body.appendChild(radarDiv);var mockData=[{text:"指标一",value:2},{text:"指标二",value:3.2},{text:"指标三",value:5},{text:"指标四",value:4.1},{text:"指标五",value:2.8}],container=document.getElementById("radar"),radar=echarts.init(container);initRadar(mockData);function initRadar(a){for(var e=10,r=[],i=[],n=0,d=c(360/e,a.length),t=0;t<360/e;t++)d.indexOf(t)>-1?(r.push({text:a[n].text}),i.push(a[n].value),n++):(r.push({text:t*10+"`"}),i.push("-"));var s={backgroundColor:"#333",radar:[{indicator:r,center:["50%","50%"],radius:180,startAngle:90,splitNumber:4,shape:"circle",name:{show:!1},splitArea:{areaStyle:{color:"rgba(255, 255, 255, 0)"}},axisLine:{lineStyle:{color:"rgba(0, 255, 51, 0)"}},splitLine:{lineStyle:{color:"rgba(0, 255, 51, 1)"}}}],series:[{name:"雷达图",type:"radar",symbol:"circle",symbolSize:24,silent:!0,animationEasing:"quarticOut",animationEasingUpdate:"quarticOut",animationDuration:2e3,animationDurationUpdate:2e3,label:{normal:{show:!0,textStyle:{color:"rgba(0, 255, 51, 1)"}}},itemStyle:{normal:{opacity:0},emphasis:{color:{type:"radial",x:.5,y:.5,r:.3,colorStops:[{offset:0,color:"rgba(0, 255, 51, 1)"},{offset:1,color:"rgba(255, 255, 255, .1)"}]},borderWidth:0,opacity:1}},data:[{value:i,label:{normal:{textStyle:{color:"rgba(0, 255, 51, 1)"}}},lineStyle:{normal:{opacity:0}}}]}]};radar.setOption(s);function c(m,u){for(var o=[],l=0;l<u;l++){var p=Math.round(Math.random()*(m-1));o.push(p)}return o}}(function(){var a=!1,e;setInterval(function(){initRadar(mockData),e=a?"downplay":"highlight",radar.dispatchAction({type:e,seriesIndex:0}),a=!a},2e3)})();
