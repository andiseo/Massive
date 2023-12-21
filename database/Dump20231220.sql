-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: swiftmove
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idUser` int NOT NULL,
  `idMitra` int DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `contact` varchar(45) DEFAULT NULL,
  `pickAddress` longtext,
  `dropAddress` longtext,
  `date` date DEFAULT NULL,
  `status` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idUser_idx` (`idUser`),
  KEY `idMitra_idx` (`idMitra`),
  CONSTRAINT `idMitra` FOREIGN KEY (`idMitra`) REFERENCES `partners` (`idpartnes`),
  CONSTRAINT `idUser` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (26,7,3,'fauzi','08549563','kayu jati v solo','kayu putih 8 solo ','2023-12-20',3);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partner`
--

DROP TABLE IF EXISTS `partner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partner`
--

LOCK TABLES `partner` WRITE;
/*!40000 ALTER TABLE `partner` DISABLE KEYS */;
INSERT INTO `partner` VALUES (7,'Move Master','Move Master'),(8,'ShiftEase','ShiftEase'),(9,'TransitWise','TransitWise'),(10,'ReloHaul','ReloHaul'),(11,'SwiftShift','SwiftShift'),(12,'ShiftSavvy ','ShiftSavvy ');
/*!40000 ALTER TABLE `partner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partners`
--

DROP TABLE IF EXISTS `partners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partners` (
  `idpartnes` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` text NOT NULL,
  `service` varchar(45) NOT NULL,
  `price` varchar(45) NOT NULL,
  `loc` varchar(45) NOT NULL,
  PRIMARY KEY (`idpartnes`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partners`
--

LOCK TABLES `partners` WRITE;
/*!40000 ALTER TABLE `partners` DISABLE KEYS */;
INSERT INTO `partners` VALUES (3,'Move Master','Professional services for house & apartment moving. Within the city and outside the city.','moving house','120.000','Karawang'),(4,'Rapid Move','Professional services for house & apartment moving. Within the city and outside the city.','moving offiice','125.000','Solo'),(5,'Nobel','Professional services for house & apartment moving. Within the city and outside the city.','warming house','180.000','Surabaya'),(6,'Global move','Professional services for house & apartment moving. Within the city and outside the city.','warming house','200.000','Surabaya'),(8,'ShiftEase','Professional services for house & apartment moving. Within the city and outside the city.','moving house','120.000','Solo baru'),(9,'TransitWise','Professional services for house & apartment moving. Within the city and outside the city.','moving house','120.000','Surakarta'),(10,'ReloHaul','Professional services for house & apartment moving. Within the city and outside the city.','moving house','120.000','Kartasura'),(11,'SwiftShift','Professional services for house & apartment moving. Within the city and outside the city.','moving house','120.000','Karanganyar'),(12,'ShiftSavvy ','Professional services for house & apartment moving. Within the city and outside the city.','moving house','120.000','Kartasura');
/*!40000 ALTER TABLE `partners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ulasan`
--

DROP TABLE IF EXISTS `ulasan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ulasan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idOrder` int DEFAULT NULL,
  `idMitra` int DEFAULT NULL,
  `ulasan` longtext,
  PRIMARY KEY (`id`),
  KEY `idOrder_idx` (`idOrder`),
  KEY `idMitra_idx` (`idMitra`),
  CONSTRAINT `idOrder` FOREIGN KEY (`idOrder`) REFERENCES `order` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ulasan`
--

LOCK TABLES `ulasan` WRITE;
/*!40000 ALTER TABLE `ulasan` DISABLE KEYS */;
INSERT INTO `ulasan` VALUES (11,26,3,'pelayanan sangat baik dan juga ramah');
/*!40000 ALTER TABLE `ulasan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'andi','andiseo50@gmail.com','081344405159','itsme_andiseo','seyo@8323'),(4,'andi seyo','andiseyo50@gmail.com','081344405159','itsme_andiseo','12345'),(5,'FAUZI','wrnbhrt@gmail.com','123456','FZIWJJ','187566'),(6,'Moh Andi Setyo Nugroho','andiseyo50@gmail.com','081344405159','itsme_andiseo','08032003'),(7,'rahmat','rahmat89@gmail.com','08551521515','rahmat','rahmat'),(8,'rahmat1','rahmat1@gmail.com','0895354','rahmat1','rahmat1'),(9,'rahmat2','rahmat2@gmail.com','0895354','rahmat2','rahmat2'),(10,'rahmat2','rahmat2@gmail.com','0895354','rahmat2','rahmat2'),(13,'FAUZI RAHMAT RAMADHAN','2110631170066@student.unsika.ac.id','085544555','FauziRahmatRamadhan','12345678'),(16,'FAUZI RAHMAT RAMADHAN','Uhehdjk09839011@gmail.com','05454545','fauzi','123456');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-20 22:04:06
