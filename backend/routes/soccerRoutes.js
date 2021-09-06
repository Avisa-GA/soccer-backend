import {
  addNewPlayer,
  getPlayers,
  getPlayerById,
  updatePlayerById,
} from "../controllers/playerControllers";

const routes = (app) => {
  app.route("/players").get(getPlayers).post(addNewPlayer);
  app.route("/players/:playerId").get(getPlayerById).put(updatePlayerById);
};

export default routes;
