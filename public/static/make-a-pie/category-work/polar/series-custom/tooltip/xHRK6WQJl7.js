var radarStyle=document.createElement("style"),str=`
    #radar:after {
	  content: ' ';
	  display: block;
	  background-image: linear-gradient(44deg, rgba(0, 255, 51, 0) 50%, #00ff33 100%);
	  width: 250px;
	  height: 250px;
	  position: absolute;
	  top: 30px;
	  left: 5px;
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
`;radarStyle.styleSheet?radarStyle.styleSheet.cssText=str:radarStyle.innerHTML=str,document.getElementsByTagName("head")[0].appendChild(radarStyle);var radarDiv=document.createElement("div");radarDiv.id="radar",radarDiv.style.position="relative",radarDiv.style.width="500px",radarDiv.style.height="500px",radarDiv.style.margin="0 auto";var body=document.querySelector("body");body.appendChild(radarDiv);let datas=[10,60];setInterval(()=>{datas[0]=Math.floor(Math.random()*(100-10))+10,datas[1]=Math.floor(Math.random()*(200-110))+110,myChart.setOption(option,"dark")},3e3);function renderItem(s={},l={}){const{cx:e,cy:a,r:n,r0:d}=s.coordSys||{},[r,o]=datas,y=r*Math.PI/180,p=o*Math.PI/180,t=i=>({text:`[角度值：${i}]`,x:e+n*Math.cos(i*Math.PI/180),y:a+n*Math.sin(i*Math.PI/180),fill:"#090"});return{type:"group",children:[{type:"sector",morph:!0,textContent:{type:"text",style:{text:`范围：【${datas.join()}】`}},shape:{cx:e,cy:a,r0:d,r:n,startAngle:y,endAngle:p},style:l.style({fill:l.visual("color")})},{type:"text",x:10,style:{...t(r)}},{type:"text",x:10,style:{...t(o)}},{type:"line",shape:{x1:e,x2:t(r).x,y1:a,y2:t(r).y},style:{fill:"#903",stroke:"#f09",lineWidth:1}},{type:"line",shape:{x1:e,x2:t(o).x,y1:a,y2:t(o).y},style:{fill:"#903",stroke:"#f09",lineWidth:1}}]}}option={polar:{},tooltip:{},grid:{width:500,height:500,x:0,y:0},backgroundColor:"#060f4c",darkMode:!0,angleAxis:{type:"category",data:["270","315","0","45","90","135","180","225"],boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"#eee",type:"dashed"}},axisLine:{show:!1}},radiusAxis:{type:"category",data:[],z:100},series:[{name:"自定义阈值扇形图",type:"custom",coordinateSystem:"polar",itemStyle:{color:"#d14a61"},renderItem,data:datas}]};
