import { pool } from './db';

export interface User {
  id: number;
  createdAtUtc: string;
  externalId: string;
}

export async function getOrCreateUser(externalId: string): Promise<number> {
  const client = await pool.connect();
  const result = await client.query(
    `WITH new_user AS (
        INSERT INTO users ("createdAtUtc", "externalId")
            VALUES (NOW(), $1)
            ON CONFLICT ("externalId") DO NOTHING
            RETURNING id
    )
     SELECT COALESCE(
                        (SELECT id FROM new_user),
                        (SELECT id FROM users WHERE "externalId" = $1)
                ) as id`,
    [externalId]
  );
  await client.release();
  return result.rows[0]['id'];
}
