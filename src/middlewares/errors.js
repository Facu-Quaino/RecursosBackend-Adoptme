import EErrors from '../utils/errors/enums.js';

export default (error, req, res, next) => {

    switch (error.code) {
        
        case EErrors.INVALID_TYPES_ERROR:
            res.status(400).send({ status: "error", error: error.name,message:error.message,cause:error.cause });
            break;
        case EErrors.INVALID_PARAM:  
            res.status(400).json({ status: "error", error: error.name, cause: error.cause });
            break;
        default:
            res.send({ status: "error", error: "Unhandled error" });
    }
}