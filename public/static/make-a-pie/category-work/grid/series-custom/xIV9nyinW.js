const createSvg=({width:o,height:e,borderWidth:a,startColor:r,endColor:s,insetShadowBlur:n,slope:l=20,left:c=!0})=>{let t="";return c?t=`m${0} ${0} l${o} ${0} l${0} ${e} l${-o} ${0-l} z`:t=`m${0} ${0} l${o} ${0} l${0} ${e-l} l${-o} ${l} z`,`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
            x="0px" y="0px" 
            viewBox="0 0 ${o} ${e}"
            xml:space="preserve"
        >
            <style>
               
                .st1 {
                    fill: transparent;
                    stroke: ${r};
                    stroke-width: ${n}px;
                    filter: url(#chart-inset-shadow);
                    clip-path: url(#chart-clip);
                }
                
                .st2 {
                    fill: transparent;
                    stroke: url(#chart-gradient);
                    stroke-width: ${a}px;
                    clip-path: url(#chart-clip);
                }
               

                .sweep-slow-animate {
                  animation-name: sweep-slow-path;
                  animation-timing-function: linear;
                  animation-iteration-count: infinite;
                  animation-duration: 12s;
                }
            
                @keyframes sweep-slow-path {
                  0% {
                    transform: translateY(0%);
                  }
                  100% {
                    transform: translateY(100%);
                  }
                }
            </style>
            <defs>
                <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="${r}"/>
                    <stop offset="100%" stop-color="${s}"/>
                </linearGradient>
                
                <clipPath id="chart-clip">
                    <path d="${t}" />
                </clipPath>
                
                <filter id="chart-inset-shadow" width="200%" height="200%" x="-50%" y="-50%">
            		<feGaussianBlur in="SourceGraphic" result="gass" stdDeviation="${n*.75}" />
            		<feMerge>
            			<feMergeNode in="gass" />
            		</feMerge>
            	</filter>

                <clipPath id="chart-move-clip">
                    <rect class="sweep-slow-animate" x="0" y="0" width="${o}" height="${e}" />
                </clipPath>
            </defs>
            <g>
                <path class="st1" d="${t}" />
                <path class="st2" d="${t}" />
            </g>
        </svg>
    `},cretateSvgUrl=o=>{const e=createSvg(o),a=new Blob([e],{type:"image/svg+xml;charset=utf-8"});return(window.URL||window.webkitURL||window).createObjectURL(a)},dataSet=[["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],[120,200,150,80,70,110,130],[180,300,100,40,80,100,230]];option={backgroundColor:"#101631",xAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"rgba(255,255,255, 0.5)"},splitLine:{show:!1},data:dataSet[0]},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"rgba(255,255,255, 0.5)"},splitLine:{show:!0,lineStyle:{type:"dashed",color:"rgba(255,255,255,0.1)",width:2}}},series:[{type:"custom",hoverAnimation:!0,renderItem:(o,e)=>{const a=e.value(0),r=e.value(1),s=e.coord([a,r]),n=e.coord([0,0])[1],l=40,c=0,t=l,i=n-s[1],d=s[0]-t*.5-22,h=s[1],w=cretateSvgUrl({width:t,height:i,borderWidth:5,startColor:"#156dff",endColor:"#00eaeb",insetShadowBlur:16});return{type:"image",style:{image:w,x:d,y:h,width:t,height:i,shadowColor:"#156dff",shadowBlur:10}}},itemStyle:{color:"yellow",borderColor:"green",shadowColor:"green",shadowBlur:10},data:dataSet[1]},{type:"custom",hoverAnimation:!0,renderItem:(o,e)=>{const a=e.value(0),r=e.value(1),s=e.coord([a,r]);console.log(e.style(),r);const n=e.coord([0,0])[1],l=40,c=0,t=l,i=n-s[1],d=s[0]-t*.5+22,h=s[1],w=cretateSvgUrl({width:t,height:i,borderWidth:5,startColor:"#00eaeb",endColor:"#00eaeb",insetShadowBlur:16,left:!1});return{type:"image",style:{image:w,x:d,y:h,width:t,height:i,shadowColor:"#00eaeb",shadowBlur:10}}},itemStyle:{color:"yellow",borderColor:"green",shadowColor:"green",shadowBlur:10},data:dataSet[2]}]};
