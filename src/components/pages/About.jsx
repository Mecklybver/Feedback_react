import { Link } from 'react-router-dom';
import AboutIconLink from '../AboutIconLink';
import Card from '../shared/Card';

function About() {
  return (
    <>
      <Link to="/">
        <AboutIconLink /> Back To Home
      </Link>
      <Card>
        <h1>About this project</h1>
        <p> This is a React app to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>
      </Card>
    </>
  );
}
export default About;
