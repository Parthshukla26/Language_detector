import { franc  } from "franc";
import langs from "langs";
import colors from "colors";
const input=process.argv[2];
const lang_code=franc(input);
if(lang_code=='und'){
    console.log("Sorry we can't detect the language".red);
}
else{
const lang_obj=langs.where("3", lang_code);
console.log("Our Best Guess is --->".rainbow ,`${lang_obj.name}`.green
);
}