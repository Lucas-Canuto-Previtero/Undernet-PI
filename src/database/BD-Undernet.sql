
CREATE DATABASE undernet;
USE undernet;


CREATE TABLE usuario (
  idUsuario INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(50),
  email VARCHAR(50),
  telefone CHAR(11),
  senha VARCHAR(30),
  fotoPerfil VARCHAR(10000),
  PRIMARY KEY (idUsuario)
  );


CREATE TABLE postagem (
  idPostagem INT NOT NULL AUTO_INCREMENT,
  fk_idUsuario INT NOT NULL,
  dataHora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  texto VARCHAR(1000),
  tipoPostagem VARCHAR(30),
  imagem VARCHAR(10000),
  PRIMARY KEY (idPostagem),
  FOREIGN KEY (fk_idUsuario) REFERENCES usuario (idUsuario)
  );


CREATE TABLE resultadobadtime (
  idResultadoBadTime INT NOT NULL AUTO_INCREMENT,
  tempoPermanencia INT,
  fk_idUsuario INT NOT NULL,
  PRIMARY KEY (idResultadoBadTime),
  FOREIGN KEY (fk_idUsuario) REFERENCES usuario (idUsuario)
  );


CREATE TABLE resultadocorrida (
  idResultadoCorrida INT NOT NULL AUTO_INCREMENT,
  fk_idUsuario INT NOT NULL,
  CPS DECIMAL(5,2),
  tempoPermanencia INT,
  dataHora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (idResultadoCorrida),
  FOREIGN KEY (fk_idUsuario) REFERENCES usuario (idUsuario)
  );


CREATE TABLE resultadopersona (
  idResultadoPersona INT NOT NULL UNIQUE AUTO_INCREMENT,
  dataHora TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  chanceToriel DECIMAL(5,2),
  chanceSans DECIMAL(5,2),
  chancePapyrus DECIMAL(5,2),
  chanceNapstablook DECIMAL(5,2),
  chanceUndyne DECIMAL(5,2),
  chanceFlowey DECIMAL(5,2),
  chanceFrisk DECIMAL(5,2),
  chanceChara DECIMAL(5,2),
  chanceMettaton DECIMAL(5,2),
  chanceAsgore DECIMAL(5,2),
  chanceAsriel DECIMAL(5,2),
  fk_idUsuario INT NOT NULL,
  PRIMARY KEY (idResultadoPersona),
  FOREIGN KEY (fk_idUsuario) REFERENCES usuario (idUsuario)
  );

CREATE TABLE resultadopiano (
  idResultadoPiano INT NOT NULL AUTO_INCREMENT,
  fk_idUsuario INT NOT NULL,
  tempoPermanencia INT,
  PRIMARY KEY (idResultadoPiano),
  FOREIGN KEY (fk_idUsuario) REFERENCES usuario (idUsuario)
  );


CREATE TABLE resultadoquiz (
  idResultadoQuiz INT NOT NULL AUTO_INCREMENT,
  dataHora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  acertos INT,
  erros INT,
  fk_idUsuario INT NOT NULL,
  PRIMARY KEY (idResultadoQuiz),
  FOREIGN KEY (fk_idUsuario) REFERENCES undernet.usuario (idUsuario)
  );
  


