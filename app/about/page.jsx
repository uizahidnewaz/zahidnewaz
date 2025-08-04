import React from 'react'
export async function generateMetadata() {
  const brand = "Zahid Newaz";
  const mainurl = "https://zahidnewaz.vercel.app";
  const keywords = ["zahidnewaz", "zahid newaz"];
  const description = `
I'm Shah Md. Zahid Newaz. I studied at Rajuk Uttara Model College, then went on to complete my BSc in Computer Science and Engineering from North South University...

(My full story and experience...)
`;

  return {
    title: brand,
    description,
    keywords,
    openGraph: {
      type: "website",
      url: mainurl,
      title: brand,
      description,
      site_name: "zahidnewaz",
      locale: "en_US",
    },
  };
}


const page = () => {
  return (
    <div>
      about page
    </div>
  )
}

export default page
