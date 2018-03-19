(function(){

    const dieSvgs = document.getElementsByClassName('die');

    Array.prototype.forEach.call(dieSvgs, function(elem){
        elem.onclick = function(e, x) {
            var that = this;
            that.classList.add('roll');        
            setTimeout(function(){
                that.classList.remove('roll');
            }, 1000);
        };
    });
    
})();