import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://1.bp.blogspot.com/-44RJKI4Ro0U/Xqoit7Aqx9I/AAAAAAAAK9M/TBEwLlTwW6gR54DjNiGmKcPB17lJRwS2QCLcBGAsYHQ/s1600/Animal_4.png",
  "https://i.pinimg.com/originals/81/41/db/8141db7fdbec49d9e54188b8e37bdf6b.jpg",
  "https://www.femalefirst.co.uk/image-library/land/1000/1/10-weird-animals.jpg",
  "https://www.anaedoonline.ng/wp-content/uploads/2020/04/054f2eb4eb2b0a35ab2ab327559194325979641468827699719-1920x1255.jpeg",
  "https://static.tbdcdn.com/uploads/2018/04/12/95007-smallv2-500505.jpg",
  "https://images.squarespace-cdn.com/content/54f74f23e4b0952b4e0011c0/1488778547581-32S74WBTSAM4WN3PTOUU/?format=1000w&content-type=image%2Fjpeg",
];
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log("posts", posts);

  return (
    <main className="">
      Hello
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
