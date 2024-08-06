-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `event` (
  `event_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` tinytext COLLATE utf8mb4_bin NOT NULL,
  `description` text COLLATE utf8mb4_bin NOT NULL,
  `time` datetime NOT NULL,
  `img_url` text COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;



ALTER TABLE `event`
  ADD PRIMARY KEY (`event_id`);


ALTER TABLE `event`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

INSERT INTO `event` (`event_id`, `user_id`, `name`, `description`, `time`, `img_url`) VALUES
(1, 4, 'Pothery Summer Sale', 'Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus neque vulputate habitasse pharetra augue proin sagittis posuere.', '2024-08-06 00:15:19', '/placeholders/background-image.jpg'),
(2, 4, 'Pothery Summer Sale 2', 'Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus neque vulputate habitasse pharetra augue proin sagittis posuere.', '2024-08-07 00:15:19', '/placeholders/background-image.jpg'),
(3, 4, 'Pothery Summer Sale 3', 'Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus neque vulputate habitasse pharetra augue proin sagittis posuere.', '2024-08-08 00:15:19', '/placeholders/background-image.jpg'),
(4, 4, 'Pothery Summer Sale 4', 'Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus neque vulputate habitasse pharetra augue proin sagittis posuere.', '2024-08-23 00:15:19', '/placeholders/background-image.jpg');


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
