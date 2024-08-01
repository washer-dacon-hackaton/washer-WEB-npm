import { GNB } from "../../widgets/GNB";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <GNB breadcrumbs={"메인 페이지"} user={{ name: "이혁" }}></GNB>

      <Outlet />
    </>
  );
};

export default MainLayout;
