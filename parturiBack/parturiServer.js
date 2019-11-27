const express = require("express");
const app = express();
app.use(express.json());

var helmet = require("helmet");
app.use(helmet());

express.urlencoded({ limit: "5mb", extended: true });

const cors = require("cors");
app.use(cors());

const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("kanta.db");

// backi kuuntelee porttia 8080
app.listen(8080, () => {
  console.log("Node toimii localhost:8080");
});

// Reititys on pelkkä / esim. localhost:8080/
app.get("/", (req, res, next) => {
  return res.status(200).json({ error: false, message: "Toimii" });
});

//Testi
app.get("/henkilo/all", (req, res, next) => {
  db.all("SELECT * FROM henkilo", (error, results) => {
    if (error) throw error;

    //Jos kuvia on useampi kuin yksi
    for (var i = 0; i < results.length; i++) {
      if (results[i].kuva != null) {
        results[i].kuva = results[i].kuva.toString("base64");
      }
    }

    return res.status(200).json(results);
  });
});

app.get("/uutinen/all", (req, res, next) => {
  db.all("SELECT * FROM uutinen", (error, results) => {
    if (error) throw error;

    return res.status(200).json(results);
  });
});

app.get("/tuote/all", (req, res, next) => {
  db.all("SELECT * FROM tuote", (error, results) => {
    if (error) throw error;

    return res.status(200).json(results);
  });
});

app.get("/tyontekija/all", (req, res, next) => {
  db.all("SELECT * FROM tyontekija", (error, results) => {
    if (error) throw error;

    return res.status(200).json(results);
  });
});

app.get("/palvelut/all", (req, res, next) => {
  db.all(
    "SELECT * FROM Palveluotsikko P INNER JOIN Palvelu palvelut ON P.otsikkoid = palvelut.otsikkoid",
    (error, results) => {
      if (error) throw error;

      return res.status(200).json(results);
    }
  );
});

app.get("/palvelu/all", (req, res, next) => {
  db.all("SELECT * FROM palvelu", (error, results) => {
    if (error) throw error;

    return res.status(200).json(results);
  });
});

app.get("/palveluotsikko/all", (req, res, next) => {
  db.all("SELECT * FROM palveluotsikko", (error, results) => {
    if (error) throw error;

    return res.status(200).json(results);
  });
});

app.get("/ajanvaraus/all", (req, res, next) => {
  db.all("SELECT * FROM ajanvaraus", (error, results) => {
    if (error) throw error;

    return res.status(200).json(results);
  });
});

app.get("/palvelu/all/:id", (req, res, next) => {
  let id = req.params.id;
  db.all("SELECT * FROM palvelu WHERE otsikkoid=?", [id], (error, result) => {
    if (error) throw error;

    if (typeof result == "undefined") {
      return res.status(200).send({});
    }

    return res.status(200).json(result);
  });
});

//Testi
app.get("/henkilo/one/:id", (req, res, next) => {
  let id = req.params.id;
  db.get("SELECT * FROM henkilo where id=?", [id], (error, result) => {
    if (error) throw error;

    if (typeof result == "undefined") {
      return res.status(200).send({});
    }
    //Jos kuva on talletettu kantaan
    if (result.kuva != null) {
      result.kuva = result.kuva.toString("base64");
    }

    return res.status(200).json(result);
  });
});

app.get("/uutinen/one/:id", (req, res, next) => {
  let id = req.params.id;
  db.get("SELECT * FROM uutinen where id=?", [id], (error, result) => {
    if (error) throw error;

    if (typeof result == "undefined") {
      return res.status(200).send({});
    }

    return res.status(200).json(result);
  });
});

app.get("/tuote/one/:id", (req, res, next) => {
  let id = req.params.id;
  db.get("SELECT * FROM tuote where id=?", [id], (error, result) => {
    if (error) throw error;

    if (typeof result == "undefined") {
      return res.status(200).send({});
    }

    return res.status(200).json(result);
  });
});

app.get("/tyontekija/one/:id", (req, res, next) => {
  let id = req.params.id;
  db.get("SELECT * FROM tyontekija where id=?", [id], (error, result) => {
    if (error) throw error;

    if (typeof result == "undefined") {
      return res.status(200).send({});
    }

    return res.status(200).json(result);
  });
});

