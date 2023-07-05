const Product = require('../model/product');



exports.addProduct=(req,res,next)=>{
    console.log(req.body)
    const nam = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const quantity = req.body.quantity;
    console.log(nam,description,price,quantity)
    
    Product.create({
        title:nam,
        price:price,
        quantity:quantity,
        description:description

    }).then(result=>{
        res.json(result)
        console.log('Created Product');
    }).catch(err=>console.log(err));
}

exports.getProducts = (req, res, next) => {
    Product.findAll()
    .then(products=>{
      res.json(products)
      //res.json({data:'Hello From Kamalesh'})
    }).catch(err=>{
      console.log(err)
    });
};

exports.buyProduct=(req,res,next)=>{
    const prodid=req.params.ID;
    const prodnam = req.body.name;
    const proddescription = req.body.description;
    const prodprice = req.body.price;
    const prodquantity = req.body.quantity;
    console.log("Product ID :",prodid)
    console.log("Product name :",prodnam)
    console.log("Product desc :",proddescription)
    console.log("Product price :",prodprice)
    console.log("Product quantity :",prodquantity)
    
    Product.findByPk(prodid).then(product=>{
        product.title=prodnam;
        product.price=prodprice;
        product.quantity=prodquantity;
        product.description=proddescription;
        return product.save();
    }).then(result=>{
        console.log("Product Updated");
        res.json("Done")
    }).catch(err=>{
        console.log(err)
      });
}

exports.productdelete=(req,res,next)=>{
    const prodid=req.params.ID;
    console.log(prodid)
    
    Product.findByPk(prodid)
    .then(product=>{
        return product.destroy();
    }).then(result=>{
        res.json(result)
        console.log('User Deleted')
    })
    .catch(err=>{
        console.log(err)
    });
}