-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.5.2-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para database
CREATE DATABASE IF NOT EXISTS `database` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `database`;

-- Volcando estructura para tabla database.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` tinytext DEFAULT NULL,
  `Mail` tinytext DEFAULT NULL,
  `Balance` int(11) DEFAULT NULL,
  `Pass` tinytext DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla database.usuarios: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`ID`, `Nombre`, `Mail`, `Balance`, `Pass`) VALUES
	(1, 'asrieL', 'Sakxz13@gmail.com', 54, 'dreemurr'),
	(2, 'Kevve', 'Kevve@gmail.com', 150, 'teamfighttactics'),
	(3, 'Papi_Menem', 'Papi_Menem@gmail.com', 223, 'menemlohizo'),
	(4, 'Felipus_12', 'Felipus_12@gmail.com', 135, 'teamfighttacticsfan'),
	(6, 'Celeste', 'Anacktk@gmail.com', 55, 'residentevil1'),
	(13, 'Marotin', 'merluzin21@gmail.com', 86, '123');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
