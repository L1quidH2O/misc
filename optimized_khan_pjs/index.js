//too lazy to do bundle files so just doing this
(function(){
  var l = e=>{
    var s = document.createElement("script")
    document.body.appendChild(s);
    s.src = e;
    return new Promise(r=>s.onload = r);
  };
  
  Promise.all([
    l("./src/core_deps.js"),
    l("./src/shared.js"),
    l("./src/output_pjs_deps.js"),
    l("./src/output.js"),
    l("./src/output_pjs.js")
  ])
  .then(()=>(pjs_onready || function(){})());
})()
