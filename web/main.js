import * as Utils from "../gtk/utils.mjs"
import * as Less from "less"
import { minify } from 'csso';
import "./style.css"

const compile_btn = document.getElementById("compile-btn")
const progress = document.getElementById("progress")
const result = document.getElementById("result")
const gtk = document.getElementById("gtk")

compile_btn.onclick = () => {
  let accent_name = "blue"
  const checked_accent = document.querySelector('input[name="accent"]:checked')
  if (checked_accent) accent_name = checked_accent.value

  compile_btn.disabled = true
  result.style.display = "none"
  progress.innerText = "Compiling..."
  let less_input = "@import \"DNOME.less\";"

  less_input += `@accent_name: "${accent_name}";`
  if (gtk.value != "") {
    const gtk_variables = Utils.get_gtk_colors(gtk.value)
    const less = Utils.generate_less(gtk_variables)
    const gtk_less_variables = Utils.gtk_variables_to_less(gtk_variables)
    const template = Utils.generate_file_content(gtk_less_variables, less)
    less_input += template
    less_input += "@import \"modules/variables/css.less\";"
  }

  Less.render(less_input)
    .then(out => {
      progress.innerText = "Finished!"
      compile_btn.disabled = false
      result.style.display = "inline-flex"
      result.innerText = minify(out.css, { comments: false }).css
    })
    .catch(err => {
      compile_btn.disabled = false
      progress.innerText = `Oh oh!\n${err}`
    })
}
