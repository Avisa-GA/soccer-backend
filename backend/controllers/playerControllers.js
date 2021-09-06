import Player from "../models/playerModel";

export const addNewPlayer = (req, res) => {
  let newPlayer = new Player(req.body);
  newPlayer.save((err, player) => {
    if (err) {
      res.send(err);
    }
    res.json(player);
  });
};

export const getPlayers = (req, res) => {};
