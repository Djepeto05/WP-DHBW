-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 20. Mrz 2023 um 16:41
-- Server-Version: 10.4.27-MariaDB
-- PHP-Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `blog_content`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `home_content`
--

CREATE TABLE `home_content` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `price` int(11) NOT NULL,
  `image` text NOT NULL,
  `description` text NOT NULL,
  `category` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `home_content`
--

INSERT INTO `home_content` (`id`, `title`, `price`, `image`, `description`, `category`) VALUES
(1, 'T Shirt black', 50, 'MCM Top 1', 'Test1 test1 Test1', 'Tops'),
(2, 'T Shirt bunt', 40, 'MCM Top 2', 'Test2 Test2 Test2', 'Tops'),
(3, 'Hose regular', 70, 'Hose 1', 'Test3 Test3 Test3', 'Pants'),
(4, 'T Shirt blackwhite', 45, 'MCM Top 1', 'Test4 Test4 Test4', 'Tops'),
(5, 'T Shirt black', 50, 'MCM Top 1', 'Testtestettestetstestetste', 'Tops'),
(6, 'T Shirt black', 50, 'MCM Top 1', 'jdsafdsahfkjdsahfkjdsa', 'Tops'),
(7, 'T Shirt black', 50, 'MCM Top 1', 'hfsahfkjlhsakjfs', 'Tops'),
(8, 'Hose baggy 1', 90, 'Hose 2', 'Eine baggy Hose in blau', 'Pants'),
(9, 'Hose baggy dunkelblau', 110, 'Hose 3', 'Das ist eine weite dunkelblaue Hose', 'Pants');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
