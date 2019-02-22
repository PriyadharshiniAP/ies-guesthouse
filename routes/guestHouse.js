var express = require('express');
var router = express.Router();
var multer = require('multer');
var gridfs = require('../daos/gridfsDao');
var mongodb = require('../daos/MongodDbUtil');
var guestHouseService = require('../services/guestHouseService');
var appLogger = require('../logging/appLogger');
var authService = require('../services/authService');
var config = require('../config/config.' + process.env.NODE_ENV);
var dbConfig = config.dbConfig;
const storage = require('multer-gridfs-storage')({
    url: dbConfig.url
});
const upload = multer({ storage: storage });

router.get('/getAllGuestHouse', authService.verifyCallerWithKeycloak, function (req, res) {
    guestHouseService.getAllGuestHouse(function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in getallguesthouses")
        }
        else {
            res.status(500).send(err);
            appLogger.error("error in getallguesthouses",err)
        }
    });
});
router.put('/updateGuestHouse', authService.verifyCallerWithKeycloak, function (req, res) {
    guestHouseService.updateGuestHouse(req.body.id, req.body.recordToEdit, function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in updating");
        }
        else {
            res.status(500).send(err);
            appLogger.error("error in updating ", err);
        }
    });
});
router.post('/createGuestHouse', authService.verifyCallerWithKeycloak, function (req, res) {
    guestHouseService.createGuestHouse(req.body, function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in creation");
        }
        else {
            res.status(500).send(err);
            appLogger.error("error in creation ", err);
        }
    });
});
router.delete('/deleteGuestHouse', authService.verifyCallerWithKeycloak, function (req, res) {
    guestHouseService.deleteGuestHouse(req.body.id, function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in deleting");
        }
        else {
            res.status(500).send(err);
            appLogger.error("error in deleting ", err);
        }
    });
});
//dropzone image
router.put('/file/upload', authService.verifyCallerWithKeycloak, upload.array("fileAttachment"), function (req, res, next) {
    if (!((req.files) && (req.files.length > 0))) {
        res.send({ message: "No files to upload" });
        return;
    }
    res.send(req.files);
});
router.delete('/removeDirtyAttachment', function (req, res) {
    guestHouseService.removeDirtyAttachment(req.body.dirtyFileId, function (err, response) {
        if (!err) {
            res.send(response)
        }
        else {
            res.status(500).send(err);
        }
    })
})
router.get('/loadimg/:id/:originalname/:contentType/:contentType2', function (req, res, next) {
    var attachmentDetails = {
        id: req.params.id,
        originalname: req.params.originalname,
        contentType: req.params.contentType + "/" + req.params.contentType2
    }

    gridfs.openAttachment(attachmentDetails, res);
});

router.post('/createMasterData', authService.verifyCallerWithKeycloak, function (req, res) {
    guestHouseService.createMasterData(req.body, function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in creation");
        }
        else {
            res.status(500).send(err);
            appLogger.error("error in creation ", err);
        }
    });
});
router.get('/getAllMasterData', authService.verifyCallerWithKeycloak, function (req, res) {
    guestHouseService.getAllMasterData(function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in getallguesthouses")
        }
        else {
            res.status(500).send(err);
           // appLogger.error("error in getallguesthouses",err)
        }
    });
});
router.put('/updateMasterData', authService.verifyCallerWithKeycloak, function (req, res) {
    guestHouseService.updateMasterData(req.body.id, req.body.recordToEdit, function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in updating");
        }
        else {
            res.status(500).send(err);
            appLogger.error("error in updating ", err);
        }
    });
});
router.delete('/deleteMasterData', authService.verifyCallerWithKeycloak, function (req, res) {
    guestHouseService.deleteMasterData(req.body.id, function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in deleting");
        }
        else {
            res.status(500).send(err);
            appLogger.error("error in deleting ", err);
        }
    });
});
//Room Type
router.post('/createRoomType', authService.verifyCallerWithKeycloak, function (req, res) {
    guestHouseService.createRoomType(req.body, function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in creation");
        }
        else {
            res.status(500).send(err);
            appLogger.error("error in creation ", err);
        }
    });
});
router.get('/getAllRoomTypes', authService.verifyCallerWithKeycloak, function (req, res) {
    guestHouseService.getAllRoomTypes(function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in getallguesthouses")
        }
        else {
            res.status(500).send(err);
            appLogger.error("error",err)
        }
    });
});
router.get('/getSelectedRoomTypes/:id', authService.verifyCallerWithKeycloak, function (req, res) {
    guestHouseService.getSelectedRoomTypes(req.params.id,function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in getallguesthouses");
        }
        else {
            res.status(500).send(err);
            appLogger.error("error",err)
        }
    });
});

