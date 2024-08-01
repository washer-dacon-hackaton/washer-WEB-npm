import { useAtomValue } from "jotai";
import { GNB } from "../../widgets/GNB";
import { Outlet } from "react-router-dom";
import { routeAtom } from "../../shared/atom";

const MainLayout = () => {
  const route = useAtomValue(routeAtom);
  return (
    <>
      <GNB breadcrumbs={route} user={{ name: "이혁" }}></GNB>

      <Outlet />
    </>
  );
};

export default MainLayout;
