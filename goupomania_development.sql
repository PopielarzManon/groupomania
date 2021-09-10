-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 10 sep. 2021 à 14:50
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `goupomania_development`
--

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `messageId` int(11) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `test2` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`id`, `userId`, `messageId`, `content`, `createdAt`, `updatedAt`) VALUES
(14, 10, 13, 'J\'avoue, le html sémentique c\'est quelque chose !', '2021-09-10 12:48:07', '2021-09-10 12:48:07'),
(15, 8, 18, 'C\'est vrai que Kévin aime la difficulté hahaha', '2021-09-10 12:52:17', '2021-09-10 12:52:17'),
(16, 8, 17, 'Trop réel haha ! ', '2021-09-10 12:52:56', '2021-09-10 12:52:56'),
(19, 9, 18, 'Hahah !', '2021-09-10 14:48:10', '2021-09-10 14:48:10');

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `likes` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `test` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`id`, `userId`, `title`, `content`, `attachment`, `likes`, `createdAt`, `updatedAt`) VALUES
(12, 8, 'Premier meme !', 'C\'est vrai en plus !', 'http://localhost:3000/images/unknown.png1631278007079.png', 0, '2021-09-10 12:46:47', '2021-09-10 12:46:47'),
(13, 8, 'Un second !', '', 'http://localhost:3000/images/EUXOgVHUUAERTe6.jpg1631278036989.jpg', 0, '2021-09-10 12:47:16', '2021-09-10 12:47:16'),
(14, 10, 'J\'en ai aussi !', '', 'http://localhost:3000/images/a3EnRy1_460s.jpg1631278064289.jpg', 0, '2021-09-10 12:47:44', '2021-09-10 12:47:44'),
(15, 9, 'Haha !', '', 'http://localhost:3000/images/cover6.png1631278128580.png', 0, '2021-09-10 12:48:48', '2021-09-10 12:48:48'),
(16, 9, 'Vraiment cool ce site !', '', 'http://localhost:3000/images/26-260013_wolverine-meme-template.png1631278152808.png', 0, '2021-09-10 12:49:12', '2021-09-10 12:49:12'),
(17, 10, 'J\'en ai trouvé un trop drole !', '', 'http://localhost:3000/images/Theyre-The-Same-f.jpg1631278187590.jpg', 0, '2021-09-10 12:49:47', '2021-09-10 12:49:47'),
(18, 10, 'Coucou à Kévin haha', '', 'http://localhost:3000/images/fxfvsdv7ffm5151.png1631278288071.png', 0, '2021-09-10 12:51:28', '2021-09-10 12:51:28');

-- --------------------------------------------------------

--
-- Structure de la table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20210825144540-create-user.js'),
('20210825144735-create-message.js'),
('20210904130300-create-comment.js');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `pseudo`, `password`, `bio`, `isAdmin`, `createdAt`, `updatedAt`) VALUES
(7, 'admin@admin.fr', 'admin', '$2b$10$4v8Peri0O3K8UwbOXKF3Bu3FLaC06LEh6isLLoANRoJ86n.9rGBtW', NULL, 1, '2021-09-08 11:29:31', '2021-09-08 11:29:31'),
(8, 'test@test.fr', 'Tartenpion', '$2b$10$O1h6bLQFzBtrF1WjJun/qePRkEWcO70sY7zrzaVzVImNLXHr5tCD2', NULL, 0, '2021-09-10 12:40:50', '2021-09-10 12:40:50'),
(9, 'test2@test.fr', 'Kévin', '$2b$10$lpv5N7zJ2j93EXzk2dukkevtZEYzaMBQFQ/LpkfwcLmqjEbc5qZUy', NULL, 0, '2021-09-10 12:43:39', '2021-09-10 12:43:39'),
(10, 'test3@test.fr', 'Magalie', '$2b$10$e66oQ0UznA.Ljvyhixytpe1T2VQrDAc6ut3r0eOLovstQ0pm.Q9dO', NULL, 0, '2021-09-10 12:44:45', '2021-09-10 12:44:45');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `test2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `test` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
