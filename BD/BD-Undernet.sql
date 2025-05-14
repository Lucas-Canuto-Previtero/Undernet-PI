-- BANCO DE DADOS UNDERNET
create database Undernet;
Use Undernet;

Create table usuario (
idUsuario int not null primary key auto_increment,
nome varchar (50),
email varchar (50),
senha varchar (30),
fotoPerfil varchar (200)
);

Create table resultadoQuiz (
idResultadoQuiz int not null auto_increment,
fk_idUsuario int not null,
dataHora timestamp default current_timestamp,
tempoPermanencia int,
acertos int,
erros int,
constraint fkUsuarioQuiz foreign key (fk_idUsuario) references usuario(idUsuario),
Primary key (idResultadoQuiz)
);

Create table resultadoPersona (
idResultadoPersona int not null auto_increment,
fk_idUsuario int not null,
dataHora timestamp default current_timestamp,
tempoPermanencia int,
chanceToriel int,
chanceSans int,
chancePapyrus int,
chanceNapstablook int,
chanceUndyne int,
chanceFlowey int,
chanceFrisk int,
chanceChara int,
chanceMettaton int,
chanceAsgore int,
chanceAsruel int,
Constraint fkUsuarioTeste foreign key (fk_idUsuario) references usuario(idUsuario),
Primary key (idResultadoPersona)
);

Create table resultadoPiano (
idResultadoPiano int not null auto_increment,
fk_idUsuario int not null,
tempoPermanencia int,
Constraint fkUsuarioPiano foreign key (fk_idUsuario) references usuario(idUsuario),
Primary key (idResultadoPiano)
);

Create table resultadoBadTime (
idResultadoBadTime int not null auto_increment,
fk_idUsuario int not null,
tempoPermanencia int,
Constraint fkUsuarioBad foreign key (fk_idUsuario) references usuario(idUsuario),
Primary key (idResultadoBadTime)
);

Create table postagem (
idPostagem int not null auto_increment,
fk_idUsuario int not null,
dataHora timestamp default current_timestamp,
texto varchar(500),
imagem varchar(200),
Constraint fkUsuarioPostagem foreign key (fk_idUsuario) references usuario(idUsuario),
primary key (idPostagem)
);

Create table resultadoCorrida (
idResultadoCorrida int not null auto_increment,
fk_idUsuario int not null,
tempoPermanencia int,
dataHora timestamp default current_timestamp,
CPS decimal(6,2),
Constraint fkUsuarioCorrida foreign key (fk_idUsuario) references usuario(idUsuario),
Primary key (idResultadoCorrida)
);
