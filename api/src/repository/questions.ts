import { Question } from "../schemas/questions/data";
import { pool } from "./db";

export async function getQuestions(userId: number): Promise<Array<Question>> {
  const client = await pool.connect();
  const result = await client.query(
    `SELECT * from questions 
     where "createdBy" = $1
     order by "createdAtUtc" desc`,
    [userId]
  );
  await client.release();
  return result.rows;
}

export async function addQuestion(
  question: Partial<Question>
): Promise<Question> {
  const client = await pool.connect();
  const result = await client.query(
    'insert into questions("content", "createdBy") values ($1, $2) returning *',
    [question.content, question.createdBy]
  );

  await client.release();
  return result.rows[0];
}

export async function deleteQuestion(
  id: number,
  currentUserId: number
): Promise<boolean> {
  const client = await pool.connect();
  const result = await client.query(
    `delete from questions where id = $1 and "createdBy" = $2`,
    [id, currentUserId]
  );
  await client.release();
  return result.rowCount > 0;
}
