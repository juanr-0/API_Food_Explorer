const knex = require("../database/knex");
const AppError = require('../utils/AppError');
const DiskStorage = require("../providers/DiskStorage");

class ProductsController {
  async create(request, response) {
    const { title, description, category, ingredients, price} = request.body;

    const checkProductAlreadyExists = await knex("products").where({title}).first();
    
    if(checkProductAlreadyExists){
            throw new AppError("Este prato já existe no cardápio.")
    }

    const imageFileName = request.file.filename;

    const diskStorage = new DiskStorage()

    const filename = await diskStorage.saveFile(imageFileName);

    const [product_id] = await knex("products").insert({
      image: filename,
      title,
      description,
      price,
      category,
    });
  
    const hasOnlyOneIngredient = typeof(ingredients) === "string";

        let ingredientsInsert

        if (hasOnlyOneIngredient) {
            ingredientsInsert = {
                name: ingredients,
                product_id
            }

        } else if (ingredients.length > 1) {
            ingredientsInsert = ingredients.map(name => {
                return {
                    name,
                    product_id
                }
            });
        }
  
    await knex("ingredients").insert(ingredientsInsert);

    return response.status(201).json();
  }

  async show(request, response) {
    const { id } = request.params

    const product = await knex("products").where({ id }).first()
    const ingredients = await knex("ingredients").where({ product_id: id }).orderBy("name")

    return response.json({
      ...product,
      ingredients,

    })
  }

  async update(request, response) {
    // Capturing Body Parameters and ID Parameters
    const { title, description, category, price, ingredients, image } = request.body;
    const { id } = request.params;

    // Requesting image filename
    const imageFileName = request.file.filename;

    // Instantiating diskStorage
    const diskStorage = new DiskStorage();

    // Getting the product data through the informed ID
    const product = await knex("products").where({ id }).first();

    // Deleting the old image if a new image is uploaded and saving the new image
    if (product.image) {
      await diskStorage.deleteFile(product.image);
    }

    const filename = await diskStorage.saveFile(imageFileName);

    // Verifications
    product.image = image ?? filename;
    product.title = title ?? product.title;
    product.description = description ?? product.description;
    product.category = category ?? product.category;
    product.price = price ?? product.price;

    // Updating the product infos through the informed ID
    await knex("products").where({ id }).update(product);

    // Checking if product has only one ingredient and updating the infos into the database
    const hasOnlyOneIngredient = typeof(ingredients) === "string";

    let ingredientsInsert

    if (hasOnlyOneIngredient) {
        ingredientsInsert = {
            name: ingredients,
            product_id: product.id,
        }
    
    } else if (ingredients.length > 1) {
        ingredientsInsert = ingredients.map(ingredient => {
            return {
            product_id: product.id,
            name : ingredient
            }
        });
    }
      
    await knex("ingredients").where({ product_id: id}).delete()
    await knex("ingredients").where({ product_id: id}).insert(ingredientsInsert)

    return response.status(201).json('Prato atualizado com sucesso')
  }

  async delete(request, response) {
    const { id } = request.params

    await knex("products").where({ id }).delete()

    return response.status(202).json();
  }

  async index(request, response) {
    const {title, ingredients} = request.query;
    

    let products;

    if (ingredients) {
      const filterIngredients = ingredients.split(',').map(ingredient => ingredient.trim());

      products = await knex("ingredients")
      .select([
        "products.id",
        "products.title",
        "products.user_id",
        "products.description",
        "products.category",
        "products.price",
        "products.image"
      ])
      .whereLike("products.title", `%${title}%`)
      .whereIn("title", filterIngredients)
      .innerJoin("products", "products.id", "ingredients.product_id")
      .groupBy("products.id")
      .orderBy("products.title")

    } else {
      products = await knex("products")
        .whereLike("title", `%${title}%`)
        .orderBy("title")
    }

    const userIngredients = await knex("ingredients")
    const productsWhithIngredients = products.map(product => {
      const productIngredients = userIngredients.filter(ingredient => ingredient.product_id === ingredient.id)

      return {
        ...product,
        ingredients: productIngredients
      }
    });

    return response.status(200).json(productsWhithIngredients);
  }
}

module.exports = ProductsController;