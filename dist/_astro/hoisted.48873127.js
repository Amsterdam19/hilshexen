import"./hoisted.c3a4cedb.js";import"./index.cc9059a8.js";window.addEventListener("beforeunload",e=>{e.returnValue="Are you sure you want to leave?"});const l=document.getElementById("src"),v=document.getElementById("imgPreview");l.addEventListener("change",function(){a(l,v,"previewID","imgPreview")});const r=document.getElementById("imgSrc"),h=document.getElementById("previewTool");r.addEventListener("change",function(){a(r,h,"previewImg","previewTool")});function a(e,t,o,i){const d=e.files[0];if(d){document.getElementById(i).innerHTML="";const c=new FileReader;c.readAsDataURL(d),c.addEventListener("load",function(){t.style.display="grid",t.innerHTML='<img src="'+this.result+'" id="'+o+'" style="aspect-ratio: 4/3;max-width: 300px;overflow: hidden;object-fit: cover;" />'})}}function B(e){return document.getElementById(e).naturalWidth}function f(e){return document.getElementById(e).naturalHeight}const w=document.getElementById("genButton");w.addEventListener("click",L);function L(){const e=document.getElementById("imgSrc").files[0].name,t=document.getElementById("imgTitle").value,o=document.getElementById("output");o.innerHTML="!["+t+"](/"+e+' "'+t+'")'}const b=document.getElementById("genMDX");b.addEventListener("click",T);function T(){const e=document.getElementById("title").value,t=document.getElementById("description").value,o=document.getElementById("pubDate").value;let i=new Date().getFullYear().toString();const d="/images/"+i+"/"+e+"/"+document.getElementById("src").files[0].name;let c=B("previewID"),u=f("previewID");const s=document.getElementById("article").value;let g=`---
title: "`+e+`"
description: "`+t+`"
pubDate: "`+o+`"
src: "`+d+`"
width: "`+c+`"
height: "`+u+`"
---
import BlogImage from "../../components/Neues/BlogImage.astro";

`+s;const m=e+".mdx",y=new Blob([g],{type:"text/mdx"}),I=URL.createObjectURL(y),n=document.createElement("a");n.setAttribute("href",I),n.setAttribute("download",m),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n);const E=document.getElementById("dateiName"),p=document.getElementById("dateiImgPath");E.innerHTML=m,p.innerHTML="/images/"+i+"/"+e+"/"}
