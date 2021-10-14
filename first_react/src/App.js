import Device from './Device';
import Counter from './Counter';
import Food from './Food';
import Movie from './Movie';
import Counter2 from './Counter2.js';
import MyDevice from './MyDevice.js';
import MyDevice2 from './MyDevice2.js';
function App() {
  const mydataApp ={
    "MyDeviceData" : [
      {
        "name" : "갤럭시노트 10",
        "RAM" : "6",
        "HomeButton" : false,
        "TouchID" : "NO",
        "FaceID" : "YES"
      },
      {
        "name" : "아이패드 ",
        "RAM" : "8",
        "HomeButton" : false,
        "TouchID" : "YES",
        "FaceID" : "YES"
      },
      {
        "name" : "갤럭시S 21",
        "RAM" : "12",
        "HomeButton" : true,
        "TouchID" : "YES",
        "FaceID" : "NO"
      }
    ]
  }

  return (
    <div>
      <h1>안녕</h1>
      <h2>안녕2</h2>
      <Device />
      <Counter />
      <Food />
      <Movie title="영화1"/>
      <Movie title="영화2"/>
      <Movie title="영화3"/>
      <Movie title="영화4"/>
      <hr/>
      <h3>Count2 클래스 화살표 함수</h3>
      <Counter2 />
      <hr/>
      <MyDevice mydata={mydataApp}/>
      <hr/>
      <h3>MyDevice2</h3>
      <MyDevice2>MyDevice2-data</MyDevice2>
    </div>
  );
}

export default App;
