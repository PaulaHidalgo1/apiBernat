//SWAGGER
const path = require('path');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec =

{
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API",
            version: "1.0",
            description: "API for DAW",
            contact: {
                name: "DAW CLASS",
                email: "support@gmail.com",
                url: "https://api.com"
            },
            license: {
                name: "GPLv3",
                url: "https://www.gnu.org/licenses/gpl-3.0.en.html"
            },
        },
        paths: {
            
            
//-------------------------------------------------------------------------------------------------------------------------------------------------

            "/api/gatetes": {
                get: {
                    summary: "Returns a gatete from the system that the user has access to",
                    tags: [
                        "gatetes"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of gatete to fetch",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "A gatete.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string"

                                            }
                                        }, example: {
                                            "name": "Michi"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                post: {
                    summary: "Crear un nuevo gatete",
                    tags: [
                        "gatetes"
                    ],
                    responses: {
                        200: {
                            description: "Operación correcta",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                }
                                            }, example: {

                                                "id": 1,
                                                "name": "Michi"
                                            }
                                        }
                                    }
                                }
                            }

                            }
                        }
                    },
                    put: {
                        summary: "Crear un nuevo gatete",
                        tags: [
                            "gatetes"
                        ],
                        responses: {
                            200: {
                                description: "Operación correcta",
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array",
                                            items: {
                                                type: "object",
                                                properties: {
                                                    id: {
                                                        type: "integer",
                                                        format: "int64"
                                                    },
                                                    name: {
                                                        type: "string"
                                                    }
                                                }, example: {
    
                                                    "id": 1,
                                                    "name": "Michi"
                                                }
                                            }
                                        }
                                    }
                                }
    
                                }
                            }
                        },
                delete: {
                    summary: "Deletes a gatete from the system",
                    tags: [
                        "gatetes"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of gatete to delete",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "A gatete.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "Gatete borrado"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },   
        
           "/api/gatetes/{id}": {
                get: {
                    summary: "Returns a gatete from the system that the user has access to",
                    tags: [
                        "gatetes"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of gatete to fetch",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "A gatete.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string"

                                            }
                                        }, example: {
                                            "name": "Michi"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            
            



        //-------------------------------------------------------------------------------------------------------------------------------


        
            "/api/perretes": {
                get: {
                    summary: "Returns all perretes from the system that the user has access to",
                    tags: [
                        "perretes"
                    ],
                    responses: {
                        200: {
                            description: "A list of perretes.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                }
                                            }, example: {

                                                "id": 1,
                                                "name": "Samba"
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                },
                post: {
                    summary: "Crear un nuevo perrete",
                    tags: [
                        "perretes"
                    ],
                    responses: {
                        200: {
                            description: "Operación correcta",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                }
                                            }, example: {

                                                "id": 1,
                                                "name": "Samba"
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                },
                put: {
                    summary: "Crear un nuevo perrete",
                    tags: [
                        "perretes"
                    ],
                    responses: {
                        200: {
                            description: "Operación correcta",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                }
                                            }, example: {

                                                "id": 1,
                                                "name": "Samba"
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                },
                delete: {
                    summary: "Deletes a perrete from the system",
                    tags: [
                        "perretes"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of perrete to delete",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "A perrete.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "Perrete borrado"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
            }, 
            "/api/perretes/{id}": {
                get: {
                    summary: "Returns a perrete from the system that the user has access to",
                    tags: [
                        "perretes"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of perrete to fetch",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "A perrete.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string"

                                            }
                                        }, example: {
                                            "name": "Samba"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    apis: [path.join(__dirname, 'routes/*.js')]
    //apis: [path.join(__dirname, 'routes/*.js')]
};
const swaggerDocs = (app, port) => {

    app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
    console.log(`Swagger docs disponible en localhost/api/docs`);

}

module.exports = { swaggerDocs };
