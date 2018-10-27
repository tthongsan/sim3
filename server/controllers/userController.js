module.exports = {
    register: (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        db.register_user([username, password]).then(users=> {
            res.status(200).send(users)
        })
    },
    login: (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        db.login_user([username, password]).then(users=> {
            res.status(200).send(users)
        })
    },
    getUsers: (req,res) => {
        const db = req.app.get('db');
        db.get_users().then(users => {
            res.json(users)
        })
    },
    updateUser: (req, res) => {
        const db = req.app.get('db');
        const {username} = req.body;
        const {id} = req.params;
        db.edit_user([username,id]).then(user => {
            res.json(user);
        })
    }
    
}