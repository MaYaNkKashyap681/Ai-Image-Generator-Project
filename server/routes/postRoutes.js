const express = require("express");
var cloudinary = require("cloudinary").v2;
const PostModel = require("../mongodb/models/post.js");
const router = express.Router();

const cloud__name = "dib5nqqso";
const cl__api__key = "155573177836448";
const cl__api__secret = "C7EXA2ZCIW5W5UVaCPFHwwXt2os";

cloudinary.config({
  cloud_name: cloud__name,
  api_key: cl__api__key,
  api_secret: cl__api__secret,
});

//Get All Posts
router.route("/").get(async (req, res) => {
  try {
    const posts = await PostModel.find({});
    res.status(200).send({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await PostModel.create({
      name,
      prompt,
      photo: photoUrl.url,
    });

    res.status(200).json({ success: true, data: newPost });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to create a post, please try again",
    });
  }
});

module.exports = router;
