IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [Users] (
    [Id] VARCHAR(80) NOT NULL,
    [NameUser] VARCHAR(80) NOT NULL,
    [Surname] VARCHAR(80) NOT NULL,
    [Passport] VARCHAR(80) NOT NULL,
    [Email] VARCHAR(30) NOT NULL,
    [Phone] VARCHAR(15) NOT NULL,
    [Birthday] VARCHAR(12) NOT NULL,
    CONSTRAINT [PK_Users] PRIMARY KEY ([Id])
);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20211008135323_FirstMigration', N'5.0.10');
GO

COMMIT;
GO

