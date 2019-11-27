const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("kanta.db");

db.serialize(() => {
  //Jos kantaan talletetaan kuva
  let sqltest =
    "CREATE TABLE IF NOT EXISTS Henkilo (" +
    "id integer PRIMARY KEY NOT NULL, " +
    "nimi text NOT NULL, " +
    "email text NOT NULL, " +
    "kuva blob )";

  let uutinen =
    "CREATE TABLE IF NOT EXISTS Uutinen (" +
    "id integer PRIMARY KEY NOT NULL, " +
    "otsikko text NOT NULL, " +
    "teksti text NOT NULL, " +
    "julkaistu real )";

  let tuote =
    "CREATE TABLE IF NOT EXISTS Tuote (" +
    "id integer PRIMARY KEY NOT NULL, " +
    "nimi text NOT NULL, " +
    "hinta real NOT NULL, " +
    "kuva text)";

  let tyontekija =
    "CREATE TABLE IF NOT EXISTS Tyontekija (" +
    "id integer PRIMARY KEY NOT NULL, " +
    "nimi text NOT NULL, " +
    "rooli text NOT NULL, " +
    "kuva text)";

  let palveluotsikko =
    "CREATE TABLE IF NOT EXISTS Palveluotsikko (" +
    "otsikkoid integer PRIMARY KEY NOT NULL, " +
    "otsikko text NOT NULL )";

  let palvelu =
    "CREATE TABLE IF NOT EXISTS Palvelu (" +
    "id integer PRIMARY KEY NOT NULL, " +
    "nimi text NOT NULL, " +
    "hinta real NOT NULL, " +
    "otsikkoid integer, " +
    "FOREIGN KEY(otsikkoid) REFERENCES palveluotsikko(id) )";

  let ajanvaraus =
    "CREATE TABLE IF NOT EXISTS Ajanvaraus (" +
    "id integer PRIMARY KEY NOT NULL, " +
    "nimi text NOT NULL, " +
    "puh integer NOT NULL, " +
    "paiva real NOT NULL, " +
    "kello real NOT NULL, " +
    "tekija text NOT NULL, " +
    "palvelu text NOT NULL )";

  db.run(sqltest, err => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Testi taulu luotiin");
  });

  db.run(uutinen, err => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Uutinen taulu luotiin");
  });

  db.run(tuote, err => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Tuote taulu luotiin");
  });

  db.run(tyontekija, err => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Työntekijä taulu luotiin");
  });

  db.run(palveluotsikko, err => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Palveluotsikko taulu luotiin");
  });

  db.run(palvelu, err => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Palvelu taulu luotiin");
  });

  db.run(ajanvaraus, err => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Ajanvaraus taulu luotiin");
  });

  uutinen =
    "INSERT INTO 'uutinen' ('otsikko', 'teksti', 'julkaistu') " +
    " VALUES ('Rekrytoimme', 'Haemme lisää kokeneita parturikampaajia.', '10.11.2019'), " +
    "('Hiusviikot', 'Kaikki kampaamopalvelut ja tuotteet allennuksella kanta-asiakaskortilla vain tämän viikon.', '28.10.2019'), " +
    "('Madon syntymäpäivät', 'Kaikki kampaamon liikkeestä ostetut tuotteet alennetun hinnoin vain tämän viikon.', '24.12.2018')";
  db.run(uutinen, err => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Uutiset lisättiin");
  });

  tuote =
    "INSERT INTO 'tuote' ('nimi', 'hinta', 'kuva') " +
    " VALUES ('Hiuslakka', '100€', 'https://mroomshop.com/tuotekuvat/520x520/cg_originalspray.jpg'), " +
    "('Kynsilakka', '200€', 'https://mroomshop.com/tuotekuvat/520x520/cg_originalspray.jpg'), " +
    "('Muulakka', '300€', 'https://mroomshop.com/tuotekuvat/520x520/cg_originalspray.jpg'), " +
    "('Partalakka', '400€', 'https://mroomshop.com/tuotekuvat/520x520/cg_originalspray.jpg')";

  db.run(tuote, err => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Tuotteet lisättiin");
  });

  tyontekija =
    "INSERT INTO 'tyontekija' ('nimi', 'rooli', 'kuva') " +
    " VALUES ('Sari Saksi', 'Myymälävastaava', 'http://cdn.shopify.com/s/files/1/0024/8243/8210/products/tish-snooky-s-manic-panic-classic-hair-color-bad-boy-blue-classic-high-voltage-4911262302274_1024x1024.jpg?v=1568908358'), " +
    "('Fanni Fööni', 'Parturi-kampaaja', 'https://data.whicdn.com/images/99652787/original.jpg'), " +
    "('Heikki Hiukset', 'Parturi-mestari', 'https://i.pinimg.com/originals/ce/46/ff/ce46ff711bb69389ff8fa998b63d61bd.png'), " +
    "('Veera Väri', 'Kosmetologi', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc8fZhwB_ro0Lh-2Fda9KERSPvPk8iMUBRSPmZXMYd375NL_WMSA&s'), " +
    "('Karolina Kampa', 'Parturi-kampaaja', 'https://img1.southernliving.timeinc.net/sites/default/files/styles/story_card_hero/public/image/2018/02/main/balayage_blonde.jpg?itok=nESLo-TC')";

  db.run(tyontekija, err => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Työntekijät lisättiin");
  });

  palveluotsikko =
    "INSERT INTO 'Palveluotsikko' ('otsikko') " +
    " VALUES ('PARTURIPALVELUT'), " +
    "('KAMPAAMOPALVELUT'), " +
    "('VÄRJÄYKSET') ";
  db.run(palveluotsikko, err => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Palveluotsikot lisättiin");
  });

  palvelu =
    "INSERT INTO 'Palvelu' ('nimi', 'hinta', 'otsikkoid') " +
    " VALUES ('Hiusten leikkaus', '100.00€', 1), " +
    "('Hiusten koneajo', '150.00€', 1), " +
    "('Mallinmuutos', '140.00€', 1), " +
    "('Partatyöt', '130.00€', 1), " +
    "('Siistiminen', '120.00€', 1), " +
    "('Hiusten siistiminen', '95.00€', 2), " +
    "('Juhlakampaus', '85.00€', 2), " +
    "('Hääkampaus', '75.00€', 2), " +
    "('Föön-Kampaus', '64.00€', 2), " +
    "('Kiharakampaus', '23.00€', 2), " +
    "('Väri', '75.00€', 3), " +
    "('Kevytväri', '66.00€', 3), " +
    "('Raidat', '45.00€', 3), " +
    "('Monivärivärjäys', '634.00€', 3), " +
    "('Suoraväri', '243.00€', 3)";
  db.run(palvelu, err => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Palvelut lisättiin");
  });

  db.each(
    "SELECT otsikko, nimi FROM palvelu INNER JOIN palveluotsikko ON palveluotsikko.otsikkoid = palvelu.otsikkoid",
    (err, row) => {
      if (err) {
        return console.log(err.message);
      }
      console.log(row.otsikko + ", " + row.nimi);
    }
  );
});

db.close();
