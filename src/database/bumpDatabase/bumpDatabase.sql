-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: undernet
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `postagem`
--

DROP TABLE IF EXISTS `postagem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `postagem` (
  `idPostagem` int NOT NULL AUTO_INCREMENT,
  `fk_idUsuario` int NOT NULL,
  `dataHora` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `texto` varchar(1000) DEFAULT NULL,
  `tipoPostagem` varchar(30) DEFAULT NULL,
  `imagem` varchar(10000) DEFAULT NULL,
  PRIMARY KEY (`idPostagem`),
  KEY `fk_idUsuario` (`fk_idUsuario`),
  CONSTRAINT `postagem_ibfk_1` FOREIGN KEY (`fk_idUsuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postagem`
--

LOCK TABLES `postagem` WRITE;
/*!40000 ALTER TABLE `postagem` DISABLE KEYS */;
INSERT INTO `postagem` VALUES (1,4,'2025-06-12 15:06:18','saldkfjlçsfd','geral',''),(2,3,'2025-06-12 15:11:10','amei a foto de perfil gusz','geral',''),(4,5,'2025-06-12 15:26:00','Eu acho que a terra é plana!!!!!!! A BBC postou, é real!!!! Amigues amo muito a nossa terrinha plana. Isso não é uma teoria obviamente, isso é uma verdadeeeee!!!','teorias','data:image/jpeg;base64,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'),(5,20,'2025-06-12 15:27:32','A Terra não é plana, não é oca, é uma cumbica','geral','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGwazq48QxgtgyiMKXzASQ5qGZrk1ueJMTM5KDmlsBbN59GssHmEW3pei3FZ6i8YJxBpg&usqp=CAU'),(7,14,'2025-06-12 15:39:06','Há quem diga que a Terra é redonda, com base em fotos de satélite, viagens espaciais e leis da física. Mas e se estivermos todos sendo enganados? Segundo os autointitulados “terraplanistas”, a Terra, na verdade, é um disco plano coberto por um domo, como uma gigantesca redoma de vidro — quase como um globo de neve.\n\nProvas? Eles dizem que, se a Terra fosse realmente uma esfera girando a 1.600 km/h, não deveríamos sentir isso? Afinal, ninguém sente o chão se mexendo! E o horizonte? Sempre parece reto. Já viu alguma curvatura ao olhar para o mar? Pois é — argumento visual número um.\n\nOutra teoria comum entre os terraplanistas é que a Antártica não é um continente, mas sim uma gigantesca muralha de gelo que circunda os limites da Terra. Seria ela a verdadeira \"barreira final\", guardada por forças ocultas para evitar que alguém descubra a verdade.','memes','https://cienciahoje.org.br/wp-content/uploads/2019/04/behind-the-curve-1200x658.jpg'),(15,11,'2025-06-12 15:47:07','Pra quem nao passar','geral','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKGzTXsrKVDbsBAK5q_fXFnKUc6AlvX37Ag&s'),(16,19,'2025-06-12 15:47:16','Fiz uma promessa pra mim mesmo, nunca mais comer torresmo. Alguém me disse, outro dia, que para sentir satisfação e alegria é necessário ser caridoso, me dá um reaaaaaalllll, me dá um real oooooooo me dá um real aí camainoohjwajoooaaauunnaakdjsadssqkd. O que fazer se não fazer.. e aceitar o tédio.. enfadonho.. então acho a receita me caminha.. na caminhada e subindo um morro, penso na sensação agradável, de vir, mais rápido, na descida, pois estou numa biiiiiikeeee. Corro, o risco, de tropeçar em mim mesmo, e cair quebrando o pescoço, pescoço em francês é aaaanûs, anûs. É a parte laboral do corpo, vivendo e aprendendo, o que o gato disse para o leite antes de bebê-lo, miaaaauuu. ~Não procure saber onde vou, meu caminho é toda manhã~ Você gosta de... maçã? Eu também, mas não tem. Aleluia, aleluia, aleluia. Reze um ave Maria, um pai nosso e um graio pai, e assim você deverá ser feliz, ser feliz. a felicidade não está no pico da montanha, está enquanto você escala esta montanha. ','geral','https://pt.quizur.com/_image?href=https://img.quizur.com/f/img64624f77d49397.45271659.jpg?lastEdited=1684164477&w=1024&h=1024&f=webp');
/*!40000 ALTER TABLE `postagem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resultadobadtime`
--

DROP TABLE IF EXISTS `resultadobadtime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resultadobadtime` (
  `idResultadoBadTime` int NOT NULL AUTO_INCREMENT,
  `tempoPermanencia` int DEFAULT NULL,
  `fk_idUsuario` int NOT NULL,
  PRIMARY KEY (`idResultadoBadTime`),
  KEY `fk_idUsuario` (`fk_idUsuario`),
  CONSTRAINT `resultadobadtime_ibfk_1` FOREIGN KEY (`fk_idUsuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resultadobadtime`
--

LOCK TABLES `resultadobadtime` WRITE;
/*!40000 ALTER TABLE `resultadobadtime` DISABLE KEYS */;
INSERT INTO `resultadobadtime` VALUES (1,4,5),(2,6,4),(3,12,7),(4,5,12),(5,2,19),(6,6,18),(7,22,24);
/*!40000 ALTER TABLE `resultadobadtime` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resultadocorrida`
--

