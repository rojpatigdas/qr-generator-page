import { input } from '@inquirer/prompts'
import qr from 'qr-image'
import fs from 'fs'


const answer = await input({ message: 'Type in your URL: ' })
const toURL = new URL(answer)
var qr_svg = qr.image(toURL.href);
qr_svg.pipe(fs.createWriteStream('my_url.png'))

fs.writeFile('URL.txt', toURL.href, (err) => {
  if (err) throw err;
  console.log('The file has been saved!')
}); 


 

 


