import React, { Profiler } from "react";
import Adresse from "./component/Profil/Adresse";
import Fullname from "./component/Profil/Fullname";
import Profilphoto from "./component/Profil/Profilphoto";


function App() {
  return (
    <>
    <div>
    <div className="container">
  <div className="section-title">
    <h2>About</h2>
    <p>
      Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
      aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
      quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
      sit in iste officiis commodi quidem hic quas.
    </p>
  </div>
  <div className="row">
   <Profilphoto/>
    <div className="col-lg-8 pt-4 pt-lg-0 content">
    <Fullname/>
      <div className="row">
       <Adresse/>
        <div className="col-lg-6">
          <ul>
            <li>
              <i className="bi bi-rounded-right" /> <strong>Age:</strong> 27
            </li>
            <li>
              <i className="bi bi-rounded-right" /> <strong>Degree:</strong>{" "}
              Licence
            </li>
            <li>
              <i className="bi bi-rounded-right" /> <strong>Email:</strong>{" "}
              boukamchakawther@gmail.com
            </li>
            <li>
              <i className="bi bi-rounded-right" /> <strong>Freelance:</strong>{" "}
              Available
            </li>
          </ul>
        </div>
      </div>
      <p>
        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero.
        Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt
        officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis
        quidem quia. Sed et consectetur qui quia repellendus itaque neque.
        Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus
        omnis culpa magni laudantium dolores.
      </p>
    </div>
  </div>
</div>

  </div>
  </>

  );
}

export default App;
