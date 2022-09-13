const createSvg=({width:s,height:t,borderWidth:o,startColor:n,endColor:a,insetShadowBlur:c,outShadowBlur:h})=>{const e=3*h,r=s+2*e,l=t+2*e,i=`m${e} ${e} l${s} ${0} l${0} ${t} l${-s} ${0-20} z`;return`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
            x="0px" y="0px" 
            viewBox="0 0 ${r} ${l}"
            xml:space="preserve"
        >
            <style>
               
                .st1 {
                    fill: transparent;
                    stroke: ${n};
                    stroke-width: ${c}px;
                    filter: url(#chart-inset-shadow);
                    clip-path: url(#chart-clip);
                }
                
                .st2 {
                    fill: transparent;
                    stroke: url(#chart-gradient);
                    stroke-width: ${o}px;
                    clip-path: url(#chart-clip);
                }
               
                .st3 {
                    fill: transparent;
                    stroke: url(#chart-gradient);
                    stroke-width: ${h}px;
                    filter: url(#chart-outset-shadow);
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
                    <stop offset="0%" stop-color="${n}"/>
                    <stop offset="100%" stop-color="${a}"/>
                </linearGradient>
                
                <clipPath id="chart-clip">
                    <path d="${i}" />
                </clipPath>
                
                <filter id="chart-inset-shadow" width="200%" height="200%" x="-50%" y="-50%">
            		<feGaussianBlur in="SourceGraphic" result="gass" stdDeviation="${c*.75}" />
            		<feMerge>
            			<feMergeNode in="gass" />
            		</feMerge>
            	</filter>

                <filter id="chart-outset-shadow" width="200%" height="200%" x="-50%" y="-50%">
            		<feGaussianBlur in="SourceGraphic" result="gassOut" stdDeviation="3" />
            		<feMerge>
            			<feMergeNode in="gassOut" />
            		</feMerge>
            	</filter>
            	
                <clipPath id="chart-move-clip">
                    <rect class="sweep-slow-animate" x="0" y="0" width="${r}" height="${l}" />
                </clipPath>
            </defs>
            <g>
                <path class="st1" d="${i}" />
                <path class="st2" d="${i}" />
                <path class="st3" d="${i}" />
            </g>
        </svg>
    `},cretateSvgUrl=s=>{const t=createSvg(s),o=new Blob([t],{type:"image/svg+xml;charset=utf-8"});return(window.URL||window.webkitURL||window).createObjectURL(o)},dataSet=[["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],[120,200,150,80,70,110,130]];option={backgroundColor:"#101631",xAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"rgba(255,255,255, 0.5)"},splitLine:{show:!1},data:dataSet[0]},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"rgba(255,255,255, 0.5)"},splitLine:{show:!0,lineStyle:{type:"dashed",color:"rgba(255,255,255,0.1)",width:2}}},series:[{type:"custom",hoverAnimation:!0,renderItem:(s,t)=>{const o=t.value(0),n=t.value(1),a=t.coord([o,n]);console.log(t.style(),s);const c=t.coord([0,0])[1],h=50,e=5,r=h+3*e,l=c-a[1]+6*e,i=a[0]-r*.5,d=a[1]-3*e,p=cretateSvgUrl({width:r,height:l,borderWidth:5,startColor:"#156dff",endColor:"#00eaeb",insetShadowBlur:16,outShadowBlur:e});return{type:"image",style:{image:p,x:i,y:d,width:r,height:l}}},data:dataSet[1]}]};
