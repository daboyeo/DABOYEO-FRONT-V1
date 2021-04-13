import React, { FC, MouseEvent, useCallback } from "react";
import { useDispatch } from "react-redux";
import { FeedItem } from "../../../Component";
import { setOverImgView } from "../../../Module/Action/overViewImg";

const FeedList: FC = () => {
  const dispatch = useDispatch();
  const clickHandler = useCallback((e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    const imgSrc: string = e.currentTarget.src;
    dispatch(setOverImgView(imgSrc));
  }, []);
  const containerHandler = useCallback((id: number) => {
    console.log(id);
  }, []);

  return (
    <>
      <FeedItem
        isAdminMode={true}
        userName="공영길"
        clickHandler={containerHandler}
        imgClickHandler={clickHandler}
        imgSrc={[
          "https://lh3.googleusercontent.com/proxy/eBXaIQ4-ZIeSPsQ0iMxe__43lzUX30D59P9arNJxcDJbW-0PWejZsmX2NPrIna03MHq2MCjxlPKRJu92GBcuL1wA2Xy6IOmwTgEO3pjgNLr3juxUxgkw52MXELAqWmWTgelOJfjvdWJIyjoXfrEfhpmgLU9Lf-IcZ5oiDnINTvFk3VW_z-DaYvJHml4xeAlDvm7H1FLjznC6dFS7K2T5mF33coEx0t8deHNhY04HUtDoeKjr2WCLvujS6rVT70ejt2ysHTp0XhWLziy4S7o0vaIvmnCwRrBn65t0qdzMkK_5C_wUsvBd8dBq-rTw4SIiV15MKR6EvZSg1hRLtMxdyKgT2TN7yg",
          "https://newsimg.hankookilbo.com/cms/articlerelease/2016/06/14/201606141721025992_1.jpg",
          "https://data.silhouette-ac.com/data/thumbnails/77/7797b341ae82dd905eeb08989eea2549_w.jpeg",
          "http://www.catholicnews.co.kr/news/photo/201710/18826_39706_4241.png",
        ]}
      />
      <FeedItem
        // isAdminMode={true}
        userName="이지수"
        clickHandler={containerHandler}
        imgClickHandler={clickHandler}
        imgSrc={[
          "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/41416274_757909074540748_791962720655114240_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=f2FwEIJZwnIAX9VcQE6&_nc_ht=scontent-ssn1-1.xx&oh=6f5736db1193c605c57731bf0367ddbc&oe=6077B88D",
          "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/41507758_757909061207416_2673401959603503104_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=L1a2VeLzcGEAX85BLX8&_nc_ht=scontent-ssn1-1.xx&oh=e7683b2f6950c9c235df74bd5b16e3cc&oe=6077C8F0",
          "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/41507761_757909271207395_5673432930777563136_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=-OTq37EOR4wAX-RFoxc&_nc_oc=AQnRKyM2IpVsktnF-9-g830SZwe9fzf57rpFUFE1HkcKIrJKzIqGP6aePRQpgkP46IA&_nc_ht=scontent-ssn1-1.xx&oh=d2c14e85565769372a53a1553615a7a8&oe=60754DF3",
          "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/41540281_757909334540722_9064863382577872896_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=YhfLg-T66Z4AX-vk7CC&_nc_ht=scontent-ssn1-1.xx&oh=21c9393bdbe0b4125b163648805e0a1b&oe=60774806",
          "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/41450603_757909124540743_7846677337352437760_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=-y9mSuCbEL4AX_szcgt&_nc_ht=scontent-ssn1-1.xx&oh=6c02e108509e8a00a29811d3da4976e9&oe=60778693",
        ]}
      />
    </>
  );
};

export default FeedList;
