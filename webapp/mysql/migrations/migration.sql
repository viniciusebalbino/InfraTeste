CREATE TABLE `kabum_webform`.`tb_form` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `kwf_name` VARCHAR(45) NOT NULL,
  `kwf_email` VARCHAR(45) NOT NULL,
  `kwf_comment` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`id`));