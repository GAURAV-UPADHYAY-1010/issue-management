function validateRegisterationRequest(request, response, next) {
    const body = request.body;

    //if (!body.fullname) {
      //  return response.status(400).json({message: 'Fullname is required'});
    //}
    if(!body.username){
        return response.status(400).json({message: 'Username is reqiured'});
    }
    if(!body.email){
        return response.status(400).json({message: 'email is reqiured'});
    }
    if(!body.acceptedTerms){
        return response.status(400).json({message: 'acceptedterms is reqiured'});
    }
    if(!body.userType){
        return response.status(400).json({message: 'UserType is reqiured'});
    }
    if(!body.password){
        return response.status(400).json({message: 'password is reqiured'});
    }
    next();
}

module.exports = {
    validateRegisterationRequest,
}