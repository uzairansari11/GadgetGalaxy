const { OrderModel } =  require("../model/order.model");


const getOrders = async(req,res)=>{
    try {
        const data = await OrderModel.find();
        res.status(200).send(data);
      } catch (error) {
        res.status(400).send({ "msg" : error.message });
      }
}

const addOrder = async(req,res)=>{
    const data = req.body;
    try{
        const postedData = new OrderModel(data);
        await postedData.save();
        res.status(200).send({"msg":"New order data has been posted"})
    } 
    catch(err){
        res.status(400).send({ "msg" : error.message });
    }
}

module.exports = {
    getOrders,
    addOrder
}