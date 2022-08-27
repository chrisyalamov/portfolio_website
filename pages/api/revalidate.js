let handler = async (req, res) => {
    if (req.body.token !== process.env.NEXT_REVALIDATE_TOKEN) res.status(401).send('Unauthorized')

    await res.revalidate(req.body.pathToRevalidate);
    res.status(200).send('OK');
}

export default handler;