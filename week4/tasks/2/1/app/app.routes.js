"use strict";
var index_1 = require('./register/index');
var index_2 = require('./users/index');
var index_3 = require('./words/index');
var index_4 = require('./login/index');
exports.routes = [
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    }
].concat(index_4.LoginRoutes, index_1.RegisterRoutes, index_2.UsersRoutes, index_3.WordsRoutes);
//# sourceMappingURL=app.routes.js.map