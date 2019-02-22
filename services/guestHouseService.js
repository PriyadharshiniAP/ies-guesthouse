var guestHouseDao = require('../daos/guestHouseDao');
var masterDataDao = require('../daos/masterDataDao');
var roomTypeDao = require('../daos/roomTypeDao');
var floorDao = require('../daos/floorDao');
var gridfsDao = require('../daos/gridfsDao');
var roomrequestDao = require('../daos/roomrequestDao');
var mongodb = require('../daos/MongodDbUtil');
var config = require('../config/config.' + process.env.NODE_ENV);
// var entitiesRemoteUrl = config.entitiesRemoteUrl;
// var moment = require('moment');


function createGuestHouse(recordToInsert, callback) {
    guestHouseDao.create(recordToInsert, callback);
}
function getAllGuestHouse(callback) {
    guestHouseDao.getAll(callback);
}
function updateGuestHouse(id, detailsToUpdate, callback) {
    guestHouseDao.updateById(id, detailsToUpdate, callback);
}
function deleteGuestHouse(id, callback) {
    guestHouseDao.remove(id, callback);
}
function removeDirtyAttachment(fileId, callback) {
    gridfsDao.dropAttachment(fileId, callback);
}
function createMasterData(recordToInsert, callback) {
    masterDataDao.create(recordToInsert, callback);
}
function getAllMasterData(callback) {
    masterDataDao.getAll(callback);
}
function updateMasterData(id, detailsToUpdate, callback) {
    masterDataDao.updateById(id, detailsToUpdate, callback);
}
function deleteMasterData(id, callback) {
    masterDataDao.remove(id, callback);
}
//Room Type
function createRoomType(recordToInsert, callback) {
    roomTypeDao.create(recordToInsert, callback);
}
function getAllRoomTypes(callback) {
    roomTypeDao.getAll(callback);
}
function getSelectedRoomTypes(id, callback) {
    roomTypeDao.getByQuery({ guestHouseId: mongodb.ObjectID(id) }, callback);
}

function updateRoomType(id, detailsToUpdate, callback) {
    roomTypeDao.updateById(id, detailsToUpdate, callback);
}
function deleteRoomType(id, callback) {
    roomTypeDao.remove(id, callback);
}
function removeRoomTypeAttachment(fileId, callback) {
    gridfsDao.dropAttachment(fileId, callback);
}
///////////////////////Floors and Rooms/////////////////////////////
function createFloorsandRooms(recordToInsert, callback) {
    floorDao.create(recordToInsert, callback);
}
///////////////////////ROOM REQUEST///////////////////
function addRoomRequest(recordToInsert, callback) {
    roomrequestDao.create(recordToInsert, callback);

}
function getAllRoomRequest(callback) {
    roomrequestDao.getAll(callback);
}
/////////////////////////////Room View////////////////////////////
function getAllRooms(callback) {
    floorDao.getAll(callback);
}
function checkAvailabilityforRooms(callback) {
    roomTypeDao.getAll(callback);
}

// function getDetail(Id, callback) {
//     guestHouseDao.getById(Id, callback);
// }
function getGuestHouseById(Id, callback) {
    guestHouseDao.getById({ _id: mongodb.ObjectID(Id) }, callback);
}
function saveEditedGuestHouse(id, detailsToUpdate, callback) {
    guestHouseDao.updateById(id, detailsToUpdate, callback);
}
function saveEditedfloorsandRooms(id, detailsToUpdate, callback) {
    floorDao.updateById(id, detailsToUpdate, callback);
}
function getFloorsandRoomDetails(Id, callback) {
    floorDao.getById({ _id: mongodb.ObjectID(Id) }, callback);
}
function updateGuestHouseFloorsandRooms(id, detailsToUpdate, callback) {
    floorDao.updateById(id, detailsToUpdate, callback);
}
function getAllFloorsandRooms(callback) {
    floorDao.getAll(callback);
}
module.exports.updateGuestHouse = updateGuestHouse;
module.exports.getAllGuestHouse = getAllGuestHouse;
module.exports.createGuestHouse = createGuestHouse;
module.exports.deleteGuestHouse = deleteGuestHouse;
module.exports.saveEditedGuestHouse = saveEditedGuestHouse;
module.exports.saveEditedfloorsandRooms = saveEditedfloorsandRooms;
module.exports.getFloorsandRoomDetails = getFloorsandRoomDetails;
module.exports.updateGuestHouseFloorsandRooms = updateGuestHouseFloorsandRooms;
module.exports.getAllFloorsandRooms = getAllFloorsandRooms;
//module.exports.getDetail = getDetail;
module.exports.getGuestHouseById = getGuestHouseById;
module.exports.removeDirtyAttachment = removeDirtyAttachment;
module.exports.createMasterData = createMasterData;
module.exports.getAllMasterData = getAllMasterData;
module.exports.updateMasterData = updateMasterData;
module.exports.deleteMasterData = deleteMasterData;
//RoomType
module.exports.createRoomType = createRoomType;
module.exports.getAllRoomTypes = getAllRoomTypes;
module.exports.updateRoomType = updateRoomType;
module.exports.deleteRoomType = deleteRoomType;
module.exports.removeRoomTypeAttachment = removeRoomTypeAttachment;
module.exports.getSelectedRoomTypes = getSelectedRoomTypes;
//////////////// FLOORS AND ROOMS//////////
module.exports.createFloorsandRooms = createFloorsandRooms;
////////////////ROOM REQUEST///////////////
module.exports.addRoomRequest = addRoomRequest;
module.exports.getAllRoomRequest = getAllRoomRequest;
///////////////ROOM VIEW///////////////////
module.exports.getAllRooms = getAllRooms;
module.exports.checkAvailabilityforRooms = checkAvailabilityforRooms;