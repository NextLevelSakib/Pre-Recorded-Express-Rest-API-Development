exports.Hello = function (req, res){

    res.statusCode=200
    res.json({status: "Success", data: "Hello Ronaldo"})

}




exports.HelloPost = function (req, res){

    res.statusCode=400
    res.json({status: "Success", data: "Hello Ronaldo"})

}