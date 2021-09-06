import {
  addNewPlayer,
  getPlayers,
  getPlayerById,
  updatePlayerById,
  deletePlayer,
} from "../controllers/playerControllers";

const routes = (app) => {
  app.route("/players").get(getPlayers).post(addNewPlayer);
  app
    .route("/players/:playerId")
    .get(getPlayerById)
    .put(updatePlayerById)
    .delete(deletePlayer);
};

export default routes;
