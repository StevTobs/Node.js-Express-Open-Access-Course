const os = require('os');

const local = {  
  'Home Directory': os.homedir(),    
  'Operating System': os.type(),
  'Last Reboot': os.uptime()
}


console.log(local[0]);

let x = 'silly';



console.log(`I like the ${x} fools band.`);

