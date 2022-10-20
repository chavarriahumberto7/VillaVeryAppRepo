import SanityClient from "@sanity/client";
import imageUrlBuilder  from "@sanity/image-url";

const client=SanityClient({
    projectId:'47lw6mr3',
    dataset:'production',
    useCdn:true,
    apiVersion:"2021-10-21"
});

const builder=imageUrlBuilder(client);
export const urlFor=(source)=> builder.image(source);

//RUN THIS to add exception for local host 3000 CORS policy
//access villaVeryBackend
//https://villaveryapp.sanity.studio/

export default client;