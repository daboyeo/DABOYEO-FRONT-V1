import React, { FC } from "react";
import { CommentItem, WriteFeed } from "../../../Component";
import * as S from "./style";

const DetailFeedPage: FC = () => {
  return (
    <S.Container>
      <S.ContentWrap>
        <S.DetailFeedHeader>
          <S.FeedWriterImg src="https://image.flaticon.com/icons/png/512/62/62833.png" />
          <S.DetailFeedInfoWrap>
            <S.DetailFeedInfo>
              <div>백예린</div>
              <div>대전 유성구</div>
            </S.DetailFeedInfo>
            <S.DetailFeedTime>2021.03.13</S.DetailFeedTime>
          </S.DetailFeedInfoWrap>
        </S.DetailFeedHeader>
        <S.DetailFeedContent>
          컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠
          컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠
          컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠
          컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠
          컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠
          컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠
          컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠컨텐츠
        </S.DetailFeedContent>
        <S.DetailFeedImg>
          <S.DetailFeedImgItem>
            <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/41416274_757909074540748_791962720655114240_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=f2FwEIJZwnIAX9VcQE6&_nc_ht=scontent-ssn1-1.xx&oh=6f5736db1193c605c57731bf0367ddbc&oe=6077B88D" />
          </S.DetailFeedImgItem>
          <S.DetailFeedImgItem>
            <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/41507758_757909061207416_2673401959603503104_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=L1a2VeLzcGEAX85BLX8&_nc_ht=scontent-ssn1-1.xx&oh=e7683b2f6950c9c235df74bd5b16e3cc&oe=6077C8F0" />
          </S.DetailFeedImgItem>
          <S.DetailFeedImgItem>
            <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/41507761_757909271207395_5673432930777563136_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=-OTq37EOR4wAX-RFoxc&_nc_oc=AQnRKyM2IpVsktnF-9-g830SZwe9fzf57rpFUFE1HkcKIrJKzIqGP6aePRQpgkP46IA&_nc_ht=scontent-ssn1-1.xx&oh=d2c14e85565769372a53a1553615a7a8&oe=60754DF3" />
          </S.DetailFeedImgItem>
          <S.DetailFeedImgItem>
            <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/41540281_757909334540722_9064863382577872896_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=YhfLg-T66Z4AX-vk7CC&_nc_ht=scontent-ssn1-1.xx&oh=21c9393bdbe0b4125b163648805e0a1b&oe=60774806" />
          </S.DetailFeedImgItem>
        </S.DetailFeedImg>
      </S.ContentWrap>
      <S.CommentWrap>
        <S.Comments>
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </S.Comments>
        <S.WriteComment>
          <WriteFeed
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFZ0FGTrytcVajqgDEGFJX8J8kO-1WVG_wQ&usqp=CAU"
            placeHolder="댓글을 입력하세요..."
          />
        </S.WriteComment>
      </S.CommentWrap>
    </S.Container>
  );
};

export default DetailFeedPage;
