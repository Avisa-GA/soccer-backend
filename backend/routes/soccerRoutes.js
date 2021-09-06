import { addNewPlayer, getPlayers } from "../controllers/playerControllers";

const routes = (app) => {
  app.route("/players").get(getPlayers).post(addNewPlayer);
};

export default routes;
