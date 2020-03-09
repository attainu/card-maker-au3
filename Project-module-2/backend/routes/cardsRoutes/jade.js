const router = require("express").Router();
const { jade, users } = require("../../connection/connection");
const auth = require("../../middlewares/auth");

router.post("/create", auth, async (req, res) => {
  try {
    const newCard = await jade.create(req.body);
    res.status(200).json(newCard);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.get("/:id/show", async (req, res) => {
  try {
    const findCard = await jade.findByPk(req.params.id, {
      include: [{ model: users, as: "userRef" }]
    });
    res.status(200).json(findCard);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/:id/edit", async (req, res) => {
  try {
    const updatedData = await jade.update(req.body, {
      where: { id: req.params.id }
    });
    res.json(updatedData);
    console.log(updatedData);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
