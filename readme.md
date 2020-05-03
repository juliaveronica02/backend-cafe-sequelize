CREATE DATABASE IF NOT EXISTS `resto`;
USE `resto`;
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu`(
`id` int(11) NOT NULL AUTO_INCREMENT,
`name` varchar(255) NOT NULL,
`price` varchar(128) NOT NULL,
`description` text NOT NULL,
`image` varchar(255) NOT NULL,
`createdAt` datetime NOT NULL,
`updatedAt` datetime NOT NULL,
PRIMARY KEY (id)
);

desc menu;