app.get("/ajanvaraus/all/:id", (req, res, next) => {
  let id = req.params.id;
  db.all(
    "SELECT * FROM ajanvaraus WHERE otsikkoid=?",
    [id],
    (error, result) => {
      if (error) throw error;

      if (typeof result == "undefined") {
        return res.status(200).send({});
      }

      return res.status(200).json(result);
    }
  );
});

// Kuvan lataaminen palvelimen hakemistoon
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});

const upload = multer({ storage: storage });
// Kuva lisätään hakemistoon

//Testi
app.post("/henkilo/add", upload.single("kuva"), (req, res, next) => {
  let tap = req.body;
  let kuva = null;

  // Jos tuli tiedosto, otetaan sen nimi kantaan laittamista varten
  if (req.file) {
    kuva = req.file.originalname;
  }

  db.run(
    "INSERT INTO henkilo (nimi, email, kuva) VALUES (?, ?, ?)",
    [tap.nimi, tap.email, kuva],
    function(error, result) {
      if (error) throw error;

      return res.status(200).json({ count: this.changes });
    }
  );
});

app.post("/uutinen/add", upload.single("kuva"), (req, res, next) => {
  let tap = req.body;

  db.run(
    "INSERT INTO uutinen (otsikko, teksti, julkaistu) VALUES (?, ?, ?)",
    [tap.otsikko, tap.teksti, tap.julkaistu],
    function(error, result) {
      if (error) throw error;

      return res.status(200).json({ count: this.changes });
    }
  );
});

app.post("/tuote/add", upload.single("kuva"), (req, res, next) => {
  let tap = req.body;
  let kuva = null;

  if (req.file) {
    kuva = req.file.originalname;
  }

  db.run(
    "INSERT INTO tuote (nimi, hinta, kuva) VALUES (?, ?, ?)",
    [tap.nimi, tap.hinta, kuva],
    function(error, result) {
      if (error) throw error;

      return res.status(200).json({ count: this.changes });
    }
  );
});

app.post("/tyontekija/add", upload.single("kuva"), (req, res, next) => {
  let tap = req.body;
  let kuva = null;

  if (req.file) {
    kuva = req.file.originalname;
  }

  db.run(
    "INSERT INTO tyontekija (nimi, rooli, kuva) VALUES (?, ?, ?)",
    [tap.nimi, tap.rooli, kuva],
    function(error, result) {
      if (error) throw error;

      return res.status(200).json({ count: this.changes });
    }
  );
});

app.post("/ajanvaraus/add", upload.single("kuva"), (req, res, next) => {
  let tap = req.body;
  let kuva = null;

  if (req.file) {
    kuva = req.file.originalname;
  }

  db.run(
    "INSERT INTO ajanvaraus (nimi, puh, paiva, kello, tekija, palvelu) VALUES (?, ?, ?, ?, ?, ?)",
    [tap.nimi, tap.puh, tap.paiva, tap.kello, tap.tekija, tap.palvelu],
    function(error, result) {
      if (error) throw error;

      return res.status(200).json({ count: this.changes });
    }
  );
});

app.get("/download/:nimi", (req, res, next) => {
  var file = "./uploads/" + req.params.nimi;
  res.download(file);
});

//Testi
app.get("/henkilo/delete/:id", (req, res, next) => {
  let id = req.params.id;

  db.run("DELETE FROM henkilo WHERE id = ?", [id], function(error, result) {
    if (error) throw error;

    return res.status(200).json({ count: this.changes });
  });
});

app.get("/uutinen/delete/:id", (req, res, next) => {
  let id = req.params.id;

  db.run("DELETE FROM uutinen WHERE id = ?", [id], function(error, result) {
    if (error) throw error;

    return res.status(200).json({ count: this.changes });
  });
});

app.get("/tuote/delete/:id", (req, res, next) => {
  let id = req.params.id;

  db.run("DELETE FROM tuote WHERE id = ?", [id], function(error, result) {
    if (error) throw error;

    return res.status(200).json({ count: this.changes });
  });
});

app.get("/tyontekija/delete/:id", (req, res, next) => {
  let id = req.params.id;

  db.run("DELETE FROM tyontekija WHERE id = ?", [id], function(error, result) {
    if (error) throw error;

    return res.status(200).json({ count: this.changes });
  });
});

// Kun kaikki muu epäonnistuu niin suoritetaan tämä
app.get("*", (req, res, next) => {
  return res
    .status(404)
    .send({ error: true, message: "Ei pyydettyä palvelua" });
});
