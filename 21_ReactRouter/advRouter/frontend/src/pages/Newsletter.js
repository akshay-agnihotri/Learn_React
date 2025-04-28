import NewsletterSignup from "../components/NewsletterSignup";
import PageContent from "./PageContent";

function NewsletterPage() {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
}

export async function newsletterAction({ request }) {
  const data = await request.formData();
  
  const email = data.get("email");

  // send to backend newsletter server ...
  console.log(email);
  return { message: "Signup successful!" };
}

export default NewsletterPage;
