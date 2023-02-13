import './App.css';
import { useState } from "react";

function App() {

    const [state, setState] = useState(1);

    const action = (index) => {
        setState(index)
    }

    return (
       <div className="App">
            <div className="App-header">
                <h1>Sextant</h1>
            </div>

           <div className="box">

               <div className="tabs">
                   <div onClick={() => action(1)} className={`${state === 1 ?
                       'tab active-tab' : 'tab'}`}>
                       tab1
                   </div>

                   <div onClick={() => action(2)} className={`${state === 2 ?
                       'tab active-tab' : 'tab'}`}>
                       tab2
                   </div>

                   <div onClick={() => action(3)} className={`${state === 3 ?
                       'tab active-tab' : 'tab'}`}>
                       tab3
                   </div>
               </div>
               { /* contents */}
               <div className="contents">
                   <div className={`${state === 1 ?
                       "content active-content" : "content"}`}>
                       <h2>content1</h2>
                       <p>this is content 1</p>
                   </div>
                   <div className={`${state === 2 ?
                       "content active-content" : "content"}`}>
                       <h2>content2</h2>
                       <p>this is content 2</p>
                   </div>
                   <div className={`${state === 3 ?
                       "content active-content" : "content"}`}>
                       <h2>content3</h2>
                       <p>this is content 3</p>
                   </div>

               </div>
           </div>


      </div>
    );
}

export default App;
