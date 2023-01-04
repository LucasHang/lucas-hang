import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { RiArrowLeftSLine } from "@react-icons/all-files/ri/RiArrowLeftSLine";

import stylesUrl from "./styles.css";

interface ContentHeaderProps {
  title: string;
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

function ContentHeader({ title }: ContentHeaderProps) {
  return (
    <div className="resumes-header">
      <Link to="/">
        <RiArrowLeftSLine size={30} />
      </Link>
      <h2>{title}</h2>
    </div>
  );
}

export default ContentHeader;
