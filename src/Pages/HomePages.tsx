import landing from "../assets/landing.png";
import appDownload from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
export default function HomePages() {
  const navigate = useNavigate();
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <div className="flex  flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5x1 font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today
        </h1>
        <span className="text-x1"> Food is just a click away!</span>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landing} />
        <div className="flex flex-col items-center  justify-center gap-4 text-center">
          <span className="font-bold text-3x1  tracking-tighter">
            Order takeaway event faster
          </span>
          <span>
            Download the app for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownload} />
        </div>
      </div>
    </div>
  );
}
