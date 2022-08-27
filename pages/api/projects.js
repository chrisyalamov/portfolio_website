import { GraphQLClient } from "graphql-request"

const hygraph = new GraphQLClient(process.env.HYGRAPH_URL, {
    method: "POST",
    headers: {
        authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    }
})

let handler = async (req, res) => {
    const data = await hygraph.request(`
    {
        projects {
            slug
            projectTitle
            briefDescription
        }
    }
    `);

    res.json(data)
}

export default handler;