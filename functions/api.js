export default async (request, context) => {
    log(request)
    log("-------")
    log(context)
    let test = JSON.parse(request.httpMethod)

    return Response.json(
        test
    )
}