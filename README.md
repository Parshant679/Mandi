# Mandi
Ecommerce Website

# Tech stack 
     FrontEnd : HTML ,CSS , Javascript ,React JS ,Redux tool kit .
     BackEnd : Node js ,Express js , Mongo DB (Atlas).
     Authentication : JWT Tokens , (Oauth2.0) in Future.

# Data Base Schemas :
## USER SCHEMA : {
     name: {
           type: String,
            required: true,
            },
    email: {
            type: String,
            required: true,
            },
    password: {
              type: String,
              required: true,
            },
    role: {
            type: Number,
            default: 0,
          },
    cart: {
          type: Array,
          default: [],
        },
     }
    
     
## PRODUCT SCHECMA :{
         product_id: {
              type: String,
              unique: true,
              required: true,
            },
        
            title: {
              type: String,
              required: true,
            },
            price: {
              type: Number,
              required: true,
            },
            description: {
              type: String,
              required: true,
            },
            content: {
              type: String,
              required: true,
            },
            Images: {
              type: Object,
              required: true,
            },
            category: {
              type: String,
              requred: true,
            },
            checked: {
              type: Boolean,
              default: false,
            },
            sold: {
              type: Number,
              default: 0,
            },
    }
    
## CATEGORY SCHEMA :{
            name: {
                type: String,
                rquired: true,
                trim: true,
                unique: true,
              },
            }
            
# Future Scope 
       Product review system .
       Oauth Implementation .
       Payment Gate way integration.
