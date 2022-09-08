const createSvg=({radius:t,startAngle:s,endAngle:e,shadowColor:o,shadowBlur:n})=>{const a=t*(1+Math.cos(s)),c=t*(1-Math.sin(s)),i=t*(1+Math.cos(e)),h=t*(1-Math.sin(e)),r=[`M${t} ${t}`];r.push(`L${a} ${c}`),r.push(`A${t} ${t} 0 ${Math.abs(e-s)>Math.PI?1:0} 1 ${i} ${h}`),r.push("Z");const l=r.join(" ");return`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
            x="0px" y="0px" 
            width="${t*2}"
            height="${t*2}"
        >
            <style>
                .st1 {
                    fill: transparent;
                    stroke: ${o};
                    stroke-width: ${n}px;
                    filter: url(#chart-inset-shadow);
                    clip-path: url(#chart-clip);
                }

            </style>
            <defs>
              
                <clipPath id="chart-clip">
                    <path d="${l}" />
                </clipPath>
                
                <filter id="chart-inset-shadow" width="200%" height="200%" x="-50%" y="-50%">
            		<feGaussianBlur in="SourceGraphic" result="gass" stdDeviation="${n*.75}" />
            		<feMerge>
            			<feMergeNode in="gass" />
            		</feMerge>
            	</filter>

            </defs>
            <g>
                <path class="st1" d="${l}" />
            </g>
        </svg>
    `},cretateSvgUrl=t=>{const s=createSvg(t),e=new Blob([s],{type:"image/svg+xml;charset=utf-8"});return(window.URL||window.webkitURL||window).createObjectURL(e)},dataSet=[["项目1","项目2","项目3","项目4","项目5"],[100,90,80,66,90]],radius="56%",center=["50%","50%"],dataToPie=t=>{const s=t.reduce((o,n,a)=>{const c=a===0?0:o[a-1];return o.push(c+n),o},[]),e=s[t.length-1];return s.map((o,n)=>{const a=Math.PI*.5-o/e*Math.PI*2;return{startAngle:a+t[n]/e*Math.PI*2,endAngle:a,value:t[n]}})},pieData=dataToPie(dataSet[1]);option={backgroundColor:"#000000",tooltip:{},polar:{radius,center},angleAxis:{type:"category",clockwise:!1,boundaryGap:!1,splitLine:{show:!1},axisLine:{show:!1}},radiusAxis:{type:"value",max:100,splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1}},series:[{type:"custom",name:"s1-inset-shadow",silent:!0,coordinateSystem:"polar",data:dataSet[1],renderItem:(t,s)=>{const e=t.coordSys.r,o=t.coordSys.cx,n=t.coordSys.cy,a=o-e,c=n-e,i=2*e,h=2*e,r=s.value(0),l=s.value(1),g=pieData[l];return console.log(t,g),{type:"image",style:{image:cretateSvgUrl({radius:e,startAngle:g.startAngle,endAngle:g.endAngle,shadowColor:"rgba(13, 178, 255, 1)",shadowBlur:30}),x:a,y:c,width:i,height:h}}}},{type:"pie",data:dataSet[1],radius,center,itemStyle:{color:"transparent",borderColor:"yellowgreen"}}]};
