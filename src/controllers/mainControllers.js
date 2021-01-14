module.exports = {
    root: function(req, res, next) {
        res.render('index', { title: 'Express' });
      },

      behindPost: function(req, res, next) {

    let colorElegido = req.body.color
    
    req.session.color = colorElegido;
    
    
    if (req.body.recordar_color != undefined) {
      res.cookie("colorParaRecordar", colorElegido , {maxAge:60000})
    }
    
    
        res.render('colorElegido', {colorElegido:req.session.color})
    
         },
         
         color: function(req, res, next) {

            if (req.cookies.colorParaRecordar!= undefined && req.session.color == undefined) {
              req.session.color = req.cookies.colorParaRecordar
              } 
        
            res.render("color", {colorElegido: req.session.color})
        } ,

        delete:  function(req, res, next) {

            res.clearCookie("colorParaRecordar")
              
            res.redirect("/")
          }
}
