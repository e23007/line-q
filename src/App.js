import {useEffect, useState} from 'react';
import liff from "@line/liff";

const App=()=>{
  const [message,setMessage]=useState("") //メッセージ
  //メッセージ送信関数
  const post=()=>{
    liff.sendMessages([
      {
        type:'text',
        text:`${message}`,
      }
    ])
  };
  //liffidの初期化
  useEffect(() => {
    const create=async ()=>{
    console.log("start liff.init()...");
    await liff
      .init({ liffId: process.env.REACT_APP_LIFF_ID})
      .then(() => {
        console.log('init() OK')
      })
      .catch((error) => {
        console.log(`liff.init() failed: ${error}`);
      });
    }
    create()
  }, []);
  return (
    <>
      <input onChange={e=>setMessage(e.target.value)} />
      <button onClick={post}>送信</button>
    </>
  );
};

export default App;