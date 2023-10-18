export default async (request, context) => {
    let test = JSON.parse(request.body)

    return Response.json(
        test
    )
}