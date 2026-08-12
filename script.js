
(function(){
  const key="avaSettings";
  let s={};
  try{s=JSON.parse(localStorage.getItem(key)||"{}")}catch(e){}
  const theme=s.theme||"light";
  document.documentElement.classList.toggle("dark",theme==="dark");
  document.body.classList.toggle("dark",theme==="dark");
  document.documentElement.style.fontSize=s.fontSize==="small"?"14px":s.fontSize==="large"?"18px":"16px";
  const m=document.getElementById("menu"), links=document.getElementById("links");
  if(m&&links)m.onclick=()=>links.classList.toggle("open");
  const y=document.getElementById("year"); if(y)y.textContent=new Date().getFullYear();
})();
