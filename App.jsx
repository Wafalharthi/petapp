import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X03MyProfile1 from "./components/X03MyProfile1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|03-my-profile-1)">
          <X03MyProfile1 {...x03MyProfile1Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const x03MyProfile1Data = {
    x323223: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/323223-5@1x.png",
    toffi: "Toffi",
    cat: "Cat",
    lury: "Lury",
    dog: "Dog",
    luci: "Luci",
    dog2: "Dog",
    path110: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/path-110@1x.png",
    path179: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/path-110@1x.png",
    path181: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/path-110@1x.png",
    path83: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/path-83@1x.png",
    path832: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/path-83-1@1x.png",
    path833: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/path-83-1@1x.png",
    cap: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/cap-1@1x.png",
    wifi: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/wifi-1@1x.png",
    cellularConnection: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/cellular-connection-1@1x.png",
    spanText: "9:4",
    spanText2: "1",
    title: "My Profile",
    jhonTim: "Jhon Tim",
    path74: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/path-74-1@1x.png",
    path109: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/path-109@1x.png",
    path180: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/path-109@1x.png",
    path182: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/path-109@1x.png",
    maskGroup3: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/mask-group-3@1x.png",
    maskGroup36: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/mask-group-36@1x.png",
    maskGroup34: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/mask-group-34@1x.png",
    group23: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/group-23-1@1x.png",
    maskGroup37: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/mask-group-37@1x.png",
    myPets: "My Pets",
    path101: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/path-101-3@1x.png",
    group109: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/group-109-3@1x.png",
    path200: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/path-200-1@1x.png",
    path201: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/path-201-1@1x.png",
    path202: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/path-202-1@1x.png",
    path203: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/path-203-2@1x.png",
    path204: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/path-204-4@1x.png",
    path205: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/path-205-1@1x.png",
    path206: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/path-205-1@1x.png",
    path207: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/path-205-1@1x.png",
    path208: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/path-208-1@1x.png",
    path209: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/path-209-2@1x.png",
    group232: "https://anima-uploads.s3.amazonaws.com/projects/608e75141469af3b5de07769/releases/608e752b8872bfb5c578fb50/img/group-23-2@1x.png",
};

