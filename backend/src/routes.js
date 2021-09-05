const express = require('express');
const connection = require('./database/connection');

const routes = express.Router();
const PartController = require('./controllers/PartController');
const DeviceController = require('./controllers/DeviceController');
const RelayController = require('./controllers/RelayController');


routes.get('/parts',PartController.list );
routes.get('/partsA',PartController.listActive );
routes.get('/parts/:part_id',PartController.index);
routes.post('/newparts', PartController.create );
routes.post('/updateparts', PartController.update );


routes.post('/newdevice', DeviceController.create);
routes.post('/updatedevice', DeviceController.update );
routes.get('/devices', DeviceController.list );
routes.get('/devices/:dev_id', DeviceController.index );
routes.get('/devicesPart/:dev_part', DeviceController.devicesForParts );
routes.delete('/devices/:dev_id', DeviceController.delete );

routes.post('/inverterRelay', RelayController.inverterRelay);

module.exports = routes;