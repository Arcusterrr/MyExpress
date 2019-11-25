import * as dbForUsersConfig from "./db-cfg/db-foruser-config.json";

import PgPromise, { IMain } from "pg-promise";

export const pgp: IMain = PgPromise({});
