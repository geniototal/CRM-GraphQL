const books = [
    {
        titulo: 'JavaScript Moderno Guía Definitiva Construye +10 Proyectos',
        tecnologia: 'JavaScript ES6',
    },
    {
        titulo: 'React – La Guía Completa: Hooks Context Redux MERN +15 Apps',
        tecnologia: 'React',
    },
    {
        titulo: 'Node.js – Bootcamp Desarrollo Web inc. MVC y REST API’s',
        tecnologia: 'Node.js'
    },
    {
        titulo: 'ReactJS Avanzado – FullStack React GraphQL y Apollo',
        tecnologia: 'React'
    }
];
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const resolvers = {
    Query: {
        obtenerBooks: (_, { input }, ctx, info) => {
            console.log("ctx", ctx);
            console.log("input", input);
            const resultado = books.filter((book) => book.tecnologia === input.tecnologia)
            return resultado
        },
        /* obtenerTecnologia: () => books */
    }
}

module.exports = resolvers