router.put('/updateRoomType', authService.verifyCallerWithKeycloak, function (req, res) {
    guestHouseService.updateRoomType(req.body.id, req.body.recordToEdit, function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in updating");
        }
        else {
            res.status(500).send(err);
            appLogger.error("error in updating ", err);
        }
    });
});
router.delete('/deleteRoomType', authService.verifyCallerWithKeycloak, function (req, res) {
    guestHouseService.deleteRoomType(req.body.id, function (err, response) {
        if (!err) {
            res.send(response.data);
            //appLogger.info("success in deleting");
        }
        else {
            res.status(500).send(err);
            appLogger.error("error in deleting ", err);
        }
    });
});
router.put('/file/uploadRoomType', authService.verifyCallerWithKeycloak, upload.array("roomTypeAttachment"), function (req, res, next) {
    if (!((req.files) && (req.files.length > 0))) {
        res.send({ message: "No files to upload" });
        return;
    }
    res.send(req.files);
});
router.delete('/removeRoomTypeAttachment', function (req, res) {
    guestHouseService.removeRoomTypeAttachment(req.body.dirtyFileId, function (err, response) {
        if (!err) {
            res.send(response)
        }
        else {
            res.status(500).send(err);
        }
    })
});
router.get('/loadimg/:id/:originalname/:contentType/:contentType2', function (req, res, next) {
    var imgAttachmentDetails = {
        id: req.params.id,
        originalname: req.params.originalname,
        contentType: req.params.contentType + "/" + req.params.contentType2
    }

    gridfs.openAttachment(imgAttachmentDetails, res);
});

///////////////////////FLOORS AND ROOMS/////////////////////////
router.post('/createFloorsandRooms', authService.verifyCallerWithKeycloak, function (req, res) {
    guestHouseService.createFloorsandRooms(req.body.recordToInsert, function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in creation");
        }
        else {
            res.status(500).send(err);
            appLogger.error("error in creation ", err);
        }
    });
});
////////////////////////////////////ROOM REQUEST////////////////////////////
router.post('/addRoomRequest', authService.verifyCallerWithKeycloak, function (req, res) {
    guestHouseService.addRoomRequest(req.body, function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in creation");
        }
        else {
            res.status(500).send(err);
            appLogger.error("error in creation ", err);
        }
    });
});
router.get('/getAllRoomRequest', authService.verifyCallerWithKeycloak, function (req, res) {
    guestHouseService.getAllRoomRequest(function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in getallguesthouses")
        }
        else {
            res.status(500).send(err);
            appLogger.error("error",err)
        }
    });
});
///////////////////////////////////Room View//////////////////////////
router.get('/getAllRooms', authService.verifyCallerWithKeycloak, function (req, res) {
    guestHouseService.getAllRooms(function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in getallguesthouses")
        }
        else {
            res.status(500).send(err);
            appLogger.error("error",err)
        }
    });
});
router.get('/checkAvailabilityforRooms', authService.verifyCallerWithKeycloak, function (req, res) {
    guestHouseService.checkAvailabilityforRooms(req.body, function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in creation");
        }
        else {
            res.status(500).send(err);
            appLogger.error("error in creation ", err);
        }
    });
});
router.get('/getById/:id', authService.verifyCallerWithKeycloak,  function (req, res, next) {
    var id = req.params.id;
    guestHouseService.getGuestHouseById(id, function (err, response) {
      if (!err) {
          res.send(response);
      }
      else {
        res.status(500).send(err);
        appLogger.error("error in creation ", err);
      }
  });
});
router.put('/saveEditedGuestHouse', authService.verifyCallerWithKeycloak, function (req, res) {
    guestHouseService.saveEditedGuestHouse(req.body.id, req.body.recordToEdit, function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in updating");
        }
        else {
            res.status(500).send(err);
            appLogger.error("error in updating ", err);
        }
    });
});
router.put('/saveEditedfloorsandRooms', authService.verifyCallerWithKeycloak, function (req, res) {
    guestHouseService.saveEditedfloorsandRooms(req.body.id, req.body.recordToEdit, function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in updating");
        }
        else {
            res.status(500).send(err);
            appLogger.error("error in updating ", err);
        }
    });
});
router.get('/getFloorById/:id', authService.verifyCallerWithKeycloak,  function (req, res, next) {
    var id = req.params.id;
    guestHouseService.getFloorsandRoomDetails(id, function (err, response) {
      if (!err) {
          res.send(response);
      }
      else {
        res.status(500).send(err);
        appLogger.error("error in creation ", err);
      }
  });
});
router.put('/updateGuestHouseFloorsandRooms', authService.verifyCallerWithKeycloak, function (req, res) {
    guestHouseService.updateGuestHouseFloorsandRooms(req.body.id, req.body.recordToEdit, function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in updating");
        }
        else {
            res.status(500).send(err);
            appLogger.error("error in updating ", err);
        }
    });
});
router.get('/getAllFloorsandRooms', authService.verifyCallerWithKeycloak, function (req, res) {
    guestHouseService.getAllFloorsandRooms(function (err, response) {
        if (!err) {
            res.send(response);
            //appLogger.info("success in getallguesthouses")
        }
        else {
            res.status(500).send(err);
            appLogger.error("error in getallguesthouses",err)
        }
    });
});

// router.get('/getDetail/:guestHouseId', function (req, res, next) {
//     guestHouseService.getDetail(req.params.guestHouseId, function (err, response) {
//         if (!err) {
//             res.send(response);
//         }
//         else {
//             res.status(500).send(err);
//         }
//     });
// });

module.exports = router;