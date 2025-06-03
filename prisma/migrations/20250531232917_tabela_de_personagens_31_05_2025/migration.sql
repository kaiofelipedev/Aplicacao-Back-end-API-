-- CreateTable
CREATE TABLE `Personagens` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `apelido` VARCHAR(191) NOT NULL,
    `biografia` VARCHAR(191) NOT NULL,
    `dataCriacao` DATETIME(3) NOT NULL,
    `localNasc` VARCHAR(191) NOT NULL,
    `descVestimenta` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NOT NULL,
    `especie` VARCHAR(191) NOT NULL,
    `nomeCriador` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
