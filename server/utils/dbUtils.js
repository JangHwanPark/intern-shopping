import pool from './database.js';
import bcrypt from "bcrypt";

// 모든 테이블 조회
export const selectAll = async (tableName) => {
    const conn = await pool.getConnection();  // 연결 풀에서 연결을 가져옴
    try {
        const [rows, fields] = await conn.query(`SELECT * FROM ${tableName}`);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        if (conn) conn.release();  // 연결을 풀에 반환
    }
}

// 사용자 추가(회원가입)
export const insertUser = async (email, password, username) => {
    const conn = await pool.getConnection();
    try {
        // 사용자가 입력한 이메일과 DB 내 데이터 비교
        const [rows] = await conn.query(`SELECT * FROM users WHERE email = ?`, [email]);

        // 이미 존재하는 이메일인 경우 에러 반환
        if (rows.length > 0) throw new Error('User already exists');

        // 사용자 추가 쿼리 및 실행
        const query = `INSERT INTO users (email, password, username) VALUES (?, ?, ?)`;
        const [results] = await conn.query(query, [email, password, username]);

        return results;
    } catch (error) {
        throw error;
    } finally {
        // 데이터베이스 연결 종료 및 풀에 반환
        if (conn) conn.release();
    }
}

// 사용자 로그인
export const signInUser = async (email, inputPassword) => {
    const conn = await pool.getConnection();

    try {
        console.log('로그인 시도중 ... ... ...')
        const query = `SELECT * FROM users WHERE email = ?`;
        const [results] = await conn.query(query, [email]);

        if (results.length > 0) {
            const storedHash = results[0].password;
            const hashMatch = await bcrypt.compare(inputPassword, storedHash);

            if (hashMatch) {
                console.log('비밀번호 일치');
                return results[0];
            } else {
                console.log('비밀번호 불일치');
                return false;
            }
        } else {
            throw new Error('User not Found')
        }
    } catch (error) {
        throw error;
    } finally {
        if (conn) conn.release();
    }
}

// 로그인한 사용자 정보 조회
export const selectUserById = async (uid) => {
    const conn = await pool.getConnection();
    try {
        const query = `SELECT * FROM users WHERE uid = ?`;
        const [rows] = await conn.query(query, [uid]);
        return rows[0];
    } catch (error) {
        throw error;
    } finally {
        if (conn) conn.release();
    }
}

// 이름으로 상품 조회
export const selectProductByName = async (productName) => {
    const conn = await pool.getConnection();

    try {
        const query = `SELECT * FROM products WHERE name = ?`;
        const [rows] = await conn.query(query, [productName]);
        return rows[0];
    } catch (error) {
        throw error;
    } finally {
        if (conn) conn.release();
    }
}

// 사용자 아이디로 장바구니 조회
export const selectCartByUserId = async (userId) => {
    const conn = await pool.getConnection();

    try {
        const query = `SELECT * FROM cart WHERE cid = ?`;
        const [rows] = await conn.query(query, [userId]);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        if (conn) conn.release();
    }
}