const AppError = require('../utils/AppError');

// roleToVerify = admin, customer

// ["admin", "customer"].includes("customer");

function verifyUserAuthorization(roleToVerify){
  return (request, response, next)=>{
    const {role} = request.user;

    if(!roleToVerify.includes(role)){
      throw new AppError("Access Denied: Unauthorized User", 401)
    }

    return next();
  }
}

module.exports = verifyUserAuthorization;