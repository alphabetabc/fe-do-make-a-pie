var radarStyle=document.createElement("style"),str=`
    #radar:after {
	  content: ' ';
	  display: block;
	  background-image: linear-gradient(44deg, rgba(56, 107, 208, 0) 50%, #386bd0 100%);
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
`;radarStyle.styleSheet?radarStyle.styleSheet.cssText=str:radarStyle.innerHTML=str,document.getElementsByTagName("head")[0].appendChild(radarStyle);var radarDiv=document.createElement("div");radarDiv.id="radar",radarDiv.style.position="relative",radarDiv.style.width="500px",radarDiv.style.height="500px",radarDiv.style.margin="0 auto";var body=document.querySelector("body");body.appendChild(radarDiv);var mockData=[{text:"指标一",value:2},{text:"指标二",value:9},{text:"指标三",value:5},{text:"指标四",value:5},{text:"指标五",value:5}],container=document.getElementById("radar"),radar=echarts.init(container);initRadar(mockData);function initRadar(a){for(var t=10,r=[],i=[],n=0,d=c(360/t,a.length),e=0;e<360/t;e++)d.indexOf(e)>-1?(r.push({text:a[n].text}),i.push(a[n].value),n++):(r.push({text:e*10+"`"}),i.push("-"));var s={backgroundColor:"#fff",radar:[{indicator:r,center:["50%","50%"],radius:180,startAngle:90,splitNumber:4,shape:"circle",name:{show:!1},splitArea:{areaStyle:{color:"rgba(255, 255, 255, 0)"}},axisLine:{lineStyle:{color:"rgba(56, 107, 208, 0)"}},splitLine:{lineStyle:{color:"rgba(56, 107, 208, 1)",width:1.5}}}],series:[{name:"雷达图",type:"radar",symbol:"circle",symbolSize:24,silent:!0,animationEasing:"quarticOut",animationEasingUpdate:"quarticOut",animationDuration:2e3,animationDurationUpdate:2e3,label:{normal:{show:!0,textStyle:{color:"rgba(56, 107, 208, 1)"}}},itemStyle:{normal:{opacity:0},emphasis:{color:{type:"radial",x:.5,y:.5,r:.3,colorStops:[{offset:0,color:"rgba(56, 107, 208, 1)"},{offset:1,color:"rgba(255, 255, 255, .1)"}]},borderWidth:0,opacity:1}},data:[{value:i,label:{normal:{textStyle:{color:"rgba(56, 107, 208, 1)"}}},lineStyle:{normal:{opacity:0}}}]}]};radar.setOption(s);function c(m,u){for(var o=[],l=0;l<u;l++){var p=Math.round(Math.random()*(m-1));o.push(p)}return o}}(function(){var a=!1,t;setInterval(function(){initRadar(mockData),t=a?"downplay":"highlight",radar.dispatchAction({type:t,seriesIndex:0}),a=!a},2e3)})();
