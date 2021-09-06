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

export const getPlayers = (req, res) => {
  Player.find({}, (err, player) => {
    if (err) {
      res.send(err);
    }
    res.json(player);
  });
};

export const getPlayerById = (req, res) => {
  Player.findById(req.params.playerId, (err, player) => {
    if (err) {
      res.send(err);
    }
    res.json(player);
  });
};

export const updatePlayerById = (req, res) => {
  Player.findOneAndUpdate(
    { id: req.params.playerId },
    req.body,
    { new: true },
    (err, player) => {
      if (err) {
        res.send(err);
      }
      res.json(player);
    }
  );
};

export const deletePlayer = (req, res) => {
  Player.remove({ id: req.params.playerId }, (err, player) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Sucessfully deleted player!" });
  });
};
