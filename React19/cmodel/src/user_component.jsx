import stye from "./user_prof.module.css";
import { useState } from "react";
function UserComponent() {
    const [clas, setClas] = useState(false);

    let a = stye.container;
    let b = stye.text;
    let c = stye.para;
    let d = stye.img_div;
    let e = stye.img;
    let f = stye.manhed;

    return (
        <>
            <h1 className={stye.heding}>user Profile</h1>

            <button className={stye.butn} onClick={() => setClas(!clas)} >Click</button>
            <div className={clas ? f : null}>

                <div className={clas ? a : null}>
                    <div className={clas ? d : null}>
                        <img className={clas ? e : null} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lvjjRAVDQ-nBDq_4dy1xCyRjjDaHV-Tqcw&s" alt="profile" />
                    </div>
                    <div className={clas ? b : null}>
                        <h4>Nitesh Amule</h4>
                        <p className={clas ? c : null}>Sofhtwear Dewloper</p>
                    </div>
                </div>
                <div className={clas ? a : null}>
                    <div className={clas ? d : null}>
                        <img className={clas ? e : null} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lvjjRAVDQ-nBDq_4dy1xCyRjjDaHV-Tqcw&s" alt="profile" />
                    </div>
                    <div className={clas ? b : null}>
                        <h4>Nitesh Amule</h4>
                        <p className={clas ? c : null}>Sofhtwear Dewloper</p>
                    </div>
                </div>
                <div className={clas ? a : null}>
                    <div className={clas ? d : null}>
                        <img className={clas ? e : null} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lvjjRAVDQ-nBDq_4dy1xCyRjjDaHV-Tqcw&s" alt="profile" />
                    </div>
                    <div className={clas ? b : null}>
                        <h4>Nitesh Amule</h4>
                        <p className={clas ? c : null}>Sofhtwear Dewloper</p>
                    </div>
                </div>
                <div className={clas ? a : null}>
                    <div className={clas ? d : null}>
                        <img className={clas ? e : null} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lvjjRAVDQ-nBDq_4dy1xCyRjjDaHV-Tqcw&s" alt="profile" />
                    </div>
                    <div className={clas ? b : null}>
                        <h4>Nitesh Amule</h4>
                        <p className={clas ? c : null}>Sofhtwear Dewloper</p>
                    </div>
                </div>
                <div className={clas ? a : null}>
                    <div className={clas ? d : null}>
                        <img className={clas ? e : null} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lvjjRAVDQ-nBDq_4dy1xCyRjjDaHV-Tqcw&s" alt="profile" />
                    </div>
                    <div className={clas ? b : null}>
                        <h4>Nitesh Amule</h4>
                        <p className={clas ? c : null}>Sofhtwear Dewloper</p>
                    </div>
                </div>
                <div className={clas ? a : null}>
                    <div className={clas ? d : null}>
                        <img className={clas ? e : null} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lvjjRAVDQ-nBDq_4dy1xCyRjjDaHV-Tqcw&s" alt="profile" />
                    </div>
                    <div className={clas ? b : null}>
                        <h4>Nitesh Amule</h4>
                        <p className={clas ? c : null}>Sofhtwear Dewloper</p>
                    </div>
                </div>
                <div className={clas ? a : null}>
                    <div className={clas ? d : null}>
                        <img className={clas ? e : null} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lvjjRAVDQ-nBDq_4dy1xCyRjjDaHV-Tqcw&s" alt="profile" />
                    </div>
                    <div className={clas ? b : null}>
                        <h4>Nitesh Amule</h4>
                        <p className={clas ? c : null}>Sofhtwear Dewloper</p>
                    </div>
                </div>
                <div className={clas ? a : null}>
                    <div className={clas ? d : null}>
                        <img className={clas ? e : null} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lvjjRAVDQ-nBDq_4dy1xCyRjjDaHV-Tqcw&s" alt="profile" />
                    </div>
                    <div className={clas ? b : null}>
                        <h4>Nitesh Amule</h4>
                        <p className={clas ? c : null}>Sofhtwear Dewloper</p>
                    </div>
                </div>

            </div>
        </>
    );
};
export default UserComponent;
// -function A --- IGNORE ---