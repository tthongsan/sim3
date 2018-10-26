module.exports = {
    register: (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        db.register_user([username, password]).then(users=> {
            res.status(200).send(users)
        })
    },
    updateUser: (req,res) => {
        const db = req.app.get('db');
        const {username} = req.body;
        db.update_user(username).then(user => {
            res.json(user)
        })
    }
}