import userRoutes from '../modules/users/users.routes.js'
import cowsRoutes from '../modules/cows/cows.routes.js'
import quarantineRoutes from '../modules/quarantine/quarantine.routes.js';
const apiV1Routes = (app) => {

    app.use('/users', userRoutes);
    app.use('/cows', cowsRoutes);
    app.use('/quarantine', quarantineRoutes)
}

export default apiV1Routes;