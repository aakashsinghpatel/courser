var ract  =  require('./rectangle');

solveract = (l,b) => {
ract(l,b, (err, res) => {
   if (err) {
       console.log(err)
   } else {
       console.log(res.area())
       console.log(res.perameter())
   }
})
}


solveract(0,1);
solveract(10,10);