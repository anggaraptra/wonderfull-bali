import Section from '../components/template/Section';

export default function NotFound() {
  return (
    <>
      <Section className="w-full min-h-screen flex flex-col justify-center items-center">
        <h1>404 Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </Section>
    </>
  );
}
