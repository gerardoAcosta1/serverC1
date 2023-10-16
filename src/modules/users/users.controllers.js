import {users} from '../../models/users.model.js'
const createUser =  async (req, res) => {
    try {
        const user = req.body;

        const foundUser = await users.findOne({
            where: { username: user.username }
        })

        if (foundUser) {
            return res.status(403).json({ message: 'ya existe el usuario' })
        }
        const newUser = await users.create(user)
        res.json(newUser);

    } catch (error) {
        res.status(500).json({ error: 'Error al crear usuario' });
        console.log(error)
    }
}
const getAnUser = async (req, res) => {
    try {
        const username = req.params.username;

        const user = await users.findOne({
            where: { username: username }
        })

        if (!user) {
            return res.status(403).json({ message: 'No se encontró el usuario' })
        }

        res.json(user);

    } catch (error) {
        res.status(500).json({ error: 'Error al obtener usuario' });
        console.log(error)
    }
}

export {createUser, getAnUser}