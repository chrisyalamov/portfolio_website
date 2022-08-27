import { GraphQLClient } from "graphql-request";

const hygraph = new GraphQLClient(process.env.HYGRAPH_URL, {
    method: "POST",
    headers: {
        authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    }
  })

let handler = async (req, res) => {

    const data = await hygraph.request(`
    mutation MyMutation($email: String!,$name: String!,$message: String!$pBudget: String!,$pName: String!,$timeframe: String!) {
        createFormSubmission(
          data: {
            email: $email,
            message: $message, 
            name: $name,
            projectBudget: $pBudget,
            projectName: $pName,
            projectTimeframe: $timeframe,
        }
        ){
            id
        }
      }      
    `, {
        email: req.body.email,
        message: req.body.message,
        name: req.body.name,
        pBudget: req.body.budget || '',
        pName: req.body.projectName || '',
        timeframe: req.body.projectTimeframe || '',
    });
    console.log(data)
    res.status(200).json(data);
}

export default handler;