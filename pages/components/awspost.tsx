import S3 from "aws-sdk/clients/s3";
import axios from "axios";


export default async function aws(file:File){
    try{
    const s3 = new S3({
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
        region: process.env.NEXT_PUBLIC_AWS_REGION,
        signatureVersion: 'v4',
    });
    const params = {
        Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
        Key: file.name,
        Expires: 600,
        ContentType: file.type,
    };
    const signedRequest = await s3.getSignedUrlPromise('putObject', params);
    console.log(signedRequest);
    await axios.put(signedRequest, file, {
        headers: {
            'Content-Type': file.type,
    }})
    return ("success");
} catch (err) {
    console.log(err);
}
}