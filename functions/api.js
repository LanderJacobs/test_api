export default async (request, context) => {
    console.log(request)
    console.log("-----")
    console.log(context)
    let test = JSON.parse(request)

    return Response.json(
        test
    )
}