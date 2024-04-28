import SubTitle from "./subTitle";
import Title from "./title";
import Description from "./description";

type NewsProps = {
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  url: string;
  source: string
}

export default function News(props: NewsProps) {
  return (
    <div className="pt-16">
      <Title url={props.url}>{props.title}</Title>
        <div className="flex flex-col">
          <SubTitle className="text-sm py-4">{props.publishedAt}</SubTitle>
          <SubTitle className="text-base font-medium">{`por ${props.source}`}</SubTitle>
        </div>
        <img 
          className="w-full py-6"
          src={props.image}
          alt={props.title}
        />
        <Description className="text-justify">{props.description}</Description>
    </div>
  )
}