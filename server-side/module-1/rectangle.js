    module.exports =  (l, b, callback) => {
        if(l<= 0 || b<=0) {
            setTimeout(() => {
                callback(new Error(' the entered value is not computale'), null)
            }, 2000);
        } else {
            setTimeout(() => {
            callback(null, {
                area :  () => l*b,
                perameter: () => 2*(l+b)
            })}, 2000);
                
        }
    };
