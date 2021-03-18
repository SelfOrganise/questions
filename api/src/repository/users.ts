import { PoolClient } from "pg";
import { getUserInfo } from "../auth/authClient";
import { pool } from "./db";

export interface User {
  id: number;
  createdAtUtc: string;
  externalId: string;
}

export async function getOrCreateUser(
  externalId: string,
  accessToken: string
): Promise<number> {
  const client = await pool.connect();
  let user = await getUser(client, externalId);
  if (!user) {
    user = createUser(client, externalId, accessToken);
  }

  await client.release();
  return user["id"];
}

async function createUser(
  client: PoolClient,
  externalId: string,
  accessToken: string
) {
  const userInfo = await getUserInfo(accessToken);
  const result = await client.query(
    `INSERT INTO users ("createdAtUtc", "externalId", "email", "name")
            VALUES (NOW(), $1, $2, $3)
            RETURNING id`,
    [externalId, userInfo.email, userInfo.name]
  );

  return result.rows[0];
}

async function getUser(client: PoolClient, externalId: string) {
  const result = await client.query(
    `select id from users where "externalId" = $1`,
    [externalId]
  );

  return result.rows[0];
}
