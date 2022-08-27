import { GraphQLClient } from "graphql-request"

const hygraph = new GraphQLClient(process.env.HYGRAPH_URL, {
    method: "POST",
    headers: {
        authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    }
})

let handler = async (req, res) => {
    const data = await hygraph.request(`
    query GetProject($slug:String) {
        project(where: {slug: $slug}) {
          slug
          projectTitle
          briefDescription
          disclaimers {
            shortName
            fullName
            disclaimerBody
          }
          projectSections {
            title
            body
          }
        }
      }
    `, {
        slug: req.query.slug
    });

    res.json(data)
}

export default handler;