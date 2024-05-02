import { AdminTransaction } from "./transactions/admin.transaction";
import { UserTransaction } from "./transactions/user.transaction";


let Permission = {
    User: UserTransaction,
    Admin: AdminTransaction
}

export default Permission;