import {
  addNewPlayer,
  getPlayers,
  getPlayerById,
} from "../controllers/playerControllers";

const routes = (app) => {
  app.route("/players").get(getPlayers).post(addNewPlayer);
  app.route("/players/:playerId").get(getPlayerById);
};

export default routes;
