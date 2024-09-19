import VirtualScrollList from "./VirtualScrollList";

const Feed = () => {
  return (
    <div className="container-fluid gedf-wrapper">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <div className="h5">@AdamyaKumar</div>
              <div className="h7 text-muted">Practice & Master</div>
              <div className="h7">
                Proficient in a wide range of programming languages and
                development tools including Javascript, TypeScript, Php & Java.
                MERN stack, GraphQL, Next.js, Redux, Context API, Sanity,
                Firebase, GSAP, Sass, Stripe, React Native, Three Fiber, and
                more.
              </div>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="h6 text-muted">Cloud & Databases</div>
                <div className="h7">
                  Experienced with cloud services such as AWS and Azure.
                  Competent in DevOps practices with tools like Linux/Ubuntu
                  Server, DNS, Apache Server, Docker, and platforms like
                  Netlify, Vercel. Database management using MongoDB, Postgres,
                  and MySQL.
                </div>
              </li>
              <li className="list-group-item">
                <div className="h6 text-muted">Additional Information</div>
                <div className="h7">
                  National Gold Medalist - Delhi Horse Show 2011, 2013. Dada
                  Saheb Phalke Award 2013 in Filmmaking. Enthusiastic in
                  software such as Figma, Adobe Photoshop, After Effects,
                  Blender, Unity, Unreal Engine, Illustrator, and CorelDraw.
                </div>
              </li>
              <li className="list-group-item">
                <div className="h7">विद्या धनम् सर्वधन प्रधानम्</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-6 gedf-main">
          <VirtualScrollList />
        </div>
        <div className="col-md-3">
          <div className="card gedf-card">
            <div className="card-body">
              <h5 className="card-title">Pokemon Trainer Red</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Legendary Trainer
              </h6>
              <p className="card-text">
                Red is known for his silence and skill. He is considered one of
                the toughest trainers to beat, with a well-rounded team led by
                his iconic Pikachu.
              </p>
              <a href="#" className="card-link">
                More about Red
              </a>
            </div>
          </div>
          <div className="card gedf-card">
            <div className="card-body">
              <h5 className="card-title">Champion Cynthia</h5>
              <h6 className="card-subtitle mb-2 text-muted">Sinnoh Champion</h6>
              <p className="card-text">
                Cynthia is the Champion of the Sinnoh region and is known for
                her calm and collected demeanor. Her Garchomp is a force to be
                reckoned with.
              </p>
              <a href="#" className="card-link">
                More about Cynthia
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
