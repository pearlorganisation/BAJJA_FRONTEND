import { useLocation, useParams } from "react-router";

const BreadCrumb = () => {
  const path = useLocation();

  return (
    <div className="breadcrumbs md:text-sm text-xs md:p-4 p-1">
      <ul className="flex flex-row">
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-4 w-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              ></path>
            </svg>
            Home
          </a>
        </li>
        <li>
          <a className="capitalize">{path.pathname.split("/")[1]}</a>
        </li>
        <li>
          <a className="capitalize">{path.pathname.split("/")[2].split("_").join(" ")}</a>
        </li>
        <li>
          <span className="inline-flex items-center gap-2 text-primary font-bold capitalize">{path.pathname.split("/")[3].split("_").join(" ")}</span>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
