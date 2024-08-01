import styled from "@emotion/styled";
import { typo, palette } from "../shared/styles/index";
import { Flex } from "../shared/utils/Wrapper";
import { GNB } from "../../widgets/GNB";

const Wrapper = styled(Flex)``;

const MainLayout = () => {
  return (
    <Wrapper>
      <GNB breadcrumbs={"메인 페이지"}></GNB>
    </Wrapper>
  );
};

export default MainLayout;
