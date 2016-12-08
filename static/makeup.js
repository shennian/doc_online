function render(list) {
  var t = ''
  for (var i = 0; i < list.length; i++) {
    var options = list[i]
    t += unitRender(options)
  }
  template =
  `<div class="well sidebar-nav">
      <ul class="nav nav-list">
        ${t}
      </ul>
  </div>`
  return template
}

function unitRender(options) {
  if (options.subStruct == undefined) {
    return `<li data-link="${options.link ? '#' + options.link : 'abc'}">
              <a href="${options.link ? '#' + options.link : '#'}">${options.name}</a>
            </li>`
  } else {

    var t = ''
    var self = options.subStruct
    for (var i = 0; i < self.length; i++) {
      let options = self[i]
      t += unitRender(options)
    }
    var template = `<li>
               <a href="#">${options.name}</a>
               <ul class="nav nav-list hide">
                 ${t}
               </ul>
             </li>`
    return template
  }
}
