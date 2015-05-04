var config = {}

config.host = process.env.HOST || "https://documentdbdatabase.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "GrpCX546l828F5deJV1OPlyvpEbch5idEsAes8l96Hg9tqSeTj3xl4ZnoQwRcTqC6p8j2L7Ej64cLxSuSjDBWQ==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;