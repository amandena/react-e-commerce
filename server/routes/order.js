const router = require("express").Router()
const Order = require("../models/Order")
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken")

// CREATE 
router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body)

  try {
    const savedOrder = await newOrder.save()
    res.status(200).json(savedOrder)
  } catch (err) {
    res.status(500).json(err)
  }
})

// UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findOneAndUpdate(
      req.params.id, {
      $set: req.body 
    }, {new: true})
    res.status(200).json(updatedOrder)
  } catch (err) {
    res.status(500).json(err)
  }
})

// DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id)
    res.status(200).json("Order has been deleted!")
  } catch (err) {
    res.status(500).json(err)
  }
})

// GET USER ORDERS
router.get("/:userId", verifyTokenAndAuth, async (req, res) => {
  try {
    const order = await Order.findOne({ userId: req.params.userId })
    res.status(200).json(order)
  } catch (err) {
    res.status(500).json(err)
  }
})

// //GET ALL 
// router.get("/", verifyTokenAndAdmin, async (req, res) => {
//   try {
//     const carts = await Cart.find()
//     res.status(200).json(carts)
//   } catch (err) {
//     res.status(500).json(err)
//   }
// })

module.exports = router