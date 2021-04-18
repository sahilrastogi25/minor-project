import Heading from "./Heading";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="container-fluid home">
        <Heading />
        <div className="login">
          <Link to="/main">
            <button className="btn btn-primary btn-lg">Login</button>
          </Link>
        </div>
      </div>
      <div className="content">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, hic
        libero fugit cum soluta illo fuga praesentium, suscipit repudiandae ad
        maxime totam vitae. Impedit omnis mollitia facilis cumque quaerat
        dolores?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Cupiditate, velit nulla. Explicabo repudiandae quo libero similique eum
        recusandae ut accusantium, accusamus dicta blanditiis facilis quisquam
        molestiae atque, error optio natus. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Officia quaerat porro commodi aliquid
        perferendis minus iusto sapiente cupiditate deserunt animi, assumenda
        dolorum est quam non rem! Quia nisi cupiditate enim! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Dicta provident animi iure!
        Commodi doloribus repudiandae hic molestias assumenda? Et aliquid dolore
        exercitationem ab quae vel magni esse necessitatibus assumenda deserunt.
      </div>
    </>
  );
}
export default Home;
