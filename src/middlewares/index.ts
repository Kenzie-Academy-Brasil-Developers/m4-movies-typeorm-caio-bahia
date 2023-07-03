import handleError from "./handdleError.middleware"
import verifyIdExists from "./verifyIdExists.middleware"
import validateBody from "./validateBody.middleware"
import verifyIfNameExists from "./verifyIfNameExistis.middleware"
import pagination from "./pagination.middleware"

export default { handleError, validateBody, verifyIdExists, verifyIfNameExists, pagination }
