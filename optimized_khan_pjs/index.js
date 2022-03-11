//too lazy to do bundle files so just doing this
(function(){
  var l = e=>{
    var s = document.createElement("script")
    document.body.appendChild(s);
    s.src = e;
    return new Promise(r=>s.onload = r);
  };
  
  Promise.all([
    l("https://cdn.jsdelivr.net/gh/L1quidH2O/misc/optimized_khan_pjs/src/core_deps.js"),
    l("https://cdn.jsdelivr.net/gh/L1quidH2O/misc/optimized_khan_pjs/src/shared.js"),
    l("https://cdn.jsdelivr.net/gh/L1quidH2O/misc/optimized_khan_pjs/src/output_pjs_deps.js"),
    l("https://cdn.jsdelivr.net/gh/L1quidH2O/misc/optimized_khan_pjs/src/output.js"),
    l("https://cdn.jsdelivr.net/gh/L1quidH2O/misc/optimized_khan_pjs/src/output_pjs.js")
  ])
  .then(()=>(pjs_onready || function(){})());
})()
