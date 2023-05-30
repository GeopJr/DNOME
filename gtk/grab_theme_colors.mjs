import { readFileSync, writeFileSync, existsSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { homedir } from "node:os"
import { exit } from "node:process"
import * as Utils from "./utils.mjs"

const __dirname = dirname(fileURLToPath(import.meta.url));
const GTK_CSS = join(homedir(), ".config", "gtk-4.0", "gtk.css")
const OUT = join(__dirname, "..", "src", "modules", "variables", "gtk.less")

if (!existsSync(GTK_CSS)) {
    console.error (`"${GTK_CSS}" does not exist`)
    exit (1)
}

console.log (`Reading "${GTK_CSS}"...`)
const source = readFileSync (GTK_CSS, "utf-8")
const gtk_variables = Utils.get_gtk_colors (source)
console.log (`Found ${Object.keys(gtk_variables).length} variables`)
console.log ("Generating file...")

const less = Utils.generate_less (gtk_variables)
const gtk_less_variables = Utils.gtk_variables_to_less (gtk_variables)
const template = Utils.generate_file_content (gtk_less_variables, less)
writeFileSync (OUT, template)

console.log ("Finished!")
console.log ("Be sure to change your Discord theme in settings to the version matching your custom theme (Light/Dark)")
