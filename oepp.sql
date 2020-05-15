CREATE TABLE IF NOT EXISTS `HIR5CkeMHt`.`user` (
  `name` VARCHAR(255) NOT NULL,
  `surname` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `UserID` (11) NOT NULL,
  `passwordResetCode` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  PRIMARY KEY (`UserID`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE,
  UNIQUE INDEX `username` (`username` ASC) VISIBLE),
  CREATE TABLE IF NOT EXISTS `HIR5CkeMHt`.`Contents` (
  `idContent` (11) NOT NULL DEFAULT '0',
  `ReleaseTime`  NOT NULL,
  `Income` (15,2) NOT NULL,
  `Gameid` (11) NOT NULL,
  `rvv_id` (11) NULL DEFAULT NULL,
  `usr_id` (11) NULL DEFAULT NULL,
  PRIMARY KEY (`idContent`),
  UNIQUE INDEX `idContent_UNIQUE` (`idContent` ASC) VISIBLE,
  INDEX `fk_rv_id` (`rvv_id` ASC) VISIBLE,
  INDEX `usr_id` (`usr_id` ASC) VISIBLE,
  INDEX `Gameid` (`Gameid` ASC) VISIBLE,
  CONSTRAINT `Contents_ibfk_2`
    FOREIGN KEY (`usr_id`)
    REFERENCES `HIR5CkeMHt`.`user` (`UserID`),
  CONSTRAINT `Contents_ibfk_3`
    FOREIGN KEY (`Gameid`)
    REFERENCES `HIR5CkeMHt`.`GAMES` (`idGames`),
  CONSTRAINT `fk_rv_id`
    FOREIGN KEY (`rvv_id`)
    REFERENCES `HIR5CkeMHt`.`Review` (`idReview`)),
CREATE TABLE IF NOT EXISTS `HIR5CkeMHt`.`Category` (
  `ID` (11) NOT NULL,
  `CategoryName` VARCHAR(45) NOT NULL,
  `Routing` (4) NULL DEFAULT NULL,
  `CategoryImage` LONGBLOB NULL DEFAULT NULL,
  PRIMARY KEY (`ID`))
CREATE TABLE IF NOT EXISTS `HIR5CkeMHt`.`GAMES` (
  `idGames` (11) NOT NULL,
  `GameTitle` VARCHAR(150) NOT NULL,
  `GameDescription` VARCHAR(255) NULL DEFAULT NULL,
  `GameImage` LONGBLOB NULL DEFAULT NULL,
  `CategoryID` (11) NULL DEFAULT NULL,
  `QuestionID` (11) NULL DEFAULT NULL,
  PRIMARY KEY (`idGames`),
  INDEX `CategoryID` (`CategoryID` ASC) VISIBLE,
  INDEX `GAMES_ibfk_2` (`QuestionID` ASC) VISIBLE,
  CONSTRAINT `GAMES_ibfk_1`
    FOREIGN KEY (`CategoryID`)
    REFERENCES `HIR5CkeMHt`.`Category` (`ID`),
  CONSTRAINT `GAMES_ibfk_2`
    FOREIGN KEY (`QuestionID`)
    REFERENCES `HIR5CkeMHt`.`Questions` (`IdQuestion`))
CREATE TABLE IF NOT EXISTS `HIR5CkeMHt`.`PaymentId` (
  `idPaymentId` (11) NOT NULL,
  `AdvertismentShow` (11) NOT NULL,
  `AdvertismentDuration` (11) NOT NULL,
  `ContentId` (11) NOT NULL,
  `bank_account` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`idPaymentId`))
  CREATE TABLE IF NOT EXISTS `HIR5CkeMHt`.`Review` (
  `idReview` (11) NOT NULL,
  `Author` VARCHAR(45) NOT NULL,
  `Comment` LONGBLOB NOT NULL,
  PRIMARY KEY (`idReview`)),
  CREATE TABLE IF NOT EXISTS `HIR5CkeMHt`.`feedback` (
  `id` (11) NOT NULL,
  `feedbackFrom` (11) NOT NULL,
  `feedbackMessage` VARCHAR(5000) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  `gameId` (11) NOT NULL,
  `rating` (11) NOT NULL,
  `timestamp`  NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)),
  CREATE TABLE IF NOT EXISTS `HIR5CkeMHt`.`Questions` (
  `IdQuestion` (11) NOT NULL,
  `QuestionID` (11) NOT NULL,
  `GameFile` LONGBLOB NULL DEFAULT NULL,
  `GameType` (11) NOT NULL,
  PRIMARY KEY (`IdQuestion`)),
  CREATE TABLE IF NOT EXISTS `HIR5CkeMHt`.`sessions` (
  `session_id` VARCHAR(128) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NOT NULL,
  `expires` (11) NOT NULL,
  `data`  NULL DEFAULT NULL,
  PRIMARY KEY (`session_id`)),