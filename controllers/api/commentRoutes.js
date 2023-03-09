const router = require("express").Router();
const {Comment} = require("../../models");

router.post("/", async (req, res) => {
    try {
        const commentData = await Comment.create({
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            user_id: req.session.user_id,
        });
        res.status(200).json(commentData);
       
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;
       
    