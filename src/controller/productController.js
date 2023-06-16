//controller là xử lý chức năng
const getProduct =(req,res)=>{
    res.send("get product")
};
const createProduct = (req,res)=>{
    res.send("Create product")
}


export{
    getProduct,
    createProduct
}