DROP TABLE IF EXISTS `resultadocorrida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resultadocorrida` (
  `idResultadoCorrida` int NOT NULL AUTO_INCREMENT,
  `fk_idUsuario` int NOT NULL,
  `CPS` decimal(5,2) DEFAULT NULL,
  `tempoPermanencia` int DEFAULT NULL,
  `dataHora` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idResultadoCorrida`),
  KEY `fk_idUsuario` (`fk_idUsuario`),
  CONSTRAINT `resultadocorrida_ibfk_1` FOREIGN KEY (`fk_idUsuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resultadocorrida`
--

LOCK TABLES `resultadocorrida` WRITE;
/*!40000 ALTER TABLE `resultadocorrida` DISABLE KEYS */;
INSERT INTO `resultadocorrida` VALUES (1,19,5.60,16,'2025-06-12 15:27:52'),(2,11,10.30,16,'2025-06-12 15:28:00'),(3,6,10.10,22,'2025-06-12 15:28:07'),(4,11,9.10,15,'2025-06-12 15:28:27'),(5,19,9.20,16,'2025-06-12 15:28:41'),(6,11,5.30,15,'2025-06-12 15:28:44'),(7,6,11.20,24,'2025-06-12 15:28:45'),(8,12,10.90,17,'2025-06-12 15:28:58'),(9,10,8.10,77,'2025-06-12 15:29:00'),(10,7,7.50,15,'2025-06-12 15:29:02'),(11,11,10.20,15,'2025-06-12 15:29:02'),(12,12,7.40,16,'2025-06-12 15:29:25'),(13,11,12.44,18,'2025-06-12 15:29:26'),(14,19,6.70,21,'2025-06-12 15:29:29'),(15,7,8.60,15,'2025-06-12 15:29:29'),(16,12,9.80,16,'2025-06-12 15:29:46'),(18,19,4.70,15,'2025-06-12 15:29:48'),(19,12,9.90,18,'2025-06-12 15:30:15'),(21,10,7.10,68,'2025-06-12 15:30:26'),(22,7,0.60,35,'2025-06-12 15:30:45'),(23,19,5.70,34,'2025-06-12 15:30:55'),(24,11,8.20,15,'2025-06-12 15:31:14'),(25,19,7.20,16,'2025-06-12 15:31:14'),(26,19,4.10,16,'2025-06-12 15:31:34'),(27,22,9.50,88,'2025-06-12 15:31:38'),(29,11,3.30,15,'2025-06-12 15:32:35'),(30,11,12.44,15,'2025-06-12 15:32:52'),(31,11,10.30,17,'2025-06-12 15:33:13'),(32,11,12.44,14,'2025-06-12 15:33:27'),(33,22,8.30,107,'2025-06-12 15:33:32'),(34,23,5.70,17,'2025-06-12 15:34:25'),(35,23,7.40,18,'2025-06-12 15:34:48'),(38,22,8.40,33,'2025-06-12 15:34:58'),(39,23,6.80,18,'2025-06-12 15:35:08'),(41,23,2.20,24,'2025-06-12 15:35:53'),(58,24,10.50,16,'2025-06-12 16:44:33'),(59,25,10.60,16,'2025-06-12 16:45:14'),(60,24,7.20,15,'2025-06-12 16:46:35');
/*!40000 ALTER TABLE `resultadocorrida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resultadopersona`
--

DROP TABLE IF EXISTS `resultadopersona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resultadopersona` (
  `idResultadoPersona` int NOT NULL AUTO_INCREMENT,
  `dataHora` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `chanceToriel` decimal(5,2) DEFAULT NULL,
  `chanceSans` decimal(5,2) DEFAULT NULL,
  `chancePapyrus` decimal(5,2) DEFAULT NULL,
  `chanceNapstablook` decimal(5,2) DEFAULT NULL,
  `chanceUndyne` decimal(5,2) DEFAULT NULL,
  `chanceFlowey` decimal(5,2) DEFAULT NULL,
  `chanceFrisk` decimal(5,2) DEFAULT NULL,
  `chanceChara` decimal(5,2) DEFAULT NULL,
  `chanceMettaton` decimal(5,2) DEFAULT NULL,
  `chanceAsgore` decimal(5,2) DEFAULT NULL,
  `chanceAsriel` decimal(5,2) DEFAULT NULL,
  `fk_idUsuario` int NOT NULL,
  PRIMARY KEY (`idResultadoPersona`),
  UNIQUE KEY `idResultadoPersona` (`idResultadoPersona`),
  KEY `fk_idUsuario` (`fk_idUsuario`),
  CONSTRAINT `resultadopersona_ibfk_1` FOREIGN KEY (`fk_idUsuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resultadopersona`
--

LOCK TABLES `resultadopersona` WRITE;
/*!40000 ALTER TABLE `resultadopersona` DISABLE KEYS */;
INSERT INTO `resultadopersona` VALUES (1,'2025-06-12 15:05:25',10.00,20.00,10.00,15.00,0.00,15.00,10.00,0.00,15.00,0.00,5.00,2),(2,'2025-06-12 15:07:37',5.26,21.05,0.00,26.32,0.00,5.26,21.05,0.00,5.26,0.00,15.79,3),(3,'2025-06-12 15:12:48',5.00,25.00,0.00,10.00,10.00,15.00,15.00,5.00,5.00,5.00,5.00,10),(4,'2025-06-12 15:13:18',14.29,14.29,4.76,23.81,0.00,4.76,19.05,0.00,4.76,4.76,9.52,8),(5,'2025-06-12 15:20:13',0.00,36.84,10.53,15.79,5.26,10.53,10.53,0.00,0.00,5.26,5.26,5),(6,'2025-06-12 15:35:11',20.00,15.00,5.00,10.00,10.00,0.00,30.00,5.00,0.00,5.00,0.00,18),(7,'2025-06-12 15:38:22',15.00,5.00,0.00,5.00,15.00,10.00,15.00,15.00,0.00,15.00,5.00,7),(8,'2025-06-12 16:45:28',23.81,9.52,0.00,0.00,9.52,9.52,23.81,9.52,0.00,14.29,0.00,24);
/*!40000 ALTER TABLE `resultadopersona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resultadopiano`
--

DROP TABLE IF EXISTS `resultadopiano`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resultadopiano` (
  `idResultadoPiano` int NOT NULL AUTO_INCREMENT,
  `fk_idUsuario` int NOT NULL,
  `tempoPermanencia` int DEFAULT NULL,
  PRIMARY KEY (`idResultadoPiano`),
  KEY `fk_idUsuario` (`fk_idUsuario`),
  CONSTRAINT `resultadopiano_ibfk_1` FOREIGN KEY (`fk_idUsuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resultadopiano`
--

LOCK TABLES `resultadopiano` WRITE;
/*!40000 ALTER TABLE `resultadopiano` DISABLE KEYS */;
INSERT INTO `resultadopiano` VALUES (1,4,15),(2,7,104),(3,3,107),(4,12,5),(5,5,525),(6,11,619),(7,13,219),(8,15,82),(9,18,500),(10,20,142),(11,8,252),(12,24,68);
/*!40000 ALTER TABLE `resultadopiano` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resultadoquiz`
--

DROP TABLE IF EXISTS `resultadoquiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resultadoquiz` (
  `idResultadoQuiz` int NOT NULL AUTO_INCREMENT,
  `dataHora` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `acertos` int DEFAULT NULL,
  `erros` int DEFAULT NULL,
  `fk_idUsuario` int NOT NULL,
  PRIMARY KEY (`idResultadoQuiz`),
  KEY `fk_idUsuario` (`fk_idUsuario`),
  CONSTRAINT `resultadoquiz_ibfk_1` FOREIGN KEY (`fk_idUsuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resultadoquiz`
--

LOCK TABLES `resultadoquiz` WRITE;
/*!40000 ALTER TABLE `resultadoquiz` DISABLE KEYS */;
INSERT INTO `resultadoquiz` VALUES (1,'2025-06-12 15:07:45',7,3,2),(2,'2025-06-12 15:15:25',8,2,10),(3,'2025-06-12 15:16:44',7,3,8),(4,'2025-06-12 15:36:36',5,5,18),(5,'2025-06-12 16:45:57',9,1,24);
/*!40000 ALTER TABLE `resultadoquiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `telefone` char(11) DEFAULT NULL,
  `senha` varchar(30) DEFAULT NULL,
  `fotoPerfil` varchar(10000) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Leonardo','leo@gmail.com','11963956391','WeLike277353#','https://s2.glbimg.com/ZMJsP8Vdn7HAl0phIH9HmH5IVT0=/fit-in/940x590/e.glbimg.com/og/ed/f/original/2014/05/13/canguru.jpg'),(2,'Thiago','thiago.fukunaga@sptech.school','11942265315','12345678','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Q6eI2qyZq2Ed9g88uZXaAEkSilgRrVqNEA&s'),(3,'amanda','amanda@sptech.school','11937713831','Amanda12','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_Bd2VsDxWhzZ0Dx7mu_EfMYgZ4ssnc5oPA&s'),(4,'gusz','gusz@gmail.com','11965085800','12345678','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwxmz7fsnLMl4t9HHqahv07Kb-CTgHNOy-krqo_HBs_LmVQ-XGe6O7csM-QYMfmod_t4&usqp=CAU'),(5,'Fernanda','fernanda.henckel@gmail.com','11999999999','fer123456','https://m.media-amazon.com/images/M/MV5BYWYwYzYzMjUtNWE0MS00NmJlLTljNGMtNzliYjg5NzQ1OWY5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'),(6,'VitorioREDPILL','vitorio@email.com','12345678910','vitorio123','https://i.ytimg.com/vi/clKjcyfeask/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBIZbOU9paS4Y4uHNHwHtz8tqucPQ'),(7,'Amorim','lucas@gmail.com','11945906584','home2765','https://focalizando.com.br/sites/default/files/inline-images/Fotos-para-perfil-do-Whatsapp-masculino-1170x700.webp'),(8,'Letícia','leticia@sptech.school','11948253319','sptech@123','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-th2S-ghaG3swORXhOIAuwSrkASiSVVe6jA&s'),(9,'Guilherme Martins','guilhermexit@gmail.com','11977102978','gui123456','https://www.google.com/imgres?q=lebron%20sunshine&imgurl=https%3A%2F%2Fi.redd.it%2Fcan-somebody-add-the-lebron-james-sunshine-filter-to-this-v0-rr2bj2j3y9zc1.jpg%3Fwidth%3D1920%26format%3Dpjpg%26auto%3Dwebp%26s%3Dcbc988e8daf151b452897c184f4412a4343a8a1e&imgrefurl=https%3A%2F%2Fwww.reddit.com%2Fr%2FPhotoshopRequest%2Fcomments%2F1cngll2%2Fcan_somebody_add_the_lebron_james_sunshine_filter%2F%3Ftl%3Dpt-br&docid=sO69poWclFQdgM&tbnid=FvnkB1hRK0eA6M&vet=12ahUKEwiDgYDvlOyNAxVtr5UCHbRXIlwQM3oECBwQAA..i&w=1920&h=1080&hcb=2&ved=2ahUKEwiDgYDvlOyNAxVtr5UCHbRXIlwQM3oECBwQAA'),(10,'João','joao@gmail.com','11111111111','12345678','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa045hDrwPVN728o7oKrUl9hoE_LrWMCvkUw&s'),(11,'Ferro','ferro@gmail.com','11939005459','E21s20@1','https://dcdn-us.mitiendanube.com/stores/002/054/579/products/ferro1-df50c209021d066f3816489071657954-640-0.jpg'),(12,'Bruno Oliveira','bruno@gmail.com','11942265315','bruno@gmail.com','https://i.gifer.com/9kwM.gif'),(13,'Lucas Canuto Previtero','lucasprevitero@gmail.com','11953101496','oicanutoquemsoueu','https://pm1.aminoapps.com/6715/14f32a345be1f4d7a6f71017bac201533f72118f_hq.jpg'),(14,'Cristiano Ronaldo','ronaldo@gmail.com','11959052424','12345678','https://conteudo.imguol.com.br/c/esporte/d6/2025/04/05/cristiano-ronaldo-durante-jogo-entre-al-hilal-e-al-nassr-no-campeonato-saudita-1743855177331_v2_450x450.jpg'),(15,'Caio Sousa','CAIO@EMAIL.COM','11984179698','Caiosousa','https://patobah.com.br/wp-content/uploads/2024/07/c5926daef94c022a99b75f9553d88783-jpg.webp'),(17,'HEROBRINE','herobrine@gmail.com','12345678910','Mine123!','https://play-lh.googleusercontent.com/nIXwJdF88zVk3HBV2-7ztq5LNFC99fc8DiIYjrfFnztTPTf9mRm2zFrmxWm0o2LtzA'),(18,'Luiz','luiz@gmail.com','11111111111','12345678','https://bloody-disgusting.com/wp-content/uploads/2019/01/undertale-horror-header.png'),(19,'HEROBRINE DAS TREVAS','minecraft@gmail.com','12345678910','Mine123!','https://play-lh.googleusercontent.com/nIXwJdF88zVk3HBV2-7ztq5LNFC99fc8DiIYjrfFnztTPTf9mRm2zFrmxWm0o2LtzA'),(20,'Hércules','hercules@email.com','11999999999','Paralelepipedo','https://i1.sndcdn.com/artworks-000063810858-ugdf1u-t500x500.jpg'),(22,'vini','vinizin@gmail.com','11953101496','12345678','https://pm1.aminoapps.com/6715/14f32a345be1f4d7a6f71017bac201533f72118f_hq.jpg'),(23,'towers','gabrielrapani@gmail.com','12345678910','123456789','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEoEW_WLwHPWlUFU4CYIS_TAkRKnRsr1P50Q&s'),(24,'Lucas Canuto Previtero','lucasprevitero@gmail.com','11953101496','0505lucas','https://pm1.aminoapps.com/6715/14f32a345be1f4d7a6f71017bac201533f72118f_hq.jpg');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-12 13:52:16
