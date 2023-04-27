export default function ProjectItem({ data }) {
  console.log("data", data);
  //   const dataList = data.reverse();
  const title = data.properties.Name.title[0].plain_text;
  const content = data.properties.Description.rich_text[0].plain_text;
  const link = data.properties.Link.rich_text[0].plain_text;
  const Github = data.properties.Github.rich_text[0].plain_text;
  const image = data.cover.file.url;
  console.log("link", link);

  const handleButtonClick = () => {
    window.open(`${link}`, "_blank");
  };

  return (
    <div onClick={handleButtonClick} className="project-card cursor-pointer">
      <img
        className="rounded-t-xl border-b border-gray-300"
        src={image}
        alt="cover image"
        width="100%"
        height="60%"
        layout="responsive"
        objectFit="none"
      />
      <h1 className="text-2xl font-bold my-2">{title}</h1>
      <h1>{content}</h1>
      <a className="mt-1" href={link}>
        홈페이지 이동
      </a>
      <a className="mb-2" href={Github}>
        깃허브 바로가기
      </a>
    </div>
  );
}
