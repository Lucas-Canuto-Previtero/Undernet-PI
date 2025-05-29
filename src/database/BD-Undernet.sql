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
  CONSTRAINT fkUsuarioPostagem FOREIGN KEY (fk_idUsuario) REFERENCES usuario (idUsuario)
  );
  
  select * from undernet.postagem;




CREATE TABLE resultadoBadTime (
  idResultadoBadTime INT NOT NULL AUTO_INCREMENT,
  tempoPermanencia INT,
  fk_idUsuario INT NOT NULL,
  PRIMARY KEY (idResultadoBadTime),
  CONSTRAINT fk_resultadobadtime_usuario1 FOREIGN KEY (fk_idUsuario) REFERENCES usuario (idUsuario)
);



CREATE TABLE resultadoCorrida (
  idResultadoCorrida INT NOT NULL AUTO_INCREMENT,
  fk_idUsuario INT NOT NULL,
  tempoPermanencia INT NULL DEFAULT NULL,
  dataHora TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  CPS INT NULL DEFAULT NULL,
  PRIMARY KEY (idResultadoCorrida),
  CONSTRAINT fkUsuarioCorrida FOREIGN KEY (fk_idUsuario) REFERENCES usuario (idUsuario)
  );


CREATE TABLE resultadoPersona (
  idResultadoPersona INT NOT NULL AUTO_INCREMENT UNIQUE KEY,
  dataHora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  chanceToriel INT,
  chanceSans INT,
  chancePapyrus INT,
  chanceNapstablook INT,
  chanceUndyne INT,
  chanceFlowey INT,
  chanceFrisk INT,
  chanceChara INT,
  chanceMettaton INT,
  chanceAsgore INT,
  chanceAsriel INT,
  fk_idUsuario INT NOT NULL,
  PRIMARY KEY (idResultadoPersona),
  CONSTRAINT fk_resultadopersona_usuario1 FOREIGN KEY (fk_idUsuario) REFERENCES usuario (idUsuario)
);


CREATE TABLE resultadoPiano (
  idResultadoPiano INT NOT NULL AUTO_INCREMENT,
  fk_idUsuario INT NOT NULL,
  tempoPermanencia INT,
  PRIMARY KEY (idResultadoPiano),
  CONSTRAINT fkUsuarioPiano FOREIGN KEY (fk_idUsuario) REFERENCES usuario (idUsuario)
  );



CREATE TABLE resultadoQuiz (
  idResultadoQuiz INT NOT NULL AUTO_INCREMENT,
  dataHora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  tempoPermanencia INT,
  acertos INT,
  erros INT,
  fk_idUsuario INT NOT NULL,
  PRIMARY KEY (idResultadoQuiz), 
  CONSTRAINT fk_resultadoquiz_usuario1 FOREIGN KEY (fk_idUsuario) REFERENCES usuario (idUsuario)
    );

select * from resultadoBadTime;
select * from usuario;
select * from postagem;