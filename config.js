var config = {}

config.host = process.env.HOST || "https://praveendocumentdb1.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "pSEZLvHToW1LiIVPaoiwPPbYns7sWlYQC1bwttH50UgwVVDzjDMiAfzeke7itFwIGtT2kMJlKuzRw1cjRiz4tw==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;
