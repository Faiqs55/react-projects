import {Client, Databases, Query } from "appwrite";
import { envVARS } from "../envConfig";

class DbServices {
  client = new Client();
  database;

  constructor() {
    this.client.setEndpoint(envVARS.appwriteURL).setProject(envVARS.appwriteID);

    this.database = new Databases(this.client);
  }

  // GET ALL CATEGORIES
  async getCategories() {
    try {
      const categories = await this.database.listDocuments(
        envVARS.databaseID,
        envVARS.categoriesID
      );

      if (categories) {
        return categories;
      }
    } catch (error) {
      throw error;
    }
  }

  // GET ALL PRODUCTS
  async getAllProducts() {
    try {
      const products = await this.database.listDocuments(
        envVARS.databaseID,
        envVARS.productsID
      );

      if (products) {
        return products;
      }
    } catch (error) {
      throw error;
    }
  }

  // GET SINGLE PRODUCT
  async getSingleProduct(slug) {
    try {
      let product = await this.database.listDocuments(
        envVARS.databaseID,
        envVARS.productsID,
        [
            Query.equal('slug', slug)
        ]
      );

      if (product) {
        return product.documents[0];
      }
    } catch (error) {
      throw error;
    }
  }
}

const dbService = new DbServices();

export default dbService;
