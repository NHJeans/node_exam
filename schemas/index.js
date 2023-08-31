import dotenv from "dotenv";
dotenv.config();

import mongoose from 'mongoose';

// 몽고디비 연결 
const connect = () => {
  mongoose
    .connect(
      process.env.MONGO_URI,
      {
        dbName: 'nodejs_lv1_exam',
      },
    )
    .catch((err) => console.log(err)) // 연결 오류 핸들링
    .then(() => console.log('몽고디비 연결 성공')); // 연결 성공 메시지
};

// 몽고디비 연결 에러 이벤트 리스너
mongoose.connection.on('error', (err) => {
  console.error('몽고디비 연결 에러', err);
});

export default connect;