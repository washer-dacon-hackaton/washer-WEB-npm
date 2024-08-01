import styled from "@emotion/styled";
import { typo, palette } from "../../shared/styles/index";
import { Flex } from "../../shared/utils/Wrapper";
import { ContentBox } from "../ContentBox";
import { Like } from "../../assets/icons/Like";

const Wrapper = styled(Flex)`
  background-color: ${palette.Gray.white};
  box-shadow: 0px 0px 4.2px 0px rgba(185, 185, 185, 0.57);
  border-radius: 20px;
  padding: 20px;
  width: 1060px;
  gap: 20px;

  .postbox-header {
    width: stretch;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .postbox-header-left {
      .postbox-title {
        color: ${palette.Gray.gray100};
        ${typo.Head.h2};
      }
      .postbox-sub {
        display: flex;
        flex-direction: row;
        div {
          color: ${palette.Gray.gray70};
          ${typo.Body.b2};
        }
      }
    }
  }
`;

export const PostBox = ({ title, writer, created_at, content }) => {
  const isWriter = localStorage.getItem("name") == writer;
  return (
    <Wrapper direction={"column"}>
      <div className="postbox-header">
        <div className="postbox-header-left">
          <div className="postbox-title">{title}</div>
          <div className="postbox-sub">
            <div>{writer}</div>
            <div>&nbsp;&nbsp;{"|"}&nbsp;&nbsp;</div>
            <div>{created_at}</div>
          </div>
        </div>
        {isWriter ? <div></div> : <Like></Like>}
      </div>
      <ContentBox text={content}></ContentBox>
    </Wrapper>
  );
};
