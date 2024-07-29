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



CREATE TABLE `post` (
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `img_url` text COLLATE utf8mb4_bin NOT NULL,
  `content` text COLLATE utf8mb4_bin NOT NULL,
  `likes` mediumint(9) NOT NULL DEFAULT 0,
  `comments` mediumint(9) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;



INSERT INTO `post` (`post_id`, `user_id`, `img_url`, `content`, `likes`, `comments`) VALUES
(1, 4, '/placeholders/background-image.jpg', 'Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus neque vulputate habitasse pharetra augue proin sagittis posuere.', 10, 2),
(2, 4, '/placeholders/background-image.jpg', 'Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus neque vulputate habitasse pharetra augue proin sagittis posuere.', 22, 1),
(3, 12, '/placeholders/background-image.jpg', 'Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus neque vulputate habitasse pharetra augue proin sagittis posuere.', 2, 0);

--

--
ALTER TABLE `post`
  ADD PRIMARY KEY (`post_id`);


--
ALTER TABLE `post`